"use client";

import { Video } from "@imagekit/react";
import { motion } from "framer-motion";
import HeadSectionComponent from "./HeadSectionComponent";
import SpanTextComponent from "./SpanTextComponent";

const videos = [
  {
    src: "/domiclio.mp4",
    step: "01",
    label: "Recogida",
    caption: "Recogemos tus donaciones de computadores gratis a domicilio en Bogotá",
  },
  {
    src: "/reparacion-equipos.mp4",
    step: "02",
    label: "Reacondicionamiento",
    caption: "Reacondicionamos los computadores donados con mantenimiento y reparación",
  },
  {
    src: "/entregamos-mejores-manos.mp4",
    step: "03",
    label: "Entrega",
    caption: "Entregamos computadores reacondicionados a colegios públicos y fundaciones",
  },
  {
    src: "/educacion.mp4",
    step: "04",
    label: "Educación",
    caption: "Donar computadores para nuestros talleres de alfabetización digital",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.43, 0.13, 0.23, 0.96] },
  }),
};

export default function DigitalEquity() {
  const urlEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL;

  return (
    <section id="proceso-donacion " className="bg-white">
      <div className="mx-auto w-full max-w-layer px-5 md:px-12 sections-py">
        <SpanTextComponent title={"proceso de donación"} textColor={"text-stone-800"}/>
        <HeadSectionComponent
          title="Donar computadores en Bogotá: transforma el futuro de quienes más lo necesitan"
          text="Cuando donas tus computadores usados ayudas a dotar de tecnología aulas escolares, fundaciones y familias en Bogotá y Cundinamarca. Nosotros los recogemos gratis en tu casa u oficina y te entregamos tu certificado de donación."
        />

        {/* Videos / proceso en 4 pasos */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 py-4 md:py-8">
          {videos.map((v, i) => (
            <motion.div
              key={i}
              className="group relative"
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-950 sm:rounded-3xl">
                <Video
                  urlEndpoint={urlEndpoint}
                  src={v.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls={false}
                  preload="none"
                  className="absolute inset-0 h-full w-full object-cover pointer-events-none transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Degradado negro estilo Aramco */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Número de paso */}
                <div className="absolute left-4 top-4 sm:left-5 sm:top-5">
                  <span className="block text-[11px] tracking-[0.25em] text-white/60">
                    {v.step}
                  </span>
                  <span className="mt-0.5 block text-[10px] uppercase tracking-[0.2em] text-white/80">
                    {v.label}
                  </span>
                </div>

                {/* Texto inferior */}
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <div className="mb-3 h-[2px] w-8 bg-gradient-ru transition-all duration-500 ease-out group-hover:w-14" />
                  <p className="text-sm font-light leading-snug text-white sm:text-[15px]">
                    {v.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}