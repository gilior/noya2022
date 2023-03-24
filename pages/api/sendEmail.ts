import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  const {  msg,ip,time,timeZone } = req.body;

  const message = {
    to: 'liorgish@gmail.com',
    from: 'liorgish@gmail.com',
    subject: `New message from your website`,
    text: `${msg}\n${ip}\n${time}\n${timeZone}`,
    html: `<p>${msg}<br>${ip}<br>${time}<br>${timeZone}</p>`,
  };

  try {
    await sgMail.send(message);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ message: `Error sending email: ${error}` });
  }
}
