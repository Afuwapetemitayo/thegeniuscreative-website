import { ArrowUpRight } from 'lucide-react'
import useReveal from '../hooks/useReveal.js'

// One place to control this. Point it at Hashnode for now; when you move to
// Substack (or wherever), swap the URL and the platform name below — nothing
// else needs to change.
const JOURNAL_URL = 'https://thegeniuscreative.hashnode.dev/i-built-boundrix-for-nigerian-freelancers'
const JOURNAL_PLATFORM = 'Hashnode'

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
            Read on {JOURNAL_PLATFORM} <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}
