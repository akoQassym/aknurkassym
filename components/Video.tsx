interface VideoProps {
    width: number;
    height: number;
    type: string;
    src: string;
    controls: boolean;
    autoPlay: boolean;
    loop: boolean;
    muted: boolean;
}

const Video: React.FC<VideoProps> = ({  
    width,
    height,
    type = "video/mp4",
    src,
    controls = true,
    autoPlay = false,
    loop = false,
    muted = false
}) => {
    return (
        <video 
            width={width} 
            height={height} 
            controls={controls} 
            autoPlay={autoPlay} 
            preload="none" 
            loop={loop} 
            muted={muted}
            playsInline
        >
            <source src={src} type={type} />
        </video>
    )
}

export default Video
