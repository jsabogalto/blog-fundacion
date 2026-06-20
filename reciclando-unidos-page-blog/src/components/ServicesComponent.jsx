"use client";
import ButtonComponent from "./ButtonComponent";

const sections = [
  {
    id: "donar",
    overlayTitle: "Tu donas material informático",
    heading: "Prolonga la vida útil de tu equipo tecnológico en desuso",
    text: "Se aceptan donaciones de ordenadores, portátiles, monitores y otros aparatos electrónicos de segunda mano procedentes de empresas, particulares y organismos públicos. Se expiden certificados por sus donaciones para deduccion de impuestos.",
    cta: { label: "Más información", href: "/donaciones-que-recibimos" },
    image: "https://ik.imagekit.io/2g4mlp2dp/prolonga-la-vida-de-tu-pc.webp",
    alt: "Persona donando equipo tecnológico",
    reverse: false,
  },
  {
    id: "refurbish",
    overlayTitle: "Renovación de equipos informáticos",
    heading: "Apoya el futuro de los profesionales de la tecnología de la información",
    text: "A través de nuestros programas de voluntariado, los jóvenes adquieren experiencia práctica reparando computadores y dictando cursos informales de tecnología. Esta formación constituye su primer paso hacia el sector tecnológico o educativo.",
    cta: { label: "Apoyanos", href: "/renovacion-equipos" },
    image: "https://ik.imagekit.io/2g4mlp2dp/apoya-talento-ru.webp",
    alt: "Jóvenes voluntarios reacondicionando tecnología",
    reverse: true,
  },
  {
    id: "reusar",
    overlayTitle: "Reutiliza los recursos informáticos",
    heading: "Prepara a tu centro educativo u organización para triunfar en nuestro mundo impulsado por la tecnología",
    text: "Se proporcionan ordenadores de sobremesa y portátiles reacondicionados a organizaciones sin ánimo de lucro, centros educativos y personas con bajos ingresos de Cundinamarca que necesitan acceder a tecnología asequible. Obtén más información sobre cómo solicitar ordenadores de sobremesa y portátiles reacondicionados.",
    cta: { label: "Solicitar", href: "/centro-educativo"},
    image: "https://ik.imagekit.io/2g4mlp2dp/centro-educativo.webp",
    alt: "Equipos reacondicionados listos para entregar",
    reverse: false,
  },
];

export default function ServicesComponent() {
  return (
    <section id="servicios" className="w-full">
      {sections.map((s) => (
        <div
          key={s.id}
          className="grid grid-cols-1 md:grid-cols-2 items-stretch max-w-[1400px] mx-auto md:px-8 md:px-12"
        >
          {/* ----- IMAGEN ----- */}
          <div
            className={`relative min-h-[320px] md:min-h-[520px] overflow-hidden
              ${
                s.reverse
                  ? "md:order-2"
                  : "md:order-1"
              }`}
          >
            <img
              src={s.image}
              alt={s.alt}
              className="absolute inset-0 h-full w-full object-cover"
            />
            {/* Overlay verde */}
            <div className="absolute inset-0 bg-black/20 mix-blend-multiply" />
            {/* Título sobre la imagen */}
            <div className="absolute inset-0 flex items-center justify-center px-6">
              <h3 className="text-white subtitle text-center drop-shadow-md">
                {s.overlayTitle}
              </h3>
            </div>
          </div>



          {/* ----- TEXTO ----- */}
          <div
            className={`flex flex-col justify-center px-8 py-12 md:px-16 md:py-20
              ${s.reverse ? "md:order-1" : "md:order-2"}`}
          >
            <h2 className="subtitle">
              {s.heading}
            </h2>
            <p className="mt-6 paragraph text-gray-600 max-w-xl">
              {s.text}
            </p>
            <div className="mt-8">
              <ButtonComponent
                link={s.cta.href}
                className={"bg-green-ru text-white"}
                text={s.cta.label}
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}