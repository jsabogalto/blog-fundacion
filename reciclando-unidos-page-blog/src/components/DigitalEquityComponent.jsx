"use client";
import { Video } from "@imagekit/react";
import ButtonComponent from "./ButtonComponent";

const videos = [
  {
    src: "/domiclio.mp4",
    caption: "Recogemos tus donaciones de computadores gratis a domicilio en Bogotá",
  },
  {
    src: "/reparacion-equipos.mp4",
    caption: "Reacondicionamos los computadores donados con mantenimiento y reparación",
  },
  {
    src: "/entregamos-mejores-manos.mp4",
    caption: "Entregamos computadores reacondicionados a colegios públicos y fundaciones",
  },
  {
    src: "/educacion.mp4",
    caption: "Formamos en programación y arquitectura de computadores",
  },
];

export default function DigitalEquity() {
  const urlEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL;

  return (
    <section
      id="equidad"
      className="mx-auto w-full max-w-[1400px] px-8 py-16 md:px-12"
    >
      <div className="mx-auto">
        {/* Texto */}
        <div className="max-w-2xl">
          <h2 className="subtitle">
            Donar computadores en Bogotá transforma el futuro de quienes más lo necesitan.
          </h2>
          <p className="paragraph mt-6 text-gray-600">
            Al donar tus computadores usados recibes un certificado de donación con
            beneficio tributario en tu declaración de renta. Con ese mismo gesto ayudas a
            dotar de tecnología aulas escolares, fundaciones y familias enteras en Bogotá
            y Cundinamarca.
          </p>
        </div>

        {/* Videos */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {videos.map((v, i) => (
            <div key={i}>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Video
                  urlEndpoint={urlEndpoint}
                  src={v.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls={false}
                  preload="none"
                  className="absolute inset-0 h-full w-full object-cover pointer-events-none"
                />
              </div>
              <h3 className="text-md mt-3 text-gray-600">{v.caption}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}