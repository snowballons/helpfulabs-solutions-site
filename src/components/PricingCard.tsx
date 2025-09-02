interface PricingCardProps {
  name: string
  description: string
  price: string
  popular?: boolean
  features: string[]
  businessTypes: string[]
  timeline: string
  icon: string
}

export default function PricingCard({ 
  name, 
  description, 
  price, 
  popular = false, 
  features, 
  businessTypes, 
  timeline, 
  icon 
}: PricingCardProps) {
  return (
    <div className={`relative bg-white rounded-lg shadow-sm border-2 p-8 ${
      popular ? 'border-brand-accent' : 'border-gray-200'
    } hover:shadow-md transition-shadow duration-200`}>
      
      {/* Popular Badge */}
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-brand-accent text-white px-4 py-1 rounded-full text-sm font-medium">
            Most Popular
          </span>
        </div>
      )}

      {/* Header */}
      <div className="text-center mb-6">
        <div className="text-4xl mb-3">{icon}</div>
        <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">
          {name}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {description}
        </p>
        <div className="text-3xl font-bold text-brand mb-1">{price}</div>
        <div className="text-sm text-gray-500">One-time investment</div>
      </div>

      {/* Business Types */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-900 mb-3 text-sm">Perfect for:</h4>
        <div className="flex flex-wrap gap-2">
          {businessTypes.map((type, index) => (
            <span 
              key={index} 
              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs"
            >
              {type}
            </span>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-900 mb-3 text-sm">What&apos;s included:</h4>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg className="w-4 h-4 text-brand-success mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Timeline */}
      <div className="mb-6 p-3 bg-gray-50 rounded-lg">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Implementation:</span>
          <span className="font-medium text-gray-900">{timeline}</span>
        </div>
      </div>

      {/* CTA */}
      <div className="space-y-3">
        <a 
          href="/contact" 
          className={`block text-center px-6 py-3 rounded-md font-medium transition-colors duration-200 ${
            popular 
              ? 'bg-brand-accent text-white hover:opacity-90' 
              : 'bg-brand text-white hover:bg-brand-light'
          }`}
        >
          Choose This Package
        </a>
        <a 
          href="/health-check" 
          className="block text-center px-6 py-3 rounded-md font-medium border-2 border-gray-300 text-gray-700 hover:border-brand hover:text-brand transition-colors duration-200"
        >
          Learn More
        </a>
      </div>
    </div>
  )
}
