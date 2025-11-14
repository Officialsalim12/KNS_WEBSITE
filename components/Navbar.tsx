'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [logoError, setLogoError] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Services', href: '/services' },
    { name: 'Partner Services', href: '/partner-services' },
    { name: 'Training', href: '/training' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md'
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-24 md:h-28">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            {logoError ? (
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-mauve to-mauve-dark bg-clip-text text-transparent">
                KNS
              </div>
            ) : (
              <div className="relative h-20 w-40 md:h-24 md:w-48 flex-shrink-0">
                <Image
                  src="/IMG_2498-removebg-preview.png"
                  alt="KNS Logo"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 768px) 160px, 192px"
                  onError={() => setLogoError(true)}
                />
              </div>
            )}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative group px-4 py-2.5 text-charcoal font-semibold hover:text-mauve transition-all duration-300 text-sm lg:text-base rounded-lg hover:bg-mauve-light/10"
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute bottom-1.5 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-mauve group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
              </Link>
            ))}
            <Link
              href="/auth"
              className="ml-2 px-5 py-2.5 bg-gradient-to-r from-mauve to-mauve-dark text-white rounded-lg hover:from-mauve-dark hover:to-mauve transition-all duration-300 font-semibold text-sm lg:text-base whitespace-nowrap shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Sign Up / Login
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-charcoal hover:text-mauve transition-colors p-2 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200 shadow-lg"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-5 py-3.5 text-charcoal hover:text-mauve hover:bg-mauve-light/20 rounded-lg transition-all duration-300 font-semibold text-base border-l-4 border-transparent hover:border-mauve"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/auth"
                onClick={() => setIsOpen(false)}
                className="block px-5 py-3.5 bg-gradient-to-r from-mauve to-mauve-dark text-white rounded-lg hover:from-mauve-dark hover:to-mauve transition-all duration-300 text-center font-semibold text-base mt-4 shadow-md"
              >
                Sign Up / Login
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

