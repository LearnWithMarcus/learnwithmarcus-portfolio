# LearnWithMarcus Portfolio

Professional Learning Experience Design / Instructional Design portfolio for `learnwithmarcus.com`.

## Brand direction

The site uses the same visual family as Marcus Johnson's Storyline work while presenting it in a more restrained portfolio system:

- Deep Navy: `#081A2F`
- Warm Gold: `#C9A14A`
- Soft Gold: `#E2C475`
- Near Black: `#0D141D`
- Soft Ivory: `#F5F2EA`
- Muted Slate: `#A9B3BF`

## Current phase

This first branded build is intended to verify:

- GitHub source control
- Cloudflare Workers Builds
- Workers Static Assets
- custom-domain deployment at `learnwithmarcus.com`
- linking from the portfolio to Storyline content at `courses.learnwithmarcus.com`

The page already establishes the intended visual direction and uses resume-derived positioning, but project case studies and final content will continue to evolve.

## Structure

```text
public/
  index.html
  css/
    styles.css
  js/
    main.js
  assets/
    images/
      marcus-johnson-logo-full.png
      marcus-johnson-logo-symbol.png
    icons/
wrangler.jsonc
```

Cloudflare deploys the contents of `./public` as static assets.
