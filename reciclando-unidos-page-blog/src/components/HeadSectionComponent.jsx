"use client";

import { motion } from "framer-motion";

/**
 * HeadSectionComponent
 * Encabezado de sección estilo Aramco:
 * - Eyebrow opcional (etiqueta pequeña en mayúsculas) con línea acento degradada.
 * - Título y párrafo con entrada animada (fade + slide) al hacer scroll.
 * - 100% compatible con el uso anterior: title, text, classNameHeadSection
 *   siguen funcionando igual; "eyebrow" es un prop nuevo y opcional.
 */
const HeadSectionComponent = ({ title, text, classNameHeadSection }) => {
  return (
    <div
      className={`grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12 md:px-16 py-4 md:py-8 ${classNameHeadSection || ""}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
      >
        <h2 className="subtitle">{title}</h2>
      </motion.div>

      <motion.p
        className="max-w-[60ch] paragraph md:pt-2"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.43, 0.13, 0.23, 0.96] }}
      >
        {text}
      </motion.p>
    </div>
  );
};

export default HeadSectionComponent;