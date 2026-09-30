import { Palette, Megaphone, LayoutTemplate, Compass, ArrowRight } from 'lucide-react'
import useReveal from '../hooks/useReveal.js'

const ROWS = [
  { icon: Palette, title: 'Brand identity and positioning', body: 'Your name, logo, look, and voice, built around a clear reason customers should pick you.' },
  { icon: Megaphone, title: 'Social media and campaign design', body: 'A visual system for your content, flyers, and ads, so every post feels like the same brand.' },
  { icon: LayoutTemplate, title: 'Websites and web products', body: 'Fast, clean sites and platforms designed and coded by me, with no hand-off gaps.' },
  { icon: Compass, title: 'Brand strategy', body: 'The thinking underneath: who you\'re speaking to, what you say, and how you get found.' }
]

export default function Craft() {
  const heading = useReveal()
  return (
    <section className="blk" id="craft">
      <div className="wrap">
        <div className="rv" ref={heading}>
          <p className="label">What I build</p>
          <h2>Everything your brand needs to be chosen.</h2>
        </div>
        <div className="rows">
          {ROWS.map((r) => <Row key={r.title} {...r} />)}
        </div>
      </div>
    </section>
  )
}

function Row({ icon: Icon, title, body }) {
  const ref = useReveal()
  return (
    <a className="row rv" href="#solutions" ref={ref}>
      <span className="chip"><Icon size={22} /></span>
      <h3>{title}</h3>
      <p>{body}</p>
      <span className="go"><ArrowRight size={18} /></span>
    </a>
  )
}
