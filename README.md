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
