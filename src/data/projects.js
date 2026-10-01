// One entry here = one Solutions card + one auto-generated /solutions/:slug page.
// Replace these placeholders with your real projects, then add more as you like.

const projects = [
  {
    slug: 'ampliqhq',
    name: 'AmpliQ',
    kind: 'Development',
    image: null,
    problem: 'AmpliQ needed a home before it had a product: somewhere for freelancers and creatives across Africa to actually understand what AmpliQ is, and a fast way to capture a waitlist of the people who wanted in first.',
    problemLong: "AmpliQ was still pre-launch — the product itself wasn't built yet, but the audience needed somewhere to land. There was no site explaining what AmpliQ actually does, and no structured way to capture who wanted early access. Without that, every bit of early interest from freelancers and creatives across Africa had nowhere to go and no way to be qualified before launch day.",
    solution: "A landing site at ampliqhq.com that explains AmpliQ, paired with a two-step waitlist form: a quick name-and-email capture up front, then an optional ~20-question form for people who want to go deeper. Submissions route straight to the team's inbox through Zoho SMTP, deployed on Vercel.",
    solutionLong: "I built ampliqhq.com as both the explainer and the funnel. The page makes the case for AmpliQ first, then asks for almost nothing to join: just a name and an email. That low-friction first step is what a 'Join waitlist' click reveals. From there, anyone who wants to be considered more seriously can open a second, much longer form — about 20 questions — that gives the AmpliQ team real signal on who's in the waitlist, not just a raw count. Both submission types are wired to send straight to the team's inbox, moved off a third-party form API and onto Zoho SMTP for more direct, reliable delivery. The whole site is deployed on Vercel straight from GitHub, so updates ship the same way the rest of the Thegeniuscreative projects do.",
    result: 'A live, working waitlist at ampliqhq.com, built to grow with the product.',
    client: 'AmpliQ',
    role: 'Full-stack web development — landing site & waitlist system',
    timeline: 'Ongoing',
    tools: 'React, Vercel, Zoho SMTP',
    stack: ['React', 'Vercel', 'Zoho SMTP'],
    quote: '',
    quoteAuthor: ''
  },
  {
    slug: 'ampliqhq',
    name: 'Ampliqhq',
    kind: 'Development',
    image: null, // drop a screenshot at /public/images/projects/ampliqhq.jpg and set this to '/images/projects/ampliqhq.jpg'
    problem: 'AmpliQ needed a waitlist site before it had a product to point to — which meant the site had to earn trust and explain what AmpliQ actually is, not just collect emails.',
    solution: 'Built and shipped ampliqhq.com: a landing page that explains the platform, paired with a two-step signup — a fast name-and-email capture up front, then a full qualifying form for people who want to share more.',
    result: 'A live waitlist that converts curious visitors into signups, with every submission — quick or detailed — landing straight in the inbox in real time.',
    client: 'AmpliQ',
    role: 'Full-stack web development',
    timeline: 'Ongoing',
    tools: 'React, Vite, Zoho SMTP',
    stack: ['React', 'Vite', 'Zoho SMTP'],
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
    slug: 'project-four',
    name: '[Brand name]',
    kind: 'Development',
    image: null,
    problem: '[One or two lines on the problem]',
    solution: '[What you built]',
    result: '[Outcome, number, or client quote]',
    client: '[Client / brand name]',
    role: '[e.g. Full-stack web development]',
    timeline: '[e.g. 4 weeks]',
    tools: '[e.g. React, Express, Supabase]',
    stack: ['React', 'Express', 'Supabase'],
    quote: '',
    quoteAuthor: ''
  }
]

export default projects
