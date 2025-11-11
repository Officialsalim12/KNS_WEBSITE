'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { Target, Eye, Award, Users, TrendingUp, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react'
import Image from 'next/image'

export default function AboutPage() {
  const executives = [
    {
      name: 'Desmond Macfoy',
      role: 'Chief Executive Officer',
      image: 'https://images.unsplash.com/photo-1603415526960-f7e0328d13bf?w=600&q=80',
      bio: 'Leads vision and strategy, bringing over 15 years of experience in IT consulting and enterprise transformation.',
      socials: {
        linkedin: '#',
        twitter: '#',
        facebook: '#',
        instagram: '#',
      },
    },
    {
      name: 'Samuel Bangura',
      role: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=600&q=80',
      bio: 'Oversees technology delivery and innovation across cybersecurity, cloud, and infrastructure services.',
      socials: {
        linkedin: '#',
        twitter: '#',
        facebook: '#',
        instagram: '#',
      },
    },
    {
      name: 'Chinedu D. G. Nwaefuna',
      role: 'Chief Operations Officer',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80',
      bio: 'Drives operational excellence and client success with a focus on scalable service delivery.',
      socials: {
        linkedin: '#',
        twitter: '#',
        facebook: '#',
        instagram: '#',
      },
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
              About Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering a Smarter Digital Future
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
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

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-charcoal">Who We Are</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Knowledge Network Systems (KNS) is a leading provider of IT solutions,
                cybersecurity services, and professional training. We empower organizations
                and individuals with the knowledge and tools needed to thrive in the digital age.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With over 10 years of experience, we have built a reputation for excellence
                in delivering cutting-edge technology solutions and comprehensive training
                programs that drive business success.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="p-4 bg-mauve-light rounded-lg">
                  <Target className="text-mauve" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-charcoal mb-3">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To build resilient IT professionals and future-ready enterprises through
                    cutting-edge solutions, comprehensive training, and unwavering commitment
                    to excellence. We strive to bridge the gap between technology and human
                    potential, creating opportunities for growth and innovation.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="p-4 bg-mauve-light rounded-lg">
                  <Eye className="text-mauve" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-charcoal mb-3">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To be the premier knowledge network that bridges the gap between
                    technology and human potential, creating a smarter digital future
                    for all. We envision a world where every organization and individual
                    has access to the tools and knowledge needed to succeed.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-center justify-center w-20 h-20 bg-mauve rounded-full mx-auto mb-4">
                <Award className="text-white" size={40} />
              </div>
              <p className="text-4xl font-bold text-mauve mb-2">10+</p>
              <p className="text-gray-600">Years of Experience</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-center justify-center w-20 h-20 bg-mauve rounded-full mx-auto mb-4">
                <Users className="text-white" size={40} />
              </div>
              <p className="text-4xl font-bold text-mauve mb-2">500+</p>
              <p className="text-gray-600">Trained Professionals</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-center justify-center w-20 h-20 bg-mauve rounded-full mx-auto mb-4">
                <TrendingUp className="text-white" size={40} />
              </div>
              <p className="text-4xl font-bold text-mauve mb-2">200+</p>
              <p className="text-gray-600">Successful Projects</p>
            </motion.div>
          </div>

          {/* Executives */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-charcoal">Meet our Executives</h2>
              <p className="text-lg text-gray-600 mt-3 max-w-3xl mx-auto">
                Our leadership team brings deep industry expertise and a passion for delivering excellence.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {executives.map((exec, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all"
                >
                  <div className="relative h-64">
                    <Image
                      src={exec.image}
                      alt={exec.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-charcoal">{exec.name}</h3>
                    <p className="text-mauve font-medium mb-3">{exec.role}</p>
                    <p className="text-gray-600 mb-4">{exec.bio}</p>
                    <div className="flex items-center gap-3">
                      <a href={exec.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${exec.name} LinkedIn`} className="p-2 bg-mauve-light rounded-lg text-mauve hover:bg-mauve/20">
                        <Linkedin size={18} />
                      </a>
                      <a href={exec.socials.twitter} target="_blank" rel="noopener noreferrer" aria-label={`${exec.name} Twitter`} className="p-2 bg-mauve-light rounded-lg text-mauve hover:bg-mauve/20">
                        <Twitter size={18} />
                      </a>
                      <a href={exec.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label={`${exec.name} Facebook`} className="p-2 bg-mauve-light rounded-lg text-mauve hover:bg-mauve/20">
                        <Facebook size={18} />
                      </a>
                      <a href={exec.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label={`${exec.name} Instagram`} className="p-2 bg-mauve-light rounded-lg text-mauve hover:bg-mauve/20">
                        <Instagram size={18} />
                      </a>
                    </div>
                  </div>
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

