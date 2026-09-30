import { PenTool, LayoutTemplate, HelpCircle } from 'lucide-react'
import useReveal from '../hooks/useReveal.js'

export default function Problem() {
  const r1 = useReveal()
  const r2 = useReveal()

  return (
    <section className="blk" id="problem">
      <div className="wrap pgrid">
        <div className="rv" ref={r1}>
          <p className="label">The problem</p>
          <h2>Most brands don't have a design problem. They have a connection problem.</h2>
          <div className="copy">
            <p>
              The brand launches looking fine and gets ignored, because customers don't see a
              system. They see pieces that don't quite fit.
            </p>
          </div>
        </div>
        <div className="scatter rv" ref={r2} aria-hidden="true">
          <div className="piece p1">
            <small><PenTool size={18} /> Logo</small>
            <strong>from one person</strong>
          </div>
          <div className="piece p2">
            <small><LayoutTemplate size={18} /> Website</small>
            <strong>from another</strong>
          </div>
          <div className="piece p3">
            <small><HelpCircle size={18} /> Strategy</small>
            <strong>from nobody</strong>
          </div>
        </div>
      </div>
    </section>
  )
}
