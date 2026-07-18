"use client";
import { useEffect, useRef, useState } from "react";
import ImageComponent from "./ImageComponent";
import HeadSectionComponent from "./HeadSectionComponent";
import SpanTextComponent from "./SpanTextComponent";

const items = [
  {
    id: "portatiles",
    title: "Portátiles",
    inf: "Usados o dañados",
    tag: "Reacondicionamiento o reciclaje",
    desc: "Al donar computadores portátiles ayudas a estudiantes rurales: pueden llevarlos consigo y estudiar cómodamente pese a los largos desplazamientos.",
    image: "objetivo.jpeg",
    alt: "Computador portátil usado apto para donación",
  },
  {
    id: "cpu",
    title: "Computadores de escritorio (CPU)",
    inf: "Usados o dañados",
    tag: "Reacondicionamiento o reciclaje",
    desc: "Las torres empresariales reacondicionadas equipan salas de cómputo en colegios públicos y fundaciones educativas.",
    image: "que-recibimos_-HebibFo9.webp",
    alt: "Torres de computador de escritorio para donar",
  },
  {
    id: "todo-en-uno",
    title: "Todo en uno",
    inf: "Usados o dañados",
    tag: "Reacondicionamiento o reciclaje",
    desc: "Ideales para hogares y bibliotecas comunitarias: ocupan poco espacio y llegan listos para usar.",
    image: "portada-pagina-solicita_Y-G-ScTmIm.webp",
    alt: "Computador todo en uno usado para donación",
  },
  {
    id: "tablets",
    title: "Tablets",
    inf: "Usadas o dañadas",
    tag: "Reacondicionamiento",
    desc: "Acercan la lectura y las herramientas digitales a niños y adultos mayores que dan sus primeros pasos en tecnología.",
    image: "persona-mayor-2.webp",
    alt: "Tablet usada apta para donación",
  },
  {
    id: "monitores",
    title: "Monitores",
    inf: "Usados o dañados",
    tag: "Reacondicionamiento o reciclaje",
    desc: "Complementan las torres donadas para armar puestos de estudio completos en escuelas y hogares.",
    image: "1777396020675.jpeg",
    alt: "Monitores de computador usados para donar",
  },
  {
    id: "servidores",
    title: "Servidores",
    inf: "Usados o dañados",
    tag: "Reacondicionamiento o reciclaje",
    desc: "Si tu empresa renueva infraestructura, donar estos equipos les da una segunda vida útil en proyectos educativos.",
    image: "servidores.webp",
    alt: "Servidores empresariales en desuso para donación",
  },
  {
    id: "electronico",
    title: "Material electrónico",
    inf: "Todo tipo de material electrónico",
    tag: "Disposición final y reciclaje electrónico",
    desc: "Lo que no se puede reacondicionar recibe reciclaje electrónico certificado y disposición final responsable.",
    image: "electronicos.webp",
    alt: "Residuos de aparatos electrónicos para reciclaje responsable",
  },
];

