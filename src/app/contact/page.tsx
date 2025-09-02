import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import BookingForm from '@/components/BookingForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact - Helpfulabs Solutions',
  description: 'Get in touch with Helpfulabs Solutions. Book a discovery call or request information about our business automation and systemization services.',
}

export default function Contact() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-brand mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Ready to transform your business operations? Let&apos;s discuss how we can help you build systems that work.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl mb-2">📞</div>
                <div className="font-medium">Phone</div>
                <div className="text-gray-600">+254 XXX XXX XXX</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl mb-2">📧</div>
                <div className="font-medium">Email</div>
                <div className="text-gray-600">hello@helpfulabssolutions.com</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl mb-2">📍</div>
                <div className="font-medium">Location</div>
                <div className="text-gray-600">Nairobi, Kenya</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 gap-12 max-w-4xl mx-auto">
            
            {/* Discovery Call Booking */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-brand text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-heading font-bold mb-2">Book a Discovery Call</h2>
                <p className="text-gray-600">
                  Schedule a free 30-minute consultation to discuss your business challenges and explore solutions.
                </p>
              </div>
              <BookingForm />
            </div>

            {/* General Contact */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-brand-accent text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-heading font-bold mb-2">Send a Message</h2>
                <p className="text-gray-600">
                  Have questions about our services? Send us a message and we&apos;ll get back to you within 24 hours.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about working with Helpfulabs Solutions
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-3">How long does a typical project take?</h3>
              <p className="text-gray-600">
                Most systemization projects take 2-6 weeks depending on complexity. Our ready-made packages can be implemented in 2-3 weeks, while custom audits and strategies may take 4-6 weeks.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-3">Do you work with businesses outside Nairobi?</h3>
              <p className="text-gray-600">
                Yes! We serve businesses across Kenya and East Africa. Most of our work can be done remotely, with optional on-site visits for training and implementation.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-3">What&apos;s included in the discovery call?</h3>
              <p className="text-gray-600">
                During our 30-minute discovery call, we&apos;ll discuss your current challenges, identify quick wins, and recommend the best approach for your business. There&apos;s no obligation to proceed.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-3">What payment methods do you accept?</h3>
              <p className="text-gray-600">
                We accept bank transfers, M-Pesa, and card payments. Payment plans are available for projects over KES 40,000, typically 50% deposit and 50% on completion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Response Time Promise */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-brand rounded-lg p-8 text-white">
            <h2 className="text-2xl font-heading font-bold mb-4">Our Response Promise</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold mb-2">24hrs</div>
                <div className="text-sm opacity-90">Email Response Time</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">48hrs</div>
                <div className="text-sm opacity-90">Discovery Call Scheduling</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-sm opacity-90">Follow-through Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
