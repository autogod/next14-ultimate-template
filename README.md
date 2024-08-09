# Next14 Ultimate Template

🚀 **Ultimate Starter Kit Template** for Next.js 14 projects, featuring TypeScript, Recoil, Supabase, TailwindCSS, Shadcn UI, and Prisma. This template is optimized for rapid development, with a focus on scalability and best practices for modern web applications.

!https://img.shields.io/badge/License-MIT-blue.svg

---

## 🛠️ Stack Overview

- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Framework**: Next.js 14 (Full Stack)
- **Database**: PostgreSQL & Supabase
- **ORM**: Prisma
- **State Management**: Recoil
- **Authentication**: Supabase
- **UI Components**: Shadcn
- **Deployment**: Vercel

---

## 📦 What’s Inside?

This template provides a comprehensive setup, including:

- **TailwindCSS**: Pre-configured for utility-first styling.
- **Recoil**: State management ready to go.
- **Shadcn UI**: Initial setup with additional UI components (e.g., Sidenav Bar).
- **Next.js App Router Structure**: Ideal for SaaS applications with features like:
  - My Page (Profile, Referral, Subscription)
  - Legal Pages (Terms of Service, Privacy Policy) with markdown structure and basic templates.
- **Supabase-Prisma Integration**:
  - Supabase Auth with server-side configuration.
  - Basic authentication UI and actions.
  - Email authentication and OAuth (currently Google).
  - Additional UI for displaying previous login methods.

---

## 🎯 Roadmap

Planned features and improvements:

- Onboarding page setup
- Jest for test code
- Domain-Driven Design (DDD) based folder structure (available via fork)
- Prisma migration setup
- Toss Payment integration
- Stripe integration
- Supabase storage setup with easy-to-use components
- Vercel AI integration

---

## 🚀 Quick Start Guide

Get started with these steps:

1. **Clone the repository**: `git clone <repo-url>`
2. **Install dependencies**: `npm install`
3. **Rename the project**: Customize your project name.
4. **Configure Supabase**:
   - Sign up for Supabase and set the URL.
   - Run `npx prisma` for initial setup.
5. **Download Shadcn Components**: `npm run shadcn` (optional).
6. **Configure Supabase Email Auth**:
   - Set the site URL and redirection URL.
   - Configure SMTP (Resend).
   - Set email OTP expiry to 3600 seconds.
   - Customize the email template.
7. **Configure Google OAuth**:
   - Set up the Google Consent Screen.
   - Configure the API and redirection URLs.
8. **Set Legal Pages**: Configure your privacy policy and terms of service.
9. **Deploy to Vercel**:
   - Set up Vercel-Supabase integration for automatic environment variable management.
   - Manually configure Supabase-Prisma environment variables as needed.

---

## 📚 Detailed Setup Guide

### 1. Initialize Next.js Project

Follow the [Next.js Installation Guide](https://nextjs.org/docs/getting-started/installation) to set up your project.

!https://prod-files-secure.s3.us-west-2.amazonaws.com/a3f096cf-d407-47e3-a011-0e11641bffb2/12709a10-7949-48b8-8d3d-41174b4e128f/Untitled.png

### 2. GitHub Setup

1. Create a `.gitignore` file.
2. Set up your remote repository.

### 3. Supabase / Prisma Setup

1. Add `schema.prisma` to your project:

   ```
   generator client {
     provider        = "prisma-client-js"
     previewFeatures = ["multiSchema"]
   }

   datasource db {
     provider  = "postgresql"
     url       = env("DATABASE_URL")
     directUrl = env("DIRECT_URL")
     schemas   = ["auth", "public"]
   }

   ```

2. Set up your `.env` file:

   ```bash
   DATABASE_URL="postgresql://[user]:[password]@aws-0-ap-northeast-2.pooler.supabase.com:6543/postgres?pgbouncer=true"
   DIRECT_URL="postgresql://[user]:[password]@aws-0-ap-northeast-2.pooler.supabase.com:5432/postgres"

   ```

3. Generate Prisma client:

   ```bash
   npx prisma db pull
   npx prisma generate

   ```

### 4. Default Next.js Folder Structure

Organize your project with the following structure:

- **src**
  - `components/`
  - `domains/`
  - `hooks/`
  - `recoil/`
  - `types/`
  - `utils/`
- **app**
  - `(auth)/`
  - `(my-page)/`
    - `privacy/`
    - `profile/`
    - `referral/`
    - `subscription/`
    - `terms/`

### 5. Shadcn UI Setup

Follow the [Shadcn Installation Guide](https://ui.shadcn.com/docs/installation/next) for configuration:

1. Initialize:

   ```bash
   npx shadcn-ui@latest init

   ```

2. Customize download paths and utils if needed.
3. Run the installation script:

   ```bash
   npm run shadcn

   ```

### 6. Recoil Setup

Set up Recoil with a provider layout:

- **components/common/Providers.tsx**:
  ```tsx
  "use client";
  import { RecoilRoot } from "recoil";

  export function Providers({ children }: { children: React.ReactNode }) {
    return <RecoilRoot>{children}</RecoilRoot>;
  }
  ```
- Add `Providers` to your root layout.

### 7. Supabase Auth Setup

1. Install dependencies:

   ```bash
   npm install @supabase/supabase-js @supabase/ssr

   ```

2. Configure Supabase clients for browser and server-side:
   - **browser.ts**: Browser client
   - **server.ts**: Server-side client
   - **middleware.ts**: Middleware for handling requests

### 8. Supabase Auth Email Setup

1. Configure redirection URLs in Supabase.
2. Optionally set up an external SMTP service with Resend.
3. Customize email templates.

### 9. Supabase Auth Google Login Setup

1. Configure Google OAuth and consent screen.
2. Add necessary client IDs and secret keys in Supabase.

### 10. Display Previous Login Methods UI

Utilize browser cookies to show users their previous login methods.

### 11. My Page Basic Setup

Set up essential routes like:

- Privacy
- Terms
- Profile
- Subscription
- Referral

### 12. Custom Sidebar Navigation

Customize your project with a sidebar navigation setup.
