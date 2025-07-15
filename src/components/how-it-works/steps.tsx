// "use client"

// import { PlayArrow } from "@mui/icons-material"
// import { Button } from "@/components/ui/button"

// interface Step {
//   number: string
//   subtitle: string
//   title: string
//   description: string
//   image: string
//   position: "left" | "right"
//   showCTA?: boolean
// }

// const steps: Step[] = [
//   {
//     number: "01",
//     subtitle: "Understand the Problem",
//     title: "Even After Repairs, Your Car Lost Value",
//     description:
//       "Most drivers don't know that their vehicle's resale value drops after an accident even when it looks brand new. That lost value is called \"diminished value,\" and you're legally allowed to claim it.",
//     image: "/assets/dvcc/image-3.png",
//     position: "left",
//   },
//   {
//     number: "02",
//     subtitle: "Check If You Qualify",
//     title: "Find Out in 60 Seconds",
//     description:
//       "Use our simple form to enter your car and accident details. If the accident wasn't your fault, there's a good chance you're eligible.",
//     // image: "/images/step-02.png",
//     image: "/assets/dvcc/image-3.png",

//     position: "right",
//   },
//   {
//     number: "03",
//     subtitle: "Choose How You Want to Pay",
//     title: "No Risk. You Pick the Payment Plan.",
//     description:
//       "Most drivers don't know that their vehicle's resale value drops after an accident even when it looks brand new. That lost value is called \"diminished value,\" and you're legally allowed to claim it.",
//     // image: "/images/step-03.png",
//     image: "/assets/dvcc/image-3.png",

//     position: "left",
//   },
//   {
//     number: "04",
//     subtitle: "We Handle Everything for You",
//     title: "We Create the Report & Legal Letters",
//     description:
//       "Our experts calculate your car's diminished value using real-time data, then generate the report, demand letter, and subrogation halt letter — everything you need to file your claim.",
//     image: "/images/step-04.png",
//     position: "right",
//   },
//   {
//     number: "05",
//     subtitle: "You Submit. You Win. We Support.",
//     title: "You Send It. We Back You Up.",
//     description:
//       "You submit the documents to the insurance company. If they push back, we offer guidance. If you went with Pay Upfront and lose your claim, you're covered by our money-back guarantee.",
//     image: "/images/step-05.png",
//     position: "left",
//     showCTA: true,
//   },
// ]

// export default function Steps() {
//   return (
//     <section className="bg-dark-800 py-20 px-4">
//       <div className="max-w-7xl mx-auto">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">How It Works</h2>
//           <p className="text-xl text-gray-300 max-w-2xl mx-auto">
//             Our simple 5-step process to help you claim what you're owed
//           </p>
//         </div>

//         {/* Steps */}
//         <div className="space-y-20">
//           {steps.map((step, index) => (
//             <StepItem key={step.number} step={step} index={index} />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// function StepItem({ step, index }: { step: Step; index: number }) {
//   const isLeft = step.position === "left"

//   return (
//     <div className="relative">
//       {/* Background gradient effect */}
//       <div
//         className={`absolute inset-0 opacity-10 ${
//           isLeft
//             ? "bg-gradient-to-r from-primary-500/20 to-transparent"
//             : "bg-gradient-to-l from-primary-500/20 to-transparent"
//         }`}
//       />

//       <div className={`grid lg:grid-cols-2 gap-12 items-center ${isLeft ? "" : "lg:grid-flow-col-dense"}`}>
//         {/* Content */}
//         <div className={`space-y-6 ${isLeft ? "" : "lg:col-start-2"}`}>
//           {/* Step Number */}
//           <div className="relative">
//             <span className="text-8xl md:text-9xl font-bold text-dark-600 select-none">{step.number}</span>
//           </div>

//           {/* Subtitle with gradient */}
//           <div className="relative -mt-8">
//             <p className="text-primary-400 font-medium text-lg mb-2">{step.subtitle}</p>

//             {/* Title */}
//             <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">{step.title}</h3>

//             {/* Description */}
//             <p className="text-gray-300 text-lg leading-relaxed max-w-lg">{step.description}</p>

//             {/* CTA Button for last step */}
//             {step.showCTA && (
//               <div className="mt-8">
//                 <Button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 text-lg font-medium rounded-lg transition-all duration-200 hover:shadow-glow">
//                   Check What Your Car's Worth Now
//                   <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                   </svg>
//                 </Button>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Image/Video */}
//         <div className={`relative ${isLeft ? "" : "lg:col-start-1"}`}>
//           <div className="relative group cursor-pointer">
//             {/* Video thumbnail */}
//             <div className="relative overflow-hidden rounded-2xl">
//               <img
//                 src={step.image || "/placeholder.svg"}
//                 alt={`Step ${step.number}: ${step.title}`}
//                 className="w-full h-80 md:h-96 object-cover transition-transform duration-300 group-hover:scale-105"
//               />

