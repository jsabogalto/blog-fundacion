import { motion } from "framer-motion";
import HeadSectionComponent from "./HeadSectionComponent";
import SpanTextComponent from "./SpanTextComponent";

/**
 * SDGAlignment
 * ------------------------------------------------------------------
 * Muestra los 17 Objetivos de Desarrollo Sostenible resaltando los
 * alineados (a color) y atenuando el resto (gris + opacidad).
 * Es solo informativo: no se pueden seleccionar/deseleccionar,
 * simplemente se muestran los que cumplimos.
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

const tileVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: (i % 10) * 0.04, ease: [0.43, 0.13, 0.23, 0.96] },
  }),
};

export default function ({
  aligned = [4, 5, 8, 9, 12, 13],
  title = "Donar computadores usados: nuestro compromiso con la Agenda 2030 y los Objetivos de Desarrollo Sostenible",
  subtitle = "Cada computador que donas y reacondicionamos contribuye directamente a varios Objetivos de Desarrollo Sostenible de la ONU: educación de calidad, reducción de las desigualdades, acción por el clima y alianzas para lograr los objetivos. Así, tu donación de computadores usados en Bogotá y Cundinamarca no solo transforma vidas hoy, sino que aporta a un compromiso global con la Agenda 2030.",
}) {
  // Set fijo, ya no hay estado ni interacción: solo se marca lo que
  // realmente cumplimos (viene del prop `aligned`).
  const alignedSet = new Set(aligned);

  return (
    <section className="mx-auto w-full max-w-layer px-5 p-5 sm:p-6 md:px-12 h-full sections-py" >

      <HeadSectionComponent
        title={title}
        text={subtitle}
      />

      <ul role="list" className="grid grid-cols-5 gap-2 md:grid-cols-10 py-8">
        {SDGS.map((sdg, i) => {
          const on = alignedSet.has(sdg.n);
          return (
            <motion.li
              key={sdg.n}
              custom={i}
              variants={tileVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div
                aria-label={`ODS ${sdg.n}: ${sdg.name}. ${on ? "Alineado" : "No alineado"}`}
                title={`ODS ${sdg.n} - ${sdg.name}`}
                className={`group relative block aspect-square w-full overflow-hidden border border-transparent bg-neutral-50 shadow-sm transition duration-300 ease-out dark:bg-neutral-800 ${on ? "border-black/5" : ""
                  }`}
              >
                <img
                  src={iconUrl(sdg.n)}
                  alt={`Objetivo ${sdg.n}: ${sdg.name}`}
                  loading="lazy"
                  width={256}
                  height={256}
                  className={`h-full w-full object-cover transition duration-300 ease-out ${on ? "opacity-100" : "opacity-40 grayscale"
                    }`}
                />
                lassName={"bg-stone-100"}
                {/* Nombre del ODS, revelado sobre un degradado negro al hover */}
                <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="p-1.5 text-[9px] font-medium uppercase leading-tight tracking-wide text-white sm:p-2 sm:text-[10px]">
                    {sdg.name}
                  </span>
                </div>

                {on && (
                  <span
                    className="absolute right-1.5 top-1.5 flex h-5 w-5 items-center justify-center rounded-full text-white shadow-sm ring-2 ring-white/70"
                    style={{ backgroundColor: sdg.color }}
                  >
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                )}
              </div>
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}