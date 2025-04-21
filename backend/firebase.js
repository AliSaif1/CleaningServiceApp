import admin from 'firebase-admin';
import serviceAccount from './cleaningservice-5e89d-firebase-adminsdk-fbsvc-c4aca7d0e1.json' assert { type: 'json' };

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const db = admin.firestore();
const auth = admin.auth();  // Initialize Firebase Authentication

export { admin, db, auth };
