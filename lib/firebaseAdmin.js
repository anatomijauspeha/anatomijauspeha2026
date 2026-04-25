import admin from "firebase-admin";
import serviceAccount from "../anatomijauspeha2026_serviceaccount.json";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export const db = admin.firestore();