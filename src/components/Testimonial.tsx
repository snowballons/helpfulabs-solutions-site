export default function Testimonial() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-8">
          <svg className="w-12 h-12 text-brand-accent mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
          </svg>
        </div>
        
        <blockquote className="text-2xl lg:text-3xl font-heading text-gray-900 leading-relaxed mb-8">
          &ldquo;Before Helpfulabs, I was working 14-hour days and still couldn&apos;t keep up. Now my restaurant runs like clockwork, my staff know exactly what to do, and I actually have time to plan for growth instead of just surviving each day.&rdquo;
        </blockquote>
        
        <div className="flex items-center justify-center">
          <div className="w-16 h-16 bg-gradient-to-br from-brand to-brand-light rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
            JM
          </div>
          <div className="text-left">
            <div className="font-semibold text-gray-900">James Mwangi</div>
            <div className="text-gray-600">Owner, Mama Njeri&apos;s Kitchen</div>
            <div className="text-sm text-gray-500">Nairobi</div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-brand mb-2">50+</div>
            <div className="text-sm text-gray-600">Businesses Transformed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-brand mb-2">30%</div>
            <div className="text-sm text-gray-600">Average Cost Reduction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-brand mb-2">85%</div>
            <div className="text-sm text-gray-600">Owner Stress Reduction</div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Ready to join successful business owners who have transformed their operations?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/health-check" className="btn-primary">
              Start with Health Check
            </a>
            <a href="/case-studies" className="btn-secondary">
              Read More Success Stories
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
