"use client"

import { Button } from "@mui/material"
import Image from "next/image"

interface PricingFeature {
  name: string
  standard: string | boolean
  contingency: string | boolean
  text?: string
}

const pricingFeatures: PricingFeature[] = [
  {
    name: "Upfront Payment",
    standard: "$399",
    contingency: "$0",
  },
  {
    name: "Payment Method",
    standard: "Flat one-time fee",
    contingency: "12% of final settlement amount",
  },
  {
    name: "DV Report",
    standard: true,
    contingency: true,
    text:"included",
  },
  {
    name: "Demand & Subrogation Letters",
    standard: true,
    contingency: true,
    text:"included",
  },
  {
    name: "Report Delivery Time",
    standard: "24-48 hours",
    contingency: "24-48 hours after contract signed",
  },
  {
    name: "Refund Policy",
    standard: "Full refund if claim denied",
    contingency: "Not applicable",
  },
  {
    name: "Legal Contract Signing Required",
    standard: false,
    contingency: "Before report is created",
    text:"Before report is created",
  },
  {
    name: "Bi-weekly Claim Check-ins",
    standard: false,
    contingency: "Email follow-ups",
    text:"Email follow-ups",
  },
  {
    name: "Good For",
    standard: "Quick claims with lower risk",
    contingency: "Customers with no upfront budget",
  },
  {
    name: "Referral Code Discount",
    standard: "Applied at checkout",
    contingency: "Applied after signup",
    text:"Applied at checkout",
  },
]

interface PricingComparisonProps {
  title?: string
  subtitle?: string
  description?: string
  onStandardClick?: () => void
  onContingencyClick?: () => void
}

