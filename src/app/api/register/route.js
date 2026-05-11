import { db } from "../../../../lib/firebaseAdmin";
import { sendEmail } from "../../../../lib/email";
import { FieldValue } from "firebase-admin/firestore";

export async function POST(req) {
  try {
    const body = await req.json();

    const firstname = body.firstname?.trim();
    const lastname = body.lastname?.trim();
    const email = body.email?.trim().toLowerCase();
    const ig_username = body.username?.trim();

    if (!firstname || !lastname || !email) {
      return Response.json(
        { error: "Sva polja su obavezna." },
        { status: 400 },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return Response.json(
        { error: "Nevalidni format email adrese!" },
        { status: 400 },
      );
    }
    const existing = await db
      .collection("Users")
      .where("email", "==", email)
      .limit(1)
      .get();

    if (!existing.empty) {
      return Response.json(
        { error: "Ovaj email je već prijavljen." },
        { status: 400 },
      );
    }

    await db.collection("Users").add({
      firstname,
      lastname,
      email,
      ig_username,
      createdAt: new Date(),
    });

    await db.collection("Stats").doc("FormStats").set(
      {
        totalSubmissions: FieldValue.increment(1),
      },
      { merge: true }
    );

    await sendEmail({
      to: email,
      subject: "Uspešna prijava - Dobrodošli na Anatomiju Uspeha",
      html: `
        <p>Zdravo!</p>
        <p>Uspešno ste prijavljeni za jubilarno izdanje događaja „Anatomija uspeha“ pod nazivom „trAIn your brAIn“.</p>
        <p>Vidimo se 22. maja u 18 časova u amfiteatru Naučno-tehnološkog parka u Novom Sadu!</p>
        <p>Očekuje Vas dinamičan program koji spaja AI, neuromarketing, panel diskusiju i interaktivni kviz, uz zanimljive goste i dobru atmosferu.</p>
        <p>Sve dodatne informacije uskoro stižu, a do tada nas možete zapratiti i pratiti novosti o događaju na: <br>  📸 Instagram: @anatomija_uspeha <br>  🎵 TikTok: @anatomija_uspeha
        <p>Radujemo se druženju!</p>
        <p>Organizacioni tim <br> „Anatomija uspeha“</p>
        <img 
          src="https://anatomijauspeha2026.vercel.app/logo_email.png"
          alt="Event Logo"
          style="width:100%; max-width:600px;"
        />
      `,
    });

    return Response.json({
      success: true,
      message: "Uspešna prijava i potvrda poslata.",
    });
  } catch (error) {
    console.error(error);

    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
