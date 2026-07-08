"use client";
import { motion } from "framer-motion";
import ImageComponent from "./ImageComponent";
import HeadSectionComponent from "./HeadSectionComponent";
import SpanTextComponent from "./SpanTextComponent";

const items = [
  {
    id: "portatiles",
    title: "Portátiles",
    inf: "Usados o dañados",
    tag: "Reacondicionamiento o reciclaje",
    image: "objetivo.jpeg",
    alt: "Computador portátil usado apto para donación",
  },
  {
    id: "cpu",
    title: "Computadores de escritorio (CPU)",
    inf: "Usados o dañados",
    tag: "Reacondicionamiento o reciclaje",
    image: "que-recibimos_-HebibFo9.webp",
    alt: "Torres de computador de escritorio para donar",
  },
  {
    id: "todo-en-uno",
    title: "Todo en uno",
    inf: "Usados o dañados",
    tag: "Reacondicionamiento o reciclaje",
    image: "portada-pagina-solicita_Y-G-ScTmIm.webp",
    alt: "Computador todo en uno usado para donación",
  },
  {
    id: "tablets",
    title: "Tablets",
    inf: "Usadas o dañadas",
    tag: "Reacondicionamiento",
    image: "persona-mayor-2.webp",
    alt: "Tablet usada apta para donación",
  },
  {
    id: "monitores",
    title: "Monitores",
    inf: "Usados o dañados",
    tag: "Reacondicionamiento o reciclaje",
    image: "1777396020675.jpeg",
    alt: "Monitores de computador usados para donar",
  },
  {
    id: "servidores",
    title: "Servidores",
    inf: "Usados o dañados",
    tag: "Reacondicionamiento o reciclaje",
    image: "servidores.webp",
    alt: "Servidores empresariales en desuso para donación",
  },
  {
    id: "electronico",
    title: "Material electrónico",
    inf: "Todo tipo de material electrónico",
    tag: "Disposición final y reciclaje electrónico",
    image: "electronicos.webp",
    alt: "Residuos de aparatos electrónicos para reciclaje responsable",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: (i % 4) * 0.08, ease: [0.43, 0.13, 0.23, 0.96] },
  }),
};

export default function ReciclyItems() {
  return (
    <section id="que-recibimos" className="bg-stone-100">
      <div className="max-w-layer px-5 py-12 md:px-12 md:py-24 mx-auto">
        <SpanTextComponent title="tipos de donaciones" textColor="text-stone-800"/>
        <HeadSectionComponent
          title="¿Qué computadores y equipos puedes donar?"
          text="Recibimos tus equipos funcionen o no: lo que sirve se reacondiciona y lo que no, recibe disposición final ambientalmente responsable."
        />
        <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 md:mt-12 md:grid-cols-4">
          {items.map((item, i) => (
            <motion.div
              key={item.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="group relative overflow-hidden rounded-2xl shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <ImageComponent
                  src={item.image}
                  width={600}
                  height={800}
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  alt={item.alt}
                />

                {/* Degradado negro que cubre toda la parte inferior de la card */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-transparent" />

                {/* Texto blanco sobre el degradado */}
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <div className="mb-2 h-[2px] w-8 bg-gradient-to-r from-emerald-400 to-sky-400 transition-all duration-500 ease-out group-hover:w-12" />

                  <h3 className="text-base font-medium tracking-tight sm:text-lg">
                    {item.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}