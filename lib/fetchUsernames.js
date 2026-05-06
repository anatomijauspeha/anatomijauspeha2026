import admin from "firebase-admin";
import fs from "fs";

const serviceAccount = JSON.parse(
  fs.readFileSync("../anatomijauspeha2026_serviceaccount.json", "utf-8")
);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

async function fetchUsernames() {
  try {
    const snapshot = await db
      .collection("Users")
      .select("ig_username") 
      .get();

    const usernames = snapshot.docs
      .map(doc => doc.data().ig_username)
      .filter(Boolean);

    fs.writeFileSync(
      "usernames.txt",
      usernames.join("\n")
    );

    console.log("Usernames exported successfully!");
  } catch (error) {
    console.error("Error exporting usernames:", error);
  }
}

fetchUsernames();