//               {/* Play button overlay */}
//               <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-colors duration-300">
//                 <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 group-hover:bg-white transition-colors duration-300">
//                   <PlayArrow className="w-8 h-8 text-dark-800 ml-1" fill="currentColor" />
//                 </div>
//               </div>
//             </div>

//             {/* Gradient border effect */}
//             <div
//               className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${
//                 isLeft ? "from-primary-500/30 to-transparent" : "from-transparent to-primary-500/30"
//               } opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


"use client"

import Image from "next/image"
import { PlayArrow, ChevronRight, NorthEast } from "@mui/icons-material"
import VideoPlayer from "../ui/VideoPlayer"
// import { ChevronRight } from "lucide-react"

interface Step {
    id: number
    stepNumber: string
    subtitle: string
    title: string
    description: string
    image: string
    imageAlt: string
    hasVideo?: boolean
}

const steps: Step[] = [
    {
        id: 1,
        stepNumber: "01",
        subtitle: "Understand the Problem",
        title: "Even After Repairs, Your Car Lost Value",
        description:
            "Most drivers don't know that their vehicle's resale value drops after an accident even when it looks brand new. That lost value is called 'diminished value,' and you're legally allowed to claim it.",
        // image: "/step-01-accident.png",
        image: "/assets/dvcc/image-3.png",

        imageAlt: "People at car accident scene",
        hasVideo: true,
    },
    {
        id: 2,
        stepNumber: "02",
        subtitle: "Check If You Qualify",
        title: "Find Out in 60 Seconds",
        description:
            "Use our simple form to enter your car and accident details. If the accident wasn't your fault, there's a good chance you're eligible.",
        // image: "/step-02-computer.png",
        image: "/assets/dvcc/image-3.png",

        imageAlt: "Person working on car insurance at computer",
        hasVideo: true,
    },
    {
        id: 3,
        stepNumber: "03",
        subtitle: "Choose How You Want to Pay",
        title: "No Risk. You Pick the Payment Plan.",
        description:
            "Most drivers don't know that their vehicle's resale value drops after an accident even when it looks brand new. That lost value is called 'diminished value,' and you're legally allowed to claim it.",
        // image: "/step-03-laptop.png",
        image: "/assets/dvcc/image-3.png",

        imageAlt: "Laptop showing banking interface with phone",
        hasVideo: true,
    },
    {
        id: 4,
        stepNumber: "04",
        subtitle: "We Handle Everything for You",
        title: "We Create the Report & Legal Letters",
        description:
            "Our experts calculate your car's diminished value using real-time data, then generate the report, demand letter, and subrogation halt letter — everything you need to file your claim.",
        // image: "/step-04-documents.png",
        image: "/assets/dvcc/image-3.png",

        imageAlt: "Hands reviewing insurance policy documents",
        hasVideo: true,
    },
    {
        id: 5,
        stepNumber: "05",
        subtitle: "You Submit. You Win. We Support.",
        title: "You Send It. We Back You Up.",
        description:
            "You submit the documents to the insurance company. If they push back, we offer guidance. If you went with Pay Upfront and lose your claim, you're covered by our money-back guarantee.",
        // image: "/step-05-money.png",
        image: "/assets/dvcc/image-3.png",

        imageAlt: "Hands holding money and documents",
        hasVideo: true,
    },
]


interface StepByStepGuideProps {
    ctaText?: string
    ctaAction?: () => void
}

