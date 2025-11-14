'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, ArrowRight, Tag, Search } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { calculateReadingTime } from '@/lib/readingTime'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  category: string
  date: string
  image: string
  slug: string
  author?: string
}

const allBlogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'KNS Wins Digital Skills Champion Award at Sierra Leone Tech Summit 2025',
    excerpt: 'Knowledge Network Solutions has been recognized for outstanding contribution to advancing digital skills and innovation in Sierra Leone.',
    category: 'Awards',
    date: 'November 15, 2025',
    image: '/hero-images/hero-1-it-consultancy.webp', // Black professionals group high-five
    slug: 'digital-skills-champion-award-2025',
    author: 'KNS Team',
  },
  {
    id: 2,
    title: 'New Cybersecurity Training Program Launched',
    excerpt: 'We are excited to announce our comprehensive cybersecurity training program designed to equip professionals with essential security skills.',
    category: 'Training',
    date: 'November 10, 2025',
    image: '/hero-images/hero-2-cybersecurity.webp', // Black man with cybersecurity interface
    slug: 'cybersecurity-training-launch',
    author: 'KNS Training Team',
  },
  {
    id: 3,
    title: 'Partnership with Leading Cloud Providers Announced',
    excerpt: 'KNS has formed strategic partnerships with major cloud service providers to offer enhanced enterprise solutions to our clients.',
    category: 'Partnerships',
    date: 'November 5, 2025',
    image: '/hero-images/hero-5-cloud.png', // Black man in data center
    slug: 'cloud-partnerships-announcement',
    author: 'KNS Business Development',
  },
  {
    id: 4,
    title: 'IT Consultancy Services Expand to Support Growing Businesses',
    excerpt: 'Our IT consultancy team has expanded to provide more comprehensive support for businesses undergoing digital transformation.',
    category: 'Services',
    date: 'October 28, 2025',
    image: '/hero-images/hero-3-training.jpg', // Black man in computer lab
    slug: 'it-consultancy-expansion',
    author: 'KNS Consultancy Team',
  },
]

const categories = ['All', 'Awards', 'Training', 'Partnerships', 'Services']

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPosts = allBlogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    const matchesSearch =
      searchQuery === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

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
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-mauve-dark to-mauve text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Blog & News
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Stay updated with the latest news, insights, and updates from Knowledge Network Solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mauve focus:border-transparent transition-all"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-mauve text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-mauve-light/20 border border-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length > 0 ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredPosts.map((post) => (
                <motion.div
                  key={post.id}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col"
                >
                  <Link href={`/blog/${post.slug}`} className="block h-full">
                    {/* Image */}
                    <div className="relative h-48 w-full overflow-hidden blog-image-container">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-125"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
                        <span>{calculateReadingTime(post.excerpt + ' ' + post.title)}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-charcoal mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4 flex-grow line-clamp-3">
                        {post.excerpt}
                      </p>
                      {post.author && (
                        <p className="text-sm text-gray-500 mb-4">By {post.author}</p>
                      )}
                      <div className="inline-flex items-center gap-2 text-mauve font-semibold hover:text-mauve-dark transition-colors duration-300 mt-auto">
                        Read More
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600 mb-4">No articles found</p>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}

          {/* Results Count */}
          {filteredPosts.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 text-center text-gray-600"
            >
              <p>
                Showing {filteredPosts.length} of {allBlogPosts.length} articles
              </p>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}

