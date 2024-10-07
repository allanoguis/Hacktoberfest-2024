import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import Routes from './routes/route.js';  

// Import Firebase Admin SDK using ESM
import admin from 'firebase-admin';
import credentials from './key.json' assert { type: 'json' };

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(credentials)
});

const db = admin.firestore();

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000; 

// Middleware to handle incoming JSON and URL-encoded data
app.use(bodyParser.json());  // Handles JSON data
app.use(bodyParser.urlencoded({ extended: true }));  // Handles URL-encoded data

app.use(cors());

app.use('/', Routes);  

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
