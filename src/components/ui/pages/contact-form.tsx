"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@mui/material"
import CustomTextField from "../text-field"
import PhoneInput from "../phone-input"

interface FormData {
    firstName: string
    lastName: string
    email: string
    phone: string
    message: string
}

interface ContactFormSectionProps {
    title?: string
    onSubmit?: (data: FormData) => void
}

export default function ContactFormSection({
    title = "Got a Question? Reach Out Anytime",
    onSubmit,
}: ContactFormSectionProps) {
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    })

    const [errors, setErrors] = useState<Partial<FormData>>({})

    const handleInputChange = (field: keyof FormData) => (value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }))
        // Clear error when user starts typing
        if (errors[field]) {
            setErrors((prev) => ({ ...prev, [field]: "" }))
        }
    }

    const validateForm = (): boolean => {
        const newErrors: Partial<FormData> = {}

        if (!formData.firstName.trim()) {
            newErrors.firstName = "First name is required"
        }
        if (!formData.lastName.trim()) {
            newErrors.lastName = "Last name is required"
        }
        if (!formData.email.trim()) {
            newErrors.email = "Email is required"
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Please enter a valid email"
        }
        if (!formData.message.trim()) {
            newErrors.message = "Message is required"
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (validateForm()) {
            onSubmit?.(formData)
            console.log("Form submitted:", formData)
        }
    }

    return (
        <section className="bg-white">
            <div className="max-w-none">
                <div className="grid lg:grid-cols-2 min-h-screen">
                    {/* Left side - Image */}
                    <div className="relative w-full h-[300px] sm:h-[400px] lg:h-auto">
                        <Image
                            src="/assets/dvcc/phone.png"
                            alt="Vintage telephone"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Right side - Form */}
                    <div className="bg-white p-8 lg:p-16 flex flex-col justify-center h-full">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">{title}</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name fields */}
                            <div className="grid md:grid-cols-2 gap-4">
                                <CustomTextField
                                    label="First name"
                                    value={formData.firstName}
                                    onChange={(e) => handleInputChange("firstName")(e.target.value)}
                                    error={!!errors.firstName}
                                    helperText={errors.firstName}
                                />
                                <CustomTextField
                                    label="Last name"
                                    value={formData.lastName}
                                    onChange={(e) => handleInputChange("lastName")(e.target.value)}
                                    error={!!errors.lastName}
                                    helperText={errors.lastName}
                                />
                            </div>
                            <CustomTextField
                                label="Email"
                                type="email"
                                value={formData.email}
                                onChange={(e) => handleInputChange("email")(e.target.value)}
                                error={!!errors.email}
                                helperText={errors.email}
                            />
                            <PhoneInput
                                label="Phone number"
                                value={formData.phone}
                                onChange={handleInputChange("phone")}
                            />
                            <CustomTextField
                                label="Message"
                                multiline
                                rows={4}
                                value={formData.message}
                                onChange={(e) => handleInputChange("message")(e.target.value)}
                                placeholder="Leave us a message..."
                                error={!!errors.message}
                                helperText={errors.message}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                sx={{
                                    backgroundColor: "#A87C39",
                                    color: "white",
                                    padding: "16px",
                                    borderRadius: "12px",
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
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
