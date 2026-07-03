"use client";

import { Video } from "@imagekit/react";
import ButtonComponent from "./ButtonComponent";

export default function HeroSection() {
  const urlEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL;

  return (
    <section
      id="inicio"
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Video de fondo (ImageKit) */}
      <div className="absolute inset-0 h-full w-full overflow-hidden pointer-events-none shadow-2xl">
        <Video
          urlEndpoint={urlEndpoint}
          src="/portada-video-page.mp4"
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          preload="auto"
          className="absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 object-cover"
        />
      </div>

      {/* Overlay para legibilidad del texto blanco */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Contenido */}
      <div className="relative z-10 mx-auto flex h-full max-w-layer flex-col justify-end px-5 md:px-12">
        <div className="mb-14 max-w-2xl md:h-1/2 md:mb-30">
          <h1 className="title text-white">
            Transformando vidas con tecnología
          </h1>

          <p className="paragraph mt-4 max-w-[55ch] text-white/90">
            Desde los residuos electrónicos hasta la igualdad, convertimos los
            computadores desechados en oportunidades digitales para todos.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            
            <ButtonComponent
              className="bg-white text-green-ru w-auto"
              text="DONAR COMPUTADORES"
              link="/donar-computadores"
            />
            <ButtonComponent
              className="bg-white text-green-ru w-auto"
              text="SOLICITAR COMPUTADORES"
              link="/solicitud-computadores"
            />
          </div>
        </div>
      </div>
    </section>
  );
}