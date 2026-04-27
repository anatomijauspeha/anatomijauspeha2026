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
        <p>Zdravo ${firstname}!</p>
        <p>Uspešno ste se prijavili za događaj.</p>
        <p>Vidimo se!</p>
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

