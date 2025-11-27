# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 14 landing page for Zenova Tech, a technology consulting company. The site is built with TypeScript, Tailwind CSS, and includes a contact form with email functionality.

## Commands

### Development
- `npm run dev` - Start development server on localhost:3000
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality checks

### Environment Setup
The application requires email environment variables for the contact form:
- `EMAIL_USER` - Gmail account for sending emails
- `EMAIL_PASS` - App password for the Gmail account

## Architecture

### Component Structure
The main landing page (`components/zenova-landing.tsx`) is composed of modular sections:
- `Hero` - Main banner and call-to-action
- `Servicios` - Services offered
- `PorQueNosotros` - Why choose us section  
- `Hermes` - Product showcase
- `Contacto` - Contact form with email integration

### UI Components
Uses shadcn/ui component library with customized styling:
- Components located in `components/ui/`
- Configured via `components.json` with New York style
- Path aliases: `@/` points to project root

### Styling System
- Tailwind CSS with custom color scheme (purple/gray theme)
- CSS variables for theming defined in `app/globals.css`
- Custom font loading using Geist Sans and Geist Mono

### API Routes
- `app/api/send-email/route.ts` - Handles contact form submissions via nodemailer
- Sends emails to hardcoded recipient: `stoviatandil@gmail.com`

### Form Handling
Contact forms use:
- `react-hook-form` for form management
- `zod` for validation schemas
- `framer-motion` for animations

## Key Dependencies

### Core Framework
- Next.js 14 with App Router
- React 18
- TypeScript with strict mode

### Styling & UI
- Tailwind CSS with animate plugin
- Radix UI components (icons, slot)
- Class Variance Authority for component variants
- Framer Motion for animations

### Form & Validation
- React Hook Form + Hookform Resolvers
- Zod for schema validation
- Nodemailer for email sending

## Development Notes

- Site is in Spanish (lang="es" in layout)
- Uses absolute imports with `@/` prefix
- All components are functional components using modern React patterns
- Email functionality requires Gmail app passwords (not regular passwords)