'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Target, Eye, Award } from 'lucide-react'
import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
              alt="KNS Team"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal">
              About KNS
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Knowledge Network Systems (KNS) is a leading provider of IT solutions,
              cybersecurity services, and professional training. We empower organizations
              and individuals with the knowledge and tools needed to thrive in the digital age.
            </p>

            {/* Mission & Vision */}
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-mauve-light rounded-lg">
                  <Target className="text-mauve" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-charcoal mb-2">Our Mission</h3>
                  <p className="text-gray-600">
                    To build resilient IT professionals and future-ready enterprises through
                    cutting-edge solutions, comprehensive training, and unwavering commitment
                    to excellence.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-mauve-light rounded-lg">
                  <Eye className="text-mauve" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-charcoal mb-2">Our Vision</h3>
                  <p className="text-gray-600">
                    To be the premier knowledge network that bridges the gap between
                    technology and human potential, creating a smarter digital future
                    for all.
                  </p>
                </div>
              </div>
            </div>

            {/* Years of Experience */}
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-mauve rounded-full mb-2">
                  <Award className="text-white" size={32} />
                </div>
                <p className="text-3xl font-bold text-mauve">10+</p>
                <p className="text-sm text-gray-600">Years of Experience</p>
              </div>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-mauve text-white rounded-lg font-semibold hover:bg-mauve-dark transition-colors duration-300 mt-4"
            >
              Learn More About Us
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

