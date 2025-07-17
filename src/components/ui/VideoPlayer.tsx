'use client';
import React, { useState } from 'react';
import { PlayArrow, Close } from '@mui/icons-material';
import Image from 'next/image';
import PlayButton from './PlayButton';

interface VideoPlayerProps {
  thumbnailSrc: string;
  thumbnailAlt: string;
  videoSrc?: string;
  videoTitle?: string;
  className?: string;
  thumbnailClassName?: string;
  playButtonSize?: 'small' | 'medium' | 'large';
  rounded?: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  thumbnailSrc,
  thumbnailAlt,
  videoSrc,
  videoTitle = "Video Player",
  className = "",
  thumbnailClassName = "",
  playButtonSize = 'medium',
  rounded = true
}) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handleVideoClick = () => {
    setIsVideoOpen(true);
  };

  const handleCloseVideo = () => {
    setIsVideoOpen(false);
  };

  // Play button size variants
  const playButtonSizes = {
    small: { container: 'p-3', icon: 'w-6 h-6' },
    medium: { container: 'p-4', icon: 'w-8 h-8' },
    large: { container: 'p-6', icon: 'w-12 h-12' }
  };

  const currentSize = playButtonSizes[playButtonSize];

  return (
    <>
      {/* Video Thumbnail */}
      <div className={`relative cursor-pointer group ${className}`}>
        <div className={`relative overflow-hidden ${rounded ? 'rounded-lg' : ''} ${thumbnailClassName}`}>
          <Image
            src={thumbnailSrc}
            alt={thumbnailAlt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <PlayButton handleVideoClick={handleVideoClick} />
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-5xl">
            {/* Close Button */}
            <button
              onClick={handleCloseVideo}
              className="absolute -top-12 right-0 text-white hover:text-golden transition-colors text-xl"
              aria-label="Close video"
            >
              <Close className="w-8 h-8" />
            </button>
            
            {/* Video Container */}
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <div className="aspect-video bg-gray-800 flex items-center justify-center relative">
                {videoSrc ? (
                  <video
                    src={videoSrc}
                    controls
                    autoPlay
                    className="w-full h-full"
                    title={videoTitle}
                  />
                ) : (
                  <div className="text-center">
                    <PlayArrow className="w-16 h-16 text-white mb-4 mx-auto" />
                    <p className="text-white text-lg mb-2">{videoTitle}</p>
                    <p className="text-gray-400 text-sm">
                      Video player ready - add your video source
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoPlayer;