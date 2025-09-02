interface ServiceCardProps {
  title: string
  description: string
  deliverables: string[]
  timeline: string
  priceRange: string
  icon: string
}

export default function ServiceCard({ 
  title, 
  description, 
  deliverables, 
  timeline, 
  priceRange, 
  icon 
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 hover:shadow-md transition-shadow duration-200">
      {/* Header */}
      <div className="flex items-start mb-6">
        <div className="text-4xl mr-4">{icon}</div>
        <div>
          <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Deliverables */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-900 mb-3">What you get:</h4>
        <ul className="space-y-2">
          {deliverables.map((item, index) => (
            <li key={index} className="flex items-start">
              <svg className="w-5 h-5 text-brand-success mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700 text-sm">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Details */}
      <div className="flex justify-between items-center mb-6 text-sm">
        <div>
          <span className="text-gray-500">Timeline:</span>
          <span className="text-gray-900 font-medium ml-1">{timeline}</span>
        </div>
        <div>
          <span className="text-gray-500">Investment:</span>
          <span className="text-brand font-semibold ml-1">{priceRange}</span>
        </div>
      </div>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row gap-3">
        <a 
          href="/contact" 
          className="btn-primary text-center flex-1"
        >
          Get Started
        </a>
        <a 
          href="/health-check" 
          className="btn-secondary text-center flex-1"
        >
          Learn More
        </a>
      </div>
    </div>
  )
}
