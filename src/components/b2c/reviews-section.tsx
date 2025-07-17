"use client"

import ReviewCard from "./review-card"
import { ChevronRight } from "@mui/icons-material"

interface Review {
  id: number
  rating: number
  customerName: string
  customerImage: string
  reviewText: string
  platform?: string
}

interface ReviewsSectionProps {
  title?: string
  subtitle?: string
  reviews: Review[]
  ctaText?: string
  maxReviews?: number
}

export default function ReviewsSection({
  title = "Hear What Our Customers Are Saying",
  subtitle = "Honest feedback from real drivers who recovered thousands with zero hassle.",
  reviews,
  ctaText = "Get Free Estimate",
  maxReviews = 6,
}: ReviewsSectionProps) {
  const displayedReviews = reviews.slice(0, maxReviews)

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-medium text-gray-900 mb-4">{title}</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">{subtitle}</p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {displayedReviews.map((review) => (
            <ReviewCard
              key={review.id}
              rating={review.rating}
              customerName={review.customerName}
              customerImage={review.customerImage}
              reviewText={review.reviewText}
              platform={review.platform}
            />
          ))}
        </div>

        {/* CTA Button */}
        {ctaText && (
          <div className="text-center">
            <button
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 mx-auto transition-colors"
            >
              {ctaText}
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
