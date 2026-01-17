# Setup Your Real-Time Photo Chat App

Your app is now ready to use with real-time sharing! Follow these steps:

## Quick Start (2 minutes)

### 1. Install dependencies
Open PowerShell in this folder and run:
```powershell
npm install
```

### 2. Start the server
```powershell
npm start
```

You should see:
```
📸 Photo Chat Server running on http://localhost:3000
```

### 3. Open in your browser
Visit: http://localhost:3000

### 4. Test real-time sharing
- Open the URL in **2 different browser windows** (or tabs)
- Set a username in each window
- Upload a photo in one window
- **Watch it instantly appear** in the other window! ✨

## Features

✅ **Real-time photo sharing** - Uploads appear instantly for all users
✅ **Live user list** - See who's currently on the site (🟢 Online indicator)
✅ **Follow users** - Filter to see photos from people you follow
✅ **Multiple users** - Works with as many people as you want

## How It Works

- When someone uploads a photo, the server broadcasts it to all connected users
- The app uses **Socket.io** for real-time communication
- No setup needed - everything runs locally!

## Troubleshooting

**Port 3000 already in use?**
Edit server.js and change `const PORT = process.env.PORT || 3000;` to use a different port like 3001.

**npm command not found?**
Install Node.js from https://nodejs.org/

**Photos not syncing?**
- Make sure the server is running
- Check browser console (F12) for errors
- Refresh the page if you started the server after opening the app

Enjoy! 📸
