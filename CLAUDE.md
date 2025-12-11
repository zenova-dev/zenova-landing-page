# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 landing page for Zenova Tech, a technology consulting company. The site is built with TypeScript, Tailwind CSS, and includes a contact form with email functionality.

## Commands

- `npm run dev` - Start development server on localhost:3000
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality checks

## Environment Setup

The application requires email environment variables for the contact form:
- `EMAIL_USER` - Gmail account for sending emails
- `EMAIL_PASS` - App password for the Gmail account (not regular password)

## Architecture

### Page Composition
The main landing page (`components/zenova-landing.tsx`) orchestrates modular sections with performance optimizations:
- Hero section loads immediately
- Below-the-fold sections (Stats, Servicios, Portfolio, ProcessCta, Testimonials, Contacto) use `next/dynamic` with skeleton loading states

### Component Organization
```
components/
├── sections/          # Page sections (Hero, Servicios, Portfolio, etc.)
├── ui/                # Reusable UI components (shadcn/ui based)
├── zenova-landing.tsx # Main page composition
└── nav-bar.tsx        # Navigation component
```

### Styling System
- Tailwind CSS with custom dark theme colors defined as CSS variables in `app/globals.css`
- Key custom colors: `dark-bg`, `dark-card`, `dark-border`, `neon-green`
- shadcn/ui components configured via `components.json` with New York style
- Path aliases: `@/` points to project root

### API Routes
- `app/api/send-email/route.ts` - Contact form submissions via nodemailer (sends to `stoviatandil@gmail.com`)

### Form Handling
Contact forms use `react-hook-form` + `zod` validation + `framer-motion` animations.

## Development Notes

- Site is in Spanish (lang="es" in layout)
- Uses Vercel Analytics (`@vercel/analytics`)
- SEO files: `app/sitemap.ts` and `app/robots.ts`
