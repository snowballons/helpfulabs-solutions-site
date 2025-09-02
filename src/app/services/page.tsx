import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ServiceCard from '@/components/ServiceCard'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services - Helpfulabs Solutions',
  description: 'Business systems audit, systemization strategy, financial structuring, and process automation services for small-medium businesses in Kenya and East Africa.',
}

export default function Services() {
  const services = [
    {
      title: "Business Systems Audit",
      description: "Deep dive into your operations, finances, customer experience, and staff workflows to identify inefficiencies and opportunities.",
      deliverables: [
        "Comprehensive Systems Map",
        "Pain points identification",
        "Prioritized improvement recommendations",
        "Quick wins implementation guide"
      ],
      timeline: "2-3 weeks",
      priceRange: "KES 25,000 - 50,000",
      icon: "🔍"
    },
    {
      title: "Systemization Strategy",
      description: "Step-by-step blueprint to streamline your business operations with clear workflows, role clarity, and owner oversight framework.",
      deliverables: [
        "Custom SOP package",
        "Role and responsibility matrix",
        "Owner oversight framework",
        "Implementation roadmap"
      ],
      timeline: "3-4 weeks",
      priceRange: "KES 40,000 - 80,000",
      icon: "⚙️"
    },
    {
      title: "Financial Structuring",
      description: "Implement Profit First principles to separate yourself from the business and create sustainable cash flow management.",
      deliverables: [
        "Profit allocation framework",
        "Cash flow management system",
        "Owner salary structure",
        "Financial dashboard setup"
      ],
      timeline: "2-3 weeks",
      priceRange: "KES 30,000 - 60,000",
      icon: "💰"
    },
    {
      title: "Process Automation",
      description: "Recommend and set up affordable tools for inventory tracking, POS, invoicing, scheduling, and CRM to reduce manual work.",
      deliverables: [
        "Technology stack recommendations",
        "System integration and setup",
        "Staff training program",
        "Ongoing support plan"
      ],
      timeline: "3-6 weeks",
      priceRange: "KES 35,000 - 100,000",
      icon: "🤖"
    }
  ]

  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-brand mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Comprehensive business systemization services designed for small-to-medium businesses in Kenya and East Africa.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-brand-success rounded-full mr-2"></div>
                <span>Shops & Retail</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-brand-success rounded-full mr-2"></div>
                <span>Salons & Spas</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-brand-success rounded-full mr-2"></div>
                <span>Restaurants & Cafes</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-brand-success rounded-full mr-2"></div>
                <span>Clinics & Services</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
              The Helpfulabs 3-Pillar System
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our proven framework for transforming your business operations
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Discover</h3>
              <p className="text-gray-600">
                Audit your current systems and create a comprehensive map of your operations, identifying bottlenecks and opportunities.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-brand text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Design</h3>
              <p className="text-gray-600">
                Create clear SOPs, define roles and responsibilities, and establish financial flow systems that work for your business.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-brand text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Deliver</h3>
              <p className="text-gray-600">
                Implement automation tools, train your team, and establish owner oversight rhythms for sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Take our free Systems Health Check to see where your business stands and get personalized recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/health-check" className="btn-primary">
              Take the Health Check
            </a>
            <a href="/contact" className="btn-secondary">
              Request a Custom Audit
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
