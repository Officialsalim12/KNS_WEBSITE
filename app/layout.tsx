import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'KNS - Knowledge Network Systems | Empowering a Smarter Digital Future',
  description: 'Building Resilient IT Professionals and Future-Ready Enterprises. IT Consultancy, Cybersecurity, Training, and Enterprise Solutions.',
  keywords: 'IT Consultancy, Cybersecurity, IT Training, Software Solutions, Enterprise & Cloud Solution, Call Center/Customer Services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

