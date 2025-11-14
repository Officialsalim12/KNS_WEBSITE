import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Award from '@/components/Award'
import About from '@/components/About'
import Services from '@/components/Services'
import Training from '@/components/Training'
import Partners from '@/components/Partners'
import BlogNews from '@/components/BlogNews'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Award />
      <About />
      <Partners />
      <Services />
      <Training />
      <BlogNews />
      <Contact />
      <Footer />
    </main>
  )
}

