import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Palette, LayoutTemplate, Megaphone, Code, ArrowRight } from 'lucide-react'
import useReveal from '../hooks/useReveal.js'
import projects from '../data/projects.js'

const ICONS = [Palette, LayoutTemplate, Megaphone, Code]
const FILTERS = ['All', 'Design', 'Development']

export default function Solutions() {
  const [filter, setFilter] = useState('All')
  const heading = useReveal()
  const shown = filter === 'All' ? projects : projects.filter((p) => p.kind === filter)

  return (
    <section className="blk" id="solutions">
      <div className="wrap">
        <div className="rv" ref={heading}>
          <p className="label">The proof</p>
          <h2>Solutions, not screenshots.</h2>
          <div className="copy">
            <p>Every brand came to me with a problem. Here's what I built for it.</p>
          </div>
        </div>

        <div className="tabs" role="tablist" aria-label="Filter solutions">
          {FILTERS.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={filter === f}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="sgrid">
          {shown.map((p, i) => (
            <SolutionCard key={p.slug} project={p} Icon={ICONS[i % ICONS.length]} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SolutionCard({ project, Icon }) {
  return (
    <article className="sol">
      <div className="thumb">
        {project.image ? (
          <img src={project.image} alt={`${project.name} screenshot`} />
        ) : (
          <Icon size={34} />
        )}
      </div>
      <div className="sbody">
        <div className="meta">
          <b>{project.name}</b>
          <span className="kind">{project.kind}</span>
        </div>
        <dl>
          <div><dt>The problem</dt><dd>{project.problem}</dd></div>
          <div><dt>The solution</dt><dd>{project.solution}</dd></div>
          <div><dt>The result</dt><dd>{project.result}</dd></div>
        </dl>
        <Link className="more" to={`/solutions/${project.slug}`}>
          Read the full story <ArrowRight size={18} />
        </Link>
      </div>
    </article>
  )
}
