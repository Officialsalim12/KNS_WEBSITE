'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Partners() {
  const partners = [
    { name: 'Cisco', logo: 'https://logo.clearbit.com/cisco.com' },
    { name: 'Microsoft', logo: 'https://logo.clearbit.com/microsoft.com' },
    { name: 'CIW', logo: 'https://logo.clearbit.com/ciwcertified.com' },
    { name: 'Fortinet', logo: 'https://logo.clearbit.com/fortinet.com' },
    { name: 'VMWare', logo: 'https://logo.clearbit.com/vmware.com' },
    { name: 'Linux', logo: 'https://logo.clearbit.com/linux.org' },
    { name: 'CWNP', logo: 'https://logo.clearbit.com/cwnp.com' },
    { name: 'Comptia', logo: 'https://logo.clearbit.com/comptia.org' },
    { name: 'Exin', logo: 'https://logo.clearbit.com/exin.com' },
    { name: 'Ec - Council', logo: 'https://logo.clearbit.com/eccouncil.org' },
  ]

  const getLogoUrl = (_name: string, logo: string) => logo

  return (
    <section id="partners" className="py-20 md:py-32 bg-gradient-to-b from-mauve-light/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Our Partners
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by industry leaders and certified by top technology partners
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 grayscale hover:grayscale-0 border border-gray-100"
            >
              <div className="relative w-24 h-24 md:w-32 md:h-32">
                <Image
                  src={getLogoUrl(partner.name, partner.logo)}
                  alt={partner.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 96px, 128px"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 italic">
            * Partner logos are placeholders. Replace with actual partner logos when available.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

