"use client";
import { Video } from "@imagekit/react";
import ButtonComponent from "./ButtonComponent";

const videos = [
  {
    src: "/domiclio.mp4",
    caption: "Recogemos tus donaciones a domicilio gratis en Bogotá",
  },
  {
    src: "/reparacion-equipos.mp4",
    caption: "Damos nueva vida a computadores con mantenimiento y reparación",
  },
  {
    src: "/entregamos-mejores-manos.mp4",
    caption: "Llevamos tecnología a colegios públicos y fundaciones",
  },
  {
    src: "/educacion.mp4",
    caption: "Enseñamos programación y arquitectura de computadores",
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
            El futuro se construye gracias a la tecnología, pero empieza por ti.
          </h2>
          <p className="paragraph mt-6 text-gray-600">
            Nuestros donantes ahorran gracias a las deducciones fiscales en el
            impuesto a la renta, y con ese monto es suficiente para dotar de
            computadores aulas escolares llenas de personas y familias enteras.
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
              <p className="text-md mt-3 text-gray-600">{v.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}