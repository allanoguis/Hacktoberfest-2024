import admin from 'firebase-admin';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// Load your service account key
const serviceAccount = require('./key.json');

// Check if the Firebase app has already been initialized to avoid re-initialization errors
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

// Initialize Firestore and export the instance
const db = admin.firestore();

export default db;
