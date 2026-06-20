"use client";

import { Image } from "@imagekit/react";

const ImageComponent = ({ src, width, height, className, alt, priority }) => {
  const urlEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL;

  return (
    <Image
      urlEndpoint={urlEndpoint}
      src={src}
      width={width}
      height={height}
      className={className}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      lqip={{ active: true, quality: 20 }}
      transformation={[{ width, height }]}
    />
  );
};

export default ImageComponent;