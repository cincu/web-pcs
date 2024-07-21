import { sendEmail } from "../../../utils/sendEmail.js";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { formType, name, email, subject, message, company } = req.body;

    if (
      !name ||
      !email ||
      (formType === "contact" && !message) ||
      (formType === "requestResume" && !company)
    ) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    try {
      if (formType === "contact") {
        await sendEmail({
          to: "ccansu.ccaner@gmail.com",
          subject: `New Contact Form Submission from ${name}`,
          text: message,
          html: `<p><strong>Name:</strong> ${name}</p>
                 <p><strong>Email:</strong> ${email}</p>
                 <p><strong>Subject:</strong> ${subject}</p>
                 <p><strong>Message:</strong> ${message}</p>`,
        });
      } else if (formType === "requestResume") {
        // Send CV request notification email to you
        await sendEmail({
          to: "ccansu.ccaner@gmail.com",
          subject: `New CV Request from ${name}`,
          text: `Company: ${company}\nEmail: ${email}`,
          html: `<p><strong>Name:</strong> ${name}</p>
                 <p><strong>Company:</strong> ${company}</p>
                 <p><strong>Email:</strong> ${email}</p>`,
        });

        await sendEmail({
          to: email,
          subject: "CV Request Received",
          text: `Dear ${name},\n\nThis is an automated confirmation mail on you requesting my resume. Thank you for your interest in my profile.\n\nBest regards,\nCansu.`,
          html: `<p>Dear ${name},</p>
                 <p>This is an automated confirmation mail on you requesting my resume. Thank you for your interest in my profile.</p>
                 <p>Best regards,<br>Cansu.</p>`,
        });
      }

      res.status(200).json({ success: "Message sent successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to send message" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
