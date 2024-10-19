import { NextResponse } from "next/server";
import transporter from "../../src/lib/transporter";

export async function POST(request) {
  const {
    lastName,
    firstName,
    email,
    tel,
    message,
  } = await request.json();

  const mailOptions = {
    from: email,
    to: `${process.env.USER_MAIL}`,
    subject: `Nouveaux message de ${lastName} ${firstName}`,
    text: `
      Nom: ${lastName}
      Prénom: ${firstName}
      Email: ${email}
  ${tel && `Téléphone: ${tel}` }
      Message: ${message} `,
    html: `<p><strong>Nom</strong> : ${lastName}</p>
    <p><strong>Prénom</strong> : ${firstName}</p>
    <p><strong>Email</strong> : ${email}</p>
    ${tel && `<p><strong>Téléphone</strong> : ${tel}</p>`}
    <p><strong>Message</strong> : ${message}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Formulaire soumis avec succès" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    return NextResponse.json(
      { message: "Erreur lors de l'envoi de l'email." },
      { status: 500 }
    );
  }
}