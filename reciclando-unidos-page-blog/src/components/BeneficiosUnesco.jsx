import ButtonComponent from "@/components/ButtonComponent";

// Cifras verificables de la UNESCO sobre brecha digital y educación.
// Fuente: https://www.unesco.org/en/articles/startling-digital-divides-distance-learning-emerge
// y https://www.unesco.org/en/articles/unesco-spotlights-how-digital-learning-can-promote-equity-low-resource-contexts
const CIFRAS_UNESCO = [
  {
    valor: "826 M",
    label:
      "de estudiantes en el mundo no tienen acceso a un computador en casa, según la UNESCO.",
  },
  {
    valor: "43 %",
    label:
      "de los estudiantes (706 millones) no cuenta con internet en el hogar para estudiar.",
  },
  {
    valor: "2.600 M",
    label:
      "de personas, el 32% de la población mundial, todavía no tiene acceso a internet.",
  },
  {
    valor: "60 %",
    label:
      "de las escuelas primarias del mundo aún no están conectadas a internet.",
  },
];

// 10 títulos optimizados para SEO sobre donación de computadores.
const TITULOS_SEO = [
  {
    h: "Donar computadores reduce la brecha digital en la educación",
    p: "La UNESCO advierte que millones de estudiantes quedan rezagados por no tener un equipo. Donar computadores acerca la tecnología a quienes más la necesitan y reduce esa brecha.",
  },
  {
    h: "Donar computadores da acceso a clases y tareas en línea",
    p: "Con un computador donado, un estudiante puede conectarse a clases virtuales, hacer sus tareas e investigar sin depender de un café internet o del celular.",
  },
  {
    h: "Donar computadores impulsa la alfabetización digital",
    p: "Aprender a usar un computador es hoy una habilidad básica. Cada equipo donado abre la puerta a desarrollar competencias digitales muy demandadas en el estudio y el empleo.",
  },
  {
    h: "Donar computadores mejora el rendimiento académico",
    p: "Tener su propio equipo pone a los estudiantes en igualdad de condiciones frente a sus compañeros y mejora sus resultados y posibilidades de aprendizaje.",
  },
  {
    h: "Donar computadores en Bogotá acerca la tecnología a más colegios",
    p: "Escuelas, bibliotecas y comunidades de Bogotá con pocos recursos pueden montar salas de cómputo y dictar talleres digitales gracias a los equipos donados.",
  },
  {
    h: "Donar computadores usados combate la desigualdad educativa",
    p: "El acceso a la tecnología está distribuido de forma desigual. Donar tu computador usado ayuda a que estudiantes de bajos recursos no queden por fuera del mundo digital.",
  },
  {
    h: "Donar computadores conecta a comunidades sin acceso",
    p: "Donde no llega el internet ni los equipos, un computador donado se convierte en una herramienta compartida que beneficia a familias y barrios enteros.",
  },
  {
    h: "Donar computadores empresariales: responsabilidad social con impacto",
    p: "Las empresas pueden transformar sus equipos en desuso en oportunidades educativas reales, sumando a su sostenibilidad y a su responsabilidad social.",
  },
  {
    h: "Donar computadores cuida el medio ambiente",
    p: "Reacondicionar un equipo en lugar de desecharlo reduce la basura electrónica y ahorra materiales, energía y agua. Lo que no sirve, se recicla de forma responsable.",
  },
  {
    h: "Donar un computador hoy: una segunda vida con propósito",
    p: "Tu equipo deja de ser un trasto guardado para convertirse en la primera herramienta de estudio de alguien más. Donar computadores es un gesto pequeño con un impacto enorme.",
  },
];

export default function BeneficiosUnesco() {
  return (
    <section
      aria-labelledby="beneficios-unesco-title"
      className="mx-auto w-full max-w-[1400px] px-8 py-16 md:px-12"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-green-ru">
          Datos UNESCO
        </p>
        <h2 id="beneficios-unesco-title" className="subtitle">
          Por qué donar computadores beneficia a la educación
        </h2>
        <p className="paragraph mt-4 leading-relaxed text-gray-600">
          Las cifras de la UNESCO muestran que el acceso a la tecnología sigue
          siendo un privilegio para millones de estudiantes. Donar computadores
          es una de las formas más directas de cambiar esa realidad y abrir
          oportunidades de aprendizaje.
        </p>
      </div>

      {/* Cifras UNESCO */}
      <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
        {CIFRAS_UNESCO.map((cifra) => (
          <div
            key={cifra.valor}
            className="flex flex-col border border-green-ru/15 bg-green-ru/5 p-6 text-center"
          >
            <span className="text-4xl font-extrabold leading-none text-green-ru md:text-5xl">
              {cifra.valor}
            </span>
            <span className="mt-3 text-sm leading-relaxed text-gray-600">
              {cifra.label}
            </span>
          </div>
        ))}
      </div>

      <p className="mt-4 text-center text-xs text-gray-400">
        Fuente:{" "}
        <a
          href="https://www.unesco.org/en/articles/startling-digital-divides-distance-learning-emerge"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="underline hover:text-green-ru"
        >
          UNESCO
        </a>
        . Datos sobre brecha digital y acceso a la tecnología en la educación.
      </p>

      {/* 10 títulos SEO sobre donación de computadores */}
      <div className="mt-16">
        <h3 className="text-center subtitle font-bold text-gray-800">
          10 razones para donar computadores
        </h3>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {TITULOS_SEO.map((item, i) => (
            <article key={item.h} className="flex gap-4">
              <span
                aria-hidden="true"
                className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-green-ru/10 paragraph font-bold text-green-ru"
              >
                {i + 1}
              </span>
              <div>
                <h3 className="paragraph font-semibold text-gray-800">
                  {item.h}
                </h3>
                <p className="mt-4 paragraph leading-relaxed text-gray-600">
                  {item.p}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}