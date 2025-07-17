import React from 'react';
import { NorthEast } from '@mui/icons-material';

const CTASection = () => {
  return (
    <div className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Main Heading */}
          <h2 className="text-4xl lg:text-5xl font-medium mb-8 leading-tight">
            Ready to Claim What You're Owed?
          </h2>
          
          {/* Description */}
          <p className="text-gray-300 text-lg mb-12 leading-relaxed">
            It only takes a few minutes to find out if you're eligible and we'll handle 
            the rest. No stress. No upfront risk.
          </p>
          
          {/* CTA Button */}
          <button className="bg-golden text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200 flex items-center gap-2 text-lg mx-auto">
            Get Free Estimate
            <NorthEast className="w-5 h-5" />
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default CTASection;