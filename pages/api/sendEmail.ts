import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  const {  msg } = req.body;

  const message = {
    to: 'liorgish@gmail.com',
    from: 'liorgish@gmail.com',
    subject: `New message from your website`,
    text: msg,
    html: `<p>${msg}</p>`,
  };

  try {
    await sgMail.send(message);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ message: `Error sending email: ${error}` });
  }
}
