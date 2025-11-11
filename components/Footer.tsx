'use client'

import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Services', href: '/services' },
    { name: 'Training', href: '/training' },
    { name: 'Partner Services', href: '/partner-services' },
    { name: 'Contact', href: '/contact' },
  ]

  const tags = [
    'Cisco',
    'Microsoft',
    'CIW',
    'Fortinet',
    'VMWare',
    'Linux',
    'CWNP',
    'Comptia',
    'Exin',
    'Ec - Council',
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ]

  return (
    <footer className="bg-gradient-to-r from-mauve-dark to-mauve text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">KNS</h3>
            <p className="text-white/80 leading-relaxed">
              KNS - Sierra Leone
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors duration-300"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Tags</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {tags.map((tag) => (
                <span key={tag} className="inline-block px-3 py-1 bg-white/10 rounded text-white/80 text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Keep in Touch */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Keep in Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-white/80">
                <Mail size={18} className="mt-1 flex-shrink-0" />
                <span>info@kns.sl</span>
              </li>
              <li className="flex items-start gap-2 text-white/80">
                <Phone size={18} className="mt-1 flex-shrink-0" />
                <span>232 79 442 442</span>
              </li>
              <li className="flex items-start gap-2 text-white/80">
                <Phone size={18} className="mt-1 flex-shrink-0" />
                <span>+1 301 9413 774</span>
              </li>
              <li className="flex items-start gap-2 text-white/80">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>
                  29A Charles Street and 18 Dundas Street,<br />
                  Freetown, Sierra Leone
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold mb-2">Newsletter</h4>
            <p className="text-white/80 mb-4">
              Keep up on our always evolving product features and technology. Enter your e-mail and subscribe to our newsletter.
            </p>
            <form className="flex gap-2">
              <input type="email" placeholder="Enter your e-mail" className="flex-1 px-4 py-2 rounded-lg text-charcoal focus:outline-none" />
              <button type="button" className="px-4 py-2 bg-white text-mauve font-semibold rounded-lg hover:bg-white/90">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/80">
          <p>© Copyrights Knowledge Network Solutions 2014. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

