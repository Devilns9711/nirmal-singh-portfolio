import { useState } from 'react'
import '../styles/Contact.css'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section id="contact">
      <div className="container contact">
        <p className="eyebrow">contact</p>
        <h2>Let's build something</h2>
        <p className="contact__intro">
          Have a project, an opportunity, or just want to say hi? Drop a message below.
        </p>

        <form className="contact__form" onSubmit={handleSubmit}>
          <label>
            Name
            <input type="text" name="name" value={form.name} onChange={handleChange} required />
          </label>
          <label>
            Email
            <input type="email" name="email" value={form.email} onChange={handleChange} required />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" value={form.message} onChange={handleChange} required />
          </label>

          <button type="submit" className="btn btn--primary" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send message'}
          </button>

          {status === 'sent' && <p className="contact__status contact__status--ok">Message sent — thanks!</p>}
          {status === 'error' && <p className="contact__status contact__status--err">Something went wrong. Try again.</p>}
        </form>

        <div className="contact__socials">
          <a href="mailto:ns0012515@gmail.com" className="pencil-link">Email</a>
          <a href="https://github.com/devilns9711" className="pencil-link" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/nirmal-singh-6207a4412?utm_source=share_via&utm_content=profile&utm_medium=member_android" className="pencil-link" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://instagram.com/devilns9711" className="pencil-link" target="_blank" rel="noreferrer">Instagram</a>
        </div>
      </div>
    </section>
  )
}

export default Contact
