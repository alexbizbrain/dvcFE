import { NorthEast } from '@mui/icons-material';
import Image from 'next/image';

const ReferralPartnerSection = () => {
  return (
    <div className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Card Container */}
          <div className="border border-gray-700  rounded-2xl p-16 text-center relative overflow-hidden">
            
            {/* Sparkle Icon */}
              <div className="flex items-center justify-center space-x-2">
                <Image src="/assets/dvcc/sparkle.png" alt="Sparkle" width={60} height={60} />
              </div>
            
            {/* Main Content */}
            <div className="mt-12">
              <h2 className="text-4xl lg:text-5xl mb-8 leading-tight font-medium">
                Join 1,000+ Auto Shops Helping
                <br />
                Drivers Recover More
              </h2>
              
              <p className="text-gray-300 text-xl leading-relaxed mb-12 max-w-3xl mx-auto">
                Offer more than repairs help your customers claim lost value, and get paid for 
                every successful referral.
              </p>
              
              <button className="bg-golden text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200 flex items-center gap-2 text-lg mx-auto">
                Become a Referral Partner
                <NorthEast className="w-5 h-5" />
              </button>
            </div>
            
            {/* Subtle background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-golden/5 via-transparent to-transparent pointer-events-none rounded-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralPartnerSection;