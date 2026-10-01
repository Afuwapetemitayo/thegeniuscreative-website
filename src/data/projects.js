// One entry here = one Solutions card + one auto-generated /solutions/:slug page.
// Replace these placeholders with your real projects, then add more as you like.

const projects = [
  {
    slug: 'ampliqhq',
    name: 'AmpliQ',
    kind: 'Development',
    image: '/images/ampliqhq.jpg',
    problem: 'AmpliQ needed a home before it had a product: somewhere for freelancers and creatives across Africa to actually understand what AmpliQ is, and a fast way to capture a waitlist of the people who wanted in first.',
    problemLong: "AmpliQ was still pre-launch — the product itself wasn't built yet, but the audience needed somewhere to land. There was no site explaining what AmpliQ actually does, and no structured way to capture who wanted early access. Without that, every bit of early interest from freelancers and creatives across Africa had nowhere to go and no way to be qualified before launch day.",
    solution: "A landing site at ampliqhq.com that explains AmpliQ, paired with a two-step waitlist form: a quick name-and-email capture up front, then an optional ~20-question form for people who want to go deeper. Submissions route straight to the team's inbox through Zoho SMTP, deployed on Vercel.",
    solutionLong: "I built ampliqhq.com as both the explainer and the funnel. The page makes the case for AmpliQ first, then asks for almost nothing to join: just a name and an email. That low-friction first step is what a 'Join waitlist' click reveals. From there, anyone who wants to be considered more seriously can open a second, much longer form — about 20 questions — that gives the AmpliQ team real signal on who's in the waitlist, not just a raw count. Both submission types are wired to send straight to the team's inbox, moved off a third-party form API and onto Zoho SMTP for more direct, reliable delivery. The whole site is deployed on Vercel straight from GitHub, so updates ship the same way the rest of the Thegeniuscreative projects do.",
    result: 'A live, working waitlist at ampliqhq.com, built to grow with the product.',
    liveUrl: 'https://ampliqhq.com',
    client: 'AmpliQ',
    role: 'Full-stack web development — landing site & waitlist system',
    timeline: 'Ongoing',
    tools: 'React, Vercel, Zoho SMTP',
    stack: ['React', 'Vercel', 'Zoho SMTP'],
    quote: '',
    quoteAuthor: ''
  },
  {
    slug: 'boundrix',
    name: 'Boundrix',
    kind: 'Development',
    image: '/images/boundrix.jpg',
    problem: "Freelancers lose money to scope creep constantly, and almost never have a fast, professional way to push back on a client request in the moment.",
    problemLong: "Scope creep is one of those problems every freelancer recognizes but nobody has a system for. A client slips in \"can you also redesign the Instagram highlights while you're at it? It won't take long...\" and the freelancer either eats the extra work, or spends time they don't have drafting a careful, professional-sounding pushback. There was no tool built specifically to catch this moment and arm freelancers with an instant, confident response.",
    solution: "Boundrix: paste a client message against your scope of work and get an instant AI verdict on whether it's in scope, plus a professional reply you can send immediately.",
    solutionLong: "Boundrix is my own product, built for Nigerian and African freelancers specifically. You paste in a client's message and your SOW, and it gives you a straight verdict on whether the request is in scope or creep, plus a ready-to-send, professional reply that holds the boundary without burning the relationship. It's the tool I wished existed every time a brief I'd already quoted quietly grew three extra deliverables.",
    result: 'A working AI tool live at boundrix.vercel.app, built to give freelancers an instant, professional answer to scope creep instead of an uneasy guess.',
    liveUrl: 'https://boundrix.vercel.app',
    client: 'Boundrix (own product)',
    role: 'Product design & full-stack development',
    timeline: 'In active development',
    tools: 'React, Google Auth, Supabase, Vercel, AI agent',
    stack: ['React', 'Supabase', 'Google Auth', 'AI agent'],
    quote: '',
    quoteAuthor: ''
  },
  {
    slug: 'project-three',
    name: '[Brand name]',
    kind: 'Design',
    image: null,
    problem: '[One or two lines on the problem]',
    solution: '[What you built]',
    result: '[Outcome, number, or client quote]',
    client: '[Client / brand name]',
    role: '[e.g. Social media & campaign design]',
    timeline: '[e.g. 2 weeks]',
    tools: '[e.g. Photoshop, CapCut]',
    stack: [],
    quote: '',
    quoteAuthor: ''
  },
  {
    slug: 'hilann-logistics',
    name: 'Hilann Logistics',
    kind: 'Development',
    image: null, // drop hilann-logistics.jpg in /public/images and point this at '/images/hilann-logistics.jpg'
    problem: "Hilann Logistics needed a working site — frontend and backend — built around a logistics brand's own look, not a generic template.",
    problemLong: "This was a freelance build where the brand already had its own visual identity: a dark, zinc-and-red system suited to a logistics company. The job wasn't just to ship pages — it was a full frontend and backend, with a real way for the site to send and handle mail, on infrastructure that could stay live and be trusted with credentials.",
    solution: "A React and Tailwind frontend built around Hilann's dark zinc/red system, backed by a Node.js API handling mail through Nodemailer, deployed on Railway.",
    solutionLong: "I built the frontend in React with Tailwind, styled entirely around Hilann's own dark zinc-and-red palette rather than a generic template look. Behind it sits a Node.js and Express backend handling the site's mail through Nodemailer, deployed on Railway so it runs independently of the frontend. Partway through, an exposed .env file meant rotating every credential and scrubbing the Git history before redeploying — the kind of real-world incident that doesn't show up in a portfolio screenshot but is exactly the kind of thing a client should know gets handled properly.",
    result: 'A live frontend and backend running on separate, production infrastructure — React on the client side, Express and Nodemailer on Railway behind it.',
    liveUrl: '', // add the live site URL here once you have one to share
    client: 'Hilann Logistics',
    role: 'Full-stack web development — frontend & backend',
    timeline: 'Freelance project',
    tools: 'React, Tailwind, Node.js, Express, Nodemailer, Railway',
    stack: ['React', 'Tailwind', 'Node.js', 'Express', 'Railway'],
    quote: '',
    quoteAuthor: ''
  }
]

export default projects
