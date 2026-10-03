import { useEffect, useState } from 'react'
import { ArrowUpRight, MessageCircle, CheckCircle2 } from 'lucide-react'
import useReveal from '../hooks/useReveal.js'

// Get your own key at https://web3forms.com if this one ever needs replacing.
// Free plan: 250 sends/month, 30-day submission history, up to 3 recipient emails.
const WEB3FORMS_KEY = 'b223498e-eb5d-4f93-b5f0-6e05781df598'
const WHATSAPP_NUMBER = '2349156350646'
const COOLDOWN_SECONDS = 45 // stops accidental double-sends / rapid resubmits

const EMPTY = { name: '', contact: '', type: 'Brand identity', about: '', time: 'As soon as possible' }

export default function Contact() {
  const ref = useReveal()
  const [fields, setFields] = useState(EMPTY)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [cooldown, setCooldown] = useState(0)
  const [sentSummary, setSentSummary] = useState(null)

  useEffect(() => {
    if (cooldown <= 0) return
    const id = setInterval(() => setCooldown((c) => Math.max(0, c - 1)), 1000)
    return () => clearInterval(id)
  }, [cooldown])

  function update(key) {
    return (e) => setFields((f) => ({ ...f, [key]: e.target.value }))
  }

  // Builds the WhatsApp message from whatever's currently in the form, so it
  // always matches what's actually been typed — including if the form was
  // never submitted at all.
  function waLink() {
    const lines = [
      `Hi, I'm ${fields.name || '[your name]'}.`,
      `I'm interested in: ${fields.type}.`,
      fields.about ? `Project: ${fields.about}` : null,
      `Timeline: ${fields.time}.`,
      fields.contact ? `Reach me at: ${fields.contact}` : null
    ].filter(Boolean)
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (cooldown > 0 || status === 'sending') return
    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New brief: ${fields.type} — ${fields.name}`,
          from_name: 'Thegeniuscreative website',
          replyto: fields.contact,
          ...fields
        })
      })
      const json = await res.json()
      if (json.success) {
        setSentSummary({ ...fields })
        setStatus('sent')
        setCooldown(COOLDOWN_SECONDS)
        setFields(EMPTY)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="band bd rv" id="build" ref={ref}>
      <i className="orb o1" aria-hidden="true" />
      <i className="orb o2" aria-hidden="true" />
      <div className="bgrid">
        <div className="bt">
          <p className="label" style={{ color: 'hsl(var(--hue) 60% 78%)' }}>The next step</p>
          <h2>Got a brand that deserves better? Let's build it.</h2>
          <p>Tell me where you are and where you want to be. I'll come back with a clear plan, not a sales pitch.</p>
          <ul className="next">
            <li><span>1</span>I read your brief</li>
            <li><span>2</span>I reply with a clear plan</li>
            <li><span>3</span>We start building</li>
          </ul>
        </div>

        {status === 'sent' && sentSummary ? (
          <div className="form sent">
            <p className="sentHead"><CheckCircle2 size={20} /> Brief delivered</p>
            <p className="sentSub">Here's exactly what I received — I'll reply soon.</p>
            <dl className="sentList">
              <div><dt>Name</dt><dd>{sentSummary.name}</dd></div>
              <div><dt>Contact</dt><dd>{sentSummary.contact}</dd></div>
              <div><dt>Building</dt><dd>{sentSummary.type}</dd></div>
              {sentSummary.about && <div><dt>Project</dt><dd>{sentSummary.about}</dd></div>}
              <div><dt>Timeline</dt><dd>{sentSummary.time}</dd></div>
            </dl>
            <div className="cta">
              <button className="btn ghost" type="button" onClick={() => setStatus('idle')}>
                Send another brief
              </button>
              <a className="btn ghost" href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi, I just sent a brief through the site — I'm ${sentSummary.name}.`)}`} target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp <MessageCircle size={18} />
              </a>
            </div>
          </div>
        ) : (
          <form className="form" onSubmit={handleSubmit}>
            <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />
            <label>Name<input value={fields.name} onChange={update('name')} autoComplete="name" required /></label>
            <label>Email or WhatsApp<input value={fields.contact} onChange={update('contact')} required /></label>
            <label>
              What are you building?
              <select value={fields.type} onChange={update('type')}>
                <option>Brand identity</option>
                <option>Social media design</option>
                <option>A website</option>
                <option>All of it</option>
              </select>
            </label>
            <label>Tell me about the project<textarea value={fields.about} onChange={update('about')} /></label>
            <label>
              Timeline
              <select value={fields.time} onChange={update('time')}>
                <option>As soon as possible</option>
                <option>Within a month</option>
                <option>In the next few months</option>
                <option>Just exploring</option>
              </select>
            </label>
            <div className="cta">
              <button className="btn" type="submit" disabled={status === 'sending' || cooldown > 0}>
                {cooldown > 0 ? `Wait ${cooldown}s` : status === 'sending' ? 'Sending...' : 'Send my brief'}
                {status !== 'sending' && cooldown === 0 && <ArrowUpRight size={18} />}
              </button>
              <a className="btn ghost" href={waLink()} target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp <MessageCircle size={18} />
              </a>
            </div>
            {status === 'error' && <p className="ok">Something went wrong, try the WhatsApp button instead.</p>}
          </form>
        )}
      </div>
    </section>
  )
}
