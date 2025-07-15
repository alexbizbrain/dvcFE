import AutoScrollSection from '@/components/b2c/autoscroll';
import FooterSection from '@/components/b2c/b2cFooter';
import ProsClaimSection from '@/components/b2c/claim';
import CTASection from '@/components/b2c/CTASection';
import TestimonialsSection from '@/components/b2c/help-drivers';
import HowItWorksSection from '@/components/b2c/HowItWorks';
import ReviewsSection from '@/components/b2c/reviews-section';
import ShowcaseSection from '@/components/b2c/Showcase';
import StatisticsSection from '@/components/b2c/statistics';
import { sampleReviews } from "@/components/b2c/reviews-data"

export default function HomePage() {

  
  return (
    <>
      <ShowcaseSection />
      <AutoScrollSection/>
      <StatisticsSection />
      <ProsClaimSection/>
      <HowItWorksSection />
      <TestimonialsSection />
      <ReviewsSection reviews={sampleReviews}  />
      <CTASection />
      <FooterSection />
    </>
  );
}