'use client';

import React, { useState } from 'react';
import { ExpandMore, NorthEast, KeyboardArrowDown, KeyboardArrowRight } from '@mui/icons-material';
import Image from 'next/image';

const StatisticsSection = () => {
  const [expandedAccordion, setExpandedAccordion] = useState<string>('claim-success');

  const toggleAccordion = (accordionId: string) => {
    setExpandedAccordion(expandedAccordion === accordionId ? '' : accordionId);
  };

  return (
    <div className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side - Accordions */}
          <div className="space-y-4">
            
            {/* Expanded Accordion - Claim Success Rate */}
            <div className="bg-gray-800 border border-golden rounded-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-golden text-lg font-semibold">
                    Claim Success Rate
                  </h3>
                  <button
                    onClick={() => toggleAccordion('claim-success')}
                    className="ml-4 flex-shrink-0"
                  >
                    <ExpandMore 
                      className={`w-6 h-6 text-golden transition-transform duration-200 ${
                        expandedAccordion === 'claim-success' ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </div>
                
                {expandedAccordion === 'claim-success' && (
                  <div className="text-white">
                    <p className="text-2xl font-bold mb-3">
                      92% of Our Customers Successfully Settle Their Claim
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                      Most drivers have never filed a diminished value claim but when they do with us, it 
                      works. Our step by step system, expert-generated reports, and demand letters 
                      are tailored to meet insurer requirements and maximize your chances of success.
                    </p>
                    <button className="bg-golden text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200 flex items-center gap-2">
                      Get My Free Estimate
                      <NorthEast className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Collapsed Accordion - Average Recovered */}
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleAccordion('average-recovered')}
                className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-750 transition-colors"
              >
                <h3 className="text-white text-lg font-semibold">
                  Average Recovered Per Claim
                </h3>
                {expandedAccordion === 'average-recovered' ? (
                  <KeyboardArrowDown className="w-6 h-6 text-golden" />
                ) : (
                  <KeyboardArrowRight className="w-6 h-6 text-gray-400" />
                )}
              </button>
              
              {expandedAccordion === 'average-recovered' && (
                <div className="px-6 pb-6">
                  <p className="text-2xl font-bold mb-3 text-white">
                    $4,247 Average Settlement Amount
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    Our customers recover significant amounts that they never knew they were entitled to. 
                    The average settlement covers much more than just repair costs, including diminished 
                    value, loss of use, and other damages.
                  </p>
                  <button className="bg-golden text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200 flex items-center gap-2">
                    Calculate My Estimate
                    <NorthEast className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>

            {/* Collapsed Accordion - Drivers Helped */}
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleAccordion('drivers-helped')}
                className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-750 transition-colors"
              >
                <h3 className="text-white text-lg font-semibold">
                  Drivers Helped Nationwide
                </h3>
                {expandedAccordion === 'drivers-helped' ? (
                  <KeyboardArrowDown className="w-6 h-6 text-golden" />
                ) : (
                  <KeyboardArrowRight className="w-6 h-6 text-gray-400" />
                )}
              </button>
              
              {expandedAccordion === 'drivers-helped' && (
                <div className="px-6 pb-6">
                  <p className="text-2xl font-bold mb-3 text-white">
                    25,000+ Drivers Successfully Helped
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    We've helped thousands of drivers across all 50 states recover money they 
                    deserved after accidents. Our nationwide network and expertise means we 
                    understand local insurance laws and requirements.
                  </p>
                  <button className="bg-golden text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200 flex items-center gap-2">
                    Join Our Success Stories
                    <NorthEast className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>

            {/* Collapsed Accordion - Customer Satisfaction */}
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleAccordion('satisfaction')}
                className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-750 transition-colors"
              >
                <h3 className="text-white text-lg font-semibold">
                  Customer Satisfaction Rating
                </h3>
                {expandedAccordion === 'satisfaction' ? (
                  <KeyboardArrowDown className="w-6 h-6 text-golden" />
                ) : (
                  <KeyboardArrowRight className="w-6 h-6 text-gray-400" />
                )}
              </button>
              
              {expandedAccordion === 'satisfaction' && (
                <div className="px-6 pb-6">
                  <p className="text-2xl font-bold mb-3 text-white">
                    4.9/5 Customer Satisfaction Score
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    Our customers consistently rate us highly for our professional service, 
                    clear communication, and successful outcomes. We're committed to making 
                    the claims process as smooth and stress-free as possible.
                  </p>
                  <button className="bg-golden text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200 flex items-center gap-2">
                    Read Customer Reviews
                    <NorthEast className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right Side - Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* Car damage images - Top row */}
            <div className="rounded-lg overflow-hidden">
              <Image
                src={"https://images.pexels.com/photos/2265634/pexels-photo-2265634.jpeg?_gl=1*3l7upx*_ga*Nzc0NTUyNjQ2LjE3NTIyMjY5ODY.*_ga_8JE65Q40S6*czE3NTIyMjY5ODYkbzEkZzEkdDE3NTIyMjc0MjkkajUwJGwwJGgw"}
                alt="Auto accident claim video thumbnail"
                className="w-full h-48 object-cover"
                width={400}
                height={250}
              />
            </div>
            
            <div className="rounded-lg overflow-hidden">
              <Image
                src={"https://images.pexels.com/photos/2265634/pexels-photo-2265634.jpeg?_gl=1*3l7upx*_ga*Nzc0NTUyNjQ2LjE3NTIyMjY5ODY.*_ga_8JE65Q40S6*czE3NTIyMjY5ODYkbzEkZzEkdDE3NTIyMjc0MjkkajUwJGwwJGgw"}
                alt="Auto accident claim video thumbnail"
                className="w-full h-48 object-cover"
                width={400}
                height={250}
              />
            </div>
            
            {/* Car damage images - Middle row */}
            <div className="rounded-lg overflow-hidden">
              <Image
                src={"https://images.pexels.com/photos/2265634/pexels-photo-2265634.jpeg?_gl=1*3l7upx*_ga*Nzc0NTUyNjQ2LjE3NTIyMjY5ODY.*_ga_8JE65Q40S6*czE3NTIyMjY5ODYkbzEkZzEkdDE3NTIyMjc0MjkkajUwJGwwJGgw"}
                alt="Auto accident claim video thumbnail"
                className="w-full h-48 object-cover"
                width={400}
                height={250}
              />
            </div>
            
            <div className="rounded-lg overflow-hidden">
              <Image
                src={"https://images.pexels.com/photos/2265634/pexels-photo-2265634.jpeg?_gl=1*3l7upx*_ga*Nzc0NTUyNjQ2LjE3NTIyMjY5ODY.*_ga_8JE65Q40S6*czE3NTIyMjY5ODYkbzEkZzEkdDE3NTIyMjc0MjkkajUwJGwwJGgw"}
                alt="Auto accident claim video thumbnail"
                className="w-full h-48 object-cover"
                width={400}
                height={250}
              />
            </div>
            
            {/* Car damage images - Bottom row */}
            <div className="rounded-lg overflow-hidden">
              <Image
                src={"https://images.pexels.com/photos/2265634/pexels-photo-2265634.jpeg?_gl=1*3l7upx*_ga*Nzc0NTUyNjQ2LjE3NTIyMjY5ODY.*_ga_8JE65Q40S6*czE3NTIyMjY5ODYkbzEkZzEkdDE3NTIyMjc0MjkkajUwJGwwJGgw"}
                alt="Auto accident claim video thumbnail"
                className="w-full h-48 object-cover"
                width={400}
                height={250}
              />
            </div>
            
            <div className="rounded-lg overflow-hidden">
            <Image
                src={"https://images.pexels.com/photos/2265634/pexels-photo-2265634.jpeg?_gl=1*3l7upx*_ga*Nzc0NTUyNjQ2LjE3NTIyMjY5ODY.*_ga_8JE65Q40S6*czE3NTIyMjY5ODYkbzEkZzEkdDE3NTIyMjc0MjkkajUwJGwwJGgw"}
                alt="Auto accident claim video thumbnail"
                className="w-full h-40 object-cover"
                width={400}
                height={250}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsSection;