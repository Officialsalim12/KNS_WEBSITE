'use client'

import { motion } from 'framer-motion'
import { Trophy, Award as AwardIcon } from 'lucide-react'
import { useState } from 'react'

export default function GalleryAwards() {
  const [imageError, setImageError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mb-16"
    >
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-3 mb-4">
          <Trophy className="text-mauve" size={40} />
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal">Awards & Recognition</h2>
        </div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Celebrating our achievements and recognition in the technology industry
        </p>
      </div>

      <div className="bg-gradient-to-r from-mauve-light/30 via-white to-mauve-light/30 rounded-2xl shadow-xl overflow-hidden border border-mauve/20 p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Award Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-mauve-light to-white"
          >
            {!imageError ? (
              <img
                src="/Digital champion award -mocti.jpeg"
                alt="Digital Skills Champion Award"
                className="w-full h-full object-contain p-4"
                onLoad={() => setImageLoaded(true)}
                onError={() => {
                  setImageError(true)
                  setImageLoaded(false)
                }}
                style={{ display: imageLoaded ? 'block' : 'none' }}
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <Trophy className="text-mauve/30" size={120} />
              </div>
            )}
            {!imageLoaded && !imageError && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Trophy className="text-mauve/30" size={120} />
              </div>
            )}
          </motion.div>

          {/* Award Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-mauve rounded-lg">
                <AwardIcon className="text-white" size={32} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-mauve uppercase tracking-wide">
                  Recognition
                </h3>
                <h2 className="text-3xl md:text-4xl font-bold text-charcoal">
                  Digital Skills Champion
                </h2>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  Knowledge Network Solutions has been honored as the{' '}
                  <span className="font-semibold text-mauve">Digital Skills Champion</span> by the{' '}
                  <span className="font-semibold text-charcoal">
                    Ministry of Communication, Technology, and Innovation
                  </span>
                  .
                </p>
              </div>

              <div className="bg-white/60 rounded-lg p-4 border-l-4 border-mauve">
                <p className="text-gray-600 text-sm md:text-base">
                  <span className="font-semibold text-charcoal">Event:</span>{' '}
                  <span className="text-gray-700">
                    Sierra Leone Tech Summit 2025
                  </span>
                </p>
              </div>

              <div className="pt-4">
                <p className="text-gray-600 leading-relaxed">
                  This prestigious award recognizes our outstanding contribution to advancing digital
                  skills and innovation in Sierra Leone, demonstrating our commitment to empowering
                  individuals and organizations through technology education and solutions.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

