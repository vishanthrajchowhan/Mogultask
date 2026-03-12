# 🚀 MogulTask - Quick Start Guide

## Welcome to Your Premium Coaching Platform!

This guide will help you get the MogulTask website up and running in minutes.

## 📋 Prerequisites Checklist

Before you begin, ensure you have:

- ✅ Node.js 18 or higher installed ([Download](https://nodejs.org/))
- ✅ PostgreSQL database running ([Download](https://www.postgresql.org/download/))
- ✅ A code editor (VS Code recommended)
- ✅ Git installed (optional, for version control)

## 🎯 Quick Start (5 Minutes)

### Step 1: Database Setup

1. Create a PostgreSQL database named `mogultask`:
   ```sql
   CREATE DATABASE mogultask;
   ```

2. Create a `.env` file in the root directory:
   ```bash
   # Copy the example file
   cp .env.example .env
   ```

3. Update the `.env` file with your database credentials:
   ```env
   DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@localhost:5432/mogultask"
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="generate-a-random-secret-key-here"
   ```

### Step 2: Install Dependencies

The dependencies are already installed! If you need to reinstall:

```bash
npm install
```

### Step 3: Initialize Database

Run Prisma migrations to set up your database schema:

```bash
npx prisma generate
npx prisma db push
```

### Step 4: Start Development Server

```bash
npm run dev
```

🎉 **That's it!** Open your browser to [http://localhost:3000](http://localhost:3000)

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Build production-ready application |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint to check code quality |
| `npx prisma studio` | Open Prisma Studio to manage database |

## 📊 Database Management

### View and Edit Data

Open Prisma Studio (a visual database editor):

```bash
npx prisma studio
```

This will open at [http://localhost:5555](http://localhost:5555)

### Add Sample Data

You can add:
- **Testimonials** - Client success stories
- **Blog Posts** - Content for the blog
- **Products** - Digital products for the shop
- **Leads** - Email subscribers

## 🎨 Customization Guide

### Update Brand Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  plum: { /* Your primary colors */ },
  gold: { /* Your accent colors */ },
}
```

### Update Content

1. **Homepage Hero**: Edit `components/home/Hero.tsx`
2. **About Page**: Edit `app/about/page.tsx`
3. **Services**: Edit `components/home/Services.tsx`
4. **Footer Links**: Edit `components/layout/Footer.tsx`

### Add Your Images

Place images in the `public/images/` folder and update:
- Hero image
- Founder photo
- Service images
- Blog post covers

## 🔌 Integration Setup

### Stripe Payment Integration

1. Create a [Stripe account](https://stripe.com)
2. Get your API keys from the Stripe Dashboard
3. Update `.env`:
   ```env
   STRIPE_SECRET_KEY="sk_test_..."
   STRIPE_PUBLISHABLE_KEY="pk_test_..."
   ```

### Email Service (Optional)

For contact forms and lead magnets, integrate:
- **SendGrid** - Transactional emails
- **Mailchimp** - Email marketing
- **ConvertKit** - Creator-focused email

Update the API routes in `app/api/` to send emails.

### Booking System

Integrate with:
- **Calendly** - Add your Calendly embed code
- **Cal.com** - Self-hosted alternative
- **Acuity Scheduling** - More advanced features

Replace the booking form in `app/book/page.tsx` with your chosen provider's embed.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables
5. Deploy!

Vercel automatically:
- Builds your app
- Deploys globally
- Provides SSL certificate
- Sets up CI/CD

### Environment Variables for Production

Don't forget to set these in Vercel:

```
DATABASE_URL
NEXTAUTH_URL (your production domain)
NEXTAUTH_SECRET
STRIPE_SECRET_KEY
STRIPE_PUBLISHABLE_KEY
```

## 📱 Testing Checklist

Before going live, test:

- [ ] All pages load correctly
- [ ] Forms submit successfully
- [ ] Mobile responsiveness
- [ ] Contact form works
- [ ] Booking form works
- [ ] Email signup works
- [ ] Navigation links work
- [ ] Images load properly
- [ ] SEO meta tags display
- [ ] Performance (run Lighthouse)

## 🐛 Troubleshooting

### "Cannot connect to database"

- Check PostgreSQL is running
- Verify DATABASE_URL in `.env`
- Ensure database `mogultask` exists

### "Module not found" errors

```bash
rm -rf node_modules package-lock.json
npm install
```

### Port 3000 already in use

```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3000 | xargs kill -9
```

### Build errors

```bash
npm run build
```

Check the error messages and ensure all environment variables are set.

## 📚 Learn More

- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **Tailwind CSS**: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **Prisma Guide**: [prisma.io/docs](https://prisma.io/docs)
- **Framer Motion**: [framer.com/motion](https://www.framer.com/motion/)

## 🆘 Getting Help

If you encounter issues:

1. Check the [README.md](README.md) for detailed information
2. Review error messages carefully
3. Check the browser console for frontend errors
4. Check terminal for backend errors

## 🎉 Next Steps

1. ✅ Add your brand images
2. ✅ Customize colors and fonts
3. ✅ Add real content
4. ✅ Set up integrations (Stripe, Calendly, etc.)
5. ✅ Add your social media links
6. ✅ Test everything thoroughly
7. ✅ Deploy to production
8. ✅ Set up analytics
9. ✅ Launch and celebrate! 🚀

---

**Built with ❤️ for MogulTask**

Ready to transform lives and build your empire? Let's go! 💪
