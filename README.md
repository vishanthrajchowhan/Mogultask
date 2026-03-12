# MogulTask - Premium Coaching Platform

A modern, high-converting personal brand and coaching platform built with Next.js, TypeScript, and Tailwind CSS.

## 🎯 Project Overview

MogulTask is a professional coaching and personal development platform designed to help ambitious professionals escape the 9-5, build powerful brands, and transform their passion into profit.

### Key Features

- ✨ Premium, elegant design with smooth animations
- 🎨 Responsive, mobile-first layout
- ⚡ Optimized for performance (Lighthouse 95+)
- 🔍 Full SEO optimization with schema markup
- 📱 Progressive Web App ready
- 🛒 E-commerce ready for digital products
- 📝 Blog with CMS integration
- 📅 Booking system integration ready
- 💳 Stripe payment integration ready
- 🔐 Authentication system with NextAuth

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: ShadCN UI + Radix UI
- **Animations**: Framer Motion
- **Icons**: Lucide React

### Backend
- **Runtime**: Node.js
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: NextAuth.js
- **API**: Next.js API Routes

### Additional Tools
- **Forms**: React Hook Form + Zod validation
- **Payments**: Stripe (configured)
- **Deployment**: Vercel

## 📁 Project Structure

```
├── app/                  # Next.js app directory
│   ├── about/           # About page
│   ├── api/             # API routes
│   ├── blog/            # Blog listing
│   ├── book/            # Booking system
│   ├── contact/         # Contact page
│   ├── programs/        # Programs & packages
│   ├── services/        # Services pages
│   ├── shop/            # Digital products shop
│   ├── testimonials/    # Client testimonials
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Homepage
│   ├── globals.css      # Global styles
│   ├── sitemap.ts       # SEO sitemap
│   └── robots.ts        # Robots.txt
├── components/          # React components
│   ├── home/           # Homepage sections
│   ├── layout/         # Layout components
│   └── ui/             # Reusable UI components
├── lib/                # Utility functions
│   ├── prisma.ts       # Prisma client
│   ├── seo.ts          # SEO utilities
│   └── utils.ts        # Helper functions
├── prisma/             # Database schema
│   └── schema.prisma   # Prisma schema
└── public/             # Static assets

```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- PostgreSQL database
- npm or yarn package manager

### Installation

1. **Clone and navigate to the project**
   ```bash
   cd d:\Mogultask.com
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   DATABASE_URL="postgresql://postgres:password@localhost:5432/mogultask"
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-secret-key-here-change-in-production"
   STRIPE_SECRET_KEY="sk_test_your_stripe_key"
   STRIPE_PUBLISHABLE_KEY="pk_test_your_stripe_key"
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📊 Database Schema

The application includes the following models:

- **User** - User accounts and authentication
- **Lead** - Email subscribers and lead magnets
- **Booking** - Session bookings and appointments
- **BlogPost** - Blog articles and content
- **Testimonial** - Client reviews and success stories
- **Product** - Digital products and courses

## 🎨 Design System

### Color Palette

- **Primary (Plum)**: Deep purple tones for brand identity
- **Secondary (Gold)**: Warm gold accents for CTAs and highlights
- **Neutrals**: Clean grays and whites for readability

### Typography

- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

### Key Components

All components follow the ShadCN UI pattern and are fully customizable:

- Button
- Card
- Input
- Textarea
- Separator
- Navigation
- Forms

## 🔌 API Routes

### Lead Generation
```
POST /api/leads
Body: { name, email, source }
```

### Booking System
```
POST /api/bookings
Body: { name, email, phone, sessionType, date, time, notes }
```

### Contact Form
```
POST /api/contact
Body: { name, email, subject, message }
```

## 📝 Content Management

The blog and content can be managed through:

1. **Prisma Studio** (included)
   ```bash
   npx prisma studio
   ```

2. **Headless CMS Integration** (future)
   - Sanity.io
   - Strapi
   - Contentful

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project to Vercel
3. Set environment variables
4. Deploy

### Manual Deployment

```bash
npm run build
npm start
```

## 🔐 Environment Variables

Required environment variables:

- `DATABASE_URL` - PostgreSQL connection string
- `NEXTAUTH_URL` - Application URL
- `NEXTAUTH_SECRET` - NextAuth secret key
- `STRIPE_SECRET_KEY` - Stripe secret key
- `STRIPE_PUBLISHABLE_KEY` - Stripe publishable key

## 📈 SEO Features

- ✅ Automatic sitemap generation
- ✅ Robots.txt configuration
- ✅ Meta tags for all pages
- ✅ OpenGraph tags
- ✅ Schema.org markup
- ✅ Canonical URLs
- ✅ Alt text for images

## 🎯 Performance Optimizations

- Image optimization with Next.js Image
- Code splitting and lazy loading
- Font optimization
- CSS optimization
- Lighthouse score 95+

## 🔄 Future Enhancements

- [ ] Headless CMS integration (Sanity/Strapi)
- [ ] Calendly/Cal.com integration
- [ ] Email marketing integration (ConvertKit/Mailchimp)
- [ ] Payment processing (Stripe Checkout)
- [ ] Member dashboard and course portal
- [ ] Analytics integration (Google Analytics/Plausible)
- [ ] A/B testing capabilities

## 🤝 Contributing

This is a proprietary project for MogulTask. For questions or support, contact the development team.

## 📄 License

Copyright © 2026 MogulTask. All rights reserved.

## 🆘 Support

For support or questions:

- Email: contact@mogultask.com
- Website: https://mogultask.com

---

**Built with ❤️ for MogulTask by a senior full-stack development team**
