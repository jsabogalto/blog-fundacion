"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ImageComponent from "./ImageComponent";
import SpanTextComponent from "./SpanTextComponent";

const AUTOPLAY_MS = 6000;

/**
 * ImageGallery
 * Carrusel/galería estilo "Aramco" con:
 * - Transiciones con Framer Motion
 * - Overlay negro degradado + título/descripción en blanco
 * - Flechas de navegación estilo Apple: la derecha siempre visible,
 *   la izquierda aparece solo después de que el usuario interactúa
 * - Barra de progreso inferior por pestaña (auto-avance) como el hero de Aramco
 * - Barra de carga superior tipo "loading line" al montar el componente
 *
 * Props:
 * - images: array de { id, url, title, description, category } (por defecto usa galleryData)
 * - autoPlay: boolean (por defecto true)
 * 
 * 
 * 
 */

// galleryData.js
// Objeto/array de datos que consume el componente <ImageGallery />
// Cada item representa una diapositiva del carrusel.
// "url" es la ruta relativa que se pasa a ImageKit (urlEndpoint + url).
// Reemplaza estas rutas por las que subas a tu cuenta de ImageKit.

const galleryData = [
  {
    id: "colegio-manuela-beltran",
    url: "/1777396020675.jpeg",
    category: "Colegios",
    title: "Donación de computadores en el colegio Manuela Beltrán en Soacha",
    description:
      "Como parte de nuestra donación de computadores, entregamos 12 equipos que impulsarán las clases de electrónica y programación de los estudiantes.",
  },
  {
    id: "colegio-san-mateo",
    url: "/centro-educativo_Lyua9kP4q.webp",
    category: "Colegios",
    title: "Donar computadores usados en el colegio San Mateo en Soacha",
    description:
      "Gracias a quienes decidieron donar computadores usados, entregamos 8 equipos reacondicionados que impulsarán las clases de electrónica y programación.",
  },
  {
    id: "fundacion-talleres-creativos",
    url: "/portada-solicitar-computador.webp",
    category: "FUNDACIONES",
    title: "Donar computadores en Bogotá: fundación beneficiada en Bosa",
    description:
      "Entregamos 5 computadores portátiles a la fundación Talleres Creativos en Bosa, Bogotá, gracias a personas y empresas que decidieron donar computadores en Bogotá.",
  },
  {
    id: "emanuel-manizales",
    url: "/donacion-emanuel_KOxpCa8Bt.webp",
    category: "estudiantes universitarios",
    title: "Emanuel, el mejor ICFES de Caldas en Manizales, ya tiene su computador",
    description:
      "Emanuel no tenía un portátil para comenzar su nueva etapa universitaria. Gracias a la donación de computadores de nuestra fundación, hoy puede continuar sus estudios con la herramienta que necesitaba.",
  },
  {
    id: "jose-viota",
    url: "/donacion-jose__xZTMyp7A.webp",
    category: "estudiantes rurales",
    title: "José disfrutó de su primer computador gracias a donar computadores usados",
    description:
      "Invertimos en las comunidades donde operamos, apoyando educación, sostenibilidad y desarrollo local a través de la donación de computadores.",
  },
  {
    id: "valery-don-matias-antioquia",
    url: "/donacion-valery_o7psDeNCU.webp",
    category: "estudiantes rurales",
    title: "Valery ahora podrá estudiar ingeniería multimedia",
    description:
      "Gracias a donar computadores usados, Valery, de Don Matías (Antioquia), recibió el equipo que necesitaba para iniciar su carrera de ingeniería multimedia.",
  },
  {
    id: "karen-don-matias",
    url: "/karen-don-matias.webp",
    category: "estudiantes rurales",
    title: "Donar computadores cambia vidas: la historia de Karen en Don Matías",
    description:
      "Karen, de Don Matías (Antioquia), recibió un computador reacondicionado para continuar sus estudios, otro ejemplo de cómo la donación de computadores transforma comunidades rurales.",
  },
  {
    id: "camilo-viota",
    url: "/donacion-camilo_3xg5_j18xN.webp",
    category: "estudiantes rurales",
    title: "Camilo, uno de los mejores estudiantes del colegio de Liberia",
    description:
      "Donamos un computador a Camilo, uno de los mejores estudiantes del colegio de Liberia (Viotá), como parte de nuestro programa de donación de computadores para estudiantes rurales.",
  },
  {
    id: "sofia-ciudad-bolivar",
    url: "/portada-sofial_9wTT_JF3B.webp",
    category: "estudiantes vulnerables",
    title: "Donar computadores en Bogotá: la historia de Sofía en Ciudad Bolívar",
    description:
      "Donamos un computador a Sofía, una joven de Ciudad Bolívar que no tenía los recursos para costear esta herramienta y necesitaba un equipo para su tecnólogo del SENA.",
  },
  {
    id: "samuel-puerto-brasil",
    url: "/samuel_2ITyReFn7.webp",
    category: "estudiantes rurales",
    title: "Donar computadores usados: un portátil para Samuel",
    description:
      "Donamos un computador a Samuel, quien nunca había podido tener uno y hoy puede aprender y estudiar gracias a la donación de computadores.",
  },
  {
    id: "simon-ciudad-bolivar",
    url: "/donacion-simon_6MHysN6yZn.webp",
    category: "estudiantes vulnerables",
    title: "Donar computadores en Bogotá: Simón inicia sus cursos de inglés",
    description:
      "Donamos un computador a Simón, quien necesitaba esta herramienta para comenzar sus cursos de inglés, otro caso de personas que deciden donar computadores en Bogotá.",
  },
  {
    id: "liberia-daniela",
    url: "/hermana-andres_U6YHP91gr.webp",
    category: "estudiantes rurales",
    title: "Donamos un computador a Daniela, quien nunca había tenido uno",
    description:
      "Donamos un computador a Daniela, una joven que está cursando su bachillerato en el colegio de Liberia (Viotá), gracias a la donación de computadores de nuestra fundación.",
  },
  {
    id: "estudiantes-liberia",
    url: "/estudiantes-rurales_velqXRFFp.webp",
    category: "estudiantes rurales",
    title: "Donamos un computador a Andrés y Fabián",
    description:
      "Donamos un computador a Andrés y Fabián, estudiantes del colegio de Liberia (Viotá), para que puedan continuar su educación gracias a donar computadores usados.",
  },
  {
    id: "jardin-bogota",
    url: "/donacion-jardin_fcMdErKqxk.webp",
    category: "jardines",
    title: "Donar computadores en Bogotá: tecnología que inspira en el Jardín Ji Waldorf",
    description:
      "Donamos 12 computadores al Jardín Ji Waldorf en Bogotá. En Reciclando Unidos creemos que donar computadores es mucho más que entregar equipos: es abrir caminos para que el aprendizaje florezca.",
  },
];

