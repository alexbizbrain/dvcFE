// import React from 'react';
// import Image from 'next/image';

// const BusinessSection = () => {
//   const businessImages = [
//     {
//       src: "/assets/dvcc/accident.jpg",
//       alt: "Two business professionals discussing and reviewing documents"
//     },
//     {
//       src: "/assets/dvcc/accident.jpg", 
//       alt: "Mechanic and customer shaking hands in auto shop"
//     },
//     {
//       src: "/assets/dvcc/accident.jpg",
//       alt: "Professional man standing next to damaged car"
//     },
//     {
//       src: "/assets/dvcc/accident.jpg",
//       alt: "Business woman and man reviewing insurance documents"
//     }
//   ];

//   return (
//     <div className="bg-black text-white py-16">
//       <div className="container mx-auto px-4">
//         <div className="max-w-7xl mx-auto">
          
//           {/* Header Section */}
//           <div className="text-center mb-16">
//             <h2 className="text-4xl lg:text-5xl font-medium mb-6 leading-tight">
//               Do you have a <span className="text-golden">Business</span>?
//             </h2>
//             <h3 className="text-3xl lg:text-4xl font-medium mb-8 leading-tight">
//               We've Got the Right Path for You.
//             </h3>
            
//             <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed mb-10">
//               You may be owed thousands after a collision even if repairs are done. We'll handle 
//               the paperwork. You just collect the check.
//             </p>

//             <button className="bg-golden text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200 text-lg">
//               Calculate how much your business earn.
//             </button>
//           </div>

//           {/* Business Images Row */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {businessImages.map((image, index) => (
//               <div key={index} className="relative group">
//                 <div className="relative h-80 rounded-lg overflow-hidden">
//                   <Image
//                     src={image.src}
//                     alt={image.alt}
//                     fill
//                     className="object-cover transition-transform duration-300 group-hover:scale-105"
//                   />
//                   {/* Subtle overlay for better visual effect */}
//                   <div className="absolute inset-0  bg-opacity-10 group-hover:bg-opacity-0 transition-all duration-300"></div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BusinessSection;

'use client';
import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';

const BusinessSection = () => {
  const businessImages = [
    {
      src: "/assets/dvcc/accident.jpg",
      alt: "Two business professionals discussing and reviewing documents"
    },
    {
      src: "/assets/dvcc/Frame 1707486567.png", 
      alt: "Mechanic and customer shaking hands in auto shop"
    },
    {
      src: "/assets/dvcc/Frame 1707486565-1.png",
      alt: "Professional man standing next to damaged car"
    },
    {
      src: "/assets/dvcc/Frame 1707486568.png",
      alt: "Business woman and man reviewing insurance documents"
    }
  ];

  return (
    <div className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-medium mb-6 leading-tight">
              Do you have a <span className="text-golden">Business</span>?
            </h2>
            <h3 className="text-3xl lg:text-4xl font-medium mb-8 leading-tight">
              We've Got the Right Path for You.
            </h3>
            
            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed mb-10">
              You may be owed thousands after a collision even if repairs are done. We'll handle 
              the paperwork. You just collect the check.
            </p>

            {/* <button className="bg-golden text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200 text-lg">
              Calculate how much your business earn.
            </button> */}
            <Button variant='golden' className='bg-golden text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200 text-lg'>
                Calculate how much your business earn.
            </Button>
          </div>

          {/* Business Images Row - Infinite Scroll */}
          <div className="relative overflow-hidden">
            {/* Left Fade Effect */}
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none"></div>
            
            {/* Right Fade Effect */}
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none"></div>

            {/* Scrolling Container */}
            <div className="flex overflow-hidden">
              <div 
                className="flex animate-scroll-business"
                style={{
                  animation: 'scrollBusiness 25s linear infinite',
                  animationPlayState: 'running'
                }}
                onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'}
                onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}
              >
                {/* First set of images */}
                {businessImages.map((image, index) => (
                  <div key={`first-${index}`} className="flex-shrink-0 px-3">
                    <div className="relative h-80 w-72 rounded-lg overflow-hidden group">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      {/* Subtle overlay for better visual effect */}
                      <div className="absolute inset-0  bg-opacity-10 group-hover:bg-opacity-0 transition-all duration-300"></div>
                    </div>
                  </div>
                ))}
                
                {/* Duplicate set for seamless loop */}
                {businessImages.map((image, index) => (
                  <div key={`second-${index}`} className="flex-shrink-0 px-3">
                    <div className="relative h-80 w-72 rounded-lg overflow-hidden group">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      {/* Subtle overlay for better visual effect */}
                      <div className="absolute inset-0  bg-opacity-10 group-hover:bg-opacity-0 transition-all duration-300"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scrollBusiness {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}
      </style>

      </div>
  );
};

export default BusinessSection;