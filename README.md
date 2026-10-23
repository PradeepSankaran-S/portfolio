# Pradeep Sankaran — Portfolio

Personal portfolio of Pradeep Sankaran, Flutter & Mobile Application Developer (Chennai, India).

**Live site:** https://pradeepsankaran-s.github.io/portfolio/

A static site with no build step, hosted on GitHub Pages from the `main` branch.

## Project structure

```
portfolio/
├── index.html                  # Page markup, SEO meta tags, JSON-LD
├── assets/
│   ├── css/styles.css          # All styles (light + dark theme tokens)
│   ├── js/main.js              # Theme toggle, nav, galleries, modals, contact form
│   └── images/
│       ├── favicon.svg
│       ├── profile.jpg
│       └── screenshots/        # App screenshots (WebP, max 1080px wide)
│           ├── timesmed/
│           ├── foode/
│           └── howdy-chats/
└── resume/
    └── Pradeep_S_Flutter_Developer_Resume.pdf
```

## Run locally

Serve the folder with any static file server, for example:

```bash
npx http-server -p 8080 -c-1
```

Then open http://localhost:8080. Opening `index.html` directly from disk also works, but some browsers block local images that way.

## Updating content

- **Projects, experience, skills:** edit the markup in `index.html`.
- **Screenshot galleries and project detail popups:** edit `projectGalleries` and `projectDetails` at the top of `assets/js/main.js`.
- **New screenshots:** add WebP files (about 1080px wide) under `assets/images/screenshots/<project>/` and reference them in both `index.html` and `projectGalleries`.
- **Colors:** change the tokens in the `:root` block at the top of `assets/css/styles.css` (the dark theme overrides follow it).

## Contact form

With no endpoint configured, the form opens the visitor's email app with the message filled in. To receive messages directly, add `data-endpoint="https://formspree.io/f/<your-id>"` (or a Web3Forms URL) to the `<form id="contact-form">` tag.
