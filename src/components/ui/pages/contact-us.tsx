"use client"

import type React from "react"

import { EmailOutlined, LocationOnOutlined ,PhoneOutlined } from "@mui/icons-material"

interface ContactMethod {
  id: number
  icon: React.ReactNode
  title: string
  description: string
  details: string | string[]
}

const contactMethods: ContactMethod[] = [
  {
    id: 1,
    icon: <EmailOutlined className="text-4xl text-golden" />,
    title: "Email",
    description: "Our friendly team is here to help.",
    details: "hi@email.com",
  },
  {
    id: 2,
    icon: <LocationOnOutlined className="text-4xl text-golden" />,
    title: "Office",
    description: "Come say hello at our office HQ.",
    details: ["100 Smith Street", "Collingwood VIC 3066 AU"],
  },
  {
    id: 3,
    icon: <PhoneOutlined className="text-4xl text-golden" />,
    title: "Phone",
    description: "Mon-Fri from 8am to 5pm.",
    details: "+1 (800) 123-4567",
  },
]

interface ContactSectionProps {
  title?: string
  subtitle?: string
  description?: string
}

export default function ContactSection({
  title = "Contact us",
  subtitle = "Get in Touch With Our Team",
  description = "Whether you're a driver with questions about your claim or a partner looking to connect, we're here to help.",
}: ContactSectionProps) {
  return (
    <section className="bg-primary text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-golden font-medium text-lg mb-4">{title}</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">{subtitle}</h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">{description}</p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {contactMethods.map((method) => (
            <div key={method.id} className="text-center flex justify-center flex-col items-center">
              {/* Icon */}
              <div className="flex justify-center items-center w-14 h-14 rounded-full bg-secondary mb-6">{method.icon}</div>

              {/* Title */}
              <h3 className="text-2xl font-medium mb-4">{method.title}</h3>

              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">{method.description}</p>

              {/* Contact Details */}
              <div className="text-golden font-medium">
                {Array.isArray(method.details) ? (
                  <div className="space-y-1">
                    {method.details.map((detail, index) => (
                      <div key={index}>{detail}</div>
                    ))}
                  </div>
                ) : (
                  <div>{method.details}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
