"use client";

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ResourceCard from '@/components/ResourceCard'
import { useQuery } from 'convex/react';
import { api } from '@/../convex/_generated/api';

export default function Resources() {
  const resources = useQuery(api.resources.getResources);

  if (!resources) {
    return <div>Loading...</div>;
  }

  const categories = ['All', 'Assessment', 'Operations', 'Finance', 'HR', 'Customer Service', 'Analytics', 'Marketing']
  const popularResources = resources.filter(resource => resource.popular)
  const allResources = resources

  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-brand mb-6">
              Free Business Resources
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Proven templates, checklists, and tools to help you systemize your business operations. All resources are designed specifically for small-medium businesses in Kenya and East Africa.
            </p>
            <div className="bg-white rounded-lg p-6 shadow-sm inline-block">
              <p className="text-sm text-gray-600 mb-2">
                <strong>💡 Pro Tip:</strong> Start with the Business Systems Audit Checklist to identify your biggest opportunities.
              </p>
              <a href="#popular-resources" className="text-brand font-medium hover:underline">
                View Popular Resources →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Resources */}
      <section id="popular-resources" className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
              Most Popular Downloads
            </h2>
            <p className="text-lg text-gray-600">
              The resources our clients find most valuable for transforming their operations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularResources.map((resource) => (
              <ResourceCard key={resource._id} {...resource} featured={true} />
            ))}
          </div>
        </div>
      </section>

      {/* All Resources */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
              Complete Resource Library
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Browse all available resources by category.
            </p>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full text-sm font-medium border border-gray-300 hover:border-brand hover:text-brand transition-colors duration-200"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allResources.map((resource) => (
              <ResourceCard key={resource._id} {...resource} featured={false} />
            ))}
          </div>
        </div>
      </section>

      {/* How to Use Resources */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
              How to Use These Resources
            </h2>
            <p className="text-lg text-gray-600">
              Get the most value from our free business tools.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Assess Your Current State</h3>
              <p className="text-gray-600">
                Start with our audit checklist to understand where your business stands and identify the biggest opportunities for improvement.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-brand text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Implement Systematically</h3>
              <p className="text-gray-600">
                Use our templates and tools to create systems one area at a time. Focus on high-impact areas first for quick wins.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-brand text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Track & Optimize</h3>
              <p className="text-gray-600">
                Monitor your progress with our KPI dashboard and continuously refine your systems based on real results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Need More Help */}
      <section className="bg-brand py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Need Personalized Help?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            While our free resources are powerful, sometimes you need customized solutions for your specific business challenges.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">🎯 Systems Health Check</h3>
              <p className="text-sm opacity-90 mb-4">
                Get a personalized assessment of your business systems and receive custom recommendations.
              </p>
              <a href="/health-check" className="btn-accent">
                Take Free Assessment
              </a>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">💬 Discovery Call</h3>
              <p className="text-sm opacity-90 mb-4">
                Discuss your specific challenges with our systemization experts and explore custom solutions.
              </p>
              <a href="/contact" className="bg-white text-brand px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
                Book Free Call
              </a>
            </div>
          </div>
          <p className="text-sm opacity-75">
            All consultations are free with no obligation. We&apos;re here to help you succeed.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
