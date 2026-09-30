import { PenTool, Code, Lightbulb, Crosshair } from 'lucide-react'
import useReveal from '../hooks/useReveal.js'

const BOXES = [
  {
    icon: PenTool,
    title: 'Design',
    body: 'Identity and visuals people remember, from logo to social media, all looking like one brand.',
    className: 'b1',
    viz: (
      <div className="type">
        Aa<span>Type, colour, and layout<br />that hold together everywhere</span>
      </div>
    )
  },
  {
    icon: Code,
    title: 'Development',
    body: 'Websites and products that actually work. I write the code myself.',
    className: 'b2',
    viz: (
      <div className="code">
        <em>const</em> brand = {'{'}
        {'\n'}  design: <u>"yours"</u>,{'\n'}  code: <u>"mine"</u>,{'\n'}  ships: <em>true</em>
        {'\n'}{'}'}
      </div>
    )
  },
  {
    icon: Lightbulb,
    title: 'Strategy',
    body: 'Decisions tied to the business, not just the brief.',
    className: 'b3',
    viz: (
      <div className="flow">
        <i>Message</i><i>Visuals</i><i>Website</i><i>Customer</i>
      </div>
    )
  },
  {
    icon: Crosshair,
    title: 'Positioning',
    body: "A clear reason customers pick you over the competitor next door.",
    className: 'b4',
    viz: (
      <div className="rings">
        <div><i /><i /><i /></div>
        <span>You, at the centre.</span>
      </div>
    )
  }
]

export default function Fit() {
  const heading = useReveal()
  return (
    <section className="blk fit" id="fit">
      <div className="wrap">
        <div className="rv" ref={heading}>
          <p className="label">The fit</p>
          <h2>One mind on the whole problem.</h2>
        </div>
        <div className="bento">
          {BOXES.map((b) => (
            <Box key={b.title} {...b} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Box({ icon: Icon, title, body, className, viz }) {
  const ref = useReveal()
  return (
    <article className={`box ${className} rv`} ref={ref}>
      <span className="chip"><Icon size={22} /></span>
      <h3>{title}</h3>
      <p>{body}</p>
      <div className="viz">{viz}</div>
    </article>
  )
}
