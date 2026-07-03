"use client";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import {
  motion,
  useMotionValue,
  useAnimationFrame,
  useReducedMotion,
} from "motion/react";

/**
 * CarrouselProvidersComponent — marquee de logos de donadores (motion/react).
 *
 * Consume los donadores desde el backend (GET /donors). Cada donador tiene:
 *   { img, url, name }  ->  img = logo, url = enlace de la empresa, name = alt.
 * Al hacer clic en un logo, se abre el sitio de la empresa en una pestaña nueva.
 *
 * Loop infinito y suave:
 * 1. Se mide el ancho real de UNA tanda de logos.
 * 2. Se calculan cuántas copias hacen falta para llenar el viewport (+1 de margen).
 * 3. useAnimationFrame mueve la pista píxel a píxel y "envuelve" el desplazamiento
 *    dentro del ancho de una tanda -> sin saltos ni huecos.
 *
 * speed = segundos que tarda en recorrerse una tanda completa (menos = más rápido).
 */

const API = process.env.NEXT_PUBLIC_API_URL;

const MASK =
  "linear-gradient(to right, transparent 0, #000 8%, #000 92%, transparent 100%)";

function LogoItem({ donor, hidden }) {
  const image = (
    <img
      src={donor.img}
      alt={donor.name || "Donador"}
      draggable="false"
      width={180}
      height={100}
      loading="lazy"
      className="h-24 w-auto max-w-[240px] object-contain grayscale brightness-[0.65] contrast-[0.9] transition md:h-28"
    />
  );

  return (
    <div
      aria-hidden={hidden}
      className="mr-16 flex h-28 flex-none items-center justify-center opacity-75 transition-opacity duration-200 hover:opacity-100 md:mr-28"
    >
      {donor.url ? (
        <a
          href={donor.url}
          target="_blank"
          rel="noopener noreferrer"
          // Los duplicados no deben recibir foco con el teclado.
          tabIndex={hidden ? -1 : 0}
          aria-label={donor.name ? `Visitar ${donor.name}` : "Visitar donador"}
          className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
        >
          {image}
        </a>
      ) : (
        image
      )}
    </div>
  );
}

export default function CarrouselProvidersComponent({
  title = "Aliados que creen en la educación. El siguiente lugar puede ser para tu empresa.",
  donors: donorsProp, // opcional: pasar donadores ya cargados (omitir para usar el backend)
  speed = 44,
  pauseOnHover = true,
}) {
  const viewportRef = useRef(null);
  const setRef = useRef(null);
  const x = useMotionValue(0);

  const [donors, setDonors] = useState(donorsProp ?? []);
  const [setWidth, setSetWidth] = useState(0);
  const [copies, setCopies] = useState(2);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  // Carga los donadores desde el backend (si no se pasaron por prop).
  useEffect(() => {
    if (donorsProp) return; // ya vienen dados, no consultamos
    let active = true;
    axios
      .get(`${API}/donors`)
      .then((res) => {
        if (active) setDonors(Array.isArray(res.data) ? res.data : []);
      })
      .catch((err) => console.error("Error cargando donadores:", err.message));
    return () => {
      active = false;
    };
  }, [donorsProp]);

  // Mide una tanda y decide cuántas copias llenan el viewport.
  useEffect(() => {
    if (donors.length === 0) return;

    const measure = () => {
      const sw = setRef.current?.scrollWidth ?? 0;
      const vw = viewportRef.current?.offsetWidth ?? 0;
      setSetWidth(sw);
      if (sw > 0) {
        // +1 copia extra para que SIEMPRE sobre contenido a la derecha.
        setCopies(Math.max(2, Math.ceil(vw / sw) + 1));
      }
    };

    measure();
    const ro = new ResizeObserver(measure);
    if (viewportRef.current) ro.observe(viewportRef.current);
    if (setRef.current) ro.observe(setRef.current);
    return () => ro.disconnect();
  }, [donors]);

  // Movimiento por frame con "wrap" perfecto dentro del ancho de una tanda.
  const pxPerSecond = setWidth > 0 ? setWidth / speed : 0;
  useAnimationFrame((_, delta) => {
    if (paused || reduceMotion || pxPerSecond === 0) return;
    let next = x.get() - pxPerSecond * (delta / 1000);
    if (next <= -setWidth) next += setWidth;
    x.set(next);
  });

  return (
    <section aria-label="Logos de donadores" className="w-full overflow-hidden">
      <h2 className="mx-auto mb-8 flex h-full max-w-[1400px] flex-col justify-center px-6 text-center paragraph md:mb-12 md:px-12 md:text-2xl">
        {title}
      </h2>

      {donors.length > 0 && (
        <div
          ref={viewportRef}
          className="relative w-full overflow-hidden"
          style={{ maskImage: MASK, WebkitMaskImage: MASK }}
          onMouseEnter={() => pauseOnHover && setPaused(true)}
          onMouseLeave={() => pauseOnHover && setPaused(false)}
        >
          <motion.div
            className="flex w-max items-center pl-16 will-change-transform md:pl-28"
            style={{ x }}
          >
            {Array.from({ length: copies }).map((_, s) => (
              <div
                key={s}
                ref={s === 0 ? setRef : undefined}
                className="flex shrink-0 items-center"
              >
                {donors.map((donor, i) => (
                  <LogoItem
                    key={`${donor._id ?? donor.name ?? "donor"}-${s}-${i}`}
                    donor={donor}
                    hidden={s !== 0}
                  />
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      )}
    </section>
  );
}
