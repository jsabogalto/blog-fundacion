"use client";

import { useState } from "react";
import HeadSectionComponent from "./HeadSectionComponent";

/**
 * SDGAlignment
 * ------------------------------------------------------------------
 * Muestra los 17 Objetivos de Desarrollo Sostenible resaltando los
 * alineados (a color) y atenuando el resto (gris + opacidad).
 *
 * Iconos: se cargan por URL desde el proyecto open-source
 * `open-sdg/sdg-translations` (GitHub Pages), que sirve los iconos
 * oficiales por idioma y numero. Verificado: es/1.png ... es/17.png -> 200.
 *   https://open-sdg.github.io/sdg-translations/assets/img/goals/es/1.png
 *
 * Sin librerias extra: usa una etiqueta <img> normal, asi no requiere
 * `next/image` ni configurar dominios en next.config.js.
 *
 * Tailwind: utilidades estandar (v4 sin configuracion adicional).
 */

const ICON_BASE = "https://open-sdg.github.io/sdg-translations/assets/img/goals";
const LANG = "es"; // "es", "en", "fr", "ar", "zh-Hans", "ru"
const iconUrl = (n) => `${ICON_BASE}/${LANG}/${n}.png`;

const SDGS = [
  { n: 1, name: "Fin de la pobreza", color: "#E5243B" },
  { n: 2, name: "Hambre cero", color: "#DDA63A" },
  { n: 3, name: "Salud y bienestar", color: "#4C9F38" },
  { n: 4, name: "Educacion de calidad", color: "#C5192D" },
  { n: 5, name: "Igualdad de genero", color: "#FF3A21" },
  { n: 6, name: "Agua limpia y saneamiento", color: "#26BDE2" },
  { n: 7, name: "Energia asequible y no contaminante", color: "#FCC30B" },
  { n: 8, name: "Trabajo decente y crecimiento economico", color: "#A21942" },
  { n: 9, name: "Industria, innovacion e infraestructura", color: "#FD6925" },
  { n: 10, name: "Reduccion de las desigualdades", color: "#DD1367" },
  { n: 11, name: "Ciudades y comunidades sostenibles", color: "#FD9D24" },
  { n: 12, name: "Produccion y consumo responsables", color: "#BF8B2E" },
  { n: 13, name: "Accion por el clima", color: "#3F7E44" },
  { n: 14, name: "Vida submarina", color: "#0A97D9" },
  { n: 15, name: "Vida de ecosistemas terrestres", color: "#56C02B" },
  { n: 16, name: "Paz, justicia e instituciones solidas", color: "#00689D" },
  { n: 17, name: "Alianzas para lograr los objetivos", color: "#19486A" },
];

function CheckIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path
        d="M5 10.5l3.2 3.2L15 7"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ({
  aligned = [4, 5, 8, 9, 12, 13],
  interactive = true,
  title = "Cuando donas computadores con Reciclando Unidos ayudas a complir con la Agenda 2030 de la UNESCO",
  subtitle = "Cundo donas tus computadores usados recibes un beneficio tributario en tu declaración de renta. Con ese mismo gesto ayudas a dotar de tecnología aulas escolares, fundaciones y familias enteras en Bogotá y Cundinamarca.",
  onChange,
}) {
  const [selected, setSelected] = useState(() => new Set(aligned));

  const toggle = (n) => {
    if (!interactive) return;
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(n) ? next.delete(n) : next.add(n);
      onChange?.([...next].sort((a, b) => a - b));
      return next;
    });
  };

  return (
    <section className="mx-auto w-full max-w-layer px-5 p-5 sm:p-6 md:px-12 pt-18 md:pt-20 h-full">
      
      <HeadSectionComponent title={title} text={subtitle}/>

      <ul role="list" className="grid grid-cols-4 gap-2 md:grid-cols-5 py-12 pt-10 md:py-16">
        {SDGS.map((sdg) => {
          const on = selected.has(sdg.n);
          const Tag = interactive ? "button" : "div";
          return (
            <li key={sdg.n}>
              <Tag
                {...(interactive
                  ? {
                    type: "button",
                    onClick: () => toggle(sdg.n),
                    "aria-pressed": on,
                    "aria-label": `ODS ${sdg.n}: ${sdg.name}. ${on ? "Alineado" : "No alineado"
                      }`,
                  }
                  : { "aria-label": `ODS ${sdg.n}: ${sdg.name}` })}
                title={`ODS ${sdg.n} - ${sdg.name}`}
                className={`group relative block aspect-square w-full overflow-hidden rounded-xl bg-neutral-50 transition duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 dark:bg-neutral-800 dark:focus-visible:ring-neutral-100 ${interactive ? "motion-safe:hover:-translate-y-0.5 cursor-pointer" : ""
                  }`}
              >
                <img
                  src={iconUrl(sdg.n)}
                  alt={`Objetivo ${sdg.n}: ${sdg.name}`}
                  loading="lazy"
                  width={256}
                  height={256}
                  className={`h-full w-full object-cover transition duration-200 ease-out ${on ? "opacity-100" : "opacity-40 grayscale group-hover:opacity-70"
                    }`}
                />

                {on && (
                  <span
                    className="absolute right-1.5 top-1.5 flex h-5 w-5 items-center justify-center rounded-full text-white shadow-sm ring-2 ring-white/70"
                    style={{ backgroundColor: sdg.color }}
                  >
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                )}
              </Tag>
            </li>
          );
        })}
      </ul>
    </section>
  );
}