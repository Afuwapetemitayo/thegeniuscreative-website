import useReveal from '../hooks/useReveal.js'

export default function About() {
  const photoRef = useReveal()
  const copyRef = useReveal()

  return (
    <section className="blk about" id="about">
      <div className="wrap agrid">
        <div className="aphoto rv" ref={photoRef}>
          <div className="ring" aria-hidden="true" />
          <img src="/images/temitayo.jpg" alt="Afuwape Temitayo, brand designer and web developer behind Thegeniuscreative" />
        </div>
        <div className="acopy rv" ref={copyRef}>
          <p className="label">The person behind it</p>
          <h2>Hi, I'm Temitayo.</h2>
          <p>
            According to Google, I'm "a Nigerian creative technologist, visual designer, and
            full-stack digital product developer." Big grammar. In plain English: I design your
            brand, then build the website it lives on.
          </p>
          <p>
            My work spans brand identity, visual systems, and full-stack web development, for
            startups, food brands, real estate businesses, and event brands across Nigeria. I
            share the thinking behind it on LinkedIn, for anyone trying to make design and dev
            work together instead of fighting each other.
          </p>
          <p>
            I don't only build for clients. I'm the creator of{' '}
            <strong>Compass OOU</strong>, the campus map students use to find their way around
            Olabisi Onabanjo University. Right now I'm also building <strong>Boundrix</strong>,
            an AI tool that helps Nigerian and African freelancers shut down scope creep and set
            clear client boundaries, and <strong>Nelway</strong>, an AI career platform that
            brings CVs, job matching, applications and interview prep into one place.
          </p>
          <div className="atags">
            <span>Brand identity</span>
            <span>Frontend &amp; full-stack dev</span>
            <span>Social media design</span>
            <span>Strategy</span>
            <span>Lagos, Nigeria</span>
          </div>
        </div>
      </div>
    </section>
  )
}
