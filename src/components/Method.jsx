import { useEffect, useRef, useState } from 'react'
import useReveal from '../hooks/useReveal.js'

const STEPS = [
  { n: '01', title: 'Brief', body: 'I listen first, with a short questionnaire and a call, so I understand your business before I design anything.', tag: 'You get a written brief we both agree on' },
  { n: '02', title: 'Strategy', body: 'Your audience, positioning, and goals, mapped out.', tag: 'You get a clear direction to build from' },
  { n: '03', title: 'Design', body: 'Identity and visuals, developed with your feedback along the way.', tag: 'You get a brand system, not loose files' },
  { n: '04', title: 'Build', body: 'The website or product, designed and coded in one flow.', tag: 'You get a working, tested build' },
  { n: '05', title: 'Launch and refine', body: 'Go live, hand over everything, and improve after launch.', tag: 'You get a brand ready to work for you' }
]

export default function Method() {
  const heading = useReveal()
  const tlRef = useRef(null)
  const [progress, setProgress] = useState(0)
  const [onIndex, setOnIndex] = useState(-1)

  useEffect(() => {
    const update = () => {
      const el = tlRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const h = window.innerHeight
      const p = Math.min(1, Math.max(0, (h * 0.6 - rect.top) / rect.height))
      setProgress(p)
      const items = el.querySelectorAll('.ms')
      let last = -1
      items.forEach((m, i) => { if (m.getBoundingClientRect().top < h * 0.6) last = i })
      setOnIndex(last)
    }
    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <section className="blk" id="method">
      <div className="wrap mgrid">
        <div className="rv" ref={heading}>
          <p className="label">The method</p>
          <h2>From first brief to finished brand.</h2>
          <div className="copy">
            <p>A clear path, so you always know what's happening and what comes next.</p>
          </div>
        </div>
        <div className="tl" ref={tlRef} style={{ '--p': progress }}>
          {STEPS.map((s, i) => (
            <div className={`ms${i <= onIndex ? ' on' : ''}`} key={s.n}>
              <span className="n">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <em>{s.tag}</em>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
