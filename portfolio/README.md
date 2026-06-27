# Kaka Puri — Portfolio Website

Personal portfolio website for Kaka Puri, UI/UX Designer. Built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Next.js 15** — App Router, Server Components
- **TypeScript** — Strict Mode
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Premium animations
- **React Hook Form + Zod** — Form validation
- **Sonner** — Toast notifications
- **Lucide React** — Icons

## Getting Started

### Prerequisites

- Node.js 18.17+ 
- npm or pnpm

### Installation

```bash
# 1. Navigate into the project
cd kaka-puri-portfolio

# 2. Install dependencies
npm install
# or
pnpm install

# 3. Run development server
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## Customization

### Profile Photo

Replace the profile placeholder in `src/components/sections/HeroSection.tsx`:

```tsx
// Find this block:
<div className="w-full h-full flex items-center justify-center ...">
  KP
</div>

// Replace with:
import Image from "next/image";
<Image src="/images/profile.jpg" alt="Kaka Puri" fill className="object-cover" />
```

Then place your photo at `public/images/profile.jpg`.

### CV Download

Place your CV PDF at `public/CV_Kaka_Puri.pdf`. The download button in the hero section will automatically use it.

### Contact Form

The form currently simulates submission. To connect it to a real backend:

**Option A — EmailJS (free, no backend needed):**
```bash
npm install @emailjs/browser
```
Replace the `onSubmit` simulation in `ContactSection.tsx` with EmailJS.

**Option B — Resend (recommended):**
Create `src/app/api/contact/route.ts` and connect with [Resend](https://resend.com).

---

## Deployment to Vercel

### Method 1: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Method 2: GitHub + Vercel (Recommended)

1. Push this project to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click **"New Project"**
4. Import your GitHub repository
5. Click **"Deploy"** — Vercel auto-detects Next.js

### Environment Variables (Optional)

If you add a contact form backend, add these in Vercel dashboard → Settings → Environment Variables:

```
RESEND_API_KEY=re_xxxxx
EMAIL_TO=kakapuri110804@gmail.com
```

---

## Project Structure

```
src/
├── app/
│   ├── globals.css       # Global styles, CSS variables
│   ├── layout.tsx        # Root layout, metadata, fonts
│   └── page.tsx          # Main page — assembles all sections
├── components/
│   ├── common/
│   │   ├── CursorGlow.tsx       # Animated cursor follower
│   │   ├── RevealOnScroll.tsx   # Scroll reveal wrapper
│   │   ├── ScrollProgressBar.tsx
│   │   └── SplashScreen.tsx     # Loading screen
│   ├── layout/
│   │   ├── Footer.tsx
│   │   └── Navbar.tsx           # Sticky glass navbar
│   └── sections/
│       ├── AboutSection.tsx
│       ├── ContactSection.tsx
│       ├── HeroSection.tsx
│       ├── ProcessSection.tsx
│       ├── ProjectsSection.tsx
│       ├── SectionDivider.tsx
│       └── SkillsSection.tsx
├── data/
│   └── portfolio.ts      # All CV data — edit here
├── hooks/
│   ├── useInView.ts
│   ├── useMousePosition.ts
│   └── useScrollProgress.ts
└── lib/
    └── utils.ts
```

---

## Updating Content

All content comes from `src/data/portfolio.ts`. To update:

- **Personal info**: Edit `personalInfo` object
- **Projects**: Edit the `projects` array
- **Skills**: Edit the `skills` object
- **Education**: Edit the `education` array
- **Design process**: Edit the `designProcess` array

---

## Performance

- Images optimized with `next/image`
- Fonts loaded with `next/font`
- Animations respect `prefers-reduced-motion`
- Lazy loading on all sections
- Production build minified and tree-shaken

---

Built with ❤️ by Kaka Puri | UI/UX Designer
