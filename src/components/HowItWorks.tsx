export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Discover",
      subtitle: "Audit & Systems Map",
      description: "We dive deep into your current operations, mapping every process and identifying bottlenecks that are costing you time and money.",
      features: ["Complete systems audit", "Pain point identification", "Opportunity mapping", "Quick wins discovery"]
    },
    {
      number: "02", 
      title: "Design",
      subtitle: "SOPs & Financial Flow",
      description: "Create clear standard operating procedures, define roles and responsibilities, and establish financial systems that give you control.",
      features: ["Custom SOP creation", "Role clarity framework", "Financial structuring", "Owner oversight design"]
    },
    {
      number: "03",
      title: "Deliver", 
      subtitle: "Automation & Training",
      description: "Implement the right tools, train your team, and establish rhythms that keep your business running smoothly without constant supervision.",
      features: ["Tool implementation", "Team training", "System integration", "Ongoing support"]
    }
  ]

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4">
            The Helpfulabs 3-Pillar System
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our proven framework transforms chaotic operations into smooth, profitable systems that work with or without you.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-16">
          {steps.map((step, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}>
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="flex items-center mb-4">
                  <span className="text-4xl font-bold text-brand-accent mr-4">{step.number}</span>
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-gray-900">{step.title}</h3>
                    <p className="text-brand font-medium">{step.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {step.description}
                </p>

                <ul className="grid grid-cols-2 gap-3">
                  {step.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 text-brand-success mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-8 text-center">
                  <div className="text-6xl mb-4">
                    {index === 0 && "🔍"}
                    {index === 1 && "⚙️"}
                    {index === 2 && "🚀"}
                  </div>
                  <div className="text-sm text-gray-600">
                    {index === 0 && "Comprehensive Business Analysis"}
                    {index === 1 && "Custom System Design"}
                    {index === 2 && "Implementation & Training"}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gray-50 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-heading font-semibold mb-4">
              See How This Applies to Your Business
            </h3>
            <p className="text-gray-600 mb-6">
              Take our free Systems Health Check to get a personalized assessment of where your business stands and what improvements would have the biggest impact.
            </p>
            <a href="/health-check" className="btn-primary">
              Take the Free Health Check
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
