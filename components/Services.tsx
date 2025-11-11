'use client'

import { motion } from 'framer-motion'
import { Shield, Cloud, Network, Code, Phone, GraduationCap } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Code,
      title: 'IT Consultancy & Software Solutions',
      description: 'Expert guidance and custom software development to transform your business operations.',
    },
    {
      icon: Shield,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services to protect your digital assets and infrastructure.',
    },
    {
      icon: GraduationCap,
      title: 'IT Training & Courses',
      description: 'Professional training programs to enhance your team\'s skills and knowledge.',
    },
    {
      icon: Phone,
      title: 'Telecommunications Solutions',
      description: 'Advanced telecom infrastructure and services for seamless communication.',
    },
    {
      icon: Cloud,
      title: 'Cloud & Infrastructure Solutions',
      description: 'Scalable cloud solutions and infrastructure management for modern businesses.',
    },
    {
      icon: Network,
      title: 'Enterprise Network Design',
      description: 'Custom network architecture and design for optimal performance and security.',
    },
  ]

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
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-14 h-14 bg-mauve-light rounded-lg flex items-center justify-center mb-4">
                <service.icon className="text-mauve" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

