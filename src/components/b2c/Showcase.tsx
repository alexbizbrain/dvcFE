'use client';
import React, { useState } from 'react';
import { PlayArrow, Star } from '@mui/icons-material';

import Image from 'next/image';


const ShowcaseSection = () => {
    const [activeVideo, setActiveVideo] = useState<string | null>(null);

    const handleVideoClick = () => {
        setActiveVideo('showcase-video');
    };

    return (
        <div className="bg-black text-white relative">
            {/* Main Content */}
            <div className=" mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen">

                {/* Trust Indicators */}
                <div className="text-center mb-12">
                    <p className="text-gray-300 text-sm mb-4">
                        Trusted by more than 20k Trusted by Drivers and Industry Experts
                    </p>

                    {/* Trustpilot Rating */}
                    <div className="flex items-center justify-center gap-2">
                        <div className="flex items-center gap-1">
                            <Star className="text-green-500 text-sm" />
                            <span className="text-green-500 font-semibold text-sm">Trustpilot</span>
                        </div>
                        <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="text-yellow-400 text-lg" />
                            ))}
                        </div>
                        <span className="text-gray-300 text-sm ml-2">5.0 rating</span>
                    </div>
                </div>

                {/* Main Headline */}
                <div className="text-center mb-8 max-w-4xl">
                    <h1 className="text-3xl md:text-3xl font-medium mb-6 leading-tight">
                        Lost Value After an Accident?
                    </h1>
                    <h2 className="text-3xl md:text-3xl font-medium mb-8">
                        <span className="text-golden relative">
                            Claim It Back.
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-golden"></div>
                        </span>
                    </h2>

                    <div className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                        <p className="mb-2">You may be owed thousands after a collision even if repairs are done.</p>
                        <p>We'll handle the paperwork. You just collect the check.</p>
                    </div>

                    <button className="bg-golden text-white px-8 py-4 text-lg font-semibold hover:bg-opacity-90 transition-all duration-200 mb-16">
                        Calculate how much you owed.
                    </button>
                </div>

                {/* Video Section */}
                <div className="relative w-full max-w-4xl">
                    <div className="relative overflow-hidden rounded-lg">
                        <img
                            //   src="/api/placeholder/800/450" 
                            src={"/assets/dvcc/Frame 1618868207.png"}
                            // src={"https://images.pexels.com/photos/2265634/pexels-photo-2265634.jpeg?_gl=1*3l7upx*_ga*Nzc0NTUyNjQ2LjE3NTIyMjY5ODY.*_ga_8JE65Q40S6*czE3NTIyMjY5ODYkbzEkZzEkdDE3NTIyMjc0MjkkajUwJGwwJGgw"}
                            alt="Car accident damage video thumbnail"
                            className="w-full h-96 object-cover"
                        />
                        <div className="absolute inset-0  bg-opacity-30 flex items-center justify-center">
                            <button
                                onClick={handleVideoClick}
                                className=" bg-opacity-20 backdrop-blur-sm rounded-full p-1 hover:bg-opacity-30 transition-all duration-200 group"
                            >
                                {/* <PlayArrow className="w-12 h-12 text-white group-hover:scale-110 transition-transform" /> */}
                                <Image
                                    src="/assets/dvcc/play.svg"
                                    alt="Play icon"
                                    width={45}
                                    height={45}
                                    className="group-hover:scale-110 transition-transform "
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Video Modal */}
            {activeVideo && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
                    <div className="relative w-full max-w-5xl">
                        <button
                            onClick={() => setActiveVideo(null)}
                            className="absolute -top-12 right-0 text-white hover:text-golden transition-colors text-xl"
                        >
                            ✕
                        </button>
                        <div className="bg-gray-900 p-4 rounded-lg">
                            <div className="aspect-video bg-gray-800 rounded flex items-center justify-center">
                                <div className="text-center">
                                    <PlayArrow className="w-16 h-16 text-white mb-4 mx-auto" />
                                    <p className="text-white text-lg">Video Player - {activeVideo}</p>
                                    <p className="text-gray-400 text-sm mt-2">Replace with your actual video player</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Background Overlay for better text readability */}
            {/* <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/95 to-gray-900 pointer-events-none"></div> */}
        </div>
    );
};

export default ShowcaseSection;