'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, Server, Headphones, Briefcase, GraduationCap, PhoneCall, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

export default function Services() {
  const services = [
    {
      slug: 'it-consultancy-software-solutions',
      icon: '/icons/it-consultancy-icon.svg',
      fallbackIcon: Briefcase,
      title: 'IT Consultancy & Software Solutions',
      description: 'Expert guidance and custom software development to transform your business operations.',
    },
    {
      slug: 'cybersecurity-solutions',
      icon: '/icons/cybersecurity-icon.svg',
      fallbackIcon: ShieldCheck,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services to protect your digital assets and infrastructure.',
    },
    {
      slug: 'it-training-courses',
      icon: '/icons/training-icon.svg',
      fallbackIcon: GraduationCap,
      title: 'IT Training & Courses',
      description: 'Professional training programs to enhance your team\'s skills and knowledge.',
    },
    {
      slug: 'telecommunications-solutions',
      icon: '/icons/telecom-icon.svg',
      fallbackIcon: PhoneCall,
      title: 'Telecommunications Solutions',
      description: 'Advanced telecom infrastructure and services for seamless communication.',
    },
    {
      slug: 'enterprise-cloud-solution',
      icon: '/icons/cloud-icon.svg',
      fallbackIcon: Server,
      title: 'Enterprise & Cloud Solution',
      description: 'Scalable cloud solutions and infrastructure management for modern businesses.',
    },
    {
      slug: 'call-center-customer-services',
      icon: '/icons/call-center-icon.svg',
      fallbackIcon: Headphones,
      title: 'Call Center/Customer Services',
      description: 'Professional call center solutions and customer service support for optimal client satisfaction.',
    },
  ]

  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({})

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }))
  }

  const handleImageError = (index: number) => {
    // Image failed to load, keep it as false so fallback shows
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="services" className="py-20 md:py-32 bg-gradient-to-b from-white to-mauve-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive IT solutions tailored to meet your business needs
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = service.fallbackIcon
            const imageLoaded = loadedImages[index]

            return (
              <Link key={index} href={`/services/${service.slug}`}>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer h-full flex flex-col"
                >
                  <div className="w-14 h-14 bg-mauve-light rounded-lg flex items-center justify-center mb-4 relative overflow-hidden p-3">
                    {!imageLoaded && <IconComponent className="text-mauve" size={28} />}
                    <img
                      src={service.icon}
                      alt={service.title}
                      className={`object-contain w-full h-full p-1 ${imageLoaded ? 'block' : 'hidden'}`}
                      onLoad={() => handleImageLoad(index)}
                      onError={() => handleImageError(index)}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4 flex-grow">
                    {service.description}
                  </p>
                  <div className="flex items-center text-mauve font-semibold mt-auto">
                    <span>Read More</span>
                    <ArrowRight size={16} className="ml-2" />
                  </div>
                </motion.div>
              </Link>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

