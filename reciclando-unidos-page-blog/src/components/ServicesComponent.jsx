"use client";
import { motion } from "framer-motion";
import LinkComponent from "./LinkComponent";
import SpanTextComponent from "./SpanTextComponent";

const textVariants = {
  hidden: (reverse) => ({ opacity: 0, x: reverse ? -24 : 24 }),
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] } },
};

export default function ServicesComponent({ sections, className, spanTitle}) {
  return (
    <section id="servicios" className={`w-full sections-py overflow-x-clip ${className}`}>
      <div className="mx-auto flex max-w-layer flex-col px-5 md:px-12">
        <SpanTextComponent title={spanTitle} textColor={"text-stone-800"}/>
        {sections.map((s, i) => (
          <div key={s.id} className="py-2 md:py-12">
            <div className="grid grid-cols-1 items-start md:grid-cols-2 md:gap-12">
              {/* ----- IMAGEN ----- */}
              <motion.div
                className={`group relative h-72 overflow-hidden rounded-3xl sm:h-80 md:h-[420px] ${s.reverse ? "md:order-2" : "md:order-1"
                  }`}
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.35 }}
              >
                <img
                  src={s.image}
                  alt={s.alt}
                  width={800}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                {/* Numeración de servicio sobre la imagen */}
                <span className="absolute left-5 top-5 text-xs tracking-[0.25em] text-white/80">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </motion.div>

              {/* ----- TEXTO ----- */}
              <motion.div
                className={`flex flex-col justify-center px-0 py-8 md:py-12 ${s.reverse ? "md:order-1" : "md:order-2"
                  }`}
                custom={s.reverse}
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.35 }}
              >

                <h2 className="subtitle">{s.heading}</h2>

                <p className="paragraph mt-4 max-w-[60ch]">{s.text}</p>

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
      </div>
    </section>
  );
}