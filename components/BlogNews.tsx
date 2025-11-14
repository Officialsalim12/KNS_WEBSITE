'use client'

import { motion } from 'framer-motion'
import { Calendar, ArrowRight, Tag, Clock } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { calculateReadingTime } from '@/lib/readingTime'

export default function BlogNews() {
  const blogPosts = [
    {
      id: 1,
      title: 'KNS Wins Digital Skills Champion Award at Sierra Leone Tech Summit 2025',
      excerpt: 'Knowledge Network Solutions has been recognized for outstanding contribution to advancing digital skills and innovation in Sierra Leone.',
      category: 'Awards',
      date: 'November 15, 2025',
      image: '/hero-images/hero-1-it-consultancy.webp', // Black professionals group high-five
      slug: 'digital-skills-champion-award-2025',
    },
    {
      id: 2,
      title: 'New Cybersecurity Training Program Launched',
      excerpt: 'We are excited to announce our comprehensive cybersecurity training program designed to equip professionals with essential security skills.',
      category: 'Training',
      date: 'November 10, 2025',
      image: '/hero-images/hero-2-cybersecurity.webp', // Black man with cybersecurity interface
      slug: 'cybersecurity-training-launch',
    },
    {
      id: 3,
      title: 'Partnership with Leading Cloud Providers Announced',
      excerpt: 'KNS has formed strategic partnerships with major cloud service providers to offer enhanced enterprise solutions to our clients.',
      category: 'Partnerships',
      date: 'November 5, 2025',
      image: '/hero-images/hero-5-cloud.png', // Black man in data center
      slug: 'cloud-partnerships-announcement',
    },
    {
      id: 4,
      title: 'IT Consultancy Services Expand to Support Growing Businesses',
      excerpt: 'Our IT consultancy team has expanded to provide more comprehensive support for businesses undergoing digital transformation.',
      category: 'Services',
      date: 'October 28, 2025',
      image: '/hero-images/hero-3-training.jpg', // Black man in computer lab
      slug: 'it-consultancy-expansion',
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
    <section id="blog-news" className="py-20 md:py-32 bg-gradient-to-b from-white to-mauve-light/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Blog & News
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest news, insights, and updates from KNS
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="block"
            >
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col cursor-pointer h-full"
              >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden blog-image-container">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-125"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-mauve text-white text-xs font-semibold rounded-full flex items-center gap-1">
                    <Tag size={12} />
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <Calendar size={16} />
                  <span>{post.date}</span>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{calculateReadingTime(post.excerpt + ' ' + post.title)}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 flex-grow line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="inline-flex items-center gap-2 text-mauve font-semibold hover:text-mauve-dark transition-colors duration-300 mt-auto">
                  Read More
                  <ArrowRight size={16} />
                </div>
              </div>
            </motion.div>
            </Link>
          ))}
        </motion.div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-4 bg-mauve text-white rounded-lg font-semibold text-lg hover:bg-mauve-dark transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View All News & Updates
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

