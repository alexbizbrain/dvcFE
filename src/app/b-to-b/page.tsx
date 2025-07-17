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
import BusinessSection from '@/components/b2b/business-section';
import ReferralPartnerSection from '@/components/b2b/raferral-partern-section';
import ReferralProgramSection from '@/components/b2b/referral-program';
import WhyItMattersSection from '@/components/b2b/why-it-matters';
import StatsSection from '@/components/b2b/stats';

export default function HomePage() {

  
  return (
    <>
      <BusinessSection />
      <AutoScrollSection/>
      <WhyItMattersSection />
      <HowItWorksSection />
      <ReferralProgramSection />
      <StatsSection />
      <ReviewsSection reviews={sampleReviews}  />
      <ReferralPartnerSection />
      <FooterSection />
    </>
  );
}