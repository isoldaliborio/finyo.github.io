# Finyo Website - Development Plan

## Overview

Professional website for **Finyo**, a financial services brand represented by **Isolda Liborio**, offering:

- **Financial Education Coaching** (UK market)
- **Financial Planning** (Brazil market)

Deployed on **GitHub Pages** as a static site.

---

## Design Direction

**Style:** Minimalist, elegant, modern layout — clean typography, generous whitespace, subtle animations.

**Colour Palette:**

| Colour    | Hex       | Usage                                        |
| --------- | --------- | -------------------------------------------- |
| Navy      | `#30404f` | Primary text, headers, dark backgrounds      |
| Green     | `#b0bfa2` | Primary brand accent, buttons, section fills |
| Pastel    | `#6b857a` | Secondary accent, subtle UI elements         |
| Dark green| `#51573a` | Hover states, secondary text                 |
| Orange    | `#f48048` | Sparingly — CTAs, small highlights only      |

**Typography:** Clean sans-serif (e.g. Inter or similar Google Font).

**Inspiration references:** Sites like Wealthsimple, Betterment, N26 — financial services sites with strong visual identity and minimal clutter.

---

## Pages & Content Structure

### 1. Home Page (`/`)

Single-page layout with the following sections scrolling vertically:

#### Hero Section
- Tagline / value proposition (placeholder text)
- Brief intro to Finyo and Isolda Liborio
- CTA button linking to contact/booking section
- Background: navy or soft green gradient

#### Services Section
Two cards or columns:

| Service                        | Market |
| ------------------------------ | ------ |
| Financial Education Coaching   | UK     |
| Financial Planning             | Brazil |

Each card includes:
- Icon or illustration placeholder
- Short description (placeholder text)
- Link/CTA to contact section

#### About / Bio (integrated in hero or services)
- No separate "About" page — Isolda's credentials and story woven into the hero or services narrative
- Professional photo placeholder

### 2. Contact & Booking Page (`/contact`)

Single page combining:

#### Contact Info
- Email address (placeholder: `contact@finyo.co.uk`)
- Optional: social media links

#### Book an Appointment
- Embedded Calendly widget (placeholder/mock until real Calendly URL is provided)
- Brief instructions for booking

---

## Tech Stack

| Layer         | Technology                          |
| ------------- | ----------------------------------- |
| Framework     | React 18+ with Vite                 |
| Styling       | SCSS Modules (`.module.scss` files) |
| Routing       | React Router (client-side)          |
| Build         | Vite static build (`vite build`)    |
| Deployment    | GitHub Pages (static HTML export)   |
| Font loading  | Google Fonts (Inter)                |

---

## Project Structure

```
finyo.github.io/
├── docs/                    # Local dev documentation
│   └── DEVELOPMENT.md       # Build, run, deploy instructions
├── public/
│   ├── favicon.ico
│   └── assets/              # Static images, logos
├── src/
│   ├── assets/              # Imported images/SVGs
│   ├── components/
│   │   ├── Navbar/
│   │   │   ├── Navbar.tsx
│   │   │   └── Navbar.module.scss
│   │   ├── Hero/
│   │   │   ├── Hero.tsx
│   │   │   └── Hero.module.scss
│   │   ├── Services/
│   │   │   ├── Services.tsx
│   │   │   └── Services.module.scss
│   │   ├── Contact/
│   │   │   ├── Contact.tsx
│   │   │   └── Contact.module.scss
│   │   ├── Footer/
│   │   │   ├── Footer.tsx
│   │   │   └── Footer.module.scss
│   │   └── Button/
│   │       ├── Button.tsx
│   │       └── Button.module.scss
│   ├── pages/
│   │   ├── Home/
│   │   │   ├── Home.tsx
│   │   │   └── Home.module.scss
│   │   └── ContactPage/
│   │       ├── ContactPage.tsx
│   │       └── ContactPage.module.scss
│   ├── styles/
│   │   ├── _variables.scss   # Colour palette, spacing, fonts
│   │   ├── _mixins.scss      # Responsive breakpoints, utilities
│   │   └── global.scss       # Reset, base typography
│   ├── App.tsx
│   ├── App.module.scss
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── PLAN.md                   # This file
└── README.md
```

---

## Implementation Phases

### Phase 1: Project Scaffolding
- [ ] Initialise Vite + React + TypeScript project
- [ ] Configure SCSS modules support
- [ ] Set up project folder structure
- [ ] Configure Vite for static HTML export (GitHub Pages compatible)
- [ ] Create `docs/DEVELOPMENT.md` with local dev instructions
- [ ] Define SCSS variables (colours, typography, spacing)
- [ ] Set up global styles and CSS reset

### Phase 2: Layout & Navigation
- [ ] Build Navbar component (logo + nav links)
- [ ] Build Footer component
- [ ] Set up React Router with Home and Contact routes
- [ ] Implement responsive mobile menu

### Phase 3: Home Page
- [ ] Build Hero section with tagline and CTA
- [ ] Build Services section with two service cards
- [ ] Add placeholder text and images
- [ ] Responsive layout (mobile-first)

### Phase 4: Contact & Booking Page
- [ ] Build Contact section (email, social links)
- [ ] Add Calendly embed placeholder
- [ ] Responsive layout

### Phase 5: Polish & Deploy
- [ ] Add subtle transitions/animations
- [ ] Cross-browser testing
- [ ] Lighthouse performance check
- [ ] Configure GitHub Pages deployment (GitHub Actions or manual)
- [ ] Set up 404.html for SPA routing on GitHub Pages

---

## GitHub Pages Deployment Notes

- Vite builds to `dist/` — configure GitHub Pages to serve from this folder (or use a GitHub Action to deploy)
- For SPA routing, a `404.html` redirect trick is needed (copy `index.html` to `404.html` in the build step)
- Base path in `vite.config.ts` should be set to `/` (since this is a `*.github.io` repo, it serves from root)

---

## Decisions (Resolved)

1. **Logo** — `Finyo_retangular.png` (transparent PNG, rectangular). Tagline: "The Financial Yogi"
2. **Calendly URL** — Placeholder for now
3. **Domain** — `finyo.co.uk` (custom domain)
4. **Language** — English only
5. **Photos** — `profile-pic.png` provided (Isolda's headshot)
