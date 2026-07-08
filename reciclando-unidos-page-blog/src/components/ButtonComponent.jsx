"use client";

import { ArrowRight } from "lucide-react";
import { animate } from "framer-motion";

// Ajusta esto a la altura real de tu navbar fija, para que el título de la
// sección de destino no quede tapado al terminar el scroll.
const NAVBAR_OFFSET = 96;

const ButtonComponent = ({ link, className, text }) => {
  const isAnchor = link?.startsWith("#");

  const handleAnchorClick = (e) => {
    e.preventDefault();
    const id = link.slice(1); // quita el "#"
    const el = document.getElementById(id) || document.querySelector(link);
    if (!el) return;

    const startY = window.scrollY;
    const targetY = el.getBoundingClientRect().top + startY - NAVBAR_OFFSET;

    animate(startY, targetY, {
      duration: 1.2,
      ease: [0.43, 0.13, 0.23, 0.96], // misma curva usada en todo el sitio
      onUpdate: (value) => window.scrollTo(0, value),
    });

    // Deja el #hash en la URL sin recargar ni saltar de golpe
    history.pushState(null, "", link);
  };

  return (
    <a
      href={link}
      onClick={isAnchor ? handleAnchorClick : undefined}
      className={`group inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 text-xs font-semibold uppercase tracking-[0.14em] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl ${className}`}
    >
      <span>{text}</span>
    </a>
  );
};

export default ButtonComponent;