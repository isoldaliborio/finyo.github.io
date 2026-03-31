# Finyo Website - Development Guide

## Prerequisites

- Node.js 18+ (recommended: 20.x)
- npm 9+

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The dev server will start at `http://localhost:5173`.

## Available Scripts

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start Vite dev server with hot reload    |
| `npm run build`   | Type-check and build for production      |
| `npm run preview` | Preview the production build locally     |

## Project Structure

```
src/
├── assets/          # Images, logos (imported in code)
├── components/      # Reusable UI components
│   ├── Button/
│   ├── Contact/
│   ├── Footer/
│   ├── Hero/
│   ├── Navbar/
│   └── Services/
├── pages/           # Route-level page components
│   ├── Home/
│   └── ContactPage/
├── styles/          # Global SCSS (variables, mixins, reset)
├── App.tsx          # Root component with routing
└── main.tsx         # Entry point
```

## Styling

- **SCSS Modules** — each component has a co-located `.module.scss` file
- **Global variables and mixins** are auto-injected via `vite.config.ts` (`additionalData`)
- Colour palette and spacing tokens live in `src/styles/_variables.scss`
- Responsive mixins (`@include mobile`, `@include tablet`, `@include desktop`) in `src/styles/_mixins.scss`

## Building for Production

```bash
npm run build
```

Output goes to `dist/`. This is a static build suitable for GitHub Pages.

## Deployment (GitHub Pages)

The site is deployed to GitHub Pages from the `dist/` folder. You can use a GitHub Action or deploy manually:

```bash
npm run build
# then push dist/ contents to the gh-pages branch or configure Pages to serve from dist/
```

A `404.html` is copied from `index.html` during build to support client-side routing.
