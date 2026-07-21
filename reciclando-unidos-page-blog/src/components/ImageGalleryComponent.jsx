"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ImageComponent from "./ImageComponent";
import SpanTextComponent from "./SpanTextComponent";

/**
 * MomentsGallery (estilo FIFA)
 * - Un solo ImageComponent por card (object-cover + crop inteligente de ImageKit)
 * - Móvil: swipe nativo con snap, sin flechas
 * - Desktop (md+): las flechas avanzan una PÁGINA completa (todas las cards
 *   visibles). Al hacer click, las cards nuevas entran "girando" (rotateY)
 *   en cascada, y la galería queda posicionada en la siguiente tanda:
 *   si se ven 4 cards, la card 5 pasa a ser la primera y desde ahí
 *   continúa el resto del array.
 */

const momentsData = [
  {
    id: "colegio-manuela-beltran",
    url: "/donarcomputadoresaestudiantes.webp",
    category: "Colegios",
    caption: "Esperanza que enciende aulas 💡",
    title: "Donación de computadores a estudiantes de bachillerato en Bogotá",
    description:
      "Como parte de nuestra donación de computadores, entregamos 12 equipos que impulsarán las clases de electrónica y programación de los estudiantes.",
    isNew: true,
  },
  {
    id: "colegio-san-mateo",
    url: "/centro-educativo_Lyua9kP4q.webp",
    category: "Colegios",
    caption: "Sueños con segunda oportunidad ✨",
    title: "Donar computadores usados en el colegio San Mateo en Soacha",
    description:
      "Gracias a quienes decidieron donar computadores usados, entregamos 8 equipos reacondicionados que impulsarán las clases de electrónica y programación.",
    isNew: true,
  },
  {
    id: "fundacion-talleres-creativos",
    url: "/portada-solicitar-computador.webp",
    category: "Fundaciones",
    caption: "Donar computadores transforma Bosa 💛",
    title: "Donar computadores en Bogotá: fundación beneficiada en Bosa",
    description:
      "Entregamos 5 computadores portátiles a la fundación Talleres Creativos en Bosa, Bogotá, gracias a personas y empresas que decidieron donar computadores en Bogotá.",
    isNew: true,
  },
  {
    id: "emanuel-manizales",
    url: "/donacion-emanuel_KOxpCa8Bt.webp",
    category: "Estudiantes universitarios",
    caption: "Talento imparable: Emanuel 🏆",
    title: "Emanuel, el mejor ICFES de Caldas en Manizales, ya tiene su computador",
    description:
      "Emanuel no tenía un portátil para comenzar su nueva etapa universitaria. Gracias a la donación de computadores de nuestra fundación, hoy puede continuar sus estudios con la herramienta que necesitaba.",
  },
  {
    id: "jose-viota",
    url: "/donacion-jose__xZTMyp7A.webp",
    category: "Estudiantes rurales",
    caption: "Alegría en el campo: José 🌱",
    title: "José disfrutó de su primer computador gracias a donar computadores usados",
    description:
      "Invertimos en las comunidades donde operamos, apoyando educación, sostenibilidad y desarrollo local a través de la donación de computadores.",
  },
  {
    id: "valery-don-matias-antioquia",
    url: "/donacion-valery_o7psDeNCU.webp",
    category: "Estudiantes rurales",
    caption: "Futuro digital para Valery 💻",
    title: "Valery ahora podrá estudiar ingeniería multimedia",
    description:
      "Gracias a donar computadores usados, Valery, de Don Matías (Antioquia), recibió el equipo que necesitaba para iniciar su carrera de ingeniería multimedia.",
  },
  {
    id: "karen-don-matias",
    url: "/karen-don-matias.webp",
    category: "Estudiantes rurales",
    caption: "Ilusión que estudia: Karen 📚",
    title: "Donar computadores cambia vidas: la historia de Karen en Don Matías",
    description:
      "Karen, de Don Matías (Antioquia), recibió un computador reacondicionado para continuar sus estudios, otro ejemplo de cómo la donación de computadores transforma comunidades rurales.",
  },
  {
    id: "colegio-viota",
    url: "/colegio-viota.jpg",
    category: "Colegios",
    caption: "Tecnología que llega al campo 🚜",
    title: "Donación de computadores para el colegio de Viotá, Cundinamarca",
    description:
      "Llevamos equipos reacondicionados al colegio de Viotá para que más estudiantes rurales tengan acceso a herramientas digitales en sus clases.",
  },
  {
    id: "david-donacion",
    url: "/david-donacion-computador_y2-DGrHDq.webp",
    category: "Estudiantes",
    caption: "Un nuevo comienzo para David 🌟",
    title: "David recibió su computador gracias a la donación de computadores usados",
    description:
      "David necesitaba un equipo para continuar su formación. Hoy tiene su primer computador gracias a quienes decidieron donar computadores usados.",
  },
  {
    id: "samuel-puerto-brasil",
    url: "/samuel_2ITyReFn7.webp",
    category: "Estudiantes rurales",
    caption: "Primer computador de Samuel 🎁",
    title: "Donar computadores usados: un portátil para Samuel",
    description:
      "Donamos un computador a Samuel, quien nunca había podido tener uno y hoy puede aprender y estudiar gracias a la donación de computadores.",
  },
  {
    id: "gerardo-donacion",
    url: "/gerardo-donacion_4otPsZtk0.webp",
    category: "Comunidad",
    caption: "Gratitud que inspira: Gerardo 🙏",
    title: "Gerardo recibió un computador reacondicionado de nuestra fundación",
    description:
      "Gerardo hace parte de las personas beneficiadas por quienes deciden donar computadores en Bogotá y Cundinamarca.",
  },
  {
    id: "daniela-liberia",
    url: "/hermana-andres_U6YHP91gr.webp",
    category: "Estudiantes rurales",
    caption: "Daniela estrena su primer equipo 💚",
    title: "Donamos un computador a Daniela, quien nunca había tenido uno",
    description:
      "Daniela cursa su bachillerato en el colegio de Liberia (Viotá) y hoy estudia con su primer computador gracias a la donación de computadores.",
  },
  {
    id: "andres-fabian-liberia",
    url: "/estudiantes-rurales_velqXRFFp.webp",
    category: "Estudiantes rurales",
    caption: "Andrés y Fabián, juntos aprenden 🤝",
    title: "Donamos un computador a Andrés y Fabián en Liberia, Viotá",
    description:
      "Andrés y Fabián, estudiantes del colegio de Liberia (Viotá), pueden continuar su educación gracias a donar computadores usados.",
  },
  {
    id: "jardin-ji-waldorf",
    url: "/donacion-jardin_rlY6EJyRm.webp",
    category: "Jardines",
    caption: "Aprendizaje que florece 🌸",
    title: "Donar computadores en Bogotá: tecnología para el Jardín Ji Waldorf",
    description:
      "Donamos 12 computadores al Jardín Ji Waldorf en Bogotá: donar computadores es abrir caminos para que el aprendizaje florezca desde la primera infancia.",
  },
  {
    id: "sofia-ciudad-bolivar",
    url: "/portada-sofial_9wTT_JF3B.webp",
    category: "Estudiantes vulnerables",
    caption: "Sofía cumple su meta del SENA 🎓",
    title: "Donar computadores en Bogotá: la historia de Sofía en Ciudad Bolívar",
    description:
      "Sofía, de Ciudad Bolívar, necesitaba un equipo para su tecnólogo del SENA y hoy lo tiene gracias a la donación de computadores.",
  },
  {
    id: "simon-cursos-ingles",
    url: "/donacion-simon_6MHysN6yZn.webp",
    category: "Estudiantes vulnerables",
    caption: "Simón dice hello al futuro 🇬🇧",
    title: "Donar computadores en Bogotá: Simón inicia sus cursos de inglés",
    description:
      "Simón necesitaba un computador para comenzar sus cursos de inglés, otro logro de quienes deciden donar computadores en Bogotá.",
  },
  {
    id: "camilo-liberia",
    url: "/donacion-camilo_3xg5_j18xN.webp",
    category: "Estudiantes rurales",
    caption: "Excelencia premiada: Camilo 🥇",
    title: "Camilo, uno de los mejores estudiantes del colegio de Liberia",
    description:
      "Donamos un computador a Camilo, uno de los mejores estudiantes del colegio de Liberia (Viotá), como parte de nuestro programa para estudiantes rurales.",
  },
  {
    id: "manuela-beltran-entrega",
    url: "/1-manuela-beltran_Ux5OywN0Hi.webp",
    category: "Colegios",
    caption: "Aulas conectadas en Soacha 🖥️",
    title: "Entrega de computadores donados en el colegio Manuela Beltrán",
    description:
      "Registro de la jornada de entrega de equipos reacondicionados que fortalecen las clases de tecnología del colegio.",
  },
  // ——— TODO: confirma el contexto real de las siguientes imágenes ———
  {
    id: "jornada-entrega-1",
    url: "/holasoyportada_HRJ-llO9RD.webp",
    category: "Comunidad",
    caption: "Cada entrega, una historia 💫", // TODO: ajusta al contexto real
    title: "Jornada de donación de computadores de la Fundación Reciclando Unidos",
    description:
      "Momentos de nuestras jornadas de entrega de computadores reacondicionados a comunidades de Bogotá y Cundinamarca.",
  },
  {
    id: "jornada-entrega-3",
    url: "/3_kQv_ss_L4.webp",
    category: "Comunidad",
    caption: "Tecnología con propósito 🎯", // TODO: ajusta al contexto real
    title: "Entrega de computadores reacondicionados a beneficiarios",
    description:
      "La donación de computadores conecta a empresas y personas con comunidades que necesitan herramientas para aprender.",
  },
  {
    id: "cursos-comunidad",
    url: "/bg-cursos_DimDavR0f.webp",
    category: "Formación",
    caption: "Aprender también se dona 📖", // TODO: ajusta al contexto real
    title: "Cursos y formación digital con computadores donados",
    description:
      "Los equipos que recibimos al donar computadores también impulsan espacios de formación digital para la comunidad.",
  },
  {
    id: "jornada-entrega-4",
    url: "/3_OwdeL5Q5i.webp",
    category: "Comunidad",
    caption: "Un equipo, mil posibilidades 🚀", // TODO: ajusta al contexto real
    title: "Beneficiarios de la donación de computadores usados",
    description:
      "Cada computador reacondicionado abre posibilidades de estudio y trabajo para su nuevo dueño.",
  },
  {
    id: "jornada-entrega-5",
    url: "/4_Uc1rNNoDO.webp",
    category: "Comunidad",
    caption: "Historias que apenas comienzan 🌅", // TODO: ajusta al contexto real
    title: "Entrega de equipos de la Fundación Reciclando Unidos",
    description:
      "Registro de nuestras entregas de computadores donados en Bogotá y Cundinamarca.",
  },
  {
    id: "solicita-computador",
    url: "/portada-pagina-solicita_Y-G-ScTmIm.webp",
    category: "Comunidad",
    caption: "Tu donación encuentra destino 🧭", // TODO: ajusta al contexto real
    title: "Personas y comunidades que solicitan computadores donados",
    description:
      "Conectamos a quienes quieren donar computadores con estudiantes, colegios y fundaciones que los necesitan.",
  },
  {
    id: "que-recibimos",
    url: "/que-recibimos_icCcVVLxsa.webp",
    category: "Reciclaje",
    caption: "Todo equipo cuenta ♻️", // TODO: ajusta al contexto real
    title: "Equipos que recibimos al donar computadores usados",
    description:
      "Recibimos computadores, portátiles y periféricos: lo que funciona se reacondiciona y lo demás entra a reciclaje electrónico responsable.",
  },
];

