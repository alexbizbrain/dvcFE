import AutoScrollSection from "@/components/b2c/autoscroll"
import FooterSection from "@/components/b2c/b2cFooter"
import CTASection from "@/components/b2c/CTASection"
import PricingVideoSection from "@/components/ui/pages/contact-us-video"
import PricingComparison from "@/components/ui/pages/price-comparison"

const page = () => {
  return (
    <>
    <PricingVideoSection />
    <PricingComparison />
    <AutoScrollSection />
    <CTASection />
    <FooterSection />
    </>
  )
}

export default page