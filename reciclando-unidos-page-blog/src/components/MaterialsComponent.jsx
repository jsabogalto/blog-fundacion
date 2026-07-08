"use client";
import { motion } from "framer-motion";
import ImageComponent from "./ImageComponent";
import LinkComponent from "./LinkComponent";
import HeadSectionComponent from "./HeadSectionComponent";
import SpanTextComponent from "./SpanTextComponent";
const urlEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL;

//donacion-emanuel_KOxpCa8Bt.webp
//portada-donar-computadores_NOTCD-CFJ.png
//3_OwdeL5Q5i.webp

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.43, 0.13, 0.23, 0.96] },
  }),
};

export default function MaterialsComponent({ materials, id, title, text, classNameHeadSection, link, textLink }) {
  return (
    <section id={id} className="scroll-mb-30 bg-stone-100">
      <div className="mx-auto w-full max-w-layer px-5 md:px-12 sections-py">
        <SpanTextComponent title="¿Dónde terminan tus computadores?" textColor="text-stone-800"/>
        <HeadSectionComponent title={title} text={text} classNameHeadSection={classNameHeadSection} />

        {/* Grilla: 2 col en móvil, 4 col escalonadas en desktop */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:mt-8 md:grid-cols-4 md:gap-x-8 md:gap-y-0 lg:grid-cols-4 py-8">
          {materials.map((m, i) => (
            <motion.div
              key={m.id}
              // En desktop, las tarjetas impares (2ª y 4ª) bajan para el efecto escalonado
              className={`group relative flex flex-col ${i % 2 === 1 ? "md:mt-16" : ""}`}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-neutral-950 sm:rounded-3xl">
                <ImageComponent
                  src={`${urlEndpoint}/${m.image}`}
                  width={600}
                  height={800}
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  alt={m.alt}
                />

                {/* Degradado negro estilo Aramco */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

                {/* Caption en blanco sobre la imagen */}
                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 md:p-5">
                  <div className="mb-2 h-[2px] w-6 bg-gradient-ru transition-all duration-500 ease-out group-hover:w-10 sm:w-8" />
                  <h3 className="text-xs font-light leading-snug text-white sm:text-sm md:text-base">
                    {m.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA centrado */}
        <div className="mt-12 flex justify-center md:mt-16">
          <LinkComponent
            link={link}
            text={textLink}
            className="text-xs uppercase tracking-[0.18em] text-green-ru sm:text-sm"
          />
        </div>
      </div>
    </section>
  );
}