export default function ImageGalleryComponent({ images = galleryData, autoPlay = true }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [progressKey, setProgressKey] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  // Se activa la primera vez que el usuario (o el auto-avance) cambia de slide;
  // controla que la flecha izquierda solo aparezca después de esa interacción.
  const [interacted, setInteracted] = useState(false);
  const total = images.length;
  const current = images[index];

  // Línea de carga inicial estilo Aramco (una sola vez al montar)
  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  // Detecta si estamos en pantalla mediana o más grande (breakpoint "md" de Tailwind: 768px).
  // En móvil el contenedor es alto y angosto (h-[80vh]), así que pedimos la imagen recortada
  // en vertical (500x1000). En md+ el contenedor es ancho y bajo (h-[70vh]), así que pedimos
  // el recorte horizontal (1200x700). El recorte lo hace ImageKit según width/height.
  const [isMdUp, setIsMdUp] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)");
    const update = () => setIsMdUp(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

const imageWidth = isMdUp ? 1600 : 800;
const imageHeight = isMdUp ? 900 : 1400;

  const goTo = useCallback(
    (newIndex, dir) => {
      setDirection(dir);
      setIndex(((newIndex % total) + total) % total);
      setProgressKey((k) => k + 1);
      setInteracted(true);
    },
    [total]
  );

  const next = useCallback(() => goTo(index + 1, 1), [index, goTo]);
  const prev = useCallback(() => goTo(index - 1, -1), [index, goTo]);

  // El auto-avance depende únicamente de autoPlay/isLoading.
  // Importante: NO se pausa con onMouseEnter/onMouseLeave a propósito,
  // así el carrusel sigue avanzando aunque el puntero esté sobre la card.
  const playing = autoPlay && !isLoading;

  const variants = {
    enter: { opacity: 0, scale: 1.03 },
    center: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.98 },
  };

  return (
    <section className="w-full sections-py" id="proyectos">
      <div className="max-w-layer mx-auto px-4 md:px-12">
        <SpanTextComponent title={"Donaciones recientes de computadores en Bogotá y Cundinamarca"} textColor={"text-stone-800"}/>
        <div
          className="relative w-full overflow-hidden rounded-2xl sm:rounded-3xl bg-neutral-950 shadow-xl shadow-black/20 ring-1 ring-black/5
          h-[80vh] md:h-[70vh]"
        >
          {/* Indicadores de progreso tipo "stories" */}
          {!isLoading && (
            <div className="absolute left-3 right-3 top-3 z-30 flex gap-1.5 sm:left-5 sm:right-5 sm:top-5">
              {images.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => goTo(i, i > index ? 1 : -1)}
                  aria-label={`Ir a ${img.title}`}
                  className="relative h-[3px] flex-1 overflow-hidden rounded-full bg-white/25"
                >
                  {i < index && <div className="absolute inset-0 bg-gradient-ru" />}
                  {i === index &&
                    (playing ? (
                      <motion.div
                        key={progressKey}
                        className="absolute inset-y-0 left-0 bg-gradient-ru"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: AUTOPLAY_MS / 1000, ease: "linear" }}
                        onAnimationComplete={() => {
                          if (playing) next();
                        }}
                      />
                    ) : (
                      <div className="absolute inset-0 w-full bg-white" />
                    ))}
                </button>
              ))}
            </div>
          )}

          {/* Imagen + overlay */}
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current.id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] }}
              className="absolute inset-0"
            >
              <ImageComponent
                src={current.url}
                width={imageWidth}
                height={imageHeight}
                sizes="100vw"
                alt={current.title}
                priority={index === 0}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            </motion.div>
          </AnimatePresence>

          {/* Texto: título + descripción */}
          <div className="absolute inset-x-0 bottom-0 z-20 p-4 sm:p-6 md:p-8 pointer-events-none">
            <AnimatePresence mode="wait">
              <motion.div
                key={`text-${current.id}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.45, delay: 0.1 }}
                className="max-w-[88%] sm:max-w-md"
              >
                {current.category && (
                  <span className="mb-1.5 block text-[10px] sm:text-xs uppercase tracking-[0.18em] text-white/70">
                    {current.category}
                  </span>
                )}
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light leading-tight text-white">
                  {current.title}
                </h3>
                {current.description && (
                  <p className="mt-1.5 sm:mt-2 line-clamp-2 text-xs sm:text-sm text-white/80">
                    {current.description}
                  </p>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Control izquierdo: estilo Apple, oculto hasta la primera interacción */}
          <AnimatePresence>
            {interacted && (
              <motion.button
                key="prev-btn"
                onClick={prev}
                aria-label="Imagen anterior"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.25, ease: [0.43, 0.13, 0.23, 0.96] }}
                className="absolute left-2 top-1/2 z-20 flex h-15 w-15 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-gray-700 shadow-lg backdrop-blur-sm transition-transform duration-200 hover:scale-105 hover:bg-white active:scale-95 sm:left-4 sm:h-14 sm:w-14"
              >
                <ChevronLeft size={40} strokeWidth={2.5} className="mr-1" />
              </motion.button>
            )}
          </AnimatePresence>

          {/* Control derecho: estilo Apple, siempre visible */}
          <button
            onClick={next}
            aria-label="Siguiente imagen"
            className="absolute right-2 top-1/2 z-20 flex h-15 w-15 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-gray-700 shadow-lg backdrop-blur-sm transition-transform duration-200 hover:scale-105 hover:bg-white active:scale-95 sm:right-4 sm:h-14 sm:w-14"
          >
            <ChevronRight size={40} strokeWidth={2.5} className="ml-1" />
          </button>
        </div>
      </div>
    </section>
  );
}