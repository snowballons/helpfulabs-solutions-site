'use client'

import { Id } from "../../convex/_generated/dataModel";

interface ResourceCardProps {
  _id: Id<"resources">
  title: string
  description: string
  type: string
  format: string
  pages: string
  category: string
  icon: string
  popular: boolean
  featured: boolean
  fileId: Id<"_storage">
}

export default function ResourceCard({
  _id,
  title,
  description,
  type,
  format,
  pages,
  category,
  icon,
  popular,
  featured,
  fileId
}: ResourceCardProps) {
  
  const handleDownload = () => {
    const convexSiteUrl = process.env.NEXT_PUBLIC_CONVEX_URL?.replace(".cloud", ".site");
    const downloadUrl = new URL(`${convexSiteUrl}/downloadFile`);
    downloadUrl.searchParams.set("resourceId", _id);
    window.open(downloadUrl.href, "_blank");
  }

  return (
    <div className={`bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200 ${
      featured ? 'ring-2 ring-brand ring-opacity-20' : ''
    }`}>
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start">
          <span className="text-3xl mr-3">{icon}</span>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-lg font-heading font-semibold text-gray-900">{title}</h3>
              {popular && (
                <span className="bg-brand-accent text-white text-xs px-2 py-1 rounded-full font-medium">
                  Popular
                </span>
              )}
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span className="bg-gray-100 px-2 py-1 rounded text-xs">{category}</span>
              <span>•</span>
              <span>{type}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        {description}
      </p>

      {/* Details */}
      <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>{format}</span>
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <span>{pages}</span>
          </div>
        </div>
      </div>

      {/* Download Button */}
      <button
        onClick={handleDownload}
        className="w-full bg-brand text-white py-3 px-4 rounded-md font-medium hover:bg-brand-light transition-colors duration-200 flex items-center justify-center"
      >
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        Download Free
      </button>

      {/* Email Capture Note */}
      <p className="text-xs text-gray-500 text-center mt-2">
        No email required • Instant download
      </p>
    </div>
  )
}