export default function ReciclyItems() {
  const [active, setActive] = useState(items[0]?.id);
  const viewportRef = useRef(null);
  const cardRefs = useRef({});

  // Estado del arrastre con mouse (en táctil el scroll nativo ya funciona)
  const drag = useRef({ down: false, startX: 0, startScroll: 0, moved: false });

  /* ---------- 1. Clic en categoría → scroll suave a su tarjeta ---------- */
  const goTo = (id) => {
    setActive(id);
    const viewport = viewportRef.current;
    const card = cardRefs.current[id];
    if (!viewport || !card) return;

    // Centro de la tarjeta alineado al centro del viewport
    const target =
      card.offsetLeft - (viewport.clientWidth - card.offsetWidth) / 2;

    // Clamp: nunca scrollear más allá del inicio o del final real
    const max = viewport.scrollWidth - viewport.clientWidth;
    viewport.scrollTo({
      left: Math.max(0, Math.min(target, max)),
      behavior: "smooth",
    });
  };

  /* ---------- 2. Al desplazarse, marcar la categoría más visible ---------- */
  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const center = viewport.scrollLeft + viewport.clientWidth / 2;
        let closest = null;
        let min = Infinity;
        for (const item of items) {
          const el = cardRefs.current[item.id];
          if (!el) continue;
          const cardCenter = el.offsetLeft + el.offsetWidth / 2;
          const dist = Math.abs(cardCenter - center);
          if (dist < min) {
            min = dist;
            closest = item.id;
          }
        }
        if (closest) setActive(closest);
      });
    };

    viewport.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      viewport.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  /* ---------- 3. Arrastre con mouse en desktop ---------- */
  const onPointerDown = (e) => {
    // Solo mouse: en táctil el navegador ya hace el scroll con el dedo
    if (e.pointerType !== "mouse") return;
    const viewport = viewportRef.current;
    drag.current = {
      down: true,
      startX: e.clientX,
      startScroll: viewport.scrollLeft,
      moved: false,
    };
    viewport.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e) => {
    if (!drag.current.down) return;
    const dx = e.clientX - drag.current.startX;
    if (Math.abs(dx) > 4) drag.current.moved = true;
    viewportRef.current.scrollLeft = drag.current.startScroll - dx;
  };

  const endDrag = (e) => {
    if (!drag.current.down) return;
    drag.current.down = false;
    try {
      viewportRef.current.releasePointerCapture(e.pointerId);
    } catch {
      /* sin capture activo */
    }
  };

  return (
    <section id="que-recibimos" className="bg-stone-100 overflow-hidden">
      <div className="py-12 md:py-24">
        {/* utilidades que Tailwind core no trae: ocultar scrollbar */}
        <style>{`
          .ri-no-scrollbar::-webkit-scrollbar { display: none; }
          .ri-no-scrollbar { scrollbar-width: none; -ms-overflow-style: none; }
          @media (prefers-reduced-motion: reduce) {
            .ri-viewport { scroll-behavior: auto !important; }
          }
        `}</style>

        {/* Encabezado: respeta el ancho del layout */}
        <div className="max-w-layer px-5 md:px-12 mx-auto">
          <SpanTextComponent title="tipos de donaciones" textColor="text-stone-800" />
          <HeadSectionComponent
            title="¿Qué computadores y equipos puedes donar?"
            text="Recibimos tus equipos funcionen o no: lo que sirve se reacondiciona y lo que no, recibe disposición final ambientalmente responsable."
          />
        </div>

        {/* Botones de categoría: una por card, click → scroll suave centrado */}
        <div
          role="tablist"
          aria-label="Tipos de equipos que puedes donar"
          className="mt-8 flex flex-wrap gap-3 justify-center items-center px-5"
        >
          {items.map((item) => {
            const isActive = active === item.id;
            return (
              <button
                key={item.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => goTo(item.id)}
                className={`flex-none rounded-lg px-2 py-2 text-sm font-medium transition-all duration-200 md:text-base ${isActive
                    ? "border border-neutral-900 bg-white text-neutral-900 shadow-sm"
                    : "border border-transparent bg-neutral-200/70 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900"
                  }`}
              >
                {item.title}
              </button>
            );
          })}
        </div>

        {/* Carrusel: ancho completo del viewport, cards centradas con snap-center */}
        <div
          ref={viewportRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
          onPointerCancel={endDrag}
          className="ri-no-scrollbar ri-viewport mt-8 md:mt-12 flex w-screen mx-[calc(50%-50vw)] cursor-grab snap-x gap-6 overflow-x-auto scroll-smooth pb-4 active:cursor-grabbing will-change-transform"
        >
          {/* Espaciador inicial: permite que la primera card llegue al centro.
              Mitad del viewport menos mitad de la card (150px móvil, 170px md) */}
          <div
            className="w-[max(1rem,calc(50vw-150px))] flex-none md:w-[max(2rem,calc(50vw-170px))]"
            aria-hidden="true"
          />

          {items.map((item) => (
            <div
              key={item.id}
              ref={(el) => (cardRefs.current[item.id] = el)}
              className="group relative w-[300px] flex-none snap-center overflow-hidden rounded-2xl shadow-sm md:w-[340px]"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <ImageComponent
                  src={item.image}
                  width={600}
                  height={800}
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none select-none"
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
                  <p className="mt-2 text-sm leading-relaxed text-white/85">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Espaciador final: permite que la última card también se centre */}
          <div
            className="w-[max(1rem,calc(50vw-150px))] flex-none md:w-[max(2rem,calc(50vw-170px))]"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}