import { useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Image as ImageIcon } from 'lucide-react'
import projects from '../data/projects.js'

// A few entries in projects.js are still placeholders waiting for real work
// to replace them (name wrapped in brackets, e.g. "[Brand name]"). "Next up"
// should only ever point at a real, finished project.
const isPlaceholder = (p) => p.name.trim().startsWith('[')

export default function CaseStudy() {
  const { slug } = useParams()
  const index = projects.findIndex((p) => p.slug === slug)
  const project = projects[index]

  // Walk forward through the list looking for the next real project. If it
  // wraps all the way back around to this one, there's nothing else to show.
  let next = null
  if (index !== -1) {
    for (let i = 1; i <= projects.length; i++) {
      const candidate = projects[(index + i) % projects.length]
      if (candidate.slug === slug) break
      if (!isPlaceholder(candidate)) { next = candidate; break }
    }
  }

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

      {project.gallery && project.gallery.length > 0 && (
        <section className="sblk">
          <div className="wrap">
            <p className="slabel">The work</p>
            <h2 style={{ marginBottom: 10 }}>A closer look</h2>
            <p className="shint">Scroll to see the full set →</p>
            <div className="sgallery">
              {project.gallery.map((src, i) => (
                <img key={src} src={src} alt={`${project.name} — design ${i + 1}`} loading="lazy" />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="sblk">
        <div className="wrap">
          <div className="sresult">
            <div className="sresultText">
              <p className="slabel">The result</p>
              <h2>{project.result}</h2>
              {project.quote && (
                <blockquote>
                  "{project.quote}"
                  <cite>{project.quoteAuthor}</cite>
                </blockquote>
              )}
            </div>
            {project.liveUrl && (
              <a className="sliveLink" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                Visit the live site <ArrowRight size={18} />
              </a>
            )}
          </div>
        </div>
      </section>

      <section className="snext">
        <div className="wrap">
          <p className="slabel">Next up</p>
          {next ? (
            <Link to={`/solutions/${next.slug}`}>
              <h2>{next.name} <ArrowRight size={22} style={{ display: 'inline' }} /></h2>
            </Link>
          ) : (
            <Link to="/#solutions">
              <h2>Back to Solutions <ArrowRight size={22} style={{ display: 'inline' }} /></h2>
            </Link>
          )}
        </div>
      </section>
    </main>
  )
}
