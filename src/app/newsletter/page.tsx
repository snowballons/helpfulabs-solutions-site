import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Newsletter Signup - Get Notified | Helpfulabs Solutions',
  description: 'Join our newsletter to get notified when the AI-powered Systems Health Check tool is ready, plus exclusive business tips.',
}

export default function NewsletterPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-16">
      <div className="max-w-md w-full mx-auto px-6">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-heading font-bold text-brand mb-4">
              Stay Updated
            </h1>
            <p className="text-gray-600">
              Get notified when our AI-powered Systems Health Check tool is ready, plus receive exclusive business automation tips.
            </p>
          </div>

          {/* Newsletter Form Placeholder */}
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                First Name (Optional)
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-brand hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Notify Me When Ready
            </button>
          </div>

          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500 mb-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
            <Link 
              href="/health-check" 
              className="text-brand hover:text-teal-700 text-sm font-medium"
            >
              ← Back to Health Check
            </Link>
          </div>

          {/* What You'll Get */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">What you'll get:</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 bg-brand-success rounded-full mr-3"></div>
                Early access to the Health Check tool
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 bg-brand-success rounded-full mr-3"></div>
                Weekly business automation tips
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 bg-brand-success rounded-full mr-3"></div>
                Exclusive resources and guides
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
