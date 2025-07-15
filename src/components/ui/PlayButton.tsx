import Image from 'next/image';
interface PlayButtonProps {
    handleVideoClick: (videoName: string) => void;
}

const PlayButton = ({ handleVideoClick }: PlayButtonProps) => {
    return (
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-xl">
            <button
                onClick={() => handleVideoClick('accident-video')}
                className=" bg-opacity-20 backdrop-blur-sm  p-1 hover:bg-opacity-30 rounded-full transition-all duration-200 group cursor-pointer"
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
    )
}

export default PlayButton