// FaqSeo.jsx
// Server Component (SIN "use client").
// Acordeón con <details>/<summary> NATIVO: se abre/cierra sin JavaScript.
// Todo el texto está en el HTML aunque el acordeón esté cerrado -> Google lo indexa.
//
// Ahora los datos llegan por la prop `sections` (antes era una constante global),
// así el componente es 100% reutilizable: lo puedes alimentar desde un archivo de
// datos, un CMS, o pasarle secciones distintas en cada página.
//
// Forma esperada de `sections` (lo que antes llamabas FAQ_SECTIONS / FAQITEMS):
//   [
//     {
//       id: "donaciones",
//       eyebrow: "Donaciones",
//       title: "Donar computadores: dónde y cómo hacerlo",
//       intro: "Texto introductorio opcional…",   // opcional
//       items: [
//         { q: "¿Pregunta?", a: "Respuesta." },
//         // …
//       ],
//     },
//     // …más secciones
//   ]
//
// Uso:
//   import FaqSeo from "@/components/FaqSeo";
//   import { FAQ_SECTIONS } from "@/data/faq";
//
//   <FaqSeo sections={FAQ_SECTIONS} />                                  // todas
//   <FaqSeo sections={FAQ_SECTIONS} only={["donaciones", "reciclaje"]} /> // algunas
//   <FaqSeo sections={FAQ_SECTIONS} title="Preguntas frecuentes" />      // título general

// JSON-LD FAQPage a partir de las mismas preguntas (datos estructurados permitidos).
function buildFaqJsonLd(sections) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: sections.flatMap((s) =>
      (s.items ?? []).map((it) => ({
        "@type": "Question",
        name: it.q,
        acceptedAnswer: { "@type": "Answer", text: it.a },
      }))
    ),
  };
}

const ChevronIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="h-5 w-5 shrink-0 text-gray-400 transition-transform duration-300 group-open:rotate-180 group-open:text-emerald-600"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export default function FaqSeo({
  sections = [],
  only,
  title,
  className = "",
}) {
  // 1) Filtra por `only` si se pasó; si no, usa todas las secciones recibidas.
  const visibleSections = only?.length
    ? sections.filter((s) => only.includes(s.id))
    : sections;

  // 2) Sin datos -> no renderizamos nada (evita un bloque vacío y JSON-LD inútil).
  const hasQuestions = visibleSections.some((s) => (s.items?.length ?? 0) > 0);
  if (!hasQuestions) return null;

  const jsonLd = buildFaqJsonLd(visibleSections);

  return (
    <section className={`bg-gray-50 py-16 ${className}`}>
      {/* Datos estructurados: invisibles para el usuario, permitidos por Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto w-full max-w-[1400px] px-8 md:px-12">
        {/* Encabezado general */}
        <div className="mb-12 max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-green-ru">
            Centro de ayuda
          </span>
          <h2 className="subtitle mt-3 text-gray-900">
            {title || "Preguntas frecuentes"}
          </h2>
          <p className="paragraph mt-4 text-gray-600">
            Resolvemos las dudas más comunes sobre donar computadores, reciclaje
            electrónico y nuestra labor como fundación en Colombia.
          </p>
        </div>

        {/* Paneles tipo tabla, uno por categoría */}
        <div className="flex flex-col gap-8">
          {visibleSections.map((section) => (
            <div
              key={section.id}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
            >
              {/* Cabecera del panel */}
              <div className="border-b border-gray-200 bg-gray-50/70 px-6 py-8 md:px-8">
                <span className="text-xs font-semibold uppercase tracking-widest text-green-ru">
                  {section.eyebrow}
                </span>
                <h3 className="mt-4 paragraph font-semibold text-gray-900">
                  {section.title}
                </h3>
                {section.intro && (
                  <p className="mt-4 paragraph text-gray-500">{section.intro}</p>
                )}
              </div>

              {/* Filas: cada pregunta es una fila tipo tabla */}
              <div className="divide-y divide-gray-100">
                {(section.items ?? []).map((it, i) => (
                  <details key={i} className="group">
                    <summary className="grid cursor-pointer list-none grid-cols-[auto_1fr_auto] items-center gap-4 px-6 py-6 transition-colors hover:bg-gray-50 [&::-webkit-details-marker]:hidden md:px-8">
                      <span className="flex h-7 w-7 items-center justify-center rounded-md bg-emerald-50 text-xs font-semibold text-emerald-700">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h4 className="paragraph font-medium text-gray-900 group-open:text-green-ru md:text-lg">
                        {it.q}
                      </h4>
                      <ChevronIcon />
                    </summary>
                    <div className="px-6 pb-6 md:px-8 md:pl-[4.5rem]">
                      <p className="max-w-3xl leading-relaxed text-gray-600">
                        {it.a}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}