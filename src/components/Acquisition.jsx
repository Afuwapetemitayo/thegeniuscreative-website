import { MessageSquare, Eye, MousePointerClick, TrendingUp } from 'lucide-react'
import useReveal from '../hooks/useReveal.js'

const STEPS = [
  { icon: MessageSquare, title: 'The message', body: 'Says the right thing to the right person.' },
  { icon: Eye, title: 'The visuals', body: 'Stop the scroll.' },
  { icon: MousePointerClick, title: 'The website', body: 'Makes the next step obvious.' },
  { icon: TrendingUp, title: 'The follow-through', body: 'Measures what works and improves it.' }
]

export default function Acquisition() {
  const heading = useReveal()
  return (
    <section className="blk" id="acquisition">
      <div className="wrap">
        <div className="rv" ref={heading}>
          <p className="label">The outcome</p>
          <h2>Built to bring customers, not just compliments.</h2>
          <div className="copy">
            <p>
              A brand can look incredible and still stay invisible. So every decision I make
              points at one thing: getting the right people to notice you, trust you, and act.
            </p>
          </div>
        </div>
        <div className="steps4">
          {STEPS.map((s) => <Step key={s.title} {...s} />)}
        </div>
      </div>
    </section>
  )
}

function Step({ icon: Icon, title, body }) {
  const ref = useReveal()
  return (
    <div className="st rv" ref={ref}>
      <span className="chip"><Icon size={26} /></span>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  )
}
