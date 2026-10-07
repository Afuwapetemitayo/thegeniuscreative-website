import { useEffect, useState } from 'react'
import { ArrowUpRight, MessageCircle } from 'lucide-react'

const WORDS = ['remembered', 'trusted', 'chosen', 'paid']

export default function Hero() {
  const [i, setI] = useState(0)
  const [out, setOut] = useState(false)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    const id = setInterval(() => {
      setOut(true)
      setTimeout(() => {
        setI((v) => (v + 1) % WORDS.length)
        setOut(false)
      }, 230)
    }, 2600)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="hero">
      <i className="orb o1" aria-hidden="true" />
      <i className="orb o2" aria-hidden="true" />
      <i className="orb o3" aria-hidden="true" />
      <div className="wrap hgrid">
        <div>
          <h1>
            <span className="line">Brands that get</span>
            <span className="line">
              <span className={`word${out ? ' out' : ''}`}>{WORDS[i]}</span>.
            </span>
          </h1>
          <p className="sub">
            Your identity, your website, and your customer strategy, handled by one creative
            who understands every layer. Nothing gets lost between the logo and the sale.
          </p>
          <div className="cta">
            <a className="btn" href="#solutions">
              See the solutions <ArrowUpRight size={18} />
            </a>
            <a className="btn ghost" href="#build">
              Let's build yours <MessageCircle size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
