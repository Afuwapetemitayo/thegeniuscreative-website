import { useState } from 'react'
import { ArrowUpRight, MessageCircle } from 'lucide-react'
import useReveal from '../hooks/useReveal.js'

// Get your own key at https://web3forms.com if this one ever needs replacing.
const WEB3FORMS_KEY = 'b223498e-eb5d-4f93-b5f0-6e05781df598'
const WHATSAPP_URL = 'https://wa.me/2349156350646'

export default function Contact() {
  const ref = useReveal()
  const [status, setStatus] = useState('')
  const [sending, setSending] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setSending(true)
    setStatus('Sending...')
    const form = e.target
    const data = Object.fromEntries(new FormData(form))
    data.access_key = WEB3FORMS_KEY
    data.subject = 'New brief from Thegeniuscreative.com'
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data)
      })
      const json = await res.json()
      if (json.success) {
        setStatus("Sent! I'll get back to you soon.")
        form.reset()
      } else {
        setStatus('Something went wrong, try the WhatsApp button instead.')
      }
    } catch {
      setStatus('Something went wrong, try the WhatsApp button instead.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section className="band bd rv" id="build" ref={ref}>
      <i className="orb o1" aria-hidden="true" />
      <i className="orb o2" aria-hidden="true" />
      <div className="bgrid">
        <div className="bt">
          <p className="label" style={{ color: 'hsl(var(--hue) 100% 85%)' }}>The next step</p>
          <h2>Got a brand that deserves better? Let's build it.</h2>
          <p>Tell me where you are and where you want to be. I'll come back with a clear plan, not a sales pitch.</p>
          <ul className="next">
            <li><span>1</span>I read your brief</li>
            <li><span>2</span>I reply with a clear plan</li>
            <li><span>3</span>We start building</li>
          </ul>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />
          <label>Name<input name="name" autoComplete="name" required /></label>
          <label>Email or WhatsApp<input name="contact" required /></label>
          <label>
            What are you building?
            <select name="type" defaultValue="Brand identity">
              <option>Brand identity</option>
              <option>Social media design</option>
              <option>A website</option>
              <option>All of it</option>
            </select>
          </label>
          <label>Tell me about the project<textarea name="about" /></label>
          <label>
            Timeline
            <select name="time" defaultValue="As soon as possible">
              <option>As soon as possible</option>
              <option>Within a month</option>
              <option>In the next few months</option>
              <option>Just exploring</option>
            </select>
          </label>
          <div className="cta">
            <button className="btn" type="submit" disabled={sending}>
              Send my brief <ArrowUpRight size={18} />
            </button>
            <a className="btn ghost" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Chat on WhatsApp <MessageCircle size={18} />
            </a>
          </div>
          <p className="ok" role="status">{status}</p>
        </form>
      </div>
    </section>
  )
}
