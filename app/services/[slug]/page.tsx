'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, CheckCircle, ShieldCheck, Server, Headphones, Briefcase, GraduationCap, PhoneCall } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface ServiceDetail {
  slug: string
  title: string
  icon: string
  fallbackIcon: any
  shortDescription: string
  fullDescription: string
  features: string[]
  benefits: string[]
  useCases: string[]
  image?: string
}

const servicesData: Record<string, ServiceDetail> = {
  'it-consultancy-software-solutions': {
    slug: 'it-consultancy-software-solutions',
    title: 'IT Consultancy & Software Solutions',
    icon: '/icons/it-consultancy-icon.svg',
    fallbackIcon: Briefcase,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80',
    shortDescription: 'Expert guidance and custom software development to transform your business operations.',
    fullDescription: 'Our IT Consultancy & Software Solutions service provides comprehensive technology consulting and custom software development to help organizations optimize their operations, improve efficiency, and drive digital transformation. We work closely with businesses to understand their unique challenges and deliver tailored solutions that align with their strategic goals.',
    features: [
      'Strategic IT Planning & Roadmap Development',
      'Custom Software Development & Integration',
      'Legacy System Modernization',
      'Enterprise Application Development',
      'API Development & Integration',
      'Database Design & Optimization',
      'System Architecture & Design',
      'Technology Stack Selection & Implementation'
    ],
    benefits: [
      'Streamlined business processes and improved operational efficiency',
      'Custom solutions tailored to your specific business needs',
      'Reduced operational costs through automation and optimization',
      'Enhanced scalability to support business growth',
      'Improved data management and analytics capabilities',
      'Better integration between systems and departments',
      'Future-proof technology solutions'
    ],
    useCases: [
      'Business Process Automation',
      'Customer Relationship Management (CRM) Systems',
      'Enterprise Resource Planning (ERP) Implementation',
      'E-commerce Platform Development',
      'Mobile Application Development',
      'Data Analytics & Business Intelligence Solutions'
    ]
  },
  'cybersecurity-solutions': {
    slug: 'cybersecurity-solutions',
    title: 'Cybersecurity Solutions',
    icon: '/icons/cybersecurity-icon.svg',
    fallbackIcon: ShieldCheck,
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1920&q=80',
    shortDescription: 'Comprehensive security services to protect your digital assets and infrastructure.',
    fullDescription: 'Our Cybersecurity Solutions provide comprehensive protection for your digital assets, infrastructure, and sensitive data. We offer a full spectrum of security services including vulnerability assessments, penetration testing, security audits, and managed security services. Our team of certified security professionals helps organizations build robust security postures and maintain compliance with industry standards.',
    features: [
      'Vulnerability Assessment & Penetration Testing',
      'Security Audits & Compliance Assessments',
      'Managed Security Services (MSS)',
      'Security Operations Center (SOC) Services',
      'Incident Response & Forensics',
      'Security Awareness Training',
      'Endpoint Security Solutions',
      'Network Security & Firewall Management',
      'Identity & Access Management (IAM)',
      'Data Loss Prevention (DLP)'
    ],
    benefits: [
      'Protection against cyber threats and data breaches',
      'Compliance with industry regulations (ISO 27001, GDPR, etc.)',
      '24/7 monitoring and threat detection',
      'Reduced risk of security incidents',
      'Enhanced customer trust and brand reputation',
      'Cost-effective security solutions',
      'Expert security guidance and support'
    ],
    useCases: [
      'Protecting sensitive customer and business data',
      'Meeting regulatory compliance requirements',
      'Securing cloud infrastructure and applications',
      'Defending against advanced persistent threats (APTs)',
      'Security for remote workforce',
      'Protecting critical business systems and operations'
    ]
  },
  'it-training-courses': {
    slug: 'it-training-courses',
    title: 'IT Training & Courses',
    icon: '/icons/training-icon.svg',
    fallbackIcon: GraduationCap,
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&q=80',
    shortDescription: 'Professional training programs to enhance your team\'s skills and knowledge.',
    fullDescription: 'Our IT Training & Courses program offers comprehensive professional development opportunities designed to enhance your team\'s technical skills and knowledge. We provide both in-person and online training covering a wide range of IT disciplines, from cybersecurity and cloud computing to software development and network administration. Our courses are designed by industry experts and aligned with leading certifications.',
    features: [
      'Cybersecurity Training & Certification Prep',
      'Cloud Computing (AWS, Azure, GCP) Training',
      'Software Development & Programming Courses',
      'Network Administration & Infrastructure',
      'Database Management & Administration',
      'IT Project Management Training',
      'DevOps & CI/CD Training',
      'ITIL & Service Management',
      'Custom Corporate Training Programs',
      'Hands-on Labs & Practical Exercises'
    ],
    benefits: [
      'Enhanced team capabilities and productivity',
      'Industry-recognized certifications',
      'Improved job performance and career advancement',
      'Reduced dependency on external consultants',
      'Up-to-date knowledge of latest technologies',
      'Customized training aligned with business needs',
      'Flexible delivery options (in-person, online, hybrid)'
    ],
    useCases: [
      'Employee skill development and upskilling',
      'Preparing teams for new technology implementations',
      'Compliance and certification requirements',
      'Onboarding new IT staff',
      'Building internal expertise in specific technologies',
      'Supporting career development programs'
    ]
  },
  'telecommunications-solutions': {
    slug: 'telecommunications-solutions',
    title: 'Telecommunications Solutions',
    icon: '/icons/telecom-icon.svg',
    fallbackIcon: PhoneCall,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80',
    shortDescription: 'Advanced telecom infrastructure and services for seamless communication.',
    fullDescription: 'Our Telecommunications Solutions provide comprehensive telecom infrastructure design, implementation, and management services. We help organizations build robust communication networks that support voice, data, and video services. Our services include network design, installation, optimization, and ongoing management to ensure reliable and efficient telecommunications operations.',
    features: [
      'Network Design & Architecture',
      'Voice over IP (VoIP) Implementation',
      'Unified Communications Solutions',
      'Network Infrastructure Installation',
      'Wireless Network Design & Deployment',
      'Network Performance Optimization',
      'Telecom Equipment Procurement & Installation',
      'Network Monitoring & Management',
      'Disaster Recovery & Business Continuity',
      'Telecom Cost Optimization'
    ],
    benefits: [
      'Improved communication efficiency and reliability',
      'Reduced communication costs',
      'Enhanced collaboration capabilities',
      'Scalable infrastructure for business growth',
      'Better integration of communication systems',
      '24/7 network monitoring and support',
      'Compliance with telecom regulations'
    ],
    useCases: [
      'Enterprise voice and data network deployment',
      'VoIP migration from traditional phone systems',
      'Unified communications for remote teams',
      'Network expansion and optimization',
      'Disaster recovery and redundancy planning',
      'Multi-site network connectivity'
    ]
  },
  'enterprise-cloud-solution': {
    slug: 'enterprise-cloud-solution',
    title: 'Enterprise & Cloud Solution',
    icon: '/icons/cloud-icon.svg',
    fallbackIcon: Server,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80',
    shortDescription: 'Scalable cloud solutions and infrastructure management for modern businesses.',
    fullDescription: 'Our Enterprise & Cloud Solutions help organizations leverage the power of cloud computing to improve agility, scalability, and cost-efficiency. We provide comprehensive cloud services including cloud strategy, migration, implementation, and ongoing management. Our team works with leading cloud providers (AWS, Azure, GCP) to deliver tailored solutions that meet your business objectives.',
    features: [
      'Cloud Strategy & Consulting',
      'Cloud Migration Services',
      'Multi-Cloud & Hybrid Cloud Solutions',
      'Cloud Infrastructure Design & Implementation',
      'Cloud Security & Compliance',
      'Cloud Cost Optimization',
      'DevOps & CI/CD Pipeline Setup',
      'Containerization & Orchestration (Docker, Kubernetes)',
      'Serverless Architecture Implementation',
      'Cloud Monitoring & Management'
    ],
    benefits: [
      'Reduced IT infrastructure costs',
      'Improved scalability and flexibility',
      'Enhanced business agility',
      'Better disaster recovery and business continuity',
      'Access to latest cloud technologies',
      'Improved collaboration and remote access',
      'Automated backup and recovery solutions'
    ],
    useCases: [
      'Cloud migration from on-premises infrastructure',
      'Hybrid cloud deployment for enterprise',
      'Application modernization and containerization',
      'Disaster recovery and backup solutions',
      'Scalable web application hosting',
      'Big data and analytics platform deployment'
    ]
  },
  'call-center-customer-services': {
    slug: 'call-center-customer-services',
    title: 'Call Center/Customer Services',
    icon: '/icons/call-center-icon.svg',
    fallbackIcon: Headphones,
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&q=80',
    shortDescription: 'Professional call center solutions and customer service support for optimal client satisfaction.',
    fullDescription: 'Our Call Center/Customer Services provide comprehensive customer support solutions designed to enhance customer satisfaction and improve business operations. We offer both technology solutions and managed services to help organizations deliver exceptional customer experiences. Our solutions include call center infrastructure, customer relationship management, and outsourced customer support services.',
    features: [
      'Call Center Infrastructure Setup',
      'Customer Relationship Management (CRM) Integration',
      'Interactive Voice Response (IVR) Systems',
      'Call Routing & Queue Management',
      'Omnichannel Customer Support',
      'Customer Analytics & Reporting',
      'Quality Assurance & Monitoring',
      'Outsourced Customer Support Services',
      'Help Desk & Ticketing Systems',
      'Customer Feedback & Survey Solutions'
    ],
    benefits: [
      'Improved customer satisfaction and retention',
      'Enhanced customer service efficiency',
      'Reduced customer support costs',
      'Better customer insights and analytics',
      '24/7 customer support availability',
      'Scalable support operations',
      'Professional customer service delivery'
    ],
    useCases: [
      'Customer support center setup and management',
      'Help desk and technical support services',
      'Sales and lead generation call centers',
      'Customer onboarding and retention programs',
      'Multi-channel customer communication',
      'Customer service quality improvement initiatives'
    ]
  }
}

