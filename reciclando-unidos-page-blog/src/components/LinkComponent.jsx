"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { animate } from "framer-motion";

const GRADIENT_ID = "link-component-gradient";

// Offset de respaldo SOLO si el elemento destino no tiene su propia clase
// scroll-mt-* (scroll-margin-top). Si la tiene, esa gana siempre.
const FALLBACK_NAVBAR_OFFSET = 96;

// Lee el scroll-margin-top real del elemento (el que le pusiste con
// scroll-mt-24, scroll-mt-30, etc. en Tailwind) para saber cuánto espacio
// dejar arriba al llegar. Así cada sección controla su propio offset exacto
// en vez de depender de un número fijo igual para todas.
function getScrollOffset(el) {
  const marginTop = parseFloat(getComputedStyle(el).scrollMarginTop);
  return Number.isFinite(marginTop) && marginTop > 0 ? marginTop : FALLBACK_NAVBAR_OFFSET;
}

// Defs de un degradado SVG reutilizable: el <ArrowRight> es un SVG, no texto,
// así que bg-clip-text/text-transparent no le hacen nada (su stroke quedaría
// literalmente invisible). Este <linearGradient> oculto (0x0) permite pintar
// el stroke del ícono con el mismo degradado que el texto, apuntando a él
// con stroke="url(#...)". IDs duplicados en el DOM no rompen nada aquí
// porque todas las instancias definen exactamente el mismo degradado.
function GradientDefs() {
  return (
    <svg width="0" height="0" aria-hidden="true" className="absolute">
      <defs>
        <linearGradient id={GRADIENT_ID} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#139fa7" />
          <stop offset="100%" stopColor="#6dd063" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function LinkComponent({ link, text, className = "" }) {
  const isAnchor = link?.startsWith("#");

  const handleAnchorClick = (e) => {
    e.preventDefault();
    const el = document.querySelector(link);
    if (!el) return;

    const startY = window.scrollY;
    const offset = getScrollOffset(el);
    const targetY = el.getBoundingClientRect().top + startY - offset;

    // Scroll animado con Framer Motion (misma curva de easing que el resto
    // del sitio), respetando el scroll-margin-top real de cada sección.
    animate(startY, targetY, {
      duration: 1.3,
      ease: [0.43, 0.13, 0.23, 0.96],
      onUpdate: (value) => window.scrollTo(0, value),
    });

    // actualiza la URL sin recargar (opcional, para que quede el #hash)
    history.pushState(null, "", link);
  };

  // El color va por `style` (no por clase) a propósito: así siempre gana
  // sobre cualquier `className` de color que te pasen desde afuera
  // (ej. "text-green-ru"), sin depender del orden de las clases de Tailwind.
  const gradientTextStyle = {
    backgroundImage: "linear-gradient(to right, #139fa7, #6dd063)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
  };

  const classes = `group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide transition ${className}`;

  const arrow = (
    <ArrowRight
      className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
      stroke={`url(#${GRADIENT_ID})`}
    />
  );

  // Ancla → scroll suave animado dentro de la misma página
  if (isAnchor) {
    return (
      <>
        <GradientDefs />
        <a href={link} onClick={handleAnchorClick} className={classes}>
          <span style={gradientTextStyle}>{text}</span>
          {arrow}
        </a>
      </>
    );
  }

  // Ruta → navegación normal de Next
  return (
    <>
      <GradientDefs />
      <Link href={link} className={classes}>
        <span style={gradientTextStyle}>{text}</span>
        {arrow}
      </Link>
    </>
  );
}