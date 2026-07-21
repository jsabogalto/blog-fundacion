"use client";
import { Video } from "@imagekit/react";

const VideoComponent = ({url}) => {
    const urlEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL;

    return (
        <Video
            urlEndpoint={urlEndpoint}
            src={url}
            autoPlay
            muted
            loop
            playsInline
            controls={false}
            preload="auto"
            className="absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 object-cover"
        />
    )
}

export default VideoComponent

