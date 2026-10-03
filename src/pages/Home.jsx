import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import Marquee from '../components/Marquee.jsx'
import Problem from '../components/Problem.jsx'
import Fit from '../components/Fit.jsx'
import Craft from '../components/Craft.jsx'
import Solutions from '../components/Solutions.jsx'
import Acquisition from '../components/Acquisition.jsx'
import Method from '../components/Method.jsx'
import About from '../components/About.jsx'
import Promise from '../components/Promise.jsx'
import Journal from '../components/Journal.jsx'
import Contact from '../components/Contact.jsx'

export default function Home() {
  const location = useLocation()

  // Nav links point at #craft / #solutions / etc. When we're already on the
  // home page the browser can jump there on its own, but when they're
  // clicked from a case-study page, React Router mounts this page fresh and
  // the target section needs to be found and scrolled to manually — the
  // browser's own hash-scroll runs before React has rendered anything.
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0 })
      return
    }
    const id = location.hash.slice(1)
    const t = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 60)
    return () => clearTimeout(t)
  }, [location])

  return (
    <main id="top">
      <Hero />
      <Marquee />
      <About />
      <Problem />
      <Fit />
      <Craft />
      <Solutions />
      <Acquisition />
      <Method />
      <Promise />
      <Journal />
      <Contact />
    </main>
  )
}