const TRACK_GAP = 22;

export default function ImageGalleryComponent({
  items = momentsData,
  heading = "Momentos que inspiran a donar computadores",
}) {
  const scrollerRef = useRef(null);
  const cardRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [interacted, setInteracted] = useState(false);
  // Cada click en las flechas incrementa flipKey: eso re-monta el contenido
  // de las cards y dispara la animación de giro en cascada.
  const [flipKey, setFlipKey] = useState(0);

  const updateArrows = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft < maxScroll - 8);
  }, []);

  useEffect(() => {
    updateArrows();
    window.addEventListener("resize", updateArrows);
    return () => window.removeEventListener("resize", updateArrows);
  }, [updateArrows]);

  // Avanza/retrocede una PÁGINA: tantas cards como quepan completas en el
  // viewport del carrusel. Con 4 visibles, la card 5 queda de primera.
  const scrollByPage = useCallback((dir) => {
    const el = scrollerRef.current;
    const card = cardRef.current;
    if (!el || !card) return;
    const cardWidth = card.offsetWidth + TRACK_GAP;
    const visibleCount = Math.max(1, Math.floor(el.clientWidth / cardWidth));
    el.scrollBy({ left: dir * cardWidth * visibleCount, behavior: "smooth" });
    setFlipKey((k) => k + 1);
    setInteracted(true);
  }, []);

  return (
    <section className="w-full sections-py" id="momentos">
      <div className="mx-auto w-full max-w-layer px-4 md:px-12">
        <SpanTextComponent title={heading} textColor={"text-stone-800"} />
      </div>

      {/* Wrapper relativo para posicionar las flechas respecto al viewport
          del carrusel, no respecto a cada card */}
      <div className="relative mx-auto w-full max-w-layer md:py-12">
        <div
          ref={scrollerRef}
          onScroll={updateArrows}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-px-4 pb-2 pl-4 md:scroll-px-12 md:pl-12
          [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >   {items.map((item, i) => (
          <motion.article
            key={item.id}
            ref={i === 0 ? cardRef : null}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.5,
              delay: Math.min(i * 0.08, 0.4),
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
            className="group relative aspect-[2/3] w-[40vw] shrink-0 snap-start overflow-hidden sm:w-[260px] md:w-[300px]"
          >
            <ImageComponent
              src={item.url}
              width={600}
              height={900}
              transformation={[{ width: 600, height: 900, focus: "auto" }]}
              sizes="(min-width: 768px) 300px, 62vw"
              alt={item.title}
              className="h-full w-full object-cover"
            />

            {/* Degradado sutil solo en la base, como FIFA */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />

            {/* Badge NUEVO */}
            {item.isNew && (
              <span className="absolute right-3 top-3 rounded-full bg-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-stone-800">
                Nuevo
              </span>
            )}

            <h3 className="absolute inset-x-3 bottom-3 line-clamp-2 text-xs font-light text-white sm:text-sm">
              {item.title}
            </h3>
          </motion.article>

        ))}

          <div className="w-0 shrink-0 pr-4 md:pr-12" aria-hidden="true" />

        </div>

        {/* Flecha izquierda: solo desktop, aparece tras la primera interacción */}
        {interacted && canScrollLeft && (
          <motion.button
            key="moments-prev"
            onClick={() => scrollByPage(-1)}
            aria-label="Ver momentos anteriores"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="absolute left-4 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center
            justify-center rounded-full bg-white/95 text-gray-700 shadow-lg backdrop-blur-sm
            transition-transform duration-200 hover:scale-105 hover:bg-white active:scale-95 md:flex"
          >
            <ChevronLeft size={28} strokeWidth={2.5} />
          </motion.button>
        )}

        {/* Flecha derecha: solo desktop, visible mientras haya más contenido */}
        {canScrollRight && (
          <button
            onClick={() => scrollByPage(1)}
            aria-label="Ver más momentos"
            className="absolute right-4 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center
            justify-center rounded-full bg-white/95 text-gray-700 shadow-lg backdrop-blur-sm
            transition-transform duration-200 hover:scale-105 hover:bg-white active:scale-95 md:flex"
          >
            <ChevronRight size={28} strokeWidth={2.5} />
          </button>
        )}
      </div>
    </section>
  );
}