/* Secciones adicionales para la página de donación.
   Mismo estilo de franjas a todo el ancho, sin rounded.
   Componente de servidor (sin estado): el FAQ usa <details> nativo. */

export default function DonacionInfoExtra() {
  return (
    <>

      {/* ===== QUÉ PUEDES DONAR (franja clara, texto oscuro) ===== */}
      <section className="relative left-1/2 w-screen -translate-x-1/2 bg-white text-ink">
        <div className="mx-auto max-w-[1400px] px-8 py-16 md:px-12">
          <h2 className="text-center subtitle">¿Qué computadores y equipos puedes donar?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center paragraph text-ink/70">
            Recibimos equipos funcionen o no. Lo que sirve se reacondiciona; lo que
            no, recibe disposición ambiental responsable.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-px bg-line sm:grid-cols-4">
            <Device icon={<IconLaptop />} label="Computadores portátiles" />
            <Device icon={<IconTower />} label="Computadores de escritorio" />
            <Device icon={<IconAllInOne />} label="Todo en uno" />
            <Device icon={<IconMonitor />} label="Monitores" />
            <Device icon={<IconTablet />} label="Tablets" />
            <Device icon={<IconPhone />} label="Celulares" />
            <Device icon={<IconPrinter />} label="Impresoras" />
            <Device icon={<IconServer />} label="Servidores" />
          </div>
        </div>
      </section>

      {/* ===== CÓMO DONAR EN 3 PASOS (franja verde) ===== */}
      {/* ===== NUEVA INICIATIVA: TALLERES (franja teal, con CTA) ===== */}
      <section className="relative left-1/2 w-screen -translate-x-1/2 bg-teal-700 text-white">
        <div className="mx-auto max-w-3xl px-8 py-20 text-center md:px-12">
          <span className="mb-4 inline-block bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
            Nueva iniciativa
          </span>
          <h2 className="subtitle">Dona computadores para nuestros talleres de alfabetización digital</h2>
          <p className="mx-auto mt-5 max-w-2xl paragraph text-white/90">
            Estamos abriendo talleres para enseñar habilidades digitales básicas
            —usar un computador, navegar de forma segura, hacer trámites y buscar
            empleo— a personas que nunca han tenido acceso a uno. Para que cada
            taller funcione necesitamos equipos. Tu donación se convierte en un
            puesto de aprendizaje.
          </p>
        </div>
      </section>

      {/* ===== PREGUNTAS FRECUENTES (franja clara, <details> sin JS) ===== */}
      
    </>
  );
}

/* ---------- Subcomponentes (sin rounded) ---------- */

function Stat({ icon, value, label, source }) {
  return (
    <div className="flex flex-col items-center">
      <span className="mb-3 text-white/90">{icon}</span>
      <span className="text-4xl font-extrabold leading-none sm:text-5xl">{value}</span>
      <span className="mt-2 text-sm text-white/80">{label}</span>
      {source && <span className="mt-1 text-xs text-white/50">{source}</span>}
    </div>
  );
}

function Device({ icon, label }) {
  return (
    <div className="flex flex-col items-center gap-3 bg-white p-6 text-center">
      <span className="flex h-12 w-12 items-center justify-center bg-mint text-pine">
        {icon}
      </span>
      <span className="text-sm font-medium text-ink">{label}</span>
    </div>
  );
}

function Step({ n, title, text }) {
  return (
    <div className="bg-green-600 p-8">
      <span className="flex h-12 w-12 items-center justify-center bg-white text-2xl font-extrabold text-green-700">
        {n}
      </span>
      <h3 className="mt-5 text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-white/85">{text}</p>
    </div>
  );
}

function Faq({ q, a }) {
  return (
    <details className="group py-5">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-semibold text-ink">
        {q}
        <IconPlus />
      </summary>
      <p className="mt-3 text-ink/70">{a}</p>
    </details>
  );
}

/* ---------- Iconos (SVG inline, sin dependencias) ---------- */

const iconBase = {
  width: 28,
  height: 28,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const IconChart = () => (
  <svg {...iconBase}>
    <path d="M3 3v18h18" />
    <path d="M7 15v3M12 9v9M17 5v13" />
  </svg>
);
const IconGap = () => (
  <svg {...iconBase}>
    <path d="M3 12h7M14 12h7" />
    <path d="M10 8l-4 4 4 4M14 8l4 4-4 4" />
  </svg>
);
const IconWifiOff = () => (
  <svg {...iconBase}>
    <path d="M2 8.5a16 16 0 0 1 20 0M5 12a11 11 0 0 1 14 0M8.5 15.5a6 6 0 0 1 7 0" />
    <circle cx="12" cy="19" r="0.6" fill="currentColor" />
    <path d="M3 3l18 18" />
  </svg>
);
const IconGrad = () => (
  <svg {...iconBase}>
    <path d="M22 10 12 5 2 10l10 5 10-5Z" />
    <path d="M6 12v5c0 1 2.5 2 6 2s6-1 6-2v-5" />
  </svg>
);

const IconLaptop = () => (
  <svg {...iconBase}>
    <rect x="3" y="5" width="18" height="11" />
    <path d="M2 20h20" />
  </svg>
);
const IconTower = () => (
  <svg {...iconBase}>
    <rect x="7" y="3" width="10" height="18" />
    <path d="M10 7h4M10 10h4" />
    <circle cx="12" cy="17" r="0.6" fill="currentColor" />
  </svg>
);
const IconAllInOne = () => (
  <svg {...iconBase}>
    <rect x="3" y="4" width="18" height="12" />
    <path d="M9 20h6M12 16v4" />
  </svg>
);
const IconMonitor = () => (
  <svg {...iconBase}>
    <rect x="3" y="4" width="18" height="12" />
    <path d="M8 20h8M12 16v4" />
  </svg>
);
const IconTablet = () => (
  <svg {...iconBase}>
    <rect x="6" y="3" width="12" height="18" />
    <path d="M11 18h2" />
  </svg>
);
const IconPhone = () => (
  <svg {...iconBase}>
    <rect x="8" y="2" width="8" height="20" />
    <path d="M11 18h2" />
  </svg>
);
const IconPrinter = () => (
  <svg {...iconBase}>
    <path d="M6 9V3h12v6" />
    <rect x="4" y="9" width="16" height="7" />
    <path d="M7 16h10v5H7z" />
  </svg>
);
const IconServer = () => (
  <svg {...iconBase}>
    <rect x="3" y="4" width="18" height="6" />
    <rect x="3" y="14" width="18" height="6" />
    <path d="M7 7h.01M7 17h.01" />
  </svg>
);

const IconArrow = () => (
  <svg {...iconBase} width={18} height={18}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
const IconPlus = () => (
  <svg
    {...iconBase}
    width={20}
    height={20}
    className="shrink-0 text-pine transition-transform group-open:rotate-45"
  >
    <path d="M12 5v14M5 12h14" />
  </svg>
);