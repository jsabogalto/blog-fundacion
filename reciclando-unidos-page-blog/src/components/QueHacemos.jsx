import ButtonComponent from "@/components/ButtonComponent";

const DESTINOS = [
  {
    title: "Colegios y escuelas",
    desc: "Entregamos computadores donados a instituciones educativas de bajos recursos en Bogotá y Cundinamarca para que monten salas de cómputo, dicten clases de tecnología y den acceso a herramientas digitales a cientos de estudiantes.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
        <path d="m4 6 8-3 8 3-8 3-8-3Z" />
        <path d="M4 6v5c0 1.5 3.6 3 8 3s8-1.5 8-3V6" />
        <path d="M12 14v6" />
        <path d="M20 9v4" />
      </svg>
    ),
  },
  {
    title: "Fundaciones y comunidades",
    desc: "Apoyamos a otras fundaciones y organizaciones sociales con computadores reacondicionados, multiplicando el impacto de cada equipo donado en programas educativos y comunitarios.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
        <path d="M19.5 12.572 12 20l-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 1 1 7.5 6.566Z" />
      </svg>
    ),
  },
  {
    title: "Estudiantes rurales",
    desc: "Llevamos computadores usados reacondicionados a niños y jóvenes de zonas rurales, donde el acceso a la tecnología es más difícil, para que estudien en igualdad de condiciones y no queden rezagados por la brecha digital.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
        <path d="M12 22v-7" />
        <path d="M12 15c-3 0-5-2-5-5 0-1 .5-2 .5-2s2 .5 3 2c1-2.5 1.5-5 1.5-5s.5 2.5 1.5 5c1-1.5 3-2 3-2s.5 1 .5 2c0 3-2 5-5 5Z" />
      </svg>
    ),
  },
  {
    title: "Personas en situación de vulnerabilidad",
    desc: "Acercamos la tecnología a familias y personas en situación de vulnerabilidad con computadores donados, abriéndoles puertas para estudiar, capacitarse, buscar empleo y acceder a trámites y servicios en línea.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

export default function QueHacemos() {
  return (
    <section
      aria-labelledby="que-hacemos-title"
      className="mx-auto w-full max-w-[1400px] px-8 py-16 md:px-12"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-green-ru">
          Nuestro impacto
        </p>
        <h2 id="que-hacemos-title" className="subtitle">
          ¿Qué hacemos con los computadores que donas en Bogotá?
        </h2>
        <p className="paragraph mt-4 leading-relaxed text-gray-600">
          Cada computador usado que recibimos se repara y se reacondiciona para
          darle una segunda vida con propósito. Después lo entregamos a quienes
          más lo necesitan en Bogotá y Cundinamarca, asegurando que tu donación
          de computadores se convierta en oportunidades educativas y sociales
          reales.
        </p>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {DESTINOS.map((destino) => (
          <article
            key={destino.title}
            className="flex flex-col border border-green-ru/15 bg-white p-7 shadow-sm transition-shadow hover:shadow-md"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-green-ru/10 text-green-ru">
              {destino.icon}
            </span>
            <h3 className="mt-5 text-lg font-semibold text-gray-800">
              {destino.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              {destino.desc}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}