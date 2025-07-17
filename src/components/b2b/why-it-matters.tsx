"use client";
import React from 'react';
import VideoPlayer from '../ui/VideoPlayer';
import { NorthEast } from '@mui/icons-material';

const WhyItMattersSection = () => {
  const bulletPoints = [
    "Diminished value is the drop in your car's resale value after an accident even if it's been fully repaired.",
    "Insurance companies rarely offer this money unless you ask for it with proof.",
    "The average diminished value claim can range from $1,000 to $7,000+ depending on your car and accident.",
    "It's your legal right to request this and we make the process easy."
  ];

  return (
    <div className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Video Section */}
            <div className="relative">
              <VideoPlayer
                thumbnailSrc="/assets/dvcc/image-2.png"
                thumbnailAlt="Man in car explaining diminished value claims"
                videoSrc="/assets/dvcc/video.mp4"
                videoTitle="Why It Matters - Diminished Value Claims"
                className="w-full h-full"
                thumbnailClassName="h-full min-h-96"
                playButtonSize="large"
              />
            </div>

            {/* Content Section */}
            <div className="flex flex-col justify-center h-full min-h-96">
              <div className="space-y-8">
                
                <div>
                  <h2 className="text-4xl lg:text-5xl font-medium mb-6 leading-tight">
                    Why It Matters
                  </h2>
                  
                  <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    Even after repairs, your car's value drops and most people don't know that. 
                    You have the right to claim that lost value. We'll help you do it.
                  </p>
                </div>

                {/* Bullet Points */}
                <div className="space-y-6">
                  {bulletPoints.map((point, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 mt-2">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <p className="text-gray-300 text-lg leading-relaxed">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <button className="bg-golden text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200 flex items-center gap-2 text-lg">
                    Check What Your Car's Worth Now
                    <NorthEast className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyItMattersSection;