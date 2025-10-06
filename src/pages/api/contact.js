import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, message } = req.body;

    // Configure transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', // e.g., smtp.gmail.com
      port: 587,
      secure: false,
      auth: {
        user: 'bangalorebroo@gmail.com', // your email
        pass: 'iejhkojvpepattcq', // your email password or app password
      },
    });

    try {
      await transporter.sendMail({
        from: `"${name}" <bangalorebroo@gmail.com>`, // sender
        replyTo: email,  
        to: 'bangalorebroo@gmail.com', // your static email
        subject: 'New Contact Form Message',
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong><br/>${message}</p>
        `,
      });

      res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Something went wrong.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
