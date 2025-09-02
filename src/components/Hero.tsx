import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-brand leading-tight">
              Helpfulabs Solutions
            </h1>
            <p className="mt-6 text-xl lg:text-2xl text-gray-700 leading-relaxed">
              Practical automation and systems for local product & service businesses — run smoother, reduce owner stress, and grow profitably.
            </p>

            {/* Benefits */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-brand-success rounded-full mr-3"></div>
                <span>Reduce stock waste</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-brand-success rounded-full mr-3"></div>
                <span>Simplify finances</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-brand-success rounded-full mr-3"></div>
                <span>Keep customers coming back</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/health-check" className="btn-primary text-center">
                Take the Systems Health Check
              </Link>
              <Link href="/contact" className="btn-secondary text-center">
                Book a Discovery Call
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-500">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-brand-success mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Local-first approach
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-brand-success mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Systems & automation
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-brand-success mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Data-informed
              </div>
            </div>
          </div>

          {/* Image placeholder */}
          <div className="hidden lg:block">
            <div className="rounded-lg overflow-hidden shadow-xl bg-gradient-to-br from-brand to-brand-light">
              <div className="aspect-[4/3] flex items-center justify-center text-white">
                <div className="text-center">
                  <div className="text-6xl mb-4">🏪</div>
                  <p className="text-lg font-medium">Local Business Success</p>
                  <p className="text-sm opacity-90 mt-2">Systems that work for Kenya & East Africa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
