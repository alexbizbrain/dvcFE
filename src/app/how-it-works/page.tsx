import { Container, Box, Typography, Grid } from "@mui/material"
import Header from "@/components/navigation/header"
import { Button } from "@/components/ui/button"
import ClaimLostValueSection from "@/components/how-it-works/ClaimLostValueSection"
import FooterSection from "@/components/b2c/b2cFooter"
import ReviewCard from "@/components/b2c/review-card"
import ReviewsSection from "@/components/b2c/reviews-section"
import { sampleReviews } from "@/components/b2c/reviews-data"
import AutoScrollSection from "@/components/b2c/autoscroll"
import TestimonialsSection from "@/components/b2c/help-drivers"
import StepByStepGuide from "@/components/how-it-works/step-by-step"
import Steps from "@/components/how-it-works/steps"
import CTASection from "@/components/b2c/CTASection"

export default function HomePage() {
  return (
    <>
      <ClaimLostValueSection />
      <Steps />
      {/* <StepByStepGuide /> */}
      <AutoScrollSection />
      <TestimonialsSection />
      <ReviewsSection reviews={sampleReviews} />
      <CTASection />
      <FooterSection/>
    </>
  )
}
