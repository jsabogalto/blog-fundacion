"use client";
import { motion } from "framer-motion";
import ImageComponent from "./ImageComponent";
import SpanTextComponent from "./SpanTextComponent";

const stats = [
  {
    value: "62+",
    label: "Computadores donados y reacondicionados para quienes más lo necesitan.",
  },
  {
    value: "15+",
    label: "Estudiantes rurales beneficiados con tecnología",
  },
  {
    value: "2 ton",
    label: "Residuos electrónicos gestionados de forma responsable cada año.",
  },
  {
    value: "6+",
    label: "Colegios y fundaciones beneficiados con equipos reacondicionados.",
  },
];

const statVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.43, 0.13, 0.23, 0.96] },
  }),
};

export default function ImpactComponent() {
  return (
    <section
      id="impacto"
      className="mx-auto w-full max-w-layer px-5 sections-py"
    >
      <SpanTextComponent title={"la fundación"} textColor={"text-stone-800"} />
      {/* ===== TARJETA ===== */}
      <div className="py-4 md:py-8">
        <div className="relative overflow-hidden rounded-4xl py-8">
          {/* Imagen de fondo */}
          <ImageComponent
            src="https://thumbs.dreamstime.com/b/vista-a%C3%A9rea-superior-ecosistema-de-bosque-r%C3%ADo-y-lago-en-prado-valle-textura-desde-arriba-212814274.jpg"
            width={1400}
            height={700}
            className="absolute inset-0 h-full w-full object-cover"
            alt="Vista aérea de un ecosistema de bosque, río y lago"
          />

          {/* Tinte base (contraste en móvil) + degradado verde → natural */}
          <div className="absolute inset-0 bg-[#053215]/30" />
          <div className="absolute inset-0 bg-linear-to-r from-[#053215] via-[#053215]/85 to-transparent" />
          <div className="relative flex flex-col gap-8 p-8 md:grid md:grid-cols-2 md:items-center md:gap-12 md:p-16">
            {/* Logo — arriba en móvil, columna derecha en desktop */}
            <div className="flex justify-start md:order-2 md:justify-center">
              <ImageComponent
                src="/footer_image_profile.png.png"
                width={210}
                height={220}
                className="h-18 w-18 object-contain brightness-0 invert md:h-52 md:w-52"
                alt="Logo Reciclando Unidos"
              />
            </div>

            {/* Texto — debajo del logo en móvil, columna izquierda en desktop */}
            <motion.div
              className="w-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
            >
              <span className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-white/70">
                <span className="h-px w-8 bg-gradient-ru" />
                Impacto
              </span>

              <h2 className="title text-white">
                Unidos hacemos diferencia
              </h2>

              <p className="mt-6 max-w-[55ch] paragraph text-white/85 md:text-base">
                Somos una fundación que da una segunda vida a los computadores en
                desuso. Recibimos donaciones de equipos de empresas, entidades
                públicas y particulares, los reacondicionamos y los entregamos a
                colegios, fundaciones y familias de Bogotá y Cundinamarca
              </p>
            </motion.div>
          </div>
        </div>
      </div>


      {/* ===== STATS ===== */}
      <div className="mt-12 border-t border-gray-200 pt-10 md:mt-16 md:pt-12">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 md:px-16 lg:divide-x lg:divide-gray-200">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={statVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="lg:px-8 lg:first:pl-0"
            >
              <div className="mb-3 h-[2px] w-8 bg-gradient-ru" />
              <p className="subtitle font-light tracking-tight text-[#053215]">
                {s.value}
              </p>
              <p className="mt-3 paragraph-posts-item text-gray-600">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}