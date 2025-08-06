// pages/api/contact.js

import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    try {
      // Create a transporter for Nodemailer
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com", // Example: smtp.gmail.com for Gmail
        port: 587, // Or 465 for SSL
        secure: false, // Set to true for 465, false for other ports
        auth: {
          user: "hanifusama688@gmail.com", // Add your email address here
          pass: "eeqi rgyi axgd ycis", // Add your email password or app password here
        },
      });

      // Define email content
      const mailOptions = {
        from: email, // Sender's email
        to: "hanifusama688@gmail.com", // Receiver's email
        subject: `New Contact Form Submission: ${subject}`,
        html: `
          <h3>Contact Form Submission</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      };

      // Send the email
      await transporter.sendMail(mailOptions);

      // Respond with success
      res.status(200).json({ message: "Message sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Something went wrong. Please try again later." });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
