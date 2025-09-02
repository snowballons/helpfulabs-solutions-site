import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About - Helpfulabs Solutions',
  description: 'Learn about Helpfulabs Solutions and our mission to bring big business efficiency to local small-medium businesses in Kenya and East Africa.',
}

export default function About() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-brand mb-6">
              About Helpfulabs Solutions
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              We bring big business efficiency to local businesses through practical automation and systemization.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                From Stock Controller to Systems Strategist
              </h2>
              <div className="prose prose-lg text-gray-700">
                <p className="mb-4">
                  My journey began in the trenches of business operations as a stock controller, where I experienced firsthand the chaos that comes with poor systems. I watched businesses struggle with inventory shortages, cash flow problems, and owners working 14-hour days just to keep things running.
                </p>
                <p className="mb-4">
                  Moving into data analysis and business strategy, I discovered that the same principles that make big corporations efficient could be adapted for local businesses—without the complexity or cost.
                </p>
                <p>
                  Today, Helpfulabs Solutions helps small-to-medium businesses in Kenya and East Africa implement these proven systems, giving owners the clarity, control, and confidence they need to grow sustainably.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-brand to-brand-light rounded-lg p-8 text-white">
              <h3 className="text-2xl font-heading font-bold mb-6">Our Mission</h3>
              <p className="text-lg mb-6">
                To transform how local businesses operate by making big business efficiency accessible, practical, and affordable.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-brand-accent rounded-full mr-3"></div>
                  <span>Local-first approach</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-brand-accent rounded-full mr-3"></div>
                  <span>Systems over hype</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-brand-accent rounded-full mr-3"></div>
                  <span>Owner empowerment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
              Our Approach
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We believe every local business deserves the same efficiency and clarity that big companies enjoy.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-brand text-white rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Local-First</h3>
              <p className="text-gray-600">
                We understand the unique challenges of Kenyan and East African businesses. Our solutions work in your context, with your resources, for your customers.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-brand text-white rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">No-Fluff Systems</h3>
              <p className="text-gray-600">
                We cut through the noise and implement only what truly moves the needle. Every system has a clear purpose: reduce stress, improve flow, boost profit.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-brand text-white rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Owner Empowerment</h3>
              <p className="text-gray-600">
                We don&apos;t replace you—we reposition you. From firefighting to strategic oversight, ensuring your business runs smoothly with or without you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            See where your business stands today and discover your growth opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/health-check" className="btn-primary">
              Take the Systems Health Check
            </a>
            <a href="/contact" className="btn-secondary">
              Book a Discovery Call
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
