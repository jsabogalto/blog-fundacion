import SpanTextComponent from "./SpanTextComponent";

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
    // El stroke de un SVG usa currentColor: no se le puede aplicar el degradado
    // (bg-clip-text + text-transparent lo volvería invisible), así que al abrir
    // usamos uno de los dos colores del degradado como sólido.
    className="h-5 w-5 shrink-0 text-gray-400 transition-transform duration-300 group-open:rotate-180 group-open:text-[#139fa7]"
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
  heading = "Preguntas frecuentes",
  title,
  className = "",
  spanTitle,
}) {
  // 1) Filtra por `only` si se pasó; si no, usa todas las secciones recibidas.
  const visibleSections = only?.length
    ? sections.filter((s) => only.includes(s.id))
    : sections;

  // 2) Sin datos -> no renderizamos nada (evita un bloque vacío y JSON-LD inútil).
  const hasQuestions = visibleSections.some((s) => (s.items?.length ?? 0) > 0);
  if (!hasQuestions) return null;

  const jsonLd = buildFaqJsonLd(visibleSections);

  // Un solo título global (sin títulos por sección): todas las preguntas de
  // todas las secciones visibles se aplanan en una sola lista, igual a
  // Aramco -> un título a la izquierda, una lista completa a la derecha.
  const allItems = visibleSections.flatMap((s) => s.items ?? []);

  return (
    <section id="preguntas-frecuentes sections-py" className={`py-8 md:py-22 ${className}`}>
      {/* Datos estructurados: JSON.stringify + escape de "<" para evitar
          que un "</script>" en el contenido rompa la página (XSS/robustez) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <div className="mx-auto w-full max-w-layer px-5 md:px-12">
        {/* Layout estilo Aramco: título fijo a la izquierda, lista completa
            a la derecha en desktop; apilado (título arriba, lista abajo) en móvil */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
          {/* Columna izquierda: el ÚNICO título de toda la sección */}
          <div className="mb-4 max-w-2xl md:mb-0">

            <h2 className="subtitle">{heading}</h2>
            {title && <p className="paragraph mt-4 max-w-[60ch]">{title}</p>}
          </div>

          {/* Columna derecha: lista plana de TODAS las preguntas, sin
              card/borde/sombra, solo líneas divisorias finas -> igual a Aramco */}
          <div className="divide-y divide-gray-200 border-t border-gray-200">
            {allItems.map((it) => (
              <details key={it.q} className="group">
                <summary className="grid cursor-pointer list-none grid-cols-[1fr_auto] items-center gap-4 py-6 [&::-webkit-details-marker]:hidden">
                  {/* span en vez de h4: summary tiene rol de botón y un
                      heading adentro rompe la semántica para lectores
                      de pantalla; el schema ya marca esto como pregunta */}
                  <span className="paragraph relative inline-block font-medium md:text-lg">
                    {/* Capa 1: texto negro normal, visible por defecto */}
                    <span className="text-gray-900 transition-opacity duration-300 group-open:opacity-0">
                      {it.q}
                    </span>
                    {/* Capa 2: mismo texto, con degradado, superpuesto encima, invisible por defecto */}
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-r from-[#139fa7] to-[#6dd063] bg-clip-text text-transparent opacity-0 transition-opacity duration-300 group-open:opacity-100"
                    >
                      {it.q}
                    </span>
                  </span>
                  <ChevronIcon />
                </summary>
                <div className="pb-6">
                  <p className="paragraph ">{it.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}