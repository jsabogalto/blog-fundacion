"use client";
import { motion } from "motion/react";
import ButtonComponent from "./ButtonComponent";
import { Laptop, User, Truck, School } from "lucide-react";

const stats = [
  { icon: Laptop, value: "62", label: "Computadores donados" },
  { icon: School, value: "6", label: "Instituciones educativas equipadas con salas de cómputo" },
  { icon: User, value: "14", label: "Estudiantes rurales beneficiados" },
  { icon: Truck, value: "2", label: "Toneladas de desechos electrónicos reciclados" },
];

export default function ImpactComponent() {
  return (
    <section
      id="impacto"
      className="relative isolate w-full overflow-hidden bg-gradient-to-b from-blue-700 via-teal-600 to-green-600"
    >
      {/* Trama de circuitos animada, abarca las tres secciones */}
      <CircuitBackdrop />

      {/* ===== Stats ===== */}
      <div className="relative z-10 w-full py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-8 md:px-12">
          <h2 className="text-center subtitle text-white">
            Impacto desde nuestra creación (2025)
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className="flex flex-col items-center text-center">
                  <Icon className="mb-4 h-10 w-10 text-white" strokeWidth={1.5} />
                  <p className="font-bold leading-none text-white">
                    <span className="text-5xl md:text-6xl">{s.value}</span>
                  </p>
                  <p className="text-md mt-3 max-w-[180px] text-white/90">
                    {s.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ===== Informe Anual ===== */}
      <div className="relative z-10 w-full py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-8 text-center md:px-12">
          <div className="mx-auto max-w-2xl">
            <h2 className="subtitle text-white">
              Nuestro Informe Anual de 2025 lo dice todo
            </h2>
            <p className="paragraph mt-5 text-white">
              Descubre cómo Reciclando Unidos, sus donantes y sus socios
              colaboraron para lograr un impacto real en las personas y el
              planeta en 2024.
            </p>
            <ButtonComponent
              link="/informes"
              className="bg-white text-green-ru mt-8"
              text="Consulta aquí"
            />
          </div>
        </div>
      </div>

      {/* ===== Residuos electrónicos ===== */}
      <div className="relative z-10 w-full py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-8 text-center md:px-12">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
              Convertir los residuos electrónicos en una oportunidad
            </h2>
            <p className="paragraph mt-5 leading-relaxed text-white">
              Los residuos electrónicos son uno de los flujos de residuos que
              más rápido crecen a nivel mundial. En lugar de permitir que dañen
              nuestro medio ambiente, reacondicionamos y redistribuimos los
              dispositivos tecnológicos entre quienes los necesitan. Es una
              situación en la que todos salen ganando: tanto las comunidades como
              el planeta.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ====================================================================
   Trama de circuitos ANIMADA (motion/react, sin dependencias extra)
   - Capa base tenue: los trazos del circuito.
   - Capa animada: pulsos brillantes que recorren cada trazo (corriente).
   - Nodos que laten y un procesador detallado con ondas de actividad.
   ==================================================================== */

// Trazos del circuito (reutilizados por la capa base y la animada).
const TRACES = [
  "M0 60 H120 L150 90 H230",
  "M150 90 V160 H300 L340 200 H400",
  "M40 0 V120 L70 150 V260",
  "M70 150 H10",
  "M400 110 H300 L270 140 V230 H360",
  "M200 240 V330 H120 L90 360 V520",
  "M200 330 H320 L360 370 V470",
  "M0 300 H80 L110 330 H180",
  "M30 420 H150 L180 450 V560 H300",
  "M300 450 V560 L330 590 H400",
  "M60 600 V680 M60 640 H200 L230 670 H400",
  "M0 540 H40 L70 570 V700",
  "M260 600 V520 H360",
];

const NODES = [
  [150, 90], [230, 90], [70, 150], [300, 160], [340, 200],
  [270, 140], [110, 330], [180, 330], [90, 360], [360, 370],
  [180, 450], [330, 590], [230, 670], [70, 570], [40, 420],
  [120, 520], [360, 470], [300, 560],
];

const PIN_OFFSETS = [-26, -13, 0, 13, 26];

function CircuitBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-30"
    >
      <svg
        viewBox="0 0 400 700"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
      >
        <defs>
          <linearGradient id="cb-node" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#67e8f9" />
            <stop offset="0.5" stopColor="#5eead4" />
            <stop offset="1" stopColor="#86efac" />
          </linearGradient>
          <radialGradient id="cb-glow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stopColor="#a5f3fc" stopOpacity="0.9" />
            <stop offset="1" stopColor="#a5f3fc" stopOpacity="0" />
          </radialGradient>
          {/* Resplandor para la corriente y el núcleo */}
          <filter id="cb-flow-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ---------- Capa base: trazos tenues ---------- */}
        <g
          fill="none"
          stroke="#bae6fd"
          strokeOpacity="0.35"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {TRACES.map((d, i) => (
            <path key={i} d={d} />
          ))}
        </g>

        {/* ---------- Capa animada: corriente recorriendo cada trazo ---------- */}
        <g fill="none" strokeLinecap="round" strokeLinejoin="round">
          {TRACES.map((d, i) => (
            <motion.path
              key={i}
              d={d}
              pathLength={1}
              stroke={i % 2 ? "#a5f3fc" : "#bbf7d0"}
              strokeWidth={2.4}
              strokeDasharray="0.14 0.86"
              style={{ filter: "url(#cb-flow-glow)" }}
              initial={{ strokeDashoffset: 1 }}
              animate={{ strokeDashoffset: [1, 0] }}
              transition={{
                duration: 2.4 + (i % 5) * 0.55,
                repeat: Infinity,
                ease: "linear",
                delay: (i % 4) * 0.6,
              }}
            />
          ))}
        </g>

        {/* ---------- Nodos que laten ---------- */}
        <g>
          {NODES.map(([cx, cy], i) => (
            <g key={i}>
              <motion.circle
                cx={cx}
                cy={cy}
                fill="url(#cb-glow)"
                animate={{ r: [7, 12, 7], opacity: [0.45, 0.95, 0.45] }}
                transition={{
                  duration: 1.8 + (i % 3) * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: (i % 6) * 0.25,
                }}
              />
              <circle cx={cx} cy={cy} r="3.2" fill="url(#cb-node)" />
            </g>
          ))}
        </g>

        {/* ---------- Procesador (chip) con detalle y actividad ---------- */}
        <g transform="translate(200 330)">
          {/* Halo pulsante */}
          <motion.circle
            r="55"
            fill="url(#cb-glow)"
            animate={{ opacity: [0.25, 0.55, 0.25], scale: [0.92, 1.08, 0.92] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Ondas concéntricas de actividad */}
          {[0, 1, 2].map((k) => (
            <motion.circle
              key={k}
              r="40"
              fill="none"
              stroke="#7dd3fc"
              strokeWidth="1.5"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: [0.5, 2], opacity: [0.6, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeOut",
                delay: k * 1,
              }}
            />
          ))}

          {/* Pines en los 4 lados */}
          {PIN_OFFSETS.map((o, k) => (
            <g key={k} stroke="#7dd3fc" strokeWidth="2" strokeLinecap="round">
              <line x1={-38} y1={o} x2={-52} y2={o} />
              <line x1={38} y1={o} x2={52} y2={o} />
              <line x1={o} y1={-38} x2={o} y2={-52} />
              <line x1={o} y1={38} x2={o} y2={52} />
            </g>
          ))}

          {/* Cuerpo del chip con borde que respira */}
          <motion.rect
            x="-38"
            y="-38"
            width="76"
            height="76"
            rx="8"
            fill="#0c4a6e"
            fillOpacity="0.55"
            stroke="#7dd3fc"
            animate={{ strokeWidth: [1.5, 2.6, 1.5], strokeOpacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Muesca de orientación (esquina) */}
          <circle cx="-27" cy="-27" r="3" fill="none" stroke="#7dd3fc" strokeWidth="1.5" />

          {/* Die interno + circuitería */}
          <rect
            x="-22"
            y="-22"
            width="44"
            height="44"
            rx="4"
            fill="#082f49"
            fillOpacity="0.6"
            stroke="#38bdf8"
            strokeWidth="1"
            strokeOpacity="0.7"
          />
          <g stroke="#38bdf8" strokeWidth="0.8" strokeOpacity="0.5">
            <path d="M-22 -8 H22 M-22 8 H22 M-8 -22 V22 M8 -22 V22" />
          </g>

          {/* Núcleo brillante pulsante */}
          <motion.circle
            r="5"
            fill="url(#cb-node)"
            style={{ filter: "url(#cb-flow-glow)" }}
            animate={{ opacity: [0.55, 1, 0.55], scale: [1, 1.45, 1] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          />
        </g>
      </svg>
    </div>
  );
}
