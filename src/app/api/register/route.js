import { db } from "../../../../lib/firebaseAdmin";
import { sendEmail } from "../../../../lib/email";

export async function POST(req) {
  try {
    const body = await req.json();

    const firstname = body.firstname?.trim();
    const lastname = body.lastname?.trim();
    const email = body.email?.trim().toLowerCase();

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
      createdAt: new Date(),
    });

    await sendEmail({
      to: email,
      subject: "Potvrda prijave - Anatomija Uspeha 2026",
      html: `
        <p>Poštovani,</p>
        <p>Hvala Vam na prijavi za jubilarno izdanje događaja „Anatomija uspeha“ pod nazivom „trAIn your brAIn“.</p>
        <p>Događaj će biti održan 22. maja u 18 časova u amfiteatru Naučno-tehnološkog parka u Novom Sadu. Očekuje Vas dinamičan program koji obuhvata panel diskusiju i interaktivni kviz, sa fokusom na odnos veštačke inteligencije i ljudske intuicije u marketingu.</p>
        <p>U narednom periodu dostavićemo Vam sve dodatne informacije u vezi sa događajem.</p>
        <p>Radujemo se Vašem dolasku.</p>
        <p>Srdačan pozdrav,</p>
        <p>Organizacioni tim događaja „Anatomija uspeha“</p>
        <img 
          src="https://anatomijauspeha2026.vercel.app/logo_email.png"
          alt="Event Logo"
          style="width:100%; max-width:600px;"
        />
      `
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
  //ova da se dodade vo email posle hostiranje
