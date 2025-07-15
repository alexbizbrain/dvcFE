// "use client";
// import Image from 'next/image';
// import VideoPlayer from '../ui/VideoPlayer';
// import { NorthEast } from '@mui/icons-material';

// const StepByStepGuide = () => {
//   const steps = [
//     {
//       stepNumber: "01",
//       category: "Understand the Problem",
//       title: "Even After Repairs, Your Car Lost Value",
//       description: "Most drivers don't know that their vehicle's resale value drops after an accident even when it looks brand new. That lost value is called \"diminished value,\" and you're legally allowed to claim it.",
//       videoThumbnail: "/assets/dvcc/image-3.png",
//       videoAlt: "Two people discussing car accident next to damaged vehicle",
//       videoSrc: "/assets/dvcc/video.mp4"
//     },
//     {
//       stepNumber: "02",
//       category: "Check If You Qualify",
//       title: "Find Out in 60 Seconds",
//       description: "Use our simple form to enter your car and accident details. If the accident wasn't your fault, there's a good chance you're eligible.",
//     //   videoThumbnail: "/api/placeholder/400/300",
//       videoThumbnail: "/assets/dvcc/image-3.png",

//       videoAlt: "Person working on car insurance laptop screen",
//     //   videoSrc: "/videos/step2.mp4"
//       videoSrc: "/assets/dvcc/video.mp4"

//     },
//     {
//       stepNumber: "03",
//       category: "Choose How You Want to Pay",
//       title: "No Risk. You Pick the Payment Plan.",
//       description: "Most drivers don't know that their vehicle's resale value drops after an accident even when it looks brand new. That lost value is called \"diminished value,\" and you're legally allowed to claim it.",
//       videoThumbnail: "/api/placeholder/400/300",
//       videoAlt: "Person using banking app on phone and laptop",
//       videoSrc: "/videos/step3.mp4"
//     },
//     {
//       stepNumber: "04",
//       category: "We Handle Everything for You",
//       title: "We Create the Report & Legal Letters",
//       description: "Our experts calculate your car's diminished value using real-time data, then generate the report, demand letter, and subrogation halt letter — everything you need to file your claim.",
//       videoThumbnail: "/api/placeholder/400/300",
//       videoAlt: "Person filling out insurance policy documents",
//       videoSrc: "/videos/step4.mp4"
//     },
//     {
//       stepNumber: "05",
//       category: "You Submit. You Win. We Support.",
//       title: "You Send It. We Back You Up.",
//       description: "You submit the documents to the insurance company. If they push back, we offer guidance. If you went with Pay Upfront and lose your claim, you're covered by our money-back guarantee.",
//       videoThumbnail: "/api/placeholder/400/300",
//       videoAlt: "Person counting money bills",
//       videoSrc: "/videos/step5.mp4"
//     }
//   ];

//   return (
//     <div className="bg-black text-white py-16">
//       <div className="container mx-auto px-4">
//         <div className="max-w-6xl mx-auto">
          
//           {/* Steps */}
//           <div className="space-y-20">
//             {steps.map((step, index) => (
//               <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                
//                 {/* Video Side */}
//                 <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
//                   <div className="relative">
//                     {/* Large Step Number Background */}
//                     <div className="absolute -top-8 -right-8 text-8xl font-bold text-gray-800 opacity-50 z-0">
//                       {step.stepNumber}
//                     </div>
                    
//                     {/* Video Player */}
//                     <div className="relative z-10">
//                       <VideoPlayer
//                         thumbnailSrc={step.videoThumbnail}
//                         thumbnailAlt={step.videoAlt}
//                         videoSrc={step.videoSrc}
//                         videoTitle={step.title}
//                         className="w-full"
//                         thumbnailClassName="h-64 lg:h-72"
//                         playButtonSize="large"
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 {/* Content Side */}
//                 <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
//                   <div className="space-y-4">
//                     {/* Category */}
//                     <p className="text-golden text-sm font-medium uppercase tracking-wide">
//                       {step.category}
//                     </p>
                    
//                     {/* Title */}
//                     <h3 className="text-3xl lg:text-4xl font-bold leading-tight">
//                       {step.title}
//                     </h3>
                    
//                     {/* Description */}
//                     <p className="text-gray-300 text-lg leading-relaxed">
//                       {step.description}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Final CTA */}
//           <div className="text-center mt-20">
//             <button className="bg-golden text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200 flex items-center gap-2 text-lg mx-auto">
//               Check What Your Car's Worth Now
//               <NorthEast className="w-5 h-5" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StepByStepGuide;
"use client";
import React from 'react';
import Image from 'next/image';
import VideoPlayer from '../ui/VideoPlayer';
import { NorthEast } from '@mui/icons-material';

