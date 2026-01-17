# Firebase Setup Guide

Your Photo Chat App now supports **real-time data sharing** so people can see what others are doing!

## What Changed

✅ All photos are now shared in real-time with everyone on the site
✅ User activity is tracked (online/offline status)
✅ Multiple people can upload photos simultaneously and everyone sees them instantly
✅ No more localStorage - everything syncs across all visitors

## How to Set Up Firebase

### Step 1: Create a Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com)
2. Click "Add Project"
3. Enter a project name (e.g., "photo-chat-app")
4. Click "Continue" and complete the setup

### Step 2: Create a Realtime Database
1. In Firebase Console, click "Realtime Database" in the left menu
2. Click "Create Database"
3. Select "Start in test mode" (for development)
4. Choose a database location
5. Click "Enable"

### Step 3: Get Your Firebase Config
1. In Firebase Console, go to Project Settings (gear icon)
2. Click the "General" tab
3. Scroll down and find your Firebase config under "Your apps"
4. If no web app exists, click "Add App" and select "Web"
5. Copy the entire config object

### Step 4: Update index.html
Replace the firebaseConfig object in index.html with your actual config:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  databaseURL: "https://your-project-default-rtdb.firebaseio.com",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

### Step 5: Set Database Rules
In Firebase Console, go to Realtime Database → Rules tab and set:

```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

⚠️ **Note:** These are open rules for development. For production, implement proper authentication.

### Step 6: Test It Out!
1. Open your app in two different browser windows/tabs
2. Set a username in each
3. Upload a photo in one window
4. Watch it instantly appear in the other window!
5. See online/offline status update in real-time

## Features

- **Real-time photo feed**: All uploads appear instantly for everyone
- **User tracking**: See who's online with 🟢 indicator
- **Follow users**: Choose to see photos from specific users
- **Active sessions**: Track who's currently using the app

## Troubleshooting

**Photos not appearing?**
- Check browser console for errors (F12)
- Verify Firebase config is correct
- Ensure Realtime Database is enabled
- Check database rules allow read/write access

**Firebase errors?**
- Make sure config values match exactly
- Check that databaseURL includes the region

Enjoy your real-time Photo Chat App! 📸
