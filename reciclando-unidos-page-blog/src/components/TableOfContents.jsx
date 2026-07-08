"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function TableOfContents({ items }) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-80px 0px -70% 0px", threshold: 0 }
    );

    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  if (!items.length) return null;

  return (
    <nav className="flex flex-col gap-1">
      <span className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted">
        En esta página
      </span>
      {items.map(({ id, text }) => {
        const isActive = activeId === id;
        return (
          <Link
            key={id}
            href={`#${id}`}
            className={`group relative border-l-2 border-transparent py-1.5 pl-3 text-sm transition-colors duration-200 ${isActive ? "font-medium" : "text-muted"
              }`}
          >
            {/* "Borde" izquierdo con degradado: un <span> absoluto en vez de
            border-color, porque los bordes no aceptan gradientes directos */}
            {isActive && (
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-[#139fa7] to-[#6dd063]"
              />
            )}

            <span className="relative inline-block">
              {/* Capa base: se ve cuando NO está activo ni en hover */}
              <span
                className={`transition-opacity duration-300 group-hover:opacity-0 ${isActive ? "opacity-0" : ""
                  }`}
              >
                {text}
              </span>
              {/* Capa degradado: visible siempre si está activo, o al hacer hover
              si no lo está (opacity sí se puede animar, a diferencia de
              background-image) */}
              <span
                aria-hidden="true"
                className={`absolute inset-0 bg-gradient-to-r from-[#139fa7] to-[#6dd063] bg-clip-text text-transparent transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}
              >
                {text}
              </span>
            </span>
          </Link>
        );
      })}
    </nav>
  );
}