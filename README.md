# Portfolio website
This is a website built on top of Next.js. It is currently static, all content is loaded in md.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

All development is done on the `dev`-branch. Once tested, a merge to the main branch will trigger a deploy on Vercel to `https://staging.abelschupp.nl`.

## TODO
- [ ] add big back button on deeper pages
- [X] make external links open in new tab
- [X] make page links on index page consistent in styling with other links
- [X] remove page transitions
- [ ] fix page transitions
- [ ] create typography page
- [ ] add bigger contact info
- [ ] create hover states
- [ ] convert all js to typescript
- [ ] move static content to CMS (Contentful?)
- [X] smoother scrolling on mobile (easing / replace Monomove w/ Framer Motion?)