export default function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> | { slug: string } }) {
  const [service, setService] = useState<ServiceDetail | null>(null)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)
  const [slug, setSlug] = useState<string>('')
  const router = useRouter()

  useEffect(() => {
    const getSlug = async () => {
      const resolvedParams = params instanceof Promise ? await params : params
      setSlug(resolvedParams.slug)
    }
    getSlug()
  }, [params])

  useEffect(() => {
    if (!slug) return
    const serviceData = servicesData[slug]
    if (!serviceData) {
      router.push('/services')
      return
    }
    setService(serviceData)
    setImageError(false)
    setImageLoaded(false)
  }, [slug, router])

  if (!service) {
    return null
  }

  const IconComponent = service.fallbackIcon

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
            className="mb-8"
          >
            <Link 
              href="/services" 
              className="inline-flex items-center text-mauve hover:text-mauve-dark mb-6"
            >
              <ArrowRight size={16} className="mr-2 rotate-180" />
              Back to Services
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-mauve-light rounded-lg flex items-center justify-center relative overflow-hidden p-3">
                  {!imageLoaded && <IconComponent className="text-mauve" size={40} />}
                  <img
                    src={service.icon}
                    alt={service.title}
                    className={`object-contain w-full h-full p-2 ${imageLoaded ? 'block' : 'hidden'}`}
                    onLoad={() => setImageLoaded(true)}
                    onError={() => setImageLoaded(false)}
                  />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-charcoal">
                  {service.title}
                </h1>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {service.fullDescription}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-mauve text-white rounded-lg font-semibold text-lg hover:bg-mauve-dark transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Contact Us
                <ArrowRight size={20} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-96 rounded-lg overflow-hidden shadow-xl bg-gradient-to-br from-mauve-light to-mauve/20"
            >
              {service.image && !imageError ? (
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  onLoad={() => setImageLoaded(true)}
                  onError={() => {
                    setImageError(true)
                    setImageLoaded(false)
                  }}
                  style={{ display: imageLoaded ? 'block' : 'none' }}
                />
              ) : null}
              {(imageError || !service.image || !imageLoaded) && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <IconComponent className="text-mauve/30" size={200} />
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              Key Features
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions designed to meet your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle className="text-mauve flex-shrink-0 mt-1" size={24} />
                  <p className="text-gray-700 font-medium">{feature}</p>
                </div>
              </motion.div>
            ))}
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
              Benefits
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Why choose our {service.title} service
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {service.benefits.map((benefit, index) => (
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

      {/* Use Cases Section */}
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
              Use Cases
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Common scenarios where our service delivers value
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-mauve-light to-white p-6 rounded-xl shadow-lg border border-mauve/20"
              >
                <p className="text-gray-700 font-medium">{useCase}</p>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Contact us today to discuss how our {service.title} can help transform your business.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-mauve rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get in Touch
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

