"use client";
import { motion } from "framer-motion";
import ImageComponent from "./ImageComponent";
import HeadSectionComponent from "./HeadSectionComponent";
import SpanTextComponent from "./SpanTextComponent";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.43, 0.13, 0.23, 0.96] },
  }),
};

export default function AboutComponent({ cards, title, text, className, classNameHeadSection, id, spanTitle, spanTitleColor }) {
  return (
    <section id={id} className={`w-full ${className} scroll`}>
      <div className="max-w-layer px-5 sections-py md:px-12 mx-auto">
        <HeadSectionComponent
          title={title}
          text={text}
          classNameHeadSection={classNameHeadSection}
        />

        {/* ===== Grilla de tarjetas ===== */}
        <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {cards.map((c, i) => (
            <motion.div
              key={c.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="group"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-950">
                <ImageComponent
                  src={c.image}
                  width={600}
                  height={450}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  alt={c.alt}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Numeración sobre la imagen */}
                <span className="absolute left-4 top-4 text-xs tracking-[0.25em] text-white/80">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="mt-5">
                <div className="mb-2 h-[2px] w-8 bg-gradient-to-r from-emerald-400 to-sky-400 transition-all duration-500 ease-out group-hover:w-12" />
                <h3 className="text-sm font-medium tracking-tight text-[#053215]">
                  {c.title}
                </h3>
                <p className="mt-2 max-w-[38ch] text-xs leading-relaxed text-gray-600">
                  {c.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}