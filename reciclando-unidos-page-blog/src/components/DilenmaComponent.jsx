"use client";
import { motion } from "framer-motion";
import ImageComponent from "./ImageComponent";
import LinkComponent from "./LinkComponent";
import SpanTextComponent from "./SpanTextComponent";

const textVariants = {
  hidden: (reverse) => ({ opacity: 0, x: reverse ? -24 : 24 }),
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] } },
};

export default function DilemmaComponent({
  sections,
  className = "",
  spanTitle,
  title,
  footerNote,
}) {
  return (
    <section id="dilemas" className={`w-full sections-py overflow-x-clip  ${className}`}>
      <div className="mx-auto flex max-w-layer flex-col px-5 md:px-12">

        {/* Título centrado con línea de gradiente debajo, como la referencia */}
        {title && (
          <div className="mb-4 md:mb-8 py-4">
            <h2 className="subtitle text-center">{title}</h2>
            <div className="mt-6 h-[2px] w-full bg-gradient-ru" />
          </div>
        )}

        {sections.map((s) => (
          <div key={s.id} className="py-6 md:py-10">
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-16">
              {/* ----- IMAGEN: el PNG se muestra tal cual, sin recortes
                   ni radios — la forma la trae el propio archivo ----- */}
              <motion.div
                className={`flex justify-center ${
                  s.reverse ? "md:order-1" : "md:order-2"
                }`}
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.35 }}
              >
                <ImageComponent
                  src={s.image}
                  alt={s.alt}
                  width={800}
                  height={800}
                  className="h-auto w-full max-w-[380px] md:max-w-[440px]"
                />
              </motion.div>

              {/* ----- TEXTO: centrado, como en la referencia ----- */}
              <motion.div
                className={`flex flex-col items-center justify-center text-center ${
                  s.reverse ? "md:order-2" : "md:order-1"
                }`}
                custom={s.reverse}
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.35 }}
              >
                <h3 className="subtitle bg-gradient-ru bg-clip-text text-transparent">
                  {s.heading}
                </h3>

                <p className="paragraph mt-4 max-w-[48ch]">{s.text}</p>

                {s.cta && (
                  <div className="mt-6">
                    <LinkComponent
                      link={s.cta.href}
                      className="text-xs uppercase tracking-[0.18em] text-green-ru sm:text-sm"
                      text={s.cta.label}
                    />
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        ))}

        {/* Cierre: línea de gradiente + dato destacado centrado */}
        {footerNote && (
          <div className="mt-4 md:mt-8">
            <div className="h-[2px] w-full bg-gradient-ru" />
            <h3 className="subtitle mx-auto mt-8 max-w-[60ch] text-center font-medium text-gradient-ru">
              {footerNote}
            </h3>
          </div>
        )}
      </div>
    </section>
  );
}