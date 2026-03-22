# Tim Stone | Portfolio v3.0

A modern, single-page portfolio built with React, Vite, and Tailwind CSS. Designed to showcase fullstack and frontend engineering work — from complete client sites to standalone components and features.

## Tech Stack

- **React 18** — Component-based UI
- **Vite** — Build tooling and dev server
- **Tailwind CSS v4** — Utility-first styling
- **SCSS** — Custom styles and Tailwind extensions
- **Framer Motion** — Scroll-triggered animations
- **GitHub Pages** — Static hosting

## Getting Started

```bash
npm install
npm run dev
```

## Build & Deploy

```bash
npm run build      # outputs to dist/
npm run deploy     # builds and deploys to GitHub Pages
```

## Project Structure

```
src/
  components/       # React components (Hero, Navbar, PortfolioGrid, etc.)
  data/             # Portfolio project data
  App.jsx           # Root component
  main.jsx          # Entry point
  index.scss        # Tailwind directives + custom styles
public/
  images/           # Portfolio screenshots and icons
  assets/
    portfolio-host/ # Hosted project demos
    resume/         # Resume PDF
  CNAME             # Custom domain config
```

## Custom Domain

Temp deployed to [portfolio.timstone.co](https://portfolio.timstone.co) via GitHub Pages with a CNAME record. Will update to the root domain at project completion. 
