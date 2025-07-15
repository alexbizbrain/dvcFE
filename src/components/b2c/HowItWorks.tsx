import React from 'react';
import { NorthEast } from '@mui/icons-material';

const HowItWorksSection = () => {
  const steps = [
    {
      number: "1.",
      title: "Quick",
      subtitle: "Get a Free Estimate",
      description: "Take 2 mins to tell us about the accident",
      color: "text-golden",
      images: [
        { src: "/assets/dvcc/Frame 1618868207.png", alt: "Damaged car exterior" },
        { src: "/assets/dvcc/Frame 1618868208.png", alt: "Person filling out paperwork" },
        { src: "/assets/dvcc/Frame 1618868209.png", alt: "Car insurance laptop screen" },
        { src: "/assets/dvcc/Frame 1618868209.png", alt: "Insurance documents on desk" }
      ]
    },
    {
      number: "2.",
      title: "Easy",
      subtitle: "Choose Your Path",
      description: "We do all the work",
      color: "text-golden",
      images: [
        { src: "/assets/dvcc/Frame 1618868208-3.png", alt: "Money and insurance documents" },
        { src: "/assets/dvcc/Frame 1618868208-1.png", alt: "Person in car with documents" },
        { src: "/assets/dvcc/Frame 1618868210.png", alt: "White car parked" },
        { src: "/assets/dvcc/Frame 1618868210.png", alt: "Professional consultation" }
      ]
    },
    {
      number: "3.",
      title: "Money",
      subtitle: "Done For You",
      description: "Experts calculate your claim in 8 hours.",
      color: "text-golden",
      images: [
        { src: "/assets/dvcc/Frame 1618868208-2.png", alt: "Mobile app with car data" },
        { src: "/assets/dvcc/Frame 1618868208-3.png", alt: "Counting money bills" },
        { src: "/assets/dvcc/Frame 1618868209-1.png", alt: "Business meeting discussion" },
        { src: "/assets/dvcc/Frame 1618868209-2.png", alt: "Professional handshake" }
      ]
    }
  ];

  return (
    // <div className="bg-black text-white py-16">
    //   <div className="container mx-auto px-4">
    //     <div className="max-w-7xl mx-auto">
          
    //       {/* Header */}
    //       <div className="text-center mb-16">
    //         <h2 className="text-4xl lg:text-5xl font-bold mb-6">
    //           How It Works
    //         </h2>
    //         <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed">
    //           We've simplified the diminished value claim process into just a few easy steps no 
    //           paperwork, no confusion. Choose your path, enter your details, and let us handle the rest.
    //         </p>
    //       </div>

    //       {/* Steps Grid */}
    //       <div className="grid lg:grid-cols-3 gap-8 mb-12">
    //         {steps.map((step, index) => (
    //           <div key={index} className="bg-gray-800 rounded-lg p-6">
                
    //             {/* Images Grid */}
    //             <div className="grid grid-cols-2 gap-2 mb-6">
    //               {step.images.map((image, imageIndex) => (
    //                 <div key={imageIndex} className="rounded-lg overflow-hidden">
    //                   <img 
    //                     src={image.src}
    //                     alt={image.alt}
    //                     className="w-full h-24 object-cover"
    //                   />
    //                 </div>
    //               ))}
    //             </div>

    //             {/* Step Content */}
    //             <div>
    //               <h3 className={`text-xl font-bold mb-2 ${step.color}`}>
    //                 {step.number} {step.title}
    //               </h3>
                  
    //               <h4 className="text-white text-lg font-semibold mb-2">
    //                 {step.subtitle}
    //               </h4>
                  
    //               <p className="text-gray-300 text-sm">
    //                 {step.description}
    //               </p>
    //             </div>
    //           </div>
    //         ))}
    //       </div>

    //       {/* CTA Button */}
    //       <div className="text-center">
    //         <button className="bg-golden text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200 flex items-center gap-2 text-lg mx-auto">
    //           Get Started Now
    //           <NorthEast className="w-5 h-5" />
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              How It Works
            </h2>
            <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed">
              We've simplified the diminished value claim process into just a few easy steps no 
              paperwork, no confusion. Choose your path, enter your details, and let us handle the rest.
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {steps.map((step, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6">
                
                {/* Images Grid - Different layouts for different steps */}
                <div className="mb-6">
                  {/* First step: 2 images on top, 1 wide image on bottom */}
                  {index === 0 && (
                    // <div className="space-y-2">
                    //   <div className="grid grid-cols-2 gap-2">
                    //     <div className="rounded-lg overflow-hidden">
                    //       <img 
                    //         src={step.images[0].src}
                    //         alt={step.images[0].alt}
                    //         className="w-full h-24 object-cover"
                    //       />
                    //     </div>
                    //     <div className="rounded-lg overflow-hidden">
                    //       <img 
                    //         src={step.images[1].src}
                    //         alt={step.images[1].alt}
                    //         className="w-full h-24 object-cover"
                    //       />
                    //     </div>
                    //   </div>
                    //   <div className="rounded-lg overflow-hidden">
                    //     <img 
                    //       src={step.images[2].src}
                    //       alt={step.images[2].alt}
                    //       className="w-full h-24 object-cover"
                    //     />
                    //   </div>
                    // </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="rounded-lg overflow-hidden">
                        <img 
                          src={step.images[0].src}
                          alt={step.images[0].alt}
                          className="w-full h-48 object-cover"
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="rounded-lg overflow-hidden">
                          <img 
                            src={step.images[1].src}
                            alt={step.images[1].alt}
                            className="w-full h-[94px] object-cover"
                          />
                        </div>
                        <div className="rounded-lg overflow-hidden">
                          <img 
                            src={step.images[2].src}
                            alt={step.images[2].alt}
                            className="w-full h-[94px] object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Second step: 1 wide image on top, 2 images on bottom */}
                  {index === 1 && (
                    <div className="space-y-2">
                      <div className="rounded-lg overflow-hidden">
                        <img 
                          src={step.images[0].src}
                          alt={step.images[0].alt}
                          className="w-full h-24 object-cover"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="rounded-lg overflow-hidden">
                          <img 
                            src={step.images[1].src}
                            alt={step.images[1].alt}
                            className="w-full h-24 object-cover"
                          />
                        </div>
                        <div className="rounded-lg overflow-hidden">
                          <img 
                            src={step.images[2].src}
                            alt={step.images[2].alt}
                            className="w-full h-24 object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Third step: 2x2 grid */}
                  {index === 2 && (
                    <div className="grid grid-cols-2 gap-2">
                      {step.images.map((image, imageIndex) => (
                        <div key={imageIndex} className="rounded-lg overflow-hidden">
                          <img 
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-24 object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Step Content */}
                <div>
                  <h3 className={`text-xl font-bold mb-2 ${step.color}`}>
                    {step.number} {step.title}
                  </h3>
                  
                  <h4 className="text-white text-lg font-semibold mb-2">
                    {step.subtitle}
                  </h4>
                  
                  <p className="text-gray-300 text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <button className="bg-golden text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200 flex items-center gap-2 text-lg mx-auto">
              Get Started Now
              <NorthEast className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default HowItWorksSection;