const nodemailer = require("nodemailer");

export default function handler(req, res) {
  const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;

  let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  let mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: "New Visitor IP Address",
    text: `Visitor IP Address: ${ip}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ message: "Failed to send IP address" });
    }
    console.log("Email sent:", info.response);
    res.status(200).json({ message: "IP Address sent" });
  });
}
