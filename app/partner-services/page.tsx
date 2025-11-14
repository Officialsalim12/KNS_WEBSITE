'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Partners from '@/components/Partners'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Building2, Handshake, Award, Globe } from 'lucide-react'

export default function PartnerServicesPage() {
  const partnerServices = [
    {
      icon: Building2,
      title: 'Technology Partnerships',
      description: 'Strategic alliances with leading technology providers to deliver cutting-edge solutions.',
    },
    {
      icon: Handshake,
      title: 'Business Partnerships',
      description: 'Collaborative partnerships to expand market reach and deliver comprehensive services.',
    },
    {
      icon: Award,
      title: 'Certification Partnerships',
      description: 'Authorized training and certification programs with industry-leading organizations.',
    },
    {
      icon: Globe,
      title: 'Global Partnerships',
      description: 'International partnerships to serve clients across different regions and markets.',
    },
  ]

  const benefits = [
    'Access to latest technologies and solutions',
    'Enhanced service delivery capabilities',
    'Expanded market presence',
    'Shared expertise and resources',
    'Improved customer value proposition',
    'Competitive pricing and flexible terms',
  ]

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-mauve-light/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
              Partner Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building strategic partnerships to deliver exceptional value and innovative solutions to our clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partners Component */}
      <Partners />

      {/* Partner Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Our Partnership Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We collaborate with industry leaders to provide comprehensive solutions and services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {partnerServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all"
                >
                  <div className="w-14 h-14 bg-mauve-light rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="text-mauve" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-white to-mauve-light/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Partnership Benefits
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Why partner with KNS
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="w-2 h-2 bg-mauve rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-mauve to-mauve-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Interested in Partnering with Us?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join our network of partners and help us deliver exceptional solutions to clients worldwide.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-mauve rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
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
