'use client'

import { useState } from 'react'

interface FormData {
  name: string
  email: string
  phone: string
  businessName: string
  businessType: string
  employees: string
  challenge: string
  message: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    businessType: '',
    employees: '',
    challenge: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const businessTypes = [
    'Retail Shop',
    'Salon/Spa',
    'Restaurant/Cafe',
    'Gym/Fitness',
    'Clinic/Healthcare',
    'Repair Services',
    'Distribution/Wholesale',
    'Manufacturing',
    'Professional Services',
    'Other'
  ]

  const employeeRanges = [
    '1-5 employees',
    '6-15 employees',
    '16-30 employees',
    '31-50 employees',
    '50+ employees'
  ]

  const challenges = [
    'Inventory management issues',
    'Cash flow problems',
    'Staff accountability',
    'Customer service inconsistency',
    'Too dependent on owner',
    'Scaling difficulties',
    'Financial tracking',
    'Process inefficiencies',
    'Other'
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      const result = await response.json()
      console.log('Form submitted successfully:', result)
      setIsSubmitted(true)
    } catch (error) {
      console.error('Error submitting form:', error)
      // You could add error state handling here
      alert('There was an error submitting your message. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-brand-success text-white rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
        <p className="text-gray-600 mb-4">
          Thank you for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
        <button 
          onClick={() => {
            setIsSubmitted(false)
            setFormData({
              name: '',
              email: '',
              phone: '',
              businessName: '',
              businessType: '',
              employees: '',
              challenge: '',
              message: ''
            })
          }}
          className="text-brand hover:underline"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Personal Information */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand focus:border-transparent"
            placeholder="Your full name"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand focus:border-transparent"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand focus:border-transparent"
            placeholder="+254 XXX XXX XXX"
          />
        </div>
        
        <div>
          <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-2">
            Business Name
          </label>
          <input
            type="text"
            id="businessName"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand focus:border-transparent"
            placeholder="Your business name"
          />
        </div>
      </div>

      {/* Business Information */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-2">
            Business Type
          </label>
          <select
            id="businessType"
            name="businessType"
            value={formData.businessType}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand focus:border-transparent"
          >
            <option value="">Select business type</option>
            {businessTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label htmlFor="employees" className="block text-sm font-medium text-gray-700 mb-2">
            Number of Employees
          </label>
          <select
            id="employees"
            name="employees"
            value={formData.employees}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand focus:border-transparent"
          >
            <option value="">Select range</option>
            {employeeRanges.map((range) => (
              <option key={range} value={range}>{range}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="challenge" className="block text-sm font-medium text-gray-700 mb-2">
          Main Challenge
        </label>
        <select
          id="challenge"
          name="challenge"
          value={formData.challenge}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand focus:border-transparent"
        >
          <option value="">What&apos;s your biggest challenge?</option>
          {challenges.map((challenge) => (
            <option key={challenge} value={challenge}>{challenge}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand focus:border-transparent"
          placeholder="Tell us more about your business and what you'd like to achieve..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-3 px-6 rounded-md font-medium transition-colors duration-200 ${
          isSubmitting
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-brand hover:bg-brand-light'
        } text-white`}
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </span>
        ) : (
          'Send Message'
        )}
      </button>

      <p className="text-xs text-gray-500 text-center">
        We&apos;ll respond within 24 hours. Your information is kept confidential.
      </p>
    </form>
  )
}
