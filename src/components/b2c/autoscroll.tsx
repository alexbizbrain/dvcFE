'use client';
import React from 'react';

const AutoScrollSection = () => {
  // Company logos data - you can replace with your actual company names/logos
  const companies = [
    'Crompton',
    'SECLOCK',
    'Software AG',
    'Quantum',
    'TechCorp',
    'AutoParts',
    'DriveSecure',
    'ClaimPro'
  ];

  return (
    <div className="bg-white py-16 relative overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-gray-800">
          Trusted by Drivers and Industry <span className="text-golden">Experts Nationwide</span>
        </h2>
      </div>

      {/* Scrolling Container */}
      <div className="relative">
        {/* Left Gradient Overlay */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
        
        {/* Right Gradient Overlay */}
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

        {/* Scrolling Content */}
        <div className="bg-golden flex overflow-hidden">
          <div 
            className="flex"
            style={{
              animation: 'scroll 30s linear infinite',
              animationPlayState: 'running'
            }}
            onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'}
            onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}
          >
            {/* First set of companies */}
            {companies.map((company, index) => (
              <div
                key={`first-${index}`}
                className="flex items-center justify-center min-w-max px-12 py-8"
              >
                <div className="flex items-center space-x-3">
                  {/* Company Icon/Logo placeholder */}
                  <div className="w-8 h-8 bg-golden rounded-full flex items-center justify-center">
                    <span className="text-black text-lg">★</span>
                  </div>
                  {/* Company Name */}
                  <span className="text-white text-2xl font-semibold whitespace-nowrap">
                    {company}
                  </span>
                </div>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {companies.map((company, index) => (
              <div
                key={`second-${index}`}
                className="flex items-center justify-center min-w-max px-12 py-8"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-golden rounded-full flex items-center justify-center">
                    <span className="text-black text-lg">★</span>
                  </div>
                  <span className="text-2xl font-semibold text-white whitespace-nowrap">
                    {company}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default AutoScrollSection;