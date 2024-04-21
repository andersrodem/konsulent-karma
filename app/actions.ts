"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(text: string) {
  const { error } = await resend.emails.send({
    from: "konsulentkarma.no <tips@konsulentkarma.no>",
    to: ["anders.rodem@gmail.com", "konsulentkarma@mikkelsvartveit.com"],
    subject: "Nytt tips sendt inn!",
    text,
  });

  if (error) {
    console.error(error);
    return;
  }
}
