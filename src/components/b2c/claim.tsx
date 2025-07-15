"use client";
import React from 'react';
import { NorthEast } from '@mui/icons-material';
import Image from 'next/image';

const ProsClaimSection = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className=" mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Top Section - Title and Description with Right Image */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            
            {/* Left Content */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                How the Pros Claim Diminished Value
              </h2>
              
              <p className="text-gray-600 text-lg leading-relaxed">
                Filing a diminished value claim doesn't have to be complicated when done right, it works. 
                That's why thousands of drivers, shop owners, and insurance-savvy professionals trust our 
                process. We use real-time vehicle data, expert reporting, and proven legal templates to 
                help maximize every claim.
              </p>
            </div>
            
            {/* Right Image */}
            <div className="rounded-lg overflow-hidden">
              {/* <Image 
                src={"/assets/dvcc/Frame 1618868208-3.png"}
                // src={"https://images.pexels.com/photos/2265634/pexels-photo-2265634.jpeg?_gl=1*3l7upx*_ga*Nzc0NTUyNjQ2LjE3NTIyMjY5ODY.*_ga_8JE65Q40S6*czE3NTIyMjY5ODYkbzEkZzEkdDE3NTIyMjc0MjkkajUwJGwwJGgw"}
                alt="Person counting money and handling insurance documents"
                className="w-full h-96 "
                width={100}
                height={96}
              /> */}
               <img 
                src={"/assets/dvcc/Frame 1618868208-3.png"}
                alt="Person counting money and handling insurance documents"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
          
          {/* Bottom Section - Left Image with Right Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Image */}
            <div className="rounded-lg overflow-hidden">
              {/* <Image
                src="/assets/dvcc/Frame 1618868208.png"
                // src={"https://images.pexels.com/photos/2265634/pexels-photo-2265634.jpeg?_gl=1*3l7upx*_ga*Nzc0NTUyNjQ2LjE3NTIyMjY5ODY.*_ga_8JE65Q40S6*czE3NTIyMjY5ODYkbzEkZzEkdDE3NTIyMjc0MjkkajUwJGwwJGgw"}
                alt="Person using phone with insurance claim form"
                className="w-full h-96 object-cover"
                width={100}
                height={96}
              /> */}
              <img 
                src={"/assets/dvcc/Frame 1618868208.png"}
                alt="Person counting money and handling insurance documents"
                className="w-full h-96 object-cover"
              />
            </div>
            
            {/* Right Content */}
            <div>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Whether you're a driver recovering from an accident or a shop helping your customers 
                get more from their repair, our system puts you in control. It's fast, fair, and designed 
                to help you win without the stress of doing it all yourself.
              </p>
              
              <button className="bg-golden text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200 flex items-center gap-2 text-lg">
                Claim Your Diminished Value
                <NorthEast className="w-5 h-5" />
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProsClaimSection;