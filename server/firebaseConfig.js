import admin from 'firebase-admin';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('../client/key.json', 'utf8'));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://gojirun-8b4b5-default-rtdb.firebaseio.com/"
});

const db = admin.firestore();

export default db;
