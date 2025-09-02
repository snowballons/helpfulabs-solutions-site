export default function CaseStudyHero() {
  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold text-brand mb-6">
            Real Results from Real Businesses
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            See how local businesses across Kenya and East Africa have transformed their operations, reduced costs, and increased profits with our proven systemization approach.
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-brand mb-1">50+</div>
              <div className="text-sm text-gray-600">Success Stories</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-brand mb-1">350%</div>
              <div className="text-sm text-gray-600">Average ROI</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-brand mb-1">6 Months</div>
              <div className="text-sm text-gray-600">Avg. Payback Period</div>
            </div>
          </div>

          {/* Value Props */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-brand-success rounded-full mr-2"></div>
              <span>Real businesses, real results</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-brand-success rounded-full mr-2"></div>
              <span>Detailed ROI tracking</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-brand-success rounded-full mr-2"></div>
              <span>Local context & solutions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
