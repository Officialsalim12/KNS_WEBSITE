'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ChevronRight } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  // 5 images for the slider - one for each service, featuring black professionals
  // Images are matched to services based on the provided image descriptions:
  // 1. IT Consultancy & Software Solutions - Black professionals group high-five in office
  // 2. Cybersecurity Solutions - Black man with cybersecurity digital interface
  // 3. IT Training & Courses - Black man smiling in computer lab/classroom
  // 4. Telecommunications Solutions - Hands with smartphone and network overlay
  // 5. Enterprise & Cloud Solution - Black man in data center with laptop
  // 
  // Add your image files to /public/hero-images/ folder with these names:
  // - hero-1-it-consultancy.jpg (or .png, .webp)
  // - hero-2-cybersecurity.jpg
  // - hero-3-training.jpg
  // - hero-4-telecommunications.jpg
  // - hero-5-cloud.jpg
  // - hero-6-call-center.jpg
  const heroImages = [
    '/hero-images/hero-1-it-consultancy.webp', // IT Consultancy & Software Solutions - Black professionals group high-five
    '/hero-images/hero-2-cybersecurity.webp', // Cybersecurity Solutions - Black man with cybersecurity interface
    '/hero-images/hero-3-training.jpg', // IT Training & Courses - Black man in computer lab
    '/hero-images/hero-4-telecommunications.jpg', // Telecommunications Solutions - Smartphone with network overlay
    '/hero-images/hero-5-cloud.png', // Enterprise & Cloud Solution - Black man in data center
  ]

  // Duplicate images for seamless infinite loop (10 total: 5 + 5)
  const duplicatedImages = [...heroImages, ...heroImages]

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Image Slider Container */}
      <div className="absolute inset-0 w-full h-full">
        {/* Animated Image Slider - slides from left to right continuously */}
        <div className="hero-slider-container">
          <div className="hero-slider-track">
            {duplicatedImages.map((image, index) => (
              <div key={index} className="hero-slide">
                <Image
                  src={image}
                  alt={`Hero image ${(index % heroImages.length) + 1}`}
                  fill
                  className="object-cover"
                  priority={index < 2}
                  sizes="20vw"
                />
                {/* Gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-mauve/50 via-transparent to-mauve/30"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 md:space-y-8"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg">
              Empowering a Smarter Digital Future
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl lg:text-3xl text-white/90 drop-shadow-md max-w-4xl mx-auto"
            >
              Building Resilient IT Professionals and Future-Ready Enterprises
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            >
              <Link
                href="/services"
                className="group px-8 py-4 bg-mauve text-white rounded-lg font-semibold text-lg hover:bg-mauve-dark transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                Explore Services
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link
                href="/contact"
                className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white rounded-lg font-semibold text-lg hover:bg-white hover:text-charcoal transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                Contact Us
                <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Additional gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20 pointer-events-none"></div>
    </section>
  )
}

