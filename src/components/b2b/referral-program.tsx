import React from 'react';
import Image from 'next/image';
import { CheckCircle } from '@mui/icons-material';

const ReferralProgramSection = () => {
  const features = [
    {
      title: "Earn for Every Referral",
      description: "Get paid for each customer who uses our service through your referral code no complicated tracking, no delays."
    },
    {
      title: "No Paperwork or Follow-Up Needed",
      description: "We handle the claim process, reports, and communication. You refer we take care of the rest."
    },
    {
      title: "Boost Customer Satisfaction",
      description: "Show your clients you go the extra mile by helping them recover more than just repair costs."
    },
    {
      title: "Track Referrals & Earnings Online",
      description: "Log in anytime to see how many referrals you've made and how much you've earned."
    },
    {
      title: "Zero Cost to You",
      description: "There's no fee to join. It's free, risk-free, and designed to support your shop or legal service."
    }
  ];

  const stats = [
    {
      number: "2,500",
      label: "Referrals Tracked",
      description: "Real customers referred by real partners and every one of them is traceable through your dashboard."
    },
    {
      number: "500",
      label: "Active Partners Nationwide",
      description: "From body shops to legal offices, businesses across the U.S. are already using our platform to earn more."
    },
    {
      number: "$500,000",
      label: "Paid in Referral Bonuses",
      description: "We reward every successful referral. Whether you're big or small, every payout counts."
    },
    {
      number: "2",
      unit: "min",
      label: "to Start",
      description: "That's all it takes to join the program. No contracts, no pressure just a smart way to add value."
    }
  ];

  return (
    <div className="bg-white text-gray-900 py-16">
      <div className=" mx-auto">
        <div className="max-w-7xlszs mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-medium mb-6 leading-tight">
              The Referral Program Trusted by
              <br />
              Auto Shops & Professionals
            </h2>
            <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
              We help your customers get more from their accident claims and we reward you for 
              every successful referral. Simple, transparent, and built to support your business.
            </p>
          </div>

          {/* Features Section */}
          <div className="grid lg:grid-cols-2 p-16 gap-16 items-start">
            
            {/* Image */}
            <div className="relative h-full">
              <div className="relative h-full min-h-96 rounded-lg overflow-hidden">
                <Image
                  src="/assets/dvcc/Frame 1707486565-1.png"
                  alt="Business woman and mechanic discussing referral program"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    {/* Custom Checkbox */}
                    {/* <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200"> */}
                      {/* <CheckCircle className="w-4 h-4 text-golden" /> */}
                      <Image
                        src="/assets/dvcc/Frame 35.svg"
                        alt="Check Circle"
                        width={64}
                        height={64}
                      />
                    {/* </div> */}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        
        </div>
      </div>
          {/* Statistics Section */}

        {/* <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black  p-16 relative overflow-hidden"> */}
            
            {/* Background Pattern */}
            {/* <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent"></div> */}
            
            {/* Stats Grid */}
            {/* <div className="grid md:grid-cols-2 gap-8 relative z-10"> */}
              {/* {stats.map((stat, index) => ( */}
                {/* <div key={index} className="relative"> */}
                  {/* Glassomorphic Card */}
                  {/* <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-white">
                    <div className="mb-4">
                      <div className="flex items-baseline">
                        <span className="text-4xl font-medium text-golden">
                          {stat.number}
                        </span>
                        {stat.unit && (
                          <span className="text-2xl font-semibold text-golden ml-1">
                            {stat.unit}
                          </span>
                        )}
                        <span className="text-golden text-lg font-medium ml-1">
                          +
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold mt-2">
                        {stat.label}
                      </h3>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {stat.description}
                    </p>
                  </div> */}
                {/* </div> */}
              {/* ))} */}
            {/* </div> */}
          {/* </div> */}
    </div>
  );
};

export default ReferralProgramSection;