'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Services from '@/components/Services'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Services />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-mauve-light to-mauve/30 p-12 rounded-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Get in touch with us today to discuss how our services can help you achieve your goals.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-mauve text-white rounded-lg font-semibold text-lg hover:bg-mauve-dark transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Contact Us
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

