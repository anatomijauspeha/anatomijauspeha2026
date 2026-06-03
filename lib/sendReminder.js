import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import admin from "firebase-admin";
import fs from "fs";
import { sendEmail } from "./email.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
  path: path.resolve(__dirname, "../.env.local"),
});

const serviceAccount = JSON.parse(
    fs.readFileSync("../anatomijauspeha2026_serviceaccount.json", "utf-8")
);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

async function sendEmails() {
    try {
        const snapshot = await db
            .collection("Users")
            .select("email")
            .get();

        const emails = snapshot.docs
            .map((doc) => doc.data().email)
            .filter(Boolean);

        console.log(`Found ${emails.length} emails`);

        fs.writeFileSync(
            "emails.txt",
            emails.join("\n")
        );

        console.log("Emails saved to file.");
        
        for (const email of emails) {
          await sendEmail({
            to: email,
            subject: "Podsetnik | „trAIn your brAIn“ je sutra 🎉",
            html: `
              <p>Zdravo!</p>
              <p>Podsećamo Vas da se jubilarno izdanje događaja Anatomija uspeha - „trAIn your brAIn“ održava sutra. Očekuju Vas panel diskusija, interaktivni kviz, zanimljivi gosti, networking i nagrade! ✨</p>
              <br>
              <p>📍 NTP Novi Sad</p>
              <p>🕒 18:00h</p>
              <p>📅 22. 05. 2026.</p>
              <br>
              <p>Vidimo se!</p>
              <p>Organizacioni tim <br> „Anatomija uspeha“</p>
            <img 
              src="https://anatomijauspeha2026.vercel.app/logo_email.png"
              alt="Event Logo"
              style="width:100%; max-width:600px;"
            />
            `,
          });

          console.log(`Sent to ${email}`);

          await new Promise((resolve) => setTimeout(resolve, 500));
        }

        console.log("All emails sent!");
    } catch (error) {
        console.error("Error:", error);
    }
}

sendEmails();