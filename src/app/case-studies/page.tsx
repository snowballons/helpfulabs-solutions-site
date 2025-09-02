import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CaseStudyCard from '@/components/CaseStudyCard'
import CaseStudyHero from '@/components/CaseStudyHero'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Studies - Helpfulabs Solutions',
  description: 'Real success stories from local businesses in Kenya and East Africa. See how our systemization and automation services transformed operations and boosted profits.',
}

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 'nairobi-salon',
      title: 'Westlands Salon Reduces Costs by 30%',
      businessName: 'Elegance Hair & Beauty',
      businessType: 'Salon & Spa',
      location: 'Westlands, Nairobi',
      challenge: 'Double-bookings, inventory waste, staff confusion, owner working 7 days/week',
      solution: 'Brick & Mortar Efficiency Kit + Custom Staff Training',
      results: [
        '30% reduction in product waste',
        'Zero double-bookings after implementation',
        'Owner now works 3 days/week instead of 7',
        '25% increase in customer satisfaction scores',
        'KES 45,000 monthly savings on inventory'
      ],
      timeline: '3 weeks',
      investment: 'KES 35,000',
      roi: '300% ROI in first 6 months',
      testimonial: 'I finally have my weekends back and the business runs better than ever. My staff know exactly what to do, and customers are happier.',
      clientName: 'Sarah Mwangi',
      clientRole: 'Owner',
      image: '💇‍♀️',
      featured: true
    },
    {
      id: 'mombasa-restaurant',
      title: 'Coastal Restaurant Doubles Revenue',
      businessName: 'Mama Njeri\'s Kitchen',
      businessType: 'Restaurant',
      location: 'Mombasa',
      challenge: 'Inconsistent food quality, high staff turnover, poor cash flow management',
      solution: 'Complete systemization with POS integration and staff SOPs',
      results: [
        '100% increase in monthly revenue',
        '40% reduction in food waste',
        'Staff turnover reduced from 60% to 15%',
        'Consistent 4.8-star customer ratings',
        'Clear financial visibility and profit tracking'
      ],
      timeline: '5 weeks',
      investment: 'KES 65,000',
      roi: '450% ROI in first year',
      testimonial: 'Before Helpfulabs, I was working 14-hour days and still couldn\'t keep up. Now my restaurant runs like clockwork.',
      clientName: 'James Mwangi',
      clientRole: 'Owner',
      image: '🍽️',
      featured: true
    },
    {
      id: 'nakuru-pharmacy',
      title: 'Pharmacy Eliminates Stockouts',
      businessName: 'HealthPlus Pharmacy',
      businessType: 'Healthcare/Retail',
      location: 'Nakuru',
      challenge: 'Frequent stockouts, expired inventory, manual record keeping, supplier issues',
      solution: 'Product Flow System with automated inventory management',
      results: [
        '95% reduction in stockouts',
        '50% decrease in expired products',
        'Automated reorder system saves 10 hours/week',
        '20% improvement in supplier relationships',
        'Real-time inventory visibility'
      ],
      timeline: '4 weeks',
      investment: 'KES 45,000',
      roi: '280% ROI in 8 months',
      testimonial: 'We never run out of essential medicines anymore. The automated system has transformed how we manage inventory.',
      clientName: 'Dr. Grace Wanjiku',
      clientRole: 'Pharmacist & Owner',
      image: '💊',
      featured: false
    },
    {
      id: 'eldoret-gym',
      title: 'Fitness Center Streamlines Operations',
      businessName: 'PowerFit Gym',
      businessType: 'Fitness & Wellness',
      location: 'Eldoret',
      challenge: 'Manual membership tracking, equipment maintenance issues, class scheduling conflicts',
      solution: 'Service Simplifier package with member management system',
      results: [
        'Automated membership renewals increased retention by 35%',
        'Equipment downtime reduced by 60%',
        'Class booking conflicts eliminated',
        '25% increase in personal training bookings',
        'Member satisfaction score: 4.9/5'
      ],
      timeline: '3 weeks',
      investment: 'KES 30,000',
      roi: '320% ROI in 10 months',
      testimonial: 'Our members love the new booking system, and we can focus on what we do best - helping people get fit.',
      clientName: 'Michael Kiprop',
      clientRole: 'Gym Owner',
      image: '💪',
      featured: false
    },
    {
      id: 'kisumu-electronics',
      title: 'Electronics Shop Scales Successfully',
      businessName: 'TechHub Electronics',
      businessType: 'Electronics Retail',
      location: 'Kisumu',
      challenge: 'Difficulty scaling, inconsistent pricing, poor supplier management, cash flow issues',
      solution: 'Custom business audit + systemization strategy + financial structuring',
      results: [
        'Opened 2 additional locations',
        'Standardized pricing across all stores',
        'Improved supplier terms and relationships',
        '40% improvement in cash flow',
        'Systematic expansion framework established'
      ],
      timeline: '6 weeks',
      investment: 'KES 80,000',
      roi: '500% ROI in first year',
      testimonial: 'Helpfulabs gave us the systems to scale properly. We went from one struggling shop to three profitable locations.',
      clientName: 'Peter Ochieng',
      clientRole: 'Managing Director',
      image: '📱',
      featured: false
    },
    {
      id: 'thika-clinic',
      title: 'Medical Clinic Improves Patient Care',
      businessName: 'Thika Family Clinic',
      businessType: 'Healthcare',
      location: 'Thika',
      challenge: 'Long patient wait times, appointment scheduling issues, medical records management',
      solution: 'Service Simplifier with healthcare-specific customizations',
      results: [
        '60% reduction in patient wait times',
        'Digital appointment system with 95% accuracy',
        'Streamlined medical records management',
        '30% increase in patient capacity',
        'Improved patient satisfaction ratings'
      ],
      timeline: '4 weeks',
      investment: 'KES 40,000',
      roi: '250% ROI in 12 months',
      testimonial: 'Our patients are happier, our staff is less stressed, and we can serve more people effectively.',
      clientName: 'Dr. Mary Kamau',
      clientRole: 'Medical Director',
      image: '🏥',
      featured: false
    }
  ]

  const featuredCases = caseStudies.filter(study => study.featured)
  const otherCases = caseStudies.filter(study => !study.featured)

  return (
    <main>
      <Header />
      
      <CaseStudyHero />

      {/* Featured Case Studies */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4">
              Featured Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Detailed case studies showing the complete transformation journey of local businesses.
            </p>
          </div>
          
          <div className="space-y-16">
            {featuredCases.map((caseStudy, index) => (
              <CaseStudyCard key={caseStudy.id} {...caseStudy} featured={true} reverse={index % 2 === 1} />
            ))}
          </div>
        </div>
      </section>

      {/* Other Case Studies */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
              More Success Stories
            </h2>
            <p className="text-lg text-gray-600">
              Quick overviews of other businesses we&apos;ve helped transform.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {otherCases.map((caseStudy) => (
              <CaseStudyCard key={caseStudy.id} {...caseStudy} featured={false} />
            ))}
          </div>
        </div>
      </section>

      {/* Results Summary */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
              Collective Impact
            </h2>
            <p className="text-lg text-gray-600">
              The combined results across all our client businesses.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-brand mb-2">50+</div>
              <div className="text-gray-600">Businesses Transformed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand mb-2">KES 2.5M+</div>
              <div className="text-gray-600">Total Savings Generated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand mb-2">350%</div>
              <div className="text-gray-600">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand mb-2">95%</div>
              <div className="text-gray-600">Client Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600">
              Our systemization approach works across various business types.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: '💇‍♀️', name: 'Salons & Spas' },
              { icon: '🍽️', name: 'Restaurants' },
              { icon: '💊', name: 'Pharmacies' },
              { icon: '💪', name: 'Fitness Centers' },
              { icon: '📱', name: 'Electronics' },
              { icon: '🏥', name: 'Clinics' },
              { icon: '🛒', name: 'Retail Shops' },
              { icon: '🔧', name: 'Repair Services' },
              { icon: '🏪', name: 'General Stores' },
              { icon: '🚗', name: 'Auto Services' },
              { icon: '📚', name: 'Education' },
              { icon: '🏢', name: 'Professional Services' }
            ].map((industry, index) => (
              <div key={index} className="bg-white p-4 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">{industry.icon}</div>
                <div className="text-sm font-medium text-gray-700">{industry.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join the growing list of businesses that have transformed their operations with our proven systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/health-check" className="btn-accent">
              Take the Systems Health Check
            </a>
            <a href="/contact" className="bg-white text-brand px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
              Book a Discovery Call
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
