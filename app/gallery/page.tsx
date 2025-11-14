import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import GalleryAwards from '@/components/GalleryAwards'

interface EventInfo {
  image: string
  eventName: string
  description: string
  socialLink: string
}

// Event data - update these with your actual event details and social media links
const eventData: EventInfo[] = [
  {
    image: 'WhatsApp Image 2025-11-06 at 4.53.57 PM.jpeg',
    eventName: 'Tech Training Session',
    description: 'Hands-on training covering AI, Cybersecurity, and Software Engineering fundamentals.',
    socialLink: 'https://facebook.com/your-page' // Update with your actual link
  },
  {
    image: 'WhatsApp Image 2025-11-06 at 4.53.57 PM (1).jpeg',
    eventName: 'Career Development Workshop',
    description: 'Professional development session focused on IT career paths and industry insights.',
    socialLink: 'https://facebook.com/your-page' // Update with your actual link
  },
  {
    image: 'WhatsApp Image 2025-11-06 at 4.53.57 PM (2).jpeg',
    eventName: 'Digital Innovation Summit',
    description: 'Exploring emerging technologies and digital transformation strategies.',
    socialLink: 'https://facebook.com/your-page' // Update with your actual link
  },
  {
    image: 'WhatsApp Image 2025-11-06 at 4.53.58 PM.jpeg',
    eventName: 'IT Consultancy Workshop',
    description: 'Learning about enterprise solutions, cloud infrastructure, and telecommunications.',
    socialLink: 'https://facebook.com/your-page' // Update with your actual link
  },
  {
    image: 'WhatsApp Image 2025-11-06 at 4.53.59 PM.jpeg',
    eventName: 'Networking Event',
    description: 'Building connections within the IT community and exploring collaboration opportunities.',
    socialLink: 'https://facebook.com/your-page' // Update with your actual link
  },
  {
    image: 'WhatsApp Image 2025-11-06 at 4.54.00 PM.jpeg',
    eventName: 'Cloud Computing Workshop',
    description: 'Deep dive into cloud infrastructure and modern deployment strategies.',
    socialLink: 'https://facebook.com/your-page' // Update with your actual link
  },
  {
    image: 'WhatsApp Image 2025-11-06 at 4.54.01 PM.jpeg',
    eventName: 'Software Development Bootcamp',
    description: 'Intensive coding session focused on modern development practices and tools.',
    socialLink: 'https://facebook.com/your-page' // Update with your actual link
  },
  {
    image: 'WhatsApp Image 2025-11-06 at 4.54.02 PM.jpeg',
    eventName: 'Cybersecurity Awareness',
    description: 'Understanding security threats and best practices for protecting digital assets.',
    socialLink: 'https://facebook.com/your-page' // Update with your actual link
  },
  {
    image: 'WhatsApp Image 2025-11-06 at 4.54.04 PM.jpeg',
    eventName: 'AI & Machine Learning Session',
    description: 'Exploring artificial intelligence applications and machine learning fundamentals.',
    socialLink: 'https://facebook.com/your-page' // Update with your actual link
  },
  {
    image: 'WhatsApp Image 2025-11-06 at 4.54.04 PM (1).jpeg',
    eventName: 'Tech Community Meetup',
    description: 'Gathering of tech enthusiasts to share knowledge and experiences.',
    socialLink: 'https://facebook.com/your-page' // Update with your actual link
  },
  {
    image: 'WhatsApp Image 2025-11-06 at 4.54.08 PM.jpeg',
    eventName: 'Digital Transformation Forum',
    description: 'Discussing how businesses can leverage technology for growth and innovation.',
    socialLink: 'https://facebook.com/your-page' // Update with your actual link
  },
  {
    image: 'WhatsApp Image 2025-11-06 at 4.54.08 PM (1).jpeg',
    eventName: 'Enterprise Solutions Showcase',
    description: 'Demonstrating cutting-edge enterprise IT solutions and telecommunications services.',
    socialLink: 'https://facebook.com/your-page'
  }
]

export default function GalleryPage() {
  // Use all event data as gallery items
  const galleryItems = eventData

  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-16 bg-gradient-to-b from-mauve-light/20 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-4">Gallery</h1>
            <p className="text-lg text-gray-600">Highlights from our events and activities</p>
          </div>

          {/* Awards Section */}
          <GalleryAwards />

          {/* Gallery Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Event Gallery</h2>
            <p className="text-lg text-gray-600">Highlights from our events and activities</p>
          </div>

          {galleryItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {galleryItems.map((item, idx) => (
                <div
                  key={item.image}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Image */}
                  <div className="relative aspect-video overflow-hidden group">
                    <Image
                      src={`/gallery/${item.image}`}
                      alt={item.eventName}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  
                  {/* Event Details */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-charcoal mb-2">{item.eventName}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{item.description}</p>
                    <Link
                      href={item.socialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-mauve-primary hover:text-mauve-dark font-semibold transition-colors duration-200"
                    >
                      Read More
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-600">
              No images yet. Add images to <code className="px-1 py-0.5 bg-gray-100 rounded">public/gallery</code> to populate this page.
            </div>
          )}
        </div>
      </section>
      <Footer />
    </main>
  )
}
