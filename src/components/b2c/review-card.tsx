import Image from "next/image"
import { Star } from "@mui/icons-material"

interface ReviewCardProps {
  rating: number
  customerName: string
  customerImage: string
  reviewText: string
  platform?: string
}

export default function ReviewCard({
  rating,
  customerName,
  customerImage,
  reviewText,
  platform = "Trustpilot",
}: ReviewCardProps) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
      {/* Rating and Customer Info */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <span className="text-lg font-semibold">{rating}</span>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-4 h-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
            ))}
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Image
            src={customerImage || "/placeholder.svg"}
            alt={customerName}
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="text-sm font-medium text-gray-700">{customerName}</span>
        </div>
      </div>

      {/* Platform Badge */}
      <div className="flex items-center mb-4">
        <div className="flex items-center space-x-1">
          <Star className="w-3 h-3 fill-green-500 text-green-500" />
          <span className="text-sm font-medium text-green-600">{platform}</span>
        </div>
      </div>

      {/* Review Text */}
      <p className="text-gray-700 text-sm leading-relaxed">{reviewText}</p>
    </div>
  )
}
