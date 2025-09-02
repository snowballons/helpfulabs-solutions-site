import Link from 'next/link'

export default function FeaturedServices() {
  const services = [
    {
      title: "Business Systems Audit",
      description: "Get a complete map of your operations and identify exactly where you're losing time and money.",
      icon: "🔍",
      price: "From KES 25,000",
      href: "/services"
    },
    {
      title: "Ready-Made Packages", 
      description: "Proven systemization kits for specific business types. Get up and running in weeks, not months.",
      icon: "📦",
      price: "From KES 30,000",
      href: "/packages"
    },
    {
      title: "Process Automation",
      description: "Set up affordable tools and integrations that eliminate manual work and reduce errors.",
      icon: "🤖", 
      price: "From KES 35,000",
      href: "/services"
    }
  ]

  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4">
            How We Help Your Business
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you need a complete systems overhaul or targeted improvements, we have solutions that fit your business and budget.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-8 text-center hover:shadow-md transition-shadow duration-200">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-heading font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
              <div className="text-brand font-semibold mb-4">{service.price}</div>
              <Link href={service.href} className="btn-secondary">
                Learn More
              </Link>
            </div>
          ))}
        </div>

        {/* Mini Case Study */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-brand-success rounded-full mr-3"></div>
                <span className="text-sm font-medium text-brand-success">SUCCESS STORY</span>
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">
                Nairobi Salon Reduces Costs by 20%
              </h3>
              <p className="text-gray-700 mb-4">
                A busy salon in Westlands was struggling with double-bookings, inventory shortages, and staff confusion. After implementing our Brick & Mortar Efficiency Kit:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-brand-success mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Eliminated double-bookings with automated scheduling
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-brand-success mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Reduced product waste by 30% with inventory tracking
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-brand-success mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Owner now works 3 days/week instead of 7
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-brand to-brand-light rounded-lg p-8 text-white text-center">
              <div className="text-4xl mb-4">💇‍♀️</div>
              <div className="text-3xl font-bold mb-2">20%</div>
              <div className="text-lg mb-4">Cost Reduction</div>
              <div className="text-sm opacity-90">
                &ldquo;I finally have my weekends back and the business runs better than ever.&rdquo;
              </div>
              <div className="text-xs mt-2 opacity-75">- Sarah M., Salon Owner</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
