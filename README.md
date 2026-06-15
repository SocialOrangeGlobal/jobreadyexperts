# Job Ready Experts — JRP Employer Placement Website

> **Australia's JRP Employer Placement Specialists** — connecting trade graduates with verified, TRA-compliant employers across 16 occupations and 5 states.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Lucide Icons](https://img.shields.io/badge/Lucide-Icons-orange)](https://lucide.dev/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)](https://vercel.com/)

---

## 📋 Overview

A fully responsive, production-ready marketing website for **Job Ready Experts**, built with **Next.js 16 App Router** and vanilla CSS. The site helps international trade graduates find TRA-compliant JRP (Job Ready Program) employers in Australia.

### Key Features
- ⚡ **Static site generation** — all pages pre-rendered at build time
- 📱 **Fully responsive** — optimized for Desktop, Tablet & Mobile
- 🎨 **Premium UI** — dark navy + gold design system, glassmorphism, micro-animations
- 🎠 **Tabbed carousel** — auto-scrolling Occupations section with 16 trades
- 🔍 **SEO ready** — metadata, semantic HTML, descriptive titles per page
- 📄 **Legal pages** — Privacy Policy & Terms and Conditions
- 🍔 **Mobile nav drawer** — animated slide-down menu

---

## 🗂️ Project Structure

```
app/
├── components/
│   ├── Navbar.tsx          # Sticky nav with mobile drawer
│   ├── Topbar.tsx          # Gold shimmer announcement bar
│   ├── Hero.tsx            # Full-screen hero with Ken Burns zoom
│   ├── Stats.tsx           # Key metrics bar
│   ├── PainPoints.tsx      # Problem/pain section
│   ├── HowItWorks.tsx      # 3-step process
│   ├── Occupations.tsx     # Tabbed auto-scrolling carousel
│   ├── WhyUs.tsx           # Benefits with image
│   ├── PhotoGallery.tsx    # Bento-grid photo gallery
│   ├── Testimonials.tsx    # Review cards
│   ├── FAQ.tsx             # Accordion FAQ
│   ├── EnquiryForm.tsx     # Lead capture form
│   ├── BottomCTA.tsx       # Final call-to-action
│   ├── Footer.tsx          # 3-column footer
│   └── LegalLayout.tsx     # Shared layout for legal pages
├── privacy-policy/
│   └── page.tsx            # Privacy Policy page
├── terms-and-conditions/
│   └── page.tsx            # Terms & Conditions page
├── globals.css             # Global design system + responsive breakpoints
├── layout.tsx              # Root layout with Inter font
└── page.tsx                # Homepage (assembles all sections)
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Install & Run Locally

```bash
# Clone the repository
git clone https://github.com/SocialOrangeGlobal/jobreadyexperts.git
cd jobreadyexperts

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 🌐 Deployment (Vercel)

This project is optimized for **Vercel** deployment.

### Deploy via Vercel Dashboard
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **Add New Project**
3. Import from GitHub: `SocialOrangeGlobal/jobreadyexperts`
4. Framework preset: **Next.js** (auto-detected)
5. Click **Deploy** — no environment variables required for the base build

### Deploy via Vercel CLI

```bash
npm i -g vercel
vercel --prod
```

---

## 🎨 Design System

| Token | Value | Usage |
|---|---|---|
| `--navy` | `#0B1F3A` | Primary dark |
| `--navydark` | `#071428` | Section backgrounds |
| `--gold` | `#F5A623` | Primary accent |
| `--gold2` | `#d98f10` | Gold hover/darker |
| `--white` | `#ffffff` | Light text |
| `--offwhite` | `#F0F4F8` | Light section bg |
| `--mid` | `#4A5568` | Body text |

### Responsive Breakpoints
| Breakpoint | Target |
|---|---|
| `> 1024px` | Desktop |
| `768px – 1024px` | Tablet |
| `< 768px` | Mobile |
| `< 420px` | Small mobile |

---

## 📝 Form Integration

The enquiry form (`EnquiryForm.tsx`) is currently **UI-only**. To activate submissions, connect it to one of:
- **Next.js API Route** → `/app/api/enquire/route.ts`
- **Resend / SendGrid** for email
- **Google Sheets** via Apps Script webhook
- **HubSpot / CRM** form endpoint

---

## ⚖️ Legal

- [Privacy Policy](/privacy-policy) — Australian Privacy Act 1988 compliant
- [Terms & Conditions](/terms-and-conditions) — Governed by NSW law

---

## 📞 Contact

**Job Ready Experts**  
Email: info@jobreadyexperts.com.au  
WhatsApp: +61 4XX XXX XXX  

---

*Job Ready Experts is not a registered migration agent and does not provide visa or legal advice. For migration advice, please consult a registered MARA agent.*
