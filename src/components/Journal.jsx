import { ArrowUpRight } from 'lucide-react'
import useReveal from '../hooks/useReveal.js'

// Swap this once you commit to a platform (Substack, etc.)
const JOURNAL_URL = '#'

export default function Journal() {
  const ref = useReveal()
  return (
    <section id="journal" style={{ paddingBottom: 'clamp(28px,4vw,48px)' }}>
      <div className="wrap">
        <div className="jn rv" ref={ref}>
          <div>
            <p className="label" style={{ marginBottom: 10 }}>The thinking</p>
            <h2>Thinking out loud on brands, design, and building for the web.</h2>
          </div>
          <a className="btn" href={JOURNAL_URL} target="_blank" rel="noopener noreferrer">
            Read the Journal <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}
