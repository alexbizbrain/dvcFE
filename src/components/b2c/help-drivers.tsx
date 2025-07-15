"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Check } from "@mui/icons-material"
import { IconButton } from "@mui/material"

interface Testimonial {
  id: number
  title: string
  content: string
  image: string
  name: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    title: "We Claimed $3,500 They Didn't Know They Were Owed",
    content:
      "Lauren's insurance never mentioned diminished value. But once we submitted her report and demand letter, she got paid $3,500 without a lawyer or hours of paperwork.",
    image: "/assets/dvcc/Frame 1618868207-2.png",
    name: "Lauren",
  },
  {
    id: 2,
    title: "Recovered $4,200 in Just 3 Weeks",
    content:
      "After our accident, we thought the insurance payout was final. The team helped us recover an additional $4,200 for diminished value we never knew existed.",
    image: "/assets/dvcc/Frame 1618868207-2.png",
    name: "Michael",
  },
  {
    id: 3,
    title: "Got $2,800 Back With Zero Hassle",
    content:
      "The entire process was digital and stress-free. Within days of submitting our information, we had a professional report and demand letter ready.",
    image: "/assets/dvcc/Frame 1618868207-2.png",
    name: "Sarah",
  },
]

const features = [
  {
    title: "100% Money-Back Guarantee",
    description:
      "Not happy with your result? If you don't win your claim, we'll refund your upfront fee. No questions asked.",
    highlight: "",
  },
  {
    title: "Pay Nothing Unless You Win",
    description: "Prefer not to pay upfront? Choose our success-based option — you only pay if your claim is approved.",
    highlight: "Win",
  },
  {
    title: "Fully Digital & Hassle Free",
    description: "Submit your info online in minutes. We handle the reports, letters, and paperwork for you.",
    highlight: "Digital",
  },
  {
    title: "Backed by Real Experts",
    description: "Our team understands insurance, vehicle value, and legal paperwork so you don't have to.",
    highlight: "Real",
  },
]

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const highlightText = (text: string, highlight: string) => {
    if (!highlight) return text

    const parts = text.split(new RegExp(`(${highlight})`, "gi"))
    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <span key={index} className="text-yellow-500">
          {part}
        </span>
      ) : (
        part
      ),
    )
  }

  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
          <div className="lg:max-w-2xl mb-6 lg:mb-0">
            <h2 className="text-2xl lg:text-2xl font-bold mb-4">See How We Help Drivers Get Back What They Deserve</h2>
            <p className="text-gray-300 text-lg">
              Explore real stories from customers who turned accidents into fair compensation with no stress and no
              legal hassle.
            </p>
          </div>
          <button className="bg-golden hover:bg-yellow-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-colors">
            Claim Your Diminished Value
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Carousel */}
        <div className="relative mb-16">
          <div className="flex items-center">
            {/* Previous Button */}
            <IconButton
              onClick={prevSlide}
              className="absolute left-0 z-10 bg-black/20 hover:bg-black/40 text-white"
              sx={{
                position: "absolute",
                left: 0,
                zIndex: 10,
                backgroundColor: "rgba(0,0,0,0.2)",
                "&:hover": { backgroundColor: "rgba(0,0,0,0.4)" },
                color: "white",
              }}
            >
              <ChevronLeft className="w-6 h-6" />
            </IconButton>

            {/* Carousel Content */}
            <div className="w-full mx-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="relative">
                  <Image
                    src={testimonials[currentSlide].image || "/placeholder.svg"}
                    alt={`Testimonial from ${testimonials[currentSlide].name}`}
                    width={600}
                    height={400}
                    className="rounded-lg object-cover w-full h-[400px]"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-6">{testimonials[currentSlide].title}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">{testimonials[currentSlide].content}</p>
                </div>
              </div>
            </div>

            {/* Next Button */}
            <IconButton
              onClick={nextSlide}
              className="absolute right-0 z-10 bg-black/20 hover:bg-black/40 text-white"
              sx={{
                position: "absolute",
                right: 0,
                zIndex: 10,
                backgroundColor: "rgba(0,0,0,0.2)",
                "&:hover": { backgroundColor: "rgba(0,0,0,0.4)" },
                color: "white",
              }}
            >
              <ChevronRight className="w-6 h-6" />
            </IconButton>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? "bg-yellow-500" : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg">
              <div className="flex items-start mb-4">
                <Check className="w-6 h-6 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                <h4 className="text-xl font-semibold">{highlightText(feature.title, feature.highlight)}</h4>
              </div>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
