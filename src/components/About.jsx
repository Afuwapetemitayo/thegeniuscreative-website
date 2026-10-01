import useReveal from '../hooks/useReveal.js'

export default function About() {
  const photoRef = useReveal()
  const copyRef = useReveal()

  return (
    <section className="blk about" id="about">
      <div className="wrap agrid">
        <div className="aphoto rv" ref={photoRef}>
          <div className="ring" aria-hidden="true" />
          <img src="/images/temitayo.jpg" alt="Temitayo, the creative behind Thegeniuscreative" />
        </div>
        <div className="acopy rv" ref={copyRef}>
          <p className="label">The person behind it</p>
          <h2>Hi, I'm Temitayo.</h2>
          <p>
            According to Google, I'm "a Nigerian creative technologist, visual designer, and
            full-stack digital product developer." Big grammar. In summary: I design your
            brand, then build the website it lives on.
          </p>
          <p>
            My work spans brand identity, visual systems, and full-stack web development, for
            startups, food brands, real estate businesses, and event brands across Nigeria. I
            share the thinking behind it on LinkedIn, for anyone trying to make design and dev
            work together instead of fighting each other.
          </p>
          <p>
            Right now I'm building <strong>Boundrix</strong>, an AI-powered scope management
            tool for Nigerian and African freelancers, to help them shut down scope creep and
            set clear client boundaries before a project ever starts.
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
