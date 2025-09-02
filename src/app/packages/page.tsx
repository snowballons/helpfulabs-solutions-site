import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PricingCard from '@/components/PricingCard'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Packages - Helpfulabs Solutions',
  description: 'Ready-made systemization packages for brick & mortar businesses, product flow management, and service simplification in Kenya and East Africa.',
}

export default function Packages() {
  const packages = [
    {
      name: "Brick & Mortar Efficiency Kit",
      description: "Perfect for shops, salons, gyms, and restaurants that want to streamline customer service and staff operations.",
      price: "KES 35,000",
      popular: false,
      features: [
        "POS system integration & setup",
        "Customer service flow SOPs",
        "Staff accountability framework",
        "Inventory tracking system",
        "Customer feedback system",
        "Daily/weekly reporting templates",
        "Staff training materials",
        "2 weeks implementation support"
      ],
      businessTypes: ["Retail Shops", "Salons & Spas", "Gyms & Fitness", "Restaurants & Cafes"],
      timeline: "2-3 weeks",
      icon: "🏪"
    },
    {
      name: "Product Flow System",
      description: "Ideal for businesses managing stock, suppliers, and delivery. Eliminate stockouts and overstock situations.",
      price: "KES 45,000",
      popular: true,
      features: [
        "Inventory management system setup",
        "Supplier coordination SOPs",
        "Automated reorder triggers",
        "Delivery scheduling system",
        "Stock level optimization",
        "Supplier performance tracking",
        "Cost analysis dashboard",
        "3 weeks implementation support"
      ],
      businessTypes: ["Distributors", "Wholesalers", "Manufacturing", "Import/Export"],
      timeline: "3-4 weeks",
      icon: "📦"
    },
    {
      name: "Service Simplifier",
      description: "Designed for service-based businesses to manage client relationships, scheduling, and service delivery.",
      price: "KES 30,000",
      popular: false,
      features: [
        "Client booking system setup",
        "Service delivery SOPs",
        "Automated follow-up sequences",
        "Quality control checklists",
        "Client communication templates",
        "Service pricing framework",
        "Performance tracking system",
        "2 weeks implementation support"
      ],
      businessTypes: ["Clinics & Healthcare", "Repair Services", "Consulting", "Professional Services"],
      timeline: "2-3 weeks",
      icon: "🛠️"
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
              Ready-Made Packages
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Productized solutions tailored to common business types. Get up and running with proven systems in weeks, not months.
            </p>
            <div className="bg-white rounded-lg p-6 shadow-sm inline-block">
              <p className="text-sm text-gray-600 mb-2">💡 <strong>Not sure which package fits?</strong></p>
              <a href="/health-check" className="text-brand font-medium hover:underline">
                Take our free Systems Health Check →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <PricingCard key={index} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
              Optional Add-ons
            </h2>
            <p className="text-lg text-gray-600">
              Enhance your package with additional services
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl mb-3">👨‍🏫</div>
              <h3 className="font-semibold mb-2">On-site Training</h3>
              <p className="text-sm text-gray-600 mb-3">Full team training at your location</p>
              <p className="text-brand font-bold">+KES 15,000</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl mb-3">🔄</div>
              <h3 className="font-semibold mb-2">Monthly Check-ups</h3>
              <p className="text-sm text-gray-600 mb-3">Regular system optimization</p>
              <p className="text-brand font-bold">KES 5,000/month</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-semibold mb-2">Advanced Analytics</h3>
              <p className="text-sm text-gray-600 mb-3">Custom reporting dashboard</p>
              <p className="text-brand font-bold">+KES 20,000</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-semibold mb-2">Custom Integration</h3>
              <p className="text-sm text-gray-600 mb-3">Specialized tool setup</p>
              <p className="text-brand font-bold">Quote on request</p>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6 text-center">
              Flexible Payment Options
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl mb-3">🏦</div>
                <h3 className="font-semibold mb-2">Bank Transfer</h3>
                <p className="text-sm text-gray-600">Direct bank deposit with invoice</p>
              </div>
              
              <div>
                <div className="text-3xl mb-3">📱</div>
                <h3 className="font-semibold mb-2">M-Pesa</h3>
                <p className="text-sm text-gray-600">Mobile money payments accepted</p>
              </div>
              
              <div>
                <div className="text-3xl mb-3">💳</div>
                <h3 className="font-semibold mb-2">Card Payments</h3>
                <p className="text-sm text-gray-600">Secure online card processing</p>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 text-center">
                <strong>Payment Terms:</strong> 50% deposit to start, 50% on completion. 
                Payment plans available for packages over KES 40,000.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Choose your package and start implementing proven systems today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-accent">
              Get Started Today
            </a>
            <a href="/health-check" className="bg-white text-brand px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
              Take Health Check First
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
