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
  return (
    <main id="top">
      <Hero />
      <Marquee />
      <Problem />
      <Fit />
      <Craft />
      <Solutions />
      <Acquisition />
      <Method />
      <About />
      <Promise />
      <Journal />
      <Contact />
    </main>
  )
}
