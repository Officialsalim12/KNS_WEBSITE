'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Calendar, Tag, Clock, Share2 } from 'lucide-react'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { calculateReadingTime } from '@/lib/readingTime'

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  image: string
  author?: string
  content: string[]
  relatedPosts?: string[]
}

const blogData: Record<string, BlogPost> = {
  'digital-skills-champion-award-2025': {
    slug: 'digital-skills-champion-award-2025',
    title: 'KNS Wins Digital Skills Champion Award at Sierra Leone Tech Summit 2025',
    excerpt: 'Knowledge Network Solutions has been recognized for outstanding contribution to advancing digital skills and innovation in Sierra Leone.',
    category: 'Awards',
    date: 'November 15, 2025',
    image: '/hero-images/hero-1-it-consultancy.webp', // Black professionals group high-five
    author: 'KNS Team',
    content: [
      'We are thrilled to announce that Knowledge Network Solutions (KNS) has been honored with the prestigious Digital Skills Champion Award at the Sierra Leone Tech Summit 2025. This recognition comes from the Ministry of Communication, Technology, and Innovation, acknowledging our exceptional contribution to advancing digital skills and innovation across Sierra Leone.',
      'The award ceremony, held at the Freetown International Conference Centre, brought together leading technology companies, government officials, and industry experts. KNS was recognized for our comprehensive approach to digital skills development, which includes:',
      '• Comprehensive IT training programs covering cybersecurity, cloud computing, and software development',
      '• Partnerships with educational institutions to enhance technology education',
      '• Community outreach programs that provide free digital literacy training',
      '• Innovative training methodologies that combine theoretical knowledge with hands-on practical experience',
      'This award reflects our commitment to empowering individuals and organizations through technology education. Over the past year, we have trained over 500 professionals in various IT disciplines, contributing significantly to the digital transformation of Sierra Leone.',
      'Our CEO, in accepting the award, stated: "This recognition is a testament to our team\'s dedication and the trust our clients and partners place in us. We remain committed to advancing digital skills and innovation in Sierra Leone, and this award only strengthens our resolve to continue this important work."',
      'Looking ahead, KNS plans to expand our training programs and introduce new courses in emerging technologies such as artificial intelligence, blockchain, and data science. We are also exploring partnerships with international technology companies to bring cutting-edge training programs to Sierra Leone.',
      'We extend our gratitude to the Ministry of Communication, Technology, and Innovation for this recognition and to all our clients, partners, and team members who have supported us on this journey.',
    ],
    relatedPosts: ['cybersecurity-training-launch', 'it-consultancy-expansion'],
  },
  'cybersecurity-training-launch': {
    slug: 'cybersecurity-training-launch',
    title: 'New Cybersecurity Training Program Launched',
    excerpt: 'We are excited to announce our comprehensive cybersecurity training program designed to equip professionals with essential security skills.',
    category: 'Training',
    date: 'November 10, 2025',
    image: '/hero-images/hero-2-cybersecurity.webp', // Black man with cybersecurity interface
    author: 'KNS Training Team',
    content: [
      'Knowledge Network Solutions is proud to announce the launch of our comprehensive Cybersecurity Training Program, designed to address the growing need for skilled cybersecurity professionals in Sierra Leone and across West Africa.',
      'This intensive program covers essential cybersecurity concepts and practical skills, including:',
      '• Network Security Fundamentals',
      '• Ethical Hacking and Penetration Testing',
      '• Security Risk Assessment and Management',
      '• Incident Response and Digital Forensics',
      '• Cloud Security Best Practices',
      '• Compliance and Regulatory Requirements',
      'The program is structured to accommodate both beginners and experienced IT professionals looking to specialize in cybersecurity. Our curriculum is developed in collaboration with industry experts and follows international best practices and certifications.',
      'Key features of the program include:',
      '• Hands-on labs and real-world scenarios',
      '• Industry-recognized certification preparation',
      '• Flexible learning options (in-person and online)',
      '• Expert instructors with years of industry experience',
      '• Career guidance and job placement support',
      'The first cohort of students will begin their training in December 2025, with classes held at our state-of-the-art training facility in Freetown. We are also offering corporate training packages for organizations looking to upskill their IT teams.',
      'Early enrollment is now open, and we are offering a 20% discount for the first 50 participants. For more information about the program, course schedules, and enrollment, please contact our training department.',
    ],
    relatedPosts: ['digital-skills-champion-award-2025', 'it-consultancy-expansion'],
  },
  'cloud-partnerships-announcement': {
    slug: 'cloud-partnerships-announcement',
    title: 'Partnership with Leading Cloud Providers Announced',
    excerpt: 'KNS has formed strategic partnerships with major cloud service providers to offer enhanced enterprise solutions to our clients.',
    category: 'Partnerships',
    date: 'November 5, 2025',
    image: '/hero-images/hero-5-cloud.png', // Black man in data center
    author: 'KNS Business Development',
    content: [
      'Knowledge Network Solutions is excited to announce strategic partnerships with leading global cloud service providers. These partnerships will enable us to offer enhanced enterprise cloud solutions and services to businesses across Sierra Leone and the wider region.',
      'Through these partnerships, KNS can now provide:',
      '• Access to enterprise-grade cloud infrastructure',
      '• Scalable cloud solutions tailored to business needs',
      '• Enhanced security and compliance features',
      '• Cost-effective cloud migration services',
      '• 24/7 cloud infrastructure support and monitoring',
      '• Training and certification programs for cloud technologies',
      'These partnerships represent a significant milestone in our mission to provide world-class IT solutions to businesses in Sierra Leone. Our clients will now have access to the same cloud technologies used by Fortune 500 companies, with local support and expertise.',
      'The partnerships will also enable us to offer specialized services including:',
      '• Cloud architecture design and implementation',
      '• Multi-cloud and hybrid cloud solutions',
      '• Cloud security and compliance consulting',
      '• Disaster recovery and business continuity planning',
      '• Cloud cost optimization and management',
      'We believe these partnerships will accelerate digital transformation for businesses in Sierra Leone, making enterprise-grade cloud solutions more accessible and affordable. Our team has undergone extensive training and certification to ensure we can provide the highest level of service to our clients.',
      'For more information about our cloud services and how these partnerships can benefit your business, please contact our sales team.',
    ],
    relatedPosts: ['it-consultancy-expansion', 'cybersecurity-training-launch'],
  },
  'it-consultancy-expansion': {
    slug: 'it-consultancy-expansion',
    title: 'IT Consultancy Services Expand to Support Growing Businesses',
    excerpt: 'Our IT consultancy team has expanded to provide more comprehensive support for businesses undergoing digital transformation.',
    category: 'Services',
    date: 'October 28, 2025',
    image: '/hero-images/hero-3-training.jpg', // Black man in computer lab
    author: 'KNS Consultancy Team',
    content: [
      'Knowledge Network Solutions is pleased to announce the expansion of our IT Consultancy Services division. This expansion comes in response to the growing demand for expert IT guidance as businesses across Sierra Leone accelerate their digital transformation initiatives.',
      'Our expanded consultancy team now includes specialists in:',
      '• Digital Transformation Strategy',
      '• Enterprise Architecture and System Design',
      '• Software Development and Custom Solutions',
      '• IT Infrastructure Planning and Optimization',
      '• Technology Stack Selection and Implementation',
      '• Legacy System Modernization',
      '• Business Process Automation',
      'The expansion includes the addition of five senior consultants with extensive experience in enterprise IT solutions. Our team now has a combined experience of over 50 years in IT consulting, working with businesses across various industries including finance, healthcare, manufacturing, and government.',
      'Our consultancy services help businesses:',
      '• Identify technology solutions that align with business goals',
      '• Develop comprehensive IT roadmaps and strategies',
      '• Implement cost-effective technology solutions',
      '• Optimize existing IT infrastructure and processes',
      '• Navigate complex technology decisions',
      '• Ensure successful digital transformation initiatives',
      'We have also introduced new service packages designed for businesses at different stages of their digital journey, from startups looking to establish their IT foundation to established enterprises seeking to modernize their technology stack.',
      'The expansion reflects our commitment to supporting businesses in Sierra Leone as they embrace digital technologies to improve efficiency, enhance customer experiences, and drive growth. Our consultants work closely with clients to understand their unique challenges and deliver tailored solutions that deliver measurable results.',
      'To learn more about our IT Consultancy Services or to schedule a consultation, please contact our team.',
    ],
    relatedPosts: ['digital-skills-champion-award-2025', 'cloud-partnerships-announcement'],
  },
}