const StepByStepGuide = () => {
  return (
    <div className="bg-gradient-to-br from-yellow-900 via-gray-900 to-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto space-y-32">
          
          {/* Step 01 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Video - Left Side */}
            <div className="relative">
              {/* Large Step Number */}
              <div className="absolute -top-8 -right-8 text-8xl font-bold text-gray-700 opacity-30 z-0">
                01
              </div>
              
              <div className="relative z-10">
                <VideoPlayer
                  thumbnailSrc="/api/placeholder/500/350"
                  thumbnailAlt="Two people discussing car accident next to damaged vehicle"
                  videoSrc="/videos/step1.mp4"
                  videoTitle="Even After Repairs, Your Car Lost Value"
                  className="w-full"
                  thumbnailClassName="h-64"
                  playButtonSize="large"
                />
              </div>
            </div>

            {/* Content - Right Side */}
            <div className="space-y-6">
              <p className="text-golden text-sm font-medium uppercase tracking-wide">
                Understand the Problem
              </p>
              <h3 className="text-3xl lg:text-4xl font-bold leading-tight">
                Even After Repairs, Your Car Lost Value
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Most drivers don't know that their vehicle's resale value drops after an accident even when it looks brand new. That lost value is called "diminished value," and you're legally allowed to claim it.
              </p>
            </div>
          </div>

          {/* Step 02 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content - Left Side */}
            <div className="space-y-6 lg:order-1">
              <p className="text-golden text-sm font-medium uppercase tracking-wide">
                Check If You Qualify
              </p>
              <h3 className="text-3xl lg:text-4xl font-bold leading-tight">
                Find Out in 60 Seconds
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Use our simple form to enter your car and accident details. If the accident wasn't your fault, there's a good chance you're eligible.
              </p>
            </div>

            {/* Video - Right Side */}
            <div className="relative lg:order-2">
              {/* Large Step Number */}
              <div className="absolute -top-8 -right-8 text-8xl font-bold text-gray-700 opacity-30 z-0">
                02
              </div>
              
              <div className="relative z-10">
                <VideoPlayer
                  thumbnailSrc="/api/placeholder/500/350"
                  thumbnailAlt="Person working on car insurance laptop screen"
                  videoSrc="/videos/step2.mp4"
                  videoTitle="Find Out in 60 Seconds"
                  className="w-full"
                  thumbnailClassName="h-64"
                  playButtonSize="large"
                />
              </div>
            </div>
          </div>

          {/* Step 03 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Video - Left Side */}
            <div className="relative">
              {/* Large Step Number */}
              <div className="absolute -top-8 -right-8 text-8xl font-bold text-gray-700 opacity-30 z-0">
                03
              </div>
              
              <div className="relative z-10">
                <VideoPlayer
                  thumbnailSrc="/api/placeholder/500/350"
                  thumbnailAlt="Person using banking app on phone and laptop"
                  videoSrc="/videos/step3.mp4"
                  videoTitle="No Risk. You Pick the Payment Plan"
                  className="w-full"
                  thumbnailClassName="h-64"
                  playButtonSize="large"
                />
              </div>
            </div>

            {/* Content - Right Side */}
            <div className="space-y-6">
              <p className="text-golden text-sm font-medium uppercase tracking-wide">
                Choose How You Want to Pay
              </p>
              <h3 className="text-3xl lg:text-4xl font-bold leading-tight">
                No Risk. You Pick the Payment Plan.
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Most drivers don't know that their vehicle's resale value drops after an accident even when it looks brand new. That lost value is called "diminished value," and you're legally allowed to claim it.
              </p>
            </div>
          </div>

          {/* Step 04 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content - Left Side */}
            <div className="space-y-6 lg:order-1">
              <p className="text-golden text-sm font-medium uppercase tracking-wide">
                We Handle Everything for You
              </p>
              <h3 className="text-3xl lg:text-4xl font-bold leading-tight">
                We Create the Report & Legal Letters
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Our experts calculate your car's diminished value using real-time data, then generate the report, demand letter, and subrogation halt letter — everything you need to file your claim.
              </p>
            </div>

            {/* Video - Right Side */}
            <div className="relative lg:order-2">
              {/* Large Step Number */}
              <div className="absolute -top-8 -right-8 text-8xl font-bold text-gray-700 opacity-30 z-0">
                04
              </div>
              
              <div className="relative z-10">
                <VideoPlayer
                  thumbnailSrc="/api/placeholder/500/350"
                  thumbnailAlt="Person filling out insurance policy documents"
                  videoSrc="/videos/step4.mp4"
                  videoTitle="We Create the Report & Legal Letters"
                  className="w-full"
                  thumbnailClassName="h-64"
                  playButtonSize="large"
                />
              </div>
            </div>
          </div>

          {/* Step 05 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Video - Left Side */}
            <div className="relative">
              {/* Large Step Number */}
              <div className="absolute -top-8 -right-8 text-8xl font-bold text-gray-700 opacity-30 z-0">
                05
              </div>
              
              <div className="relative z-10">
                <VideoPlayer
                  thumbnailSrc="/api/placeholder/500/350"
                  thumbnailAlt="Person counting money bills"
                  videoSrc="/videos/step5.mp4"
                  videoTitle="You Send It. We Back You Up"
                  className="w-full"
                  thumbnailClassName="h-64"
                  playButtonSize="large"
                />
              </div>
            </div>

            {/* Content - Right Side */}
            <div className="space-y-6">
              <p className="text-golden text-sm font-medium uppercase tracking-wide">
                You Submit. You Win. We Support.
              </p>
              <h3 className="text-3xl lg:text-4xl font-bold leading-tight">
                You Send It. We Back You Up.
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                You submit the documents to the insurance company. If they push back, we offer guidance. If you went with Pay Upfront and lose your claim, you're covered by our money-back guarantee.
              </p>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center mt-20">
            <button className="bg-golden text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200 flex items-center gap-2 text-lg mx-auto">
              Check What Your Car's Worth Now
              <NorthEast className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepByStepGuide;