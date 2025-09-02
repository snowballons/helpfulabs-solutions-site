import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <Image
                src="/logo.png"
                alt="Helpfulabs Solutions"
                width={180}
                height={60}
                className="h-12 w-auto brightness-0 invert"
                suppressHydrationWarning
              />
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Practical business automation and systemization for local product & service businesses in Kenya and East Africa.
            </p>
            <div className="text-sm text-gray-400">
              <p className="mb-2">📍 Nairobi, Kenya</p>
              <p className="mb-2">📧 hello@helpfulabssolutions.com</p>
              <p>📱 +254 XXX XXX XXX</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/packages" className="hover:text-white transition-colors">Packages</Link></li>
              <li><Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/health-check" className="hover:text-white transition-colors">Systems Health Check</Link></li>
              <li><Link href="/resources" className="hover:text-white transition-colors">Free Downloads</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Book Discovery Call</Link></li>
              <li><Link href="/client-portal" className="hover:text-white transition-colors">Client Portal</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Helpfulabs Solutions. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm text-gray-400">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-8 text-center">
          <div className="bg-brand rounded-lg p-6">
            <h3 className="text-xl font-heading font-semibold mb-2">Ready to simplify your business?</h3>
            <p className="text-blue-100 mb-4">Take the first step towards systematic growth</p>
            <Link href="/contact" className="btn-accent">
              Book a Discovery Call
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
