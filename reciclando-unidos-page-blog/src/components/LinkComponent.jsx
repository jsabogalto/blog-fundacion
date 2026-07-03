"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function LinkComponent({ link, text, className = "" }) {
  const isAnchor = link?.startsWith("#");

  const handleAnchorClick = (e) => {
    e.preventDefault();
    const el = document.querySelector(link);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      // actualiza la URL sin recargar (opcional, para que quede el #hash)
      history.pushState(null, "", link);
    }
  };

  const classes = `group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide transition ${className}`;

  // Ancla → scroll suave dentro de la misma página
  if (isAnchor) {
    return (
      <a href={link} onClick={handleAnchorClick} className={classes}>
        {text}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </a>
    );
  }

  // Ruta → navegación normal de Next
  return (
    <Link href={link} className={classes}>
      {text}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Link>
  );
}