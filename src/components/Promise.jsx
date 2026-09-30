import { Check } from 'lucide-react'
import useReveal from '../hooks/useReveal.js'

const CHECKS = [
  'You always know where your project stands',
  'Decisions are explained, not just delivered',
  'Details get the attention they deserve',
  "Nothing ships until it's right"
]

export default function Promise() {
  const ref = useReveal()
  return (
    <section className="blk prom">
      <div className="wrap rv" ref={ref}>
        <p className="label">The promise</p>
        <h2>You're in the right hands.</h2>
        <p className="lead">
          I'm Temitayo, the creative behind Thegeniuscreative. Four skills, one
          decision-maker, so nothing gets lost in translation.
        </p>
        <div className="checks">
          {CHECKS.map((c) => (
            <span key={c}><Check size={18} />{c}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
