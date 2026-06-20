import ButtonComponent from "./ButtonComponent";

export default function DonacionInfo() {
  return (
    <>
      {/* ===== IMPACTO (franja teal, estilo Human-I-T) ===== */}

      {/* ===== POR QUÉ DONAR (franja verde) ===== */}
      <section className="relative left-1/2 w-screen -translate-x-1/2 bg-green-600 text-white">
        <div className="mx-auto max-w-[1400px] px-8 py-16 text-center md:px-12">
          <h2 className="subtitle">
            ¿Por qué donar tu computador?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl paragraph text-white">
            Cada equipo que ya no usas puede cambiar una vida. Donarlo evita que
            termine como basura electrónica y le da una segunda oportunidad como
            herramienta de estudio y trabajo.
          </p>

          <div className="mt-12 grid gap-10 md:grid-cols-3">
            <Feature
              icon={<IconGlobe />}
              title="Cierras la brecha digital"
              text="Muchas personas no acceden a la educación o al empleo por no tener un computador. Tu donación abre esa puerta."
            />
            <Feature
              icon={<IconLeaf />}
              title="Cuidas el medio ambiente"
              text="Reutilizar un equipo reduce los residuos electrónicos y la contaminación que generan sus materiales."
            />
            <Feature
              icon={<IconGrad />}
              title="Apoyas la educación"
              text="Los equipos llegan a estudiantes y colegios, fortaleciendo el aprendizaje en comunidades con menos recursos."
            />
          </div>
        </div>
      </section>

      {/* ===== BENEFICIOS AL DONAR (franja teal, tarjetas translúcidas) ===== */}
      <section className="relative left-1/2 w-screen -translate-x-1/2 bg-teal-700 text-white">
        <div className="mx-auto max-w-[1400px] px-8 py-16 md:px-12">
          <h2 className="text-center subtitle">
            Beneficios de donar con Reciclando Unidos
          </h2>
          <p className="mx-auto mt-4 paragraph max-w-2xl text-center">
            Donar con nosotros no solo ayuda a otros: también te trae
            tranquilidad y ventajas concretas.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <Benefit
              title="Borrado seguro de tus datos"
              text="Eliminamos toda tu información de forma definitiva antes de reacondicionar el equipo. Tu privacidad está protegida."
            />
            <Benefit
              title="Sin costo para ti"
              text="No pagas nada por donar ni por la recogida. El proceso completo es totalmente gratuito."
            />
            <Benefit
              title="Certificado de donación"
              text="Recibes un soporte que respalda tu aporte a la fundación y a la causa social, obtienes beneficios tributarios."
            />
            <Benefit
              title="Impacto real y transparente"
              text="Te contamos a dónde llega tu donación a través de nuestros informes de gestión."
            />
          </div>
        </div>
      </section>

      {/* ===== DOMICILIO GRATIS EN BOGOTÁ (CTA verde, estilo Human-I-T) ===== */}
      <section className="relative left-1/2 w-screen -translate-x-1/2 bg-green-600 text-white">
        <div className="mx-auto max-w-3xl px-8 py-20 text-center md:px-12">
          <h2 className="subtitle">
            Recogemos tu donación a domicilio en Bogotá, gratis
          </h2>
          <p className="mx-auto paragraph mt-5 max-w-2xl text-white">
            No tienes que desplazarte ni cargar nada. Vamos hasta la puerta de tu
            casa u oficina en cualquier zona de Bogotá, en el día y la hora que
            acordemos contigo, sin ningún costo. Solo agenda tu solicitud y
            nosotros nos encargamos del resto.
          </p>
        </div>
      </section>
    </>
  );
}

/* ---------- Subcomponentes ---------- */

function Stat({ icon, value, label }) {
  return (
    <div className="flex flex-col items-center">
      <span className="mb-3 text-white/90">{icon}</span>
      <span className="text-4xl font-extrabold leading-none sm:text-5xl">
        {value}
      </span>
      <span className="mt-2 text-sm text-white/80">{label}</span>
    </div>
  );
}

function Feature({ icon, title, text }) {
  return (
    <div className="flex flex-col items-center">
      <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/15">
        {icon}
      </span>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-white/85">{text}</p>
    </div>
  );
}

function Benefit({ title, text }) {
  return (
    <div className="flex gap-4 rounded-lg bg-white/10 p-6 text-left">
      <IconCheck />
      <div>
        <h3 className="paragraph">{title}</h3>
        <p className="mt-2 paragraph text-white">{text}</p>
      </div>
    </div>
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

const IconLaptop = () => (
  <svg {...iconBase}>
    <rect x="3" y="5" width="18" height="11" rx="1" />
    <path d="M2 20h20" />
  </svg>
);
const IconGrad = () => (
  <svg {...iconBase}>
    <path d="M22 10 12 5 2 10l10 5 10-5Z" />
    <path d="M6 12v5c0 1 2.5 2 6 2s6-1 6-2v-5" />
  </svg>
);
const IconSchool = () => (
  <svg {...iconBase}>
    <path d="M3 21h18" />
    <path d="M5 21V8l7-4 7 4v13" />
    <path d="M9 21v-5h6v5" />
  </svg>
);
const IconRecycle = () => (
  <svg {...iconBase}>
    <path d="M7 19a4 4 0 0 1-3.5-6L7 7" />
    <path d="M17 5a4 4 0 0 1 3.5 6L17 17" />
    <path d="M9 19h8M7 7l2-3 3 1M17 17l-2 3-3-1" />
  </svg>
);
const IconGlobe = () => (
  <svg {...iconBase}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 3 2.5 15 0 18M12 3c-2.5 3-2.5 15 0 18" />
  </svg>
);
const IconLeaf = () => (
  <svg {...iconBase}>
    <path d="M4 20c8 0 16-4 16-16C8 4 4 12 4 20Z" />
    <path d="M4 20c4-6 8-9 12-11" />
  </svg>
);
const IconCheck = () => (
  <svg {...iconBase} width={22} height={22} className="mt-0.5 shrink-0">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);