export default function PricingComparison({
  title = "Not Sure Which to Choose?",
  subtitle = "Compare the Plans",
  description = "Both plans come with everything you need — expert reports, legal support, and our guidance. One offers an upfront discount, the other gives you a risk-free way to claim.",
  onStandardClick,
  onContingencyClick,
}: PricingComparisonProps) {
  const renderFeatureValue = (value: string | boolean, text?: string, isStandard = true) => {
    if (typeof value === "boolean") {
      return value ? (
        <div className="flex justify-center">
          <Image
            src="/assets/dvcc/check-circle.svg"
            alt="close"
            width={24}
            height={24}
        />
        {text && <span className="ml-2 hidden md:block">{text}</span>}
        </div>
      ) : (
        <div className="flex justify-center">
          <Image
            src="/assets/dvcc/x-circle.svg"
            alt="close"
            width={24}
            height={24}
          />
        </div>
      )
    }

    if (value === "Before report is created") {
      return (
        <div className="flex justify-center">
          <Image
            src="/assets/dvcc/check-circle.svg"
            alt="close"
            width={24}
            height={24}
        />
        {text && <span className="ml-2 hidden md:block">{text}</span>}
        </div>
      )
    }

    if (value === "Email follow-ups") {
      return (
        <div className="flex justify-center">
          <Image
            src="/assets/dvcc/check-circle.svg"
            alt="close"
            width={24}
            height={24}
        />
        {text && <span className="ml-2 hidden md:block">{text}</span>}
        </div>
      )
    }

    if (value === "Applied at checkout") {
      return (
        <div className="flex justify-center">
          <Image
            src="/assets/dvcc/check-circle.svg"
            alt="close"
            width={24}
            height={24}
        />
        {text && <span className="ml-2 hidden md:block">{text}</span>}
        </div>
      )
    }
    if (value === "Applied after signup") {
      return (
        <div className="flex justify-center">
          <Image
            src="/assets/dvcc/check-circle.svg"
            alt="close"
            width={24}
            height={24}
        />
        {text && <span className="ml-2 hidden md:block">Applied after signup</span>}
        </div>
      )
    }

    return <span className="text-center block">{value}</span>
  }

  return (
    <section className="bg-primary text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {title} <span className="text-golden">{subtitle}</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed">{description}</p>
        </div>

        {/* Desktop View */}
        <div className="hidden md:block">
          {/* Plan Headers */}
          <div className="grid grid-cols-3 gap-8 mb-8">
            <div></div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 border-b pb-2.5 border-b-gray-800">Standard (Pay Now)</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">$399</span>
                <span className="text-gray-400 ml-2">flat fee</span>
              </div>
              <Button
                onClick={onStandardClick}
                fullWidth
                sx={{
                  backgroundColor: "#A87C39",
                  color: "white",
                  padding: "12px 24px",
                  borderRadius: "8px",
                  fontSize: "16px",
                  fontWeight: 600,
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#A87C39",
                  },
                }}
              >
                Get started
              </Button>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 border-b pb-2.5 border-b-gray-800">Contingency (Pay Later)</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-gray-400 ml-2">upfront (12% after insurance payout)</span>
              </div>
              <Button
                onClick={onContingencyClick}
                fullWidth
                sx={{
                  backgroundColor: "#A87C39",
                  color: "white",
                  padding: "12px 24px",
                  borderRadius: "8px",
                  fontSize: "16px",
                  fontWeight: 600,
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#A87C39",
                  },
                }}
              >
                Get started
              </Button>
            </div>
          </div>

          {/* Feature Header */}
          <div className="grid grid-cols-3 gap-8 mb-4">
            <div className="text-golden font-semibold">Feature</div>
            <div></div>
            <div></div>
          </div>

          {/* Feature Comparison */}
          <div className="space-y-4">
            {pricingFeatures.map((feature, index) => (
              <div key={index} className="grid grid-cols-3 gap-8 p-4  bg-secondary">
                <div className="text-gray-300">{feature.name}</div>
                <div className="text-center">{renderFeatureValue(feature.standard, feature.text, true)}</div>
                <div className="text-center">{renderFeatureValue(feature.contingency, feature.text, false)}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden space-y-8">
          {/* Standard Plan */}
          <div className="bg-primary rounded-2xl p-6">
            <h3 className="text-2xl font-bold mb-4 text-center border-b pb-2.5 border-b-gray-800">Standard (Pay Now)</h3>
            <div className="text-center mb-6">
              <span className="text-4xl font-bold">$399</span>
              <span className="text-gray-400 ml-2 block">One-Time</span>
            </div>
            <Button
              onClick={onStandardClick}
              fullWidth
              sx={{
                backgroundColor: "#A87C39",
                color: "white",
                padding: "12px 24px",
                borderRadius: "8px",
                fontSize: "16px",
                fontWeight: 600,
                textTransform: "none",
                marginBottom: "24px",
                "&:hover": {
                  backgroundColor: "#A87C39",
                },
              }}
            >
              Get started
            </Button>

            <div className="space-y-4">
              <div className="text-golden font-semibold mb-4">Feature</div>
              {pricingFeatures.map((feature, index) => (
                <div key={index} className="flex justify-between items-center p-2  bg-secondary">
                  <span className="text-gray-300 text-sm">{feature.name}</span>
                  <div className="text-right">{renderFeatureValue(feature.standard, feature.text, true)}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Contingency Plan */}
          <div className="bg-primary rounded-2xl p-6">
            <h3 className="text-2xl font-bold mb-4 text-center border-b pb-2.5 border-b-gray-800">Contingency (Pay Later)</h3>
            <div className="text-center mb-6">
              <span className="text-4xl font-bold">$0</span>
              <span className="text-gray-400 ml-2 block">12% of final payout</span>
            </div>
            <Button
              onClick={onContingencyClick}
              fullWidth
              sx={{
                backgroundColor: "#A87C39",
                color: "white",
                padding: "12px 24px",
                borderRadius: "8px",
                fontSize: "16px",
                fontWeight: 600,
                textTransform: "none",
                marginBottom: "24px",
                "&:hover": {
                  backgroundColor: "#A87C39",
                },
              }}
            >
              Get started
            </Button>

            <div className="space-y-4">
              <div className="text-golden font-semibold mb-4">Feature</div>
              {pricingFeatures.map((feature, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-gray-700">
                  <span className="text-gray-300 text-sm">{feature.name}</span>
                  <div className="text-right">{renderFeatureValue(feature.contingency, feature.text, false)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
