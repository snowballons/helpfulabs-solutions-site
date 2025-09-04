import Hero from '@/components/Hero'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HowItWorks from '@/components/HowItWorks'
import FeaturedServices from '@/components/FeaturedServices'
import Testimonial from '@/components/Testimonial'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <HowItWorks />
      <FeaturedServices />
      <Testimonial />
      <Footer />
    </main>
  )
}

