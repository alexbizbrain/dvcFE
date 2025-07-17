"use client"

import VideoPlayer from "../VideoPlayer";

interface PricingVideoSectionProps {
  title?: string
  subtitle?: string
  description?: string
}

export default function PricingVideoSection({
  title = "Pricing",
  subtitle = "Choose the Plan That Works for You",
  description = "We offer two simple ways to claim your diminished value — one with a flat fee, and one with no upfront cost. You choose what fits your situation best. Either way, we handle the report, legal letters, and the heavy lifting.",
}: PricingVideoSectionProps) {
  return (
    <section className="bg-primary text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-golden font-semibold text-lg mb-4">{title}</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{subtitle}</h2>
          <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed">{description}</p>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Video - Pay Upfront Option */}
          <div className="aspect-video">
            <VideoPlayer
              thumbnailSrc="/assets/dvcc/Frame 1707486563-2.png"
              thumbnailAlt="Man on phone next to car explaining diminished value claims"
              videoSrc="/assets/dvcc/video.mp4"
              videoTitle="Pay Upfront - Flat Fee Option"
              className="w-full h-full"
              thumbnailClassName="h-full"
              playButtonSize="large"
            />
          </div>

          {/* Right Video - Pay Later Option */}
          <div className="aspect-video">
            <VideoPlayer
              thumbnailSrc="/assets/dvcc/Frame 1707486564-3.png"
              thumbnailAlt="Mechanic in garage explaining no upfront cost option"
              videoSrc="/assets/dvcc/video.mp4"
              videoTitle="Pay Later - No Upfront Cost"
              className="w-full h-full"
              thumbnailClassName="h-full"
              playButtonSize="large"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
