interface CaseStudyCardProps {
  id: string
  title: string
  businessName: string
  businessType: string
  location: string
  challenge: string
  solution: string
  results: string[]
  timeline: string
  investment: string
  roi: string
  testimonial: string
  clientName: string
  clientRole: string
  image: string
  featured: boolean
  reverse?: boolean
}

export default function CaseStudyCard({
  title,
  businessName,
  businessType,
  location,
  challenge,
  solution,
  results,
  timeline,
  investment,
  roi,
  testimonial,
  clientName,
  clientRole,
  image,
  featured,
  reverse = false
}: CaseStudyCardProps) {
  
  if (featured) {
    return (
      <div className={`grid lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:grid-flow-col-dense' : ''}`}>
        {/* Content */}
        <div className={reverse ? 'lg:col-start-2' : ''}>
          <div className="flex items-center mb-4">
            <span className="text-4xl mr-4">{image}</span>
            <div>
              <h3 className="text-2xl font-heading font-bold text-gray-900">{title}</h3>
              <p className="text-brand font-medium">{businessName} • {location}</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">The Challenge:</h4>
              <p className="text-gray-700">{challenge}</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Our Solution:</h4>
              <p className="text-gray-700">{solution}</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Results Achieved:</h4>
              <ul className="space-y-2">
                {results.map((result, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-brand-success mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Stats & Testimonial */}
        <div className={`${reverse ? 'lg:col-start-1' : ''}`}>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            {/* Key Metrics */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-brand mb-1">{timeline}</div>
                <div className="text-xs text-gray-600">Timeline</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand mb-1">{investment}</div>
                <div className="text-xs text-gray-600">Investment</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-success mb-1">{roi}</div>
                <div className="text-xs text-gray-600">Return</div>
              </div>
            </div>
            
            {/* Testimonial */}
            <div className="border-t pt-6">
              <div className="mb-4">
                <svg className="w-8 h-8 text-brand-accent mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>
              <blockquote className="text-gray-700 text-center mb-4 italic">
                &ldquo;{testimonial}&rdquo;
              </blockquote>
              <div className="text-center">
                <div className="font-semibold text-gray-900">{clientName}</div>
                <div className="text-sm text-gray-600">{clientRole}</div>
                <div className="text-sm text-gray-500">{businessName}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Compact version for non-featured case studies
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
      {/* Header */}
      <div className="flex items-start mb-4">
        <span className="text-3xl mr-3">{image}</span>
        <div className="flex-1">
          <h3 className="text-lg font-heading font-semibold text-gray-900 mb-1">{title}</h3>
          <p className="text-sm text-brand font-medium">{businessName} • {location}</p>
          <p className="text-xs text-gray-500">{businessType}</p>
        </div>
      </div>

      {/* Key Results */}
      <div className="mb-4">
        <h4 className="font-medium text-gray-900 mb-2 text-sm">Key Results:</h4>
        <ul className="space-y-1">
          {results.slice(0, 3).map((result, index) => (
            <li key={index} className="flex items-start text-sm">
              <svg className="w-4 h-4 text-brand-success mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-600">{result}</span>
            </li>
          ))}
          {results.length > 3 && (
            <li className="text-sm text-gray-500 ml-6">+ {results.length - 3} more results</li>
          )}
        </ul>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-3 gap-3 mb-4 text-center">
        <div className="bg-gray-50 p-2 rounded">
          <div className="text-sm font-bold text-brand">{timeline}</div>
          <div className="text-xs text-gray-600">Timeline</div>
        </div>
        <div className="bg-gray-50 p-2 rounded">
          <div className="text-sm font-bold text-brand">{investment}</div>
          <div className="text-xs text-gray-600">Investment</div>
        </div>
        <div className="bg-gray-50 p-2 rounded">
          <div className="text-sm font-bold text-brand-success">{roi}</div>
          <div className="text-xs text-gray-600">ROI</div>
        </div>
      </div>

      {/* Testimonial */}
      <div className="border-t pt-4">
        <blockquote className="text-sm text-gray-600 italic mb-2">
          &ldquo;{testimonial.length > 100 ? testimonial.substring(0, 100) + '...' : testimonial}&rdquo;
        </blockquote>
        <div className="text-xs text-gray-500">
          <span className="font-medium">{clientName}</span>, {clientRole}
        </div>
      </div>
    </div>
  )
}
