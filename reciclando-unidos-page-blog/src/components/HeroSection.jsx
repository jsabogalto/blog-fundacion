"use client";

import { Video } from "@imagekit/react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import ButtonComponent from "./ButtonComponent";
import SpanTextComponent from "./SpanTextComponent";

export default function HeroSection() {
  const urlEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL;

  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden">
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

      {/* Overlay para legibilidad del texto blanco, más fuerte abajo estilo Aramco */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10" />

      {/* Contenido */}
      <div className="relative z-10 mx-auto flex h-full max-w-layer flex-col justify-end px-5 pb-8 md:px-12 md:pb-28">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          <h1 className="title text-white">
            Donar computadores: Transforma vidas con tecnología
          </h1>

          <p className="paragraph mt-4 max-w-[55ch] text-white/90">
            Desde los residuos electrónicos hasta la igualdad, convertimos los
            computadores desechados en oportunidades digitales para todos.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <ButtonComponent
              className="w-auto bg-gradient-ru text-white"
              text="DONAR COMPUTADORES"
              link="#formulario-donacion"
            />
            <ButtonComponent
              className="w-auto border border-white/60 bg-transparent text-white hover:bg-white hover:text-green-ru"
              text="SOLICITAR COMPUTADORES"
              link="/solicitud-computadores"
            />
          </div>
        </motion.div>
      </div>

      {/* Indicador de scroll, estilo Aramco (círculo con flecha) */}
      <a
        href="#servicios"
        aria-label="Ir al siguiente contenido"
        className="absolute bottom-24 right-5 z-10 hidden h-11 w-11 items-center justify-center rounded-full border border-white/40 text-white transition-colors duration-300 hover:bg-white hover:text-green-ru md:right-12 md:flex md:bottom-28"
      >
        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={18} />
        </motion.span>
      </a>

    </section>
  );
}