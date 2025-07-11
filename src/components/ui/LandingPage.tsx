'use client';
import React, { useState } from 'react';
import { PlayArrow } from '@mui/icons-material';
import Image from 'next/image';

const LandingPage = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const handleVideoClick = (videoId: string) => {
    setActiveVideo(videoId);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white" style={{ backgroundColor: '#151515' }}>
      {/* Main Content */}
      <div className="w-full">
        <div className="grid lg:grid-cols-2 h-screen">

          {/* Auto Accident Section */}
          <div className="bg-white text-gray-900 p-8 flex flex-col justify-center items-center">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-4">
                Had an <span className="text-golden">auto accident</span>?
              </h1>
              <p className="text-2xl mb-2">
                <span className="text-golden font-semibold">Claim</span> more than just
              </p>
              <p className="text-2xl mb-8">
                <span className="text-golden font-semibold">repairs.</span>
              </p>

              <button className="rounded-sm bg-golden text-white px-8 py-3 font-semibold hover:bg-opacity-90 transition-all duration-200">
                Calculate how much you owed.
              </button>
            </div>

            {/* Video Section */}
            <div className="relative w-full max-w-md">
              <div className="relative overflow-hidden">
                <Image
                  // src="/assets/dvcc/accident.jpg"
                  src={"https://images.pexels.com/photos/2265634/pexels-photo-2265634.jpeg?_gl=1*3l7upx*_ga*Nzc0NTUyNjQ2LjE3NTIyMjY5ODY.*_ga_8JE65Q40S6*czE3NTIyMjY5ODYkbzEkZzEkdDE3NTIyMjc0MjkkajUwJGwwJGgw"}
                  alt="Auto accident claim video thumbnail"
                  className="w-full h-64 object-cover rounded-xl"
                  width={400}
                  height={250}
                />
                {/* <div className="rounded-md absolute inset-0  backdrop-grayscale-50 bg-opacity-40 flex items-center justify-center"> */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-xl">
                  <button
                    onClick={() => handleVideoClick('accident-video')}
                    className=" bg-opacity-20 backdrop-blur-sm  p-1 hover:bg-opacity-30 rounded-full transition-all duration-200 group"
                  >
                    <Image
                      src="/assets/dvcc/play.svg"
                      alt="Play icon"
                      width={45}
                      height={45}
                      className="group-hover:scale-110 transition-transform"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Business Referrals Section */}
          <div className="p-8 flex flex-col justify-center items-center">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4">
                Grow Your Business with
              </h2>
              <p className="text-4xl font-bold mb-8">
                <span className="text-golden">Referrals</span>
                <br />
                <br />
              </p>

              <button className="rounded-sm bg-golden text-white px-8 py-3 font-semibold hover:bg-opacity-90 transition-all duration-200">
                Calculate how much your business earn.
              </button>
            </div>

            {/* Video Section */}
            <div className="relative w-full max-w-md">
              <div className="relative overflow-hidden">
                <img
                  // src="/api/placeholder/400/250"
                  src={"https://images.pexels.com/photos/7731402/pexels-photo-7731402.jpeg?_gl=1*1m0qivj*_ga*Nzc0NTUyNjQ2LjE3NTIyMjY5ODY.*_ga_8JE65Q40S6*czE3NTIyMjY5ODYkbzEkZzEkdDE3NTIyMjcwMDMkajQzJGwwJGgw"}
                  alt="Business referrals video thumbnail"
                  className="w-full h-64 object-cover rounded-xl"
                />
                {/* <div className="rounded-md absolute inset-0 bg-black bg-opacity-40 backdrop-opacity-40  flex items-center justify-center"> */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-xl">

                  <button
                    onClick={() => handleVideoClick('referrals-video')}
                    className=" bg-opacity-20 backdrop-blur-sm  p-1 hover:bg-opacity-30 rounded-full transition-all duration-200 group"
                  >
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
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-10 right-0 text-white hover:text-golden transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="bg-gray-900 p-4">
              <div className="aspect-video bg-gray-800 flex items-center justify-center">
                <p className="text-white">Video Player - {activeVideo}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;