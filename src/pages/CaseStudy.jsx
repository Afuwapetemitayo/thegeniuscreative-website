import { useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Image as ImageIcon } from 'lucide-react'
import projects from '../data/projects.js'

export default function CaseStudy() {
  const { slug } = useParams()
  const index = projects.findIndex((p) => p.slug === slug)
  const project = projects[index]
  const next = projects[(index + 1) % projects.length]

  useEffect(() => { window.scrollTo(0, 0) }, [slug])

  if (!project) return <Navigate to="/" replace />

  return (
    <main id="story">
      <div className="storytop">
        <div className="wrap">
          <Link className="backbtn" to="/#solutions">
            <ArrowLeft size={17} /> All solutions
          </Link>
        </div>
      </div>

      <section className="shero">
        <div className="wrap">
          <p className="eyebrow">
            Solutions / <b>{project.kind}</b>
          </p>
          <h1>{project.name}: {project.result}</h1>
          <p className="dek">{project.problem}</p>
          <dl className="smeta">
            <div><dt>Client</dt><dd>{project.client}</dd></div>
            <div><dt>Role</dt><dd>{project.role}</dd></div>
            <div><dt>Timeline</dt><dd>{project.timeline}</dd></div>
            <div><dt>Tools</dt><dd>{project.tools}</dd></div>
          </dl>
        </div>
        <div className="wrap">
          {project.image ? (
            <img className="sshot-img" src={project.image} alt={`${project.name} — full view`} />
          ) : (
            <div className="sshot">
              <ImageIcon size={40} />
              <span>Hero shot of the finished work goes here</span>
            </div>
          )}
        </div>
      </section>

      <section className="sblk">
        <div className="wrap sgrid">
          <div><p className="slabel">The problem</p><h2>What {project.name} was up against</h2></div>
          <div className="scopy"><p>{project.problemLong || project.problem}</p></div>
        </div>
      </section>

      <section className="sblk">
        <div className="wrap sgrid">
          <div><p className="slabel">The solution</p><h2>What I built</h2></div>
          <div className="scopy">
            <p>{project.solutionLong || project.solution}</p>
            {project.stack.length > 0 && (
              <div className="sstack">
                {project.stack.map((t) => <span key={t}>{t}</span>)}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="sblk">
        <div className="wrap">
          <div className="sresult">
            <p className="slabel">The result</p>
            <h2>{project.result}</h2>
            {project.quote && (
              <blockquote>
                "{project.quote}"
                <cite>{project.quoteAuthor}</cite>
              </blockquote>
            )}
          </div>
        </div>
      </section>

      <section className="snext">
        <div className="wrap">
          <p className="slabel">Next up</p>
          <Link to={`/solutions/${next.slug}`}>
            <h2>{next.name} <ArrowRight size={22} style={{ display: 'inline' }} /></h2>
          </Link>
        </div>
      </section>
    </main>
  )
}
