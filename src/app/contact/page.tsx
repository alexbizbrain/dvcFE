import FooterSection from "@/components/b2c/b2cFooter"
import ProsClaimSection from "@/components/b2c/claim"
import CTASection from "@/components/b2c/CTASection"
import { sampleReviews } from "@/components/b2c/reviews-data"
import ReviewsSection from "@/components/b2c/reviews-section"
import ContactFormSection from "@/components/ui/pages/contact-form"
import ContactSection from "@/components/ui/pages/contact-us"

const page = () => {
  return (
    <>
    <ContactSection />
    <ContactFormSection />
    <ReviewsSection reviews={sampleReviews} />
    <CTASection />
    <FooterSection />
    </>
  )
}

export default page