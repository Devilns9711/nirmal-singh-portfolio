// Vercel serverless function — handles the Contact form submission
// and emails it to you using Resend (https://resend.com).
//
//
// SETUP (one-time):
// 1. Sign up free at https://resend.com
// 2. Copy your API key from the dashboard
// 3. In your Vercel project: Settings -> Environment Variables, add:
//      RESEND_API_KEY = re_xxxxxxxxxxxx
//      TO_EMAIL        = your-real-email@gmail.com   (where you want to receive messages)
// 4. Redeploy — that's it, no domain setup needed for this to work.

import { Resend } from 'resend'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, message } = req.body || {}

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)

    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // default Resend test sender — works with no domain setup
      to: process.env.TO_EMAIL,
      reply_to: email, // so you can hit "reply" and it goes straight to the sender
      subject: `New portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    })

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ error: 'Something went wrong' })
  }
}
