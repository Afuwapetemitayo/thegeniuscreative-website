# Thegeniuscreative

Personal portfolio site — React + Vite, plain CSS.

## Run it locally
    npm install
    npm run dev

Opens at http://localhost:5173

## Build for deploy
    npm run build

Outputs to /dist — this is what Vercel deploys.

## The contact form
Uses Web3Forms (see src/components/Contact.jsx). The access key is already
wired in. To change where submissions go, get a new key at web3forms.com
and swap it in.

## Case studies
Each project lives in src/data/projects.js. Add a new object there and it
automatically gets a Solutions card and its own /solutions/:slug page —
no new component needed.

## SEO
- `src/seo.js` holds every title, description, share image and the structured
  data Google reads. **When you buy a domain, set `CUSTOM_DOMAIN` at the top of
  that file.** Until then the build uses the Vercel production address.
- `npm run build` pre-renders `/` and every case study to real HTML (with its
  own title and share tags), then writes `sitemap.xml` and `robots.txt`.
- New project in `projects.js` → it's automatically added to the sitemap and
  pre-rendered. Give it an `ogImage` (1200×630) for a nicer link preview;
  otherwise its main image is used.
