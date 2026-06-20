"use client";

import { Video } from "@imagekit/react";
import ButtonComponent from "./ButtonComponent";

export default function HeroSection() {
  const urlEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL;

  return (
    <section
      id="inicio"
      className="relative h-screen max-h-[660px] w-full overflow-hidden"
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
          className="absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 object-cover object-[center_50%]"
        />
      </div>

      {/* Overlay para legibilidad del texto blanco */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Contenido */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-8 md:px-12">
        <div className="mb-12 max-w-2xl">
          <h1 className="title mt-16 text-white">
            Dona computadores y devuelve la vida a la tecnología y a los sueños
          </h1>

          <p className="paragraph mt-6 max-w-lg text-white/90">
            Desde los residuos electrónicos hasta la igualdad, transformamos los
            dispositivos desechados en oportunidades digitales para todos.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <ButtonComponent
              className="bg-white text-green-ru"
              text="Solicitar computadores"
              link="/solicitud-computadores"
            />
            <ButtonComponent
              className="bg-white text-green-ru"
              text="Donar computadores"
              link="/donar-computadores"
            />
          </div>
        </div>
      </div>
    </section>
  );
}