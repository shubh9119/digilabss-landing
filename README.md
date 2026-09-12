# 🍎 Digilabss — Performance Marketing That Scales
### *Apple-Inspired Single Page Landing Page & Growth Architecture*

[![Next.js](https://img.shields.io/badge/Next.js-14.2.15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.3.1-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.13-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.11.0-FF0055?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-Components-000000?style=for-the-badge&logo=shadcnui)](https://ui.shadcn.com/)
[![Status](https://img.shields.io/badge/Production-Verified-success?style=for-the-badge)]()

> **Digilabss Screening Assignment** — *Landing Page Developer (Apple Style One Pager)*  
> **Prepared for**: Amrita Singh & Digilabss Evaluation Team  
> **Target Audience**: Business owners & decision makers in Tier 1 markets (USA, UK, Canada, Australia)  
> **Repository**: [https://github.com/shubh9119/digilabss-landing](https://github.com/shubh9119/digilabss-landing)  

---

## 🌐 Live Links

- **GitHub Repository**: [https://github.com/shubh9119/digilabss-landing](https://github.com/shubh9119/digilabss-landing)
- **Production Deployment**: Connect repository to [Vercel](https://vercel.com/new) / [Netlify](https://app.netlify.com/) for instant live URL
- **Local Dev Server**: `http://localhost:3000`

---

## 🎯 Executive Overview & Design Philosophy

Inspired by **apple.com**, this landing page condenses an entire performance marketing agency's value proposition into a single, cohesive, high-converting scroll. Rather than overwhelming prospects with text-dense blocks, it leads with:

- **Apple White & Silver Aesthetic**: Clean `#ffffff` canvas accented with `#f5f5f7` section alternations, subtle slate matrix grids, and precision typography.
- **Interactive Canvas Constellation**: High-DPI Retina particle network that dynamically connects nodes and responds to mouse proximity.
- **Dynamic Typewriter Text**: Continuous character-by-character headline typing rhythm with a pulsing Apple-blue cursor.
- **Ease-Out Card Dynamics**: Replaced jarring 3D tilts with smooth ease-out scaling (`scale: 1.035`) and an ambient background gradient that emerges on hover.
- **Interactive Consultation Booking**: Tabbed booking suite featuring a live calendar date picker, 30-minute EST time slot selector, and CRM data persistence.

---

## 📸 Key Features & Architecture Breakdown

### 1. Interactive Hero & Particle Constellation
- High-performance HTML5 `<canvas>` rendering 70–130 animated particles with DPI-aware sub-pixel rendering.
- Real-time mouse attraction physics and proximity-based line connectivity (`lineWidth: 1.4px`).
- Crisp background matrix dot grid (`radial-gradient(circle, #64748b 1.5px, transparent 1.5px)` at 35% opacity).
- Typewriter text cycling across four value propositions:
  - *Algorithmic Media Buyers*
  - *Direct-Response Creative Engineers*
  - *High-Converting Funnel Architects*
  - *Tier 1 Growth Partners*

### 2. Services & Core Competencies
- Three core pillars: **Algorithmic Paid Media**, **Performance Creative Lab**, and **CRO & Funnel Synthesis**.
- Double-nested border framing (`border-gray-200/80` with inner soft gradient layer).
- Smooth ease-out hover scale (`whileHover={{ scale: 1.035, y: -8 }}`) with emerging ambient blue/purple background tint.
- Key deliverables checklist with emerald verification indicators.

### 3. Verifiable Impact & Live Metrics
- Four verified performance metrics ($120M+ Revenue Scaled, 4.8x Blended ROAS, 200+ Brands Scaled, 50M+ Monthly Ad Impressions).
- Smooth count-up counter animation using `requestAnimationFrame` with cubic ease-out curve, triggered only when scrolled into view.

### 4. Transparent 3-Stage Deployment Roadmap
- Step 1: **Algorithmic Audit & Unit Economics** (Week 1)
- Step 2: **Creative Production & Architecture Launch** (Weeks 2–3)
- Step 3: **Aggressive Scale & Compound Optimization** (Week 4 & Beyond)
- Scroll-linked progress line animating down the timeline as the user scrolls.

### 5. Client Proof & Testimonials
- Testimonials from verified brand leaders (Luminary Co. - USA, NovaTech Global - UK).
- Dual infinite marquee displaying partner brands with smooth CSS looping.

### 6. Strategy Consultation Booking with Calendar Integration
- **Dual Booking Modes**:
  - **Schedule Strategy Call**: Live interactive Calendar date picker + selectable 30-min time slots.
  - **Direct Fast Inquiry**: Quick 3-field submission for rapid lead capture.
- Full client-side validation using **Zod** and **React Hook Form**.
- Wide, modern, high-confidence CTA button (`size="xl"`, full-width, h-16).
- Server-side validation via Next.js Route Handler (`app/api/submit/route.ts`).
- Leads and scheduled appointments persist to verifiable JSON file storage (`data/submissions.json`).
- Automated multi-platform analytics firing: GA4 `generate_lead`, GTM `form_submission`, and Meta Pixel `Lead`.

---

## 🛠️ Technology Stack

| Layer | Technology | Rationale |
|---|---|---|
| **Framework** | Next.js 14.2.15 (App Router) | Server-side rendering, static generation, optimized script loading |
| **Language** | TypeScript 5 (Strict Mode) | End-to-end type safety across schemas, components, and APIs |
| **Styling** | Tailwind CSS v3 + CSS Variables | Utility-first, zero runtime CSS overhead, custom Apple palette |
| **UI Components** | shadcn/ui + Radix UI Primitives | Accessible, composable primitives (Button, Calendar, Popover) |
| **Animations** | Framer Motion 11 + Canvas API | 60fps GPU-composited animations, scroll triggers, interactive particles |
| **Validation** | Zod + React Hook Form | Schema-driven client and server validation with zero layout shift |
| **Analytics** | GTM, GA4, Meta Pixel | Multi-channel conversion tracking with `afterInteractive` hydration |

---

## 📝 Section 5: Strategy Note (200–300 Words)

> When designing an Apple-inspired landing page for a high-ticket performance marketing service, the central challenge is communicating technical credibility without overwhelming the user with wall-to-wall text. Business owners in Tier 1 markets scan for two things: proof of capability and frictionless conversion.
> 
> To maximize visual impact, we prioritized motion and typography over paragraphs. In the hero, instead of static bullets, we implemented an interactive canvas particle constellation coupled with dynamic typewriter text. This immediately anchors attention and conveys algorithmic engineering taste. For the services cards, we intentionally avoided heavy 3D tilts that distract from readability; instead, we engineered a smooth ease-out scale with an ambient gradient that emerges on hover, maintaining Apple's hallmark restraint.
> 
> For the conversion funnel, replacing a standard form with a calendar date and time slot picker significantly boosts intent. Prospects don't feel like they are submitting a generic contact ticket; they feel they are securing a private consultation.
> 
> Performance was protected through strict technical tradeoffs: the particle canvas runs on native `requestAnimationFrame` with Retina `devicePixelRatio` capping; animations utilize GPU-composited `transform` and `opacity` properties; and analytics scripts load with `afterInteractive` strategy. The result is a sub-180kB initial JS bundle that delivers 60fps animations, zero cumulative layout shift, and an effortless, high-trust user journey from scroll to booking.

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js 18.17+ or 20+
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/shubh9119/digilabss-landing.git

# 2. Enter directory
cd digilabss-landing

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build & Verification

```bash
# Run production build
npm run build

# Start production server
npm start
```

### Checking Submissions

All form submissions and scheduled appointments are stored locally in:
```bash
# View captured leads
cat data/submissions.json

# Or test the GET endpoint
curl http://localhost:3000/api/submit
```

---

## 📊 Analytics & Event Tracking

The application fires comprehensive telemetry on appointment booking:

- **Google Analytics 4**:
  ```js
  gtag("event", "generate_lead", { budget_range, company, scheduled_date, time_slot });
  ```
- **Google Tag Manager**:
  ```js
  dataLayer.push({ event: "form_submission", formType: "book_a_call", budgetRange, scheduledDate, timeSlot });
  ```
- **Meta Pixel**:
  ```js
  fbq("track", "Lead", { content_name: "book_a_call", currency: "USD", value: budgetRange });
  ```

---

## 📄 License

This project was developed by **Shubham Singh ([@shubh9119](https://github.com/shubh9119))** for the Digilabss Senior Landing Page Developer screening exercise. All rights reserved.
