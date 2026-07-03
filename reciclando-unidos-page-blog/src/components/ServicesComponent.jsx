"use client";
import ButtonComponent from "./ButtonComponent";
import LinkComponent from "./LinkComponent";


export default function ServicesComponent({ sections, className }) {
  return (
    <section id="servicios" className={`w-full py-16 md:py-24 ${className}`}>
      <div className="mx-auto flex max-w-layer flex-col gap-8 px-5 md:gap-24 md:px-12">
        {sections.map((s) => (
          <div
            key={s.id}
            className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-2 md:gap-12"
          >
            {/* ----- IMAGEN ----- */}
            <div
              className={`relative min-h-80 overflow-hidden rounded-3xl md:max-h-100 ${s.reverse ? "md:order-2" : "md:order-1"
                }`}
            >
              <img
                src={s.image}
                alt={s.alt}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            {/* ----- TEXTO ----- */}
            <div
              className={`flex flex-col justify-center px-0 py-8 md:py-12 ${s.reverse ? "md:order-1" : "md:order-2"
                }`}
            >
              <h2 className="subtitle">{s.heading}</h2>

              <p className="paragraph mt-4 max-w-[60ch] text-gray-600">
                {s.text}
              </p>

              <div className="mt-8">
                <LinkComponent link={s.cta.href}
                  className="text-green-ru"
                  text={s.cta.label} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}