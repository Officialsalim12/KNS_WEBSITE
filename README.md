# KNS Web - Knowledge Network Systems Website

A professional and responsive website for **KNS (Knowledge Network Systems)** built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**.

## 🚀 Features

- **Hero Section** with 5-image sliding animation (left to right, continuous loop)
- **Responsive Design** - Mobile-first approach
- **Modern UI** - White and mauve color scheme
- **Smooth Animations** - Framer Motion integration
- **SEO Optimized** - Meta tags and structured data ready
- **Multiple Sections**: About, Services, Training, Partners, Testimonials, Contact
- **Authentication Pages** - Sign up and Login

## 🛠️ Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (Animations)
- **Lucide React** (Icons)

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Color Scheme

- **Primary Mauve**: `#E0B0FF`
- **Secondary**: White `#FFFFFF`
- **Accent**: Charcoal Gray `#333333`

## 📁 Project Structure

```
/
├── app/
│   ├── page.tsx          # Home page
│   ├── about/            # About page
│   ├── services/         # Services page
│   ├── training/         # Training page
│   ├── testimonials/     # Testimonials page
│   ├── contact/          # Contact page
│   └── auth/             # Authentication page
├── components/
│   ├── Navbar.tsx        # Navigation bar
│   ├── Hero.tsx          # Hero section with image slider
│   ├── About.tsx         # About section
│   ├── Services.tsx      # Services section
│   ├── Training.tsx      # Training section
│   ├── Partners.tsx      # Partners section
│   ├── Testimonials.tsx  # Testimonials carousel
│   ├── Contact.tsx       # Contact form
│   └── Footer.tsx        # Footer component
└── styles/
    └── globals.css       # Global styles
```

## 🖼️ Hero Section Animation

The hero section features a **5-image sliding animation** that continuously loops from left to right:
- Duration: 20 seconds per cycle
- Direction: Left to right
- Loop: Infinite
- Images: Tech meeting, Data center, Cybersecurity, Cloud computing, IT training

## 🚀 Deployment

Deploy easily on Vercel:

1. Push your code to GitHub
2. Import your repository on Vercel
3. Deploy!

Or use the Vercel CLI:
```bash
npm i -g vercel
vercel
```

## 📝 Notes

- Images are currently using Unsplash placeholders. Replace with actual company images when available.
- Partner logos are placeholders. Update with actual partner logos.
- Contact form submission needs backend integration.
- Authentication pages are UI-only. Backend integration required for full functionality.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential.

---

Built with ❤️ for Knowledge Network Systems

