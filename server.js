const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

app.use(cors());
app.use(express.static(path.join(__dirname)));
app.use(express.json({ limit: '50mb' }));

// Store all photos and users
let photos = [];
let activeUsers = new Map();

// Socket.io connection
io.on('connection', (socket) => {
  console.log('New user connected:', socket.id);

  // When user sets username
  socket.on('setUsername', (username) => {
    activeUsers.set(socket.id, {
      username: username,
      socketId: socket.id,
      joinedAt: new Date().toLocaleString()
    });

    // Broadcast to all clients
    io.emit('usersUpdated', Array.from(activeUsers.values()));
    io.emit('photosUpdated', photos);
    console.log(`${username} joined. Active users: ${activeUsers.size}`);
  });

  // When user uploads a photo
  socket.on('uploadPhoto', (photo) => {
    photos.unshift(photo);
    
    // Limit to last 100 photos
    if (photos.length > 100) {
      photos = photos.slice(0, 100);
    }

    // Broadcast to all clients
    io.emit('photosUpdated', photos);
    console.log(`Photo uploaded by ${photo.author}`);
  });

  // When user disconnects
  socket.on('disconnect', () => {
    const user = activeUsers.get(socket.id);
    if (user) {
      console.log(`${user.username} disconnected`);
      activeUsers.delete(socket.id);
      io.emit('usersUpdated', Array.from(activeUsers.values()));
    }
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`📸 Photo Chat Server running on http://localhost:${PORT}`);
  console.log('Open this URL in your browser to use the app');
});
