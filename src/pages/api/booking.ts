import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import twilio from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID!;
const authToken = process.env.TWILIO_AUTH_TOKEN!;
const fromWhatsAppNumber = process.env.TWILIO_WHATSAPP_NUMBER!;
const toWhatsAppNumber = process.env.TO_WHATSAPP_NUMBER!;
const client = twilio(accountSid, authToken);

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.GMAIL_USER!,
    pass: process.env.GMAIL_PASS!,
  },
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const { name, phone, email, date, time, service, message } = req.body;

  const bookingDetails = `
    📅 *New Appointment Booking*:

    👤 *Name:* ${name}
    📞 *Phone:* ${phone}
    📧 *Email:* ${email || 'Not provided'}
    🧖‍♀️ *Service:* ${service}
    📆 *Date:* ${date}
    🕒 *Time:* ${time}
    📝 *Message:* ${message || 'None'}
  `;

  try {
    // 1. Send WhatsApp
    await client.messages.create({
      body: bookingDetails,
      from: `whatsapp:${fromWhatsAppNumber}`,
      to: `whatsapp:${toWhatsAppNumber}`,
    });

    // 2. Send Email
    await transporter.sendMail({
      from: `"Shree Radhe Beauty" <${process.env.GMAIL_USER}>`,
      to: process.env.NOTIFY_EMAIL!,
      subject: 'New Appointment Booking',
      text: bookingDetails,
    });

    res.status(200).json({ success: true });
  } catch (err: any) {
    console.error('Notification error:', err);
    res.status(500).json({ success: false, message: 'Notification failed' });
  }
}
