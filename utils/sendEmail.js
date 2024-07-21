import nodemailer from "nodemailer";

export async function sendEmail({ to, subject, text, html, attachments }) {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Send mail with the defined transport object
  let info = await transporter.sendMail({
    from: `"Canan Cansu Caner" <${process.env.EMAIL_USER}>`,
    to: to,
    subject: subject,
    text: text,
    html: html,
    attachments: attachments,
  });

  console.log("Message sent: %s", info.messageId);
}
