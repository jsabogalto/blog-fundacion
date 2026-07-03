"use client";
import { Video } from "@imagekit/react";
import HeadSectionComponent from "./HeadSectionComponent";

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
    caption: "Donar computadores para nuestros talleres de alfabetización digital",
  },
];

export default function DigitalEquity() {
  const urlEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL;

  return (
    <section
      id="proceso-donacion"
      className=""
    >
      <div className="mx-auto w-full max-w-layer px-5 py-8 md:px-12 md:py-14">
        <HeadSectionComponent title="Donar computadores en Bogotá: transforma el futuro de quienes más lo necesitan"
        text={"Cuando donas tus computadores usados ayudas a dotar de tecnología aulas escolares, fundaciones y familias en Bogotá y Cundinamarca. Nosotros los recogemos gratis en tu casa u oficina y te entregamos tu certificado de donación."
        }
        classNameHeadSection={"bg-green-ru/20 p-8 rounded-3xl"}/>

        {/* Videos */}
        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 md:mt-16 lg:grid-cols-4">
          {videos.map((v, i) => (
            <div key={i}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
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
              <h3 className="paragraph text-sm mt-4 text-gray-600">{v.caption}</h3>
            </div>
          ))}
        </div>
      </div>
      {/* Texto */}
    </section>
  );
}