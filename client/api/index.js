import express from "express";
const app = express();
import { initializeApp, credential as _credential } from "firebase-admin";

// Initialize Firebase Admin SDK
initializeApp({
  credential: _credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
  }),
  databaseURL: process.env.FIREBASE_DATABASE_URL,
});

// Your Express routes
app.get("/api/getHighScoreAPI", (req, res) => {
  res.json({ message: "Hello from Express.js and Firebase!" });
});

// Export the Express app as a Vercel serverless function
export default app;
