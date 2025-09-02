import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Systems Health Check - AI-Powered Business Assessment | Helpfulabs Solutions',
  description: 'Get an instant AI-powered assessment of your business systems. Identify gaps, inefficiencies, and opportunities for automation and growth.',
}

export default function HealthCheckPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold text-brand leading-tight">
            Systems Health Check
          </h1>
          <p className="mt-6 text-xl lg:text-2xl text-gray-700 leading-relaxed">
            Get an instant AI-powered assessment of your business systems and discover exactly where to focus your improvement efforts.
          </p>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand">
              What to Expect
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our AI-powered tool will analyze your business across key areas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-brand text-white rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold text-brand mb-2">
                Quick Assessment
              </h3>
              <p className="text-gray-600">
                Answer 15-20 targeted questions about your current business operations in under 10 minutes.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-brand text-white rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold text-brand mb-2">
                AI Analysis
              </h3>
              <p className="text-gray-600">
                Our AI evaluates your responses against proven business system frameworks and best practices.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-brand text-white rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold text-brand mb-2">
                Instant Results
              </h3>
              <p className="text-gray-600">
                Receive a detailed report with your business health score and prioritized improvement recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand">
              Assessment Areas
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We'll evaluate your business across these critical system areas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-brand-success rounded-full mt-3"></div>
                <div>
                  <h3 className="text-lg font-semibold text-brand">Financial Systems</h3>
                  <p className="text-gray-600">Cash flow management, profit tracking, and financial controls</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-brand-success rounded-full mt-3"></div>
                <div>
                  <h3 className="text-lg font-semibold text-brand">Operations & Processes</h3>
                  <p className="text-gray-600">Standard operating procedures, workflow efficiency, and quality control</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-brand-success rounded-full mt-3"></div>
                <div>
                  <h3 className="text-lg font-semibold text-brand">Customer Management</h3>
                  <p className="text-gray-600">Customer acquisition, retention, and service delivery systems</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-brand-success rounded-full mt-3"></div>
                <div>
                  <h3 className="text-lg font-semibold text-brand">Inventory & Supply Chain</h3>
                  <p className="text-gray-600">Stock management, supplier relationships, and procurement processes</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-brand-success rounded-full mt-3"></div>
                <div>
                  <h3 className="text-lg font-semibold text-brand">Team & Leadership</h3>
                  <p className="text-gray-600">Staff management, training systems, and delegation frameworks</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-brand-success rounded-full mt-3"></div>
                <div>
                  <h3 className="text-lg font-semibold text-brand">Technology & Automation</h3>
                  <p className="text-gray-600">Digital tools, automation opportunities, and system integration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon CTA */}
      <section className="py-16 lg:py-24 bg-brand text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
            Coming Soon
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            We're putting the finishing touches on this powerful AI assessment tool. Be the first to know when it's ready!
          </p>
          <Link 
            href="/newsletter" 
            className="inline-block bg-brand-accent hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200"
          >
            Get Notified When Ready
          </Link>
          <p className="mt-4 text-sm text-blue-200">
            Join our newsletter for early access and exclusive business tips
          </p>
        </div>
      </section>
    </div>
  )
}
