'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Brain, Handshake, Database, Code, TrendingUp, ShieldCheck, ArrowRight } from 'lucide-react'

export default function Training() {
  const trainingAreas = [
    {
      icon: Brain,
      title: 'Conventional AI Strategy',
      description: 'Learn to develop and implement AI strategies for business transformation.',
    },
    {
      icon: Handshake,
      title: 'Business Alliances & Development',
      description: 'Master the art of building strategic partnerships and business development.',
    },
    {
      icon: Database,
      title: 'SAP HANA Implementation',
      description: 'Comprehensive training on SAP HANA database implementation and management.',
    },
    {
      icon: Code,
      title: 'Software Engineering',
      description: 'Advanced software engineering practices and methodologies.',
    },
    {
      icon: TrendingUp,
      title: 'Data Analysis',
      description: 'Expert-level data analysis and visualization techniques.',
    },
    {
      icon: ShieldCheck,
      title: 'Cybersecurity Implementation',
      description: 'Hands-on cybersecurity implementation and best practices.',
    },
  ]

  return (
    <section id="training" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Training & Courses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enhance your skills with our comprehensive training programs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {trainingAreas.map((training, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-gradient-to-br from-white to-mauve-light/20 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-mauve-light"
            >
              <div className="w-12 h-12 bg-mauve rounded-lg flex items-center justify-center mb-4">
                <training.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-3">
                {training.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {training.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Link
            href="/auth"
            className="inline-flex items-center gap-2 px-8 py-4 bg-mauve text-white rounded-lg font-semibold text-lg hover:bg-mauve-dark transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get Started
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

