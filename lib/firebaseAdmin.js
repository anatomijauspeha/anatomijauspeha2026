import admin from "firebase-admin";
import serviceAccount from "../anatomijauspeha2026_serviceaccount.json"

// const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export const db = admin.firestore();