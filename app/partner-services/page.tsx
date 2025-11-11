'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { Handshake, Shield, Network, Server, Code, Database } from 'lucide-react'
import Image from 'next/image'

export default function PartnerServicesPage() {
  const partners = [
    { name: 'Cisco', domain: 'cisco.com' },
    { name: 'Microsoft', domain: 'microsoft.com' },
    { name: 'CIW', domain: 'ciwcertified.com' },
    { name: 'Fortinet', domain: 'fortinet.com' },
    { name: 'VMWare', domain: 'vmware.com' },
    { name: 'Linux', domain: 'linux.org' },
    { name: 'CWNP', domain: 'cwnp.com' },
    { name: 'Comptia', domain: 'comptia.org' },
    { name: 'Exin', domain: 'exin.com' },
    { name: 'Ec - Council', domain: 'eccouncil.org' },
  ]

  const solutions = [
    {
      icon: Network,
      title: 'Networking Solutions',
      description: 'Enterprise-grade networking equipment and solutions from leading manufacturers.',
    },
    {
      icon: Shield,
      title: 'Security Solutions',
      description: 'Comprehensive cybersecurity solutions to protect your digital infrastructure.',
    },
    {
      icon: Server,
      title: 'Infrastructure Solutions',
      description: 'Hardware and software solutions for modern data centers and cloud environments.',
    },
    {
      icon: Code,
      title: 'Software Solutions',
      description: 'Enterprise software and development tools from trusted technology partners.',
    },
    {
      icon: Database,
      title: 'Training & Certifications',
      description: 'Authorized training programs and certifications from industry-leading partners.',
    },
    {
      icon: Handshake,
      title: 'Partner Support',
      description: 'Dedicated support and services from our registered technology partners.',
    },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20 bg-gradient-to-b from-mauve-light/20 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-4">
              Partner Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our Registered Partners
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg">
              <p className="text-lg text-gray-600 leading-relaxed text-center max-w-4xl mx-auto">
                Knowledge Network Solutions works closely with software and device manufacturers
                the worldover to ensure the provision of quality services and equipments in
                networking and other areas.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-charcoal mb-8 text-center">
              Our Solutions
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="w-14 h-14 bg-mauve-light rounded-lg flex items-center justify-center mb-4">
                    <solution.icon className="text-mauve" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {solution.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-charcoal mb-8 text-center">
              Our Registered Partners
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 text-center"
                >
                  <div className="flex items-center justify-center h-20 mb-4">
                    <div className="relative w-28 h-12">
                      <Image src={`https://logo.clearbit.com/${partner.domain}`} alt={partner.name} fill className="object-contain" sizes="112px" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-charcoal">
                    {partner.name}
                  </h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  )
}


