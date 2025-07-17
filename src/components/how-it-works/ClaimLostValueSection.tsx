"use client";
// import React from 'react';
// import Image from 'next/image';
// import VideoPlayer from '../ui/VideoPlayer';

// const ClaimLostValueSection = () => {
//   return (
//     <div className="bg-black text-white py-16">
//       <div className="container mx-auto px-4">
//         <div className="max-w-7xl mx-auto">
          
//           {/* Header */}
//           <div className="text-center mb-16">
//             <h2 className="text-4xl lg:text-5xl font-medium mb-6 leading-tight">
//               How to Claim Your Car's Lost 
//               <br />
//               <span className="relative">
//                 Value Without the Hassle
//                 <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-1 bg-golden rounded-full"></div>
//               </span>
//             </h2>
            
//             <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed mb-8">
//               We've simplified the diminished value claim process so you can check eligibility, 
//               choose how to pay, and let us handle the rest no legal jargon, no hidden fees.
//             </p>

//             <button className="bg-golden text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200 text-lg">
//               Calculate how much you owed.
//             </button>
//           </div>

//           {/* Content Grid */}
//           <div className="grid lg:grid-cols-3 gap-8 items-center">
            
//             {/* Left Image - Car Damage */}
//             <div className="relative">
//               <div className="relative h-96 rounded-lg overflow-hidden">
//                 <Image
//                   src="/assets/dvcc/Frame 1618868207.png"
//                   alt="Car accident damage"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//             </div>

//             {/* Center Video */}
//             <div className="relative">
//               <VideoPlayer
//                 thumbnailSrc="/assets/dvcc/image-3.png"
//                 thumbnailAlt="Professional consultation about car insurance claim"
//                 // videoSrc="https://www.youtube.com/watch?v=sAH2eNek9oc"
//                 videoSrc="/assets/dvcc/video.mp4"
//                 videoTitle="How to Claim Your Car's Lost Value"
//                 className="w-full"
//                 thumbnailClassName="h-96"
//                 playButtonSize="large"
//               />
//             </div>

//             {/* Right Image - Money/Documents */}
//             <div className="relative">
//               <div className="relative h-96 rounded-lg overflow-hidden">
//                 <Image
//                   src="/assets/dvcc/Frame 1618868207-1.png"
//                   alt="Money and insurance documents"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Bottom CTA */}
//           <div className="text-center mt-16">
//             <div className="inline-flex items-center justify-center w-16 h-1 bg-blue-500 rounded-full"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ClaimLostValueSection;

import React from 'react';
import Image from 'next/image';
import VideoPlayer from '../ui/VideoPlayer'; // Import the reusable component

const ClaimLostValueSection = () => {
  return (
    <div className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-medium mb-6 leading-tight">
              How to 
              <span className="relative mx-2">
                Claim Your Car's
                <div className="absolute bottom-0 left-0 w-full h-1 bg-golden rounded-full"></div>
              </span>
              Lost 
              <br />
              Value Without the Hassle
            </h2>
            
            <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed mb-8">
              We've simplified the diminished value claim process so you can check eligibility, 
              choose how to pay, and let us handle the rest no legal jargon, no hidden fees.
            </p>

            <button className="bg-golden text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200 text-lg">
              Calculate how much you owed.
            </button>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            
            {/* Left Image - Car Damage */}
            <div className="relative">
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src="/assets/dvcc/Frame 1618868207.png"
                  alt="Car accident damage"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Center Video - Positioned Lower */}
            <div className="relative mt-16">
              <VideoPlayer
                thumbnailSrc="/assets/dvcc/image-3.png"
                thumbnailAlt="Professional consultation about car insurance claim"
                videoSrc="/assets/dvcc/video.mp4"
                videoTitle="How to Claim Your Car's Lost Value"
                className="w-full"
                thumbnailClassName="h-64"
                playButtonSize="large"
              />
            </div>

            {/* Right Image - Money/Documents */}
            <div className="relative">
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src="/assets/dvcc/Frame 1618868207-1.png"
                  alt="Money and insurance documents"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            {/* <div className="inline-flex items-center justify-center w-16 h-1 bg-blue-500 rounded-full"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClaimLostValueSection;