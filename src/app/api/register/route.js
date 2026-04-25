import { db } from "../../../../lib/firebaseAdmin";

export async function POST(req) {
  try {
    const body = await req.json();

    let { firstname, lastname, email } = body;

    firstname = firstname?.trim();
    lastname = lastname?.trim();
    email = email?.trim().toLowerCase();

    if (!firstname || !lastname || !email) {
      return Response.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return Response.json(
        { error: "Pogrešan format e-mail adrese!" },
        { status: 400 }
      );
    }

    await db.collection("Users").add({
      firstname,
      lastname,
      email,
      createdAt: new Date(),
    });

    // Send confirmation email here

    return Response.json({
      success: true,
      message: "Registration successful",
    });
  } catch (error) {
    return Response.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}