export default function BlogDetailPage({ params }: { params: Promise<{ slug: string }> | { slug: string } }) {
  const [post, setPost] = useState<BlogPost | null>(null)

  useEffect(() => {
    const getSlug = async () => {
      const resolvedParams = await Promise.resolve(params)
      const postSlug = typeof resolvedParams === 'object' && 'slug' in resolvedParams ? resolvedParams.slug : resolvedParams
      setPost(blogData[postSlug] || null)
    }
    getSlug()
  }, [params])

  if (!post) {
    return (
      <main className="min-h-screen">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <h1 className="text-4xl font-bold text-charcoal mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-mauve text-white rounded-lg font-semibold hover:bg-mauve-dark transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  const relatedPosts = post.relatedPosts
    ? post.relatedPosts.map((slug) => blogData[slug]).filter(Boolean)
    : []

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0 blog-hero-image">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        </div>

        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                href="/#blog-news"
                className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors"
              >
                <ArrowLeft size={20} />
                Back to News
              </Link>
              <div className="flex items-center gap-4 mb-4">
                <span className="px-4 py-2 bg-mauve text-white text-sm font-semibold rounded-full flex items-center gap-2">
                  <Tag size={14} />
                  {post.category}
                </span>
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <Calendar size={16} />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <Clock size={16} />
                  <span>{calculateReadingTime(post.content)}</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                {post.title}
              </h1>
              {post.author && (
                <p className="text-white/90 text-lg">By {post.author}</p>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Return Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8"
          >
            <Link
              href="/#blog-news"
              className="inline-flex items-center gap-2 px-6 py-3 bg-mauve text-white rounded-lg font-semibold hover:bg-mauve-dark transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <ArrowLeft size={20} />
              Return to News
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            {post.content.map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed mb-6 text-lg">
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Share and Return Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 pt-8 border-t border-gray-200"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="text-gray-600 font-semibold">Share:</span>
                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({
                          title: post.title,
                          text: post.excerpt,
                          url: window.location.href,
                        })
                      }
                    }}
                    className="p-2 bg-mauve-light/20 text-mauve rounded-lg hover:bg-mauve-light/30 transition-colors"
                    aria-label="Share article"
                  >
                    <Share2 size={20} />
                  </button>
                </div>
              </div>
              <Link
                href="/#blog-news"
                className="inline-flex items-center gap-2 px-6 py-3 bg-mauve text-white rounded-lg font-semibold hover:bg-mauve-dark transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <ArrowLeft size={20} />
                Return to News
              </Link>
            </div>
          </motion.div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-16 pt-12 border-t border-gray-200"
            >
              <h2 className="text-3xl font-bold text-charcoal mb-8">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
                  >
                    <div className="relative h-48 w-full overflow-hidden blog-image-container">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover group-hover:scale-125 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                        <Calendar size={14} />
                        <span>{relatedPost.date}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-charcoal mb-2 group-hover:text-mauve transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">{relatedPost.excerpt}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}