export default function StepByStepGuide({
    ctaText = "Check What Your Car's Worth Now",
    ctaAction,
}: StepByStepGuideProps) {
    return (
        <section className="bg-black text-white py-16 px-4 relative overflow-hidden bg-gradient-to-br from-yellow-900 via-gray-900 to-gray-900">
            <div className="max-w-7xl mx-auto">
                {steps.map((step, index) => {
                    const isOdd = step.id % 2 === 1
                    const isEven = step.id % 2 === 0

                    return (
                        <div key={step.id} className="relative  ">
                            {/* Golden background gradient - more prominent */}
                            <div
                                className={`absolute inset-0 w-2/3 h-full bg-gradient-to-${isOdd ? "r" : "l"
                                    } from-yellow-500/20 via-yellow-400/10 to-transparent ${isOdd ? "left-0" : "right-0"
                                    } -z-10 rounded-3xl`}
                                // className="bg-gradient-to-br from-yellow-900 via-gray-900 to-gray-900"
                            />

                            <div className={`flex ${isOdd ? "justify-start" : "justify-end"}`}>
                                <div className={`${isOdd ? "max-w-2xl" : "max-w-xl"} relative`}>
                                    {/* Step number positioning */}
                                    {isOdd ? (
                                        // Odd numbers (01, 03, 05) beside the image
                                        <div className="flex flex-row-reverse items-start gap-2 w-full">
                                            <div className="flex-1 text-8xl md:text-9xl font-bold text-gray-700/50 leading-none  ">
                                                {step.stepNumber}
                                            </div>
                                            <div className="flex-3">
                                                {/* Image container */}
                                                <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-6">
                                                    {/* <Image
                                                        src={step.image || "/placeholder.svg"}
                                                        alt={step.imageAlt}
                                                        width={400}
                                                        height={300}
                                                        className="w-full h-[300px] object-cover"
                                                    /> */}
                                                    {step.hasVideo && (
                                                        // <div className="absolute inset-0 flex items-center justify-center">
                                                        //     <button className="bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-colors">
                                                        //         <PlayArrow className="text-white text-3xl" />
                                                        //     </button>
                                                        // </div>
                                                        <VideoPlayer
                                                            thumbnailSrc={step.image || "/placeholder.svg"}
                                                            thumbnailAlt="Two people discussing car accident next to damaged vehicle"
                                                            videoSrc="/assets/dvcc/video.mp4"
                                                            videoTitle="Even After Repairs, Your Car Lost Value"
                                                            className="w-full"
                                                            thumbnailClassName="h-64"
                                                            playButtonSize="large"
                                                        />
                                                    )}
                                                </div>

                                                {/* Content under image */}
                                                <div className="space-y-4">
                                                    <p className="text-yellow-500 font-medium text-sm uppercase tracking-wide">{step.subtitle}</p>
                                                    <h3 className="text-2xl md:text-3xl font-bold leading-tight">{step.title}</h3>
                                                    <p className="text-gray-300 leading-relaxed">{step.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <>
                                            <div className="flex flex-col items-start gap-2">
                                                <div className="text-8xl md:text-9xl font-bold text-gray-700/50 leading-none mt-4 self-end">
                                                    {step.stepNumber}
                                                </div>
                                                <div className="flex-1">
                                                    {/* Image container */}
                                                    <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-6">
                                                        {/* <Image
                                                            src={step.image || "/placeholder.svg"}
                                                            alt={step.imageAlt}
                                                            width={400}
                                                            height={300}
                                                            className="w-full h-[300px] object-cover"
                                                        /> */}
                                                        {step.hasVideo && (
                                                            // <div className="absolute inset-0 flex items-center justify-center">
                                                            //     <button className="bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-colors">
                                                            //         <PlayArrow className="text-white text-3xl" />
                                                            //     </button>
                                                            // </div>
                                                            <VideoPlayer
                                                            thumbnailSrc={step.image || "/placeholder.svg"}
                                                            thumbnailAlt="Two people discussing car accident next to damaged vehicle"
                                                            videoSrc="/assets/dvcc/video.mp4"
                                                            videoTitle="Even After Repairs, Your Car Lost Value"
                                                            className="w-full"
                                                            thumbnailClassName="h-64"
                                                            playButtonSize="large"
                                                        />
                                                        )}
                                                    </div>

                                                    {/* Content under image */}
                                                    <div className="space-y-4">
                                                        <p className="text-yellow-500 font-medium text-sm uppercase tracking-wide">{step.subtitle}</p>
                                                        <h3 className="text-2xl md:text-3xl font-bold leading-tight">{step.title}</h3>
                                                        <p className="text-gray-300 leading-relaxed">{step.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                        // Even numbers (02, 04) on top of image
                                        // <div>
                                        //   {/* Image container with number overlay */}
                                        //   <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-6">
                                        //     <Image
                                        //       src={step.image || "/placeholder.svg"}
                                        //       alt={step.imageAlt}
                                        //       width={400}
                                        //       height={300}
                                        //       className="w-full h-[300px] object-cover"
                                        //     />

                                        //     {/* Step number overlay */}
                                        //     <div className="absolute top-4 right-4 text-6xl md:text-7xl font-bold text-white/80 leading-none">
                                        //       {step.stepNumber}
                                        //     </div>

                                        //     {step.hasVideo && (
                                        //       <div className="absolute inset-0 flex items-center justify-center">
                                        //         <button className="bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-colors">
                                        //           <PlayArrow className="text-white text-3xl" />
                                        //         </button>
                                        //       </div>
                                        //     )}
                                        //   </div>

                                        //   {/* Content under image */}
                                        //   <div className="space-y-4">
                                        //     <p className="text-yellow-500 font-medium text-sm uppercase tracking-wide">{step.subtitle}</p>
                                        //     <h3 className="text-2xl md:text-3xl font-bold leading-tight">{step.title}</h3>
                                        //     <p className="text-gray-300 leading-relaxed">{step.description}</p>
                                        //   </div>
                                        // </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )
                })}

                {/* CTA Button */}
                {ctaText && (
                    <div className="text-center mt-16">
                        <button className="bg-golden text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200 flex items-center gap-2 text-lg mx-auto">
                            Check What Your Car's Worth Now
                            <NorthEast className="w-5 h-5" />
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}
