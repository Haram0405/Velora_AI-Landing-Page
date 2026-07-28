# Velora AI — Landing Page

Premium AI SaaS landing page for **Velora AI** — *Think Faster. Create Smarter.*

Built with React 19, Vite, Tailwind CSS, Framer Motion, Lucide React, React Icons, and React CountUp.

## Getting Started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
  components/   Navbar, Hero, Trusted, Features, ChatPreview, HowItWorks,
                WhyChoose, Stats, Testimonials, Pricing, FAQ, CTA, Footer
  pages/
    Home.jsx     Assembles all sections
  data/          Content/config for nav, features, pricing, FAQ, etc.
  App.jsx
  main.jsx
  index.css      Tailwind directives + design tokens
```

## Design System

- Background `#F8F3EB` · White `#FFFFFF` · Section grey `#F4F4F4`
- Primary text `#1F1F1F` · Secondary text `#6D6D6D`
- Button `#C0392B` (hover `#A93226`) · Border `#E6DED5` · Accent `#C9B08A`
- Headings: Playfair Display · Body: Poppins
- No gradients, no dark theme, no background images — clean, elegant, premium.

## Note on this build

This project was written directly as source files (not scaffolded via
`npm create vite`) because the authoring environment had no network access
to fetch npm packages. All files are hand-written and reviewed for syntax
correctness, but `npm install` / `npm run dev` / `npm run build` have **not**
been executed in that environment. Please run the commands above locally —
if anything surfaces (e.g. a minor version mismatch in a dependency), it
should be a quick fix. All component logic, Tailwind classes, and imports
were double-checked for consistency.
