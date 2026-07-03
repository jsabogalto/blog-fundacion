"use client";
import ImageComponent from "./ImageComponent";
import { ArrowRight } from "lucide-react";
import LinkComponent from "./LinkComponent";

const stats = [
  {
    value: "62+",
    label: "Computadores donados y reacondicionados para quienes más lo necesitan.",
  },
  {
    value: "15+",
    label: "Estudiantes rurales beneficiados con tecnología",
  },
  {
    value: "2 ton",
    label: "Residuos electrónicos gestionados de forma responsable cada año.",
  },
  {
    value: "6+",
    label: "Colegios y fundaciones beneficiados con equipos reacondicionados.",
  },
];

export default function ImpactComponent() {
  return (
    <section
      id="impacto"
      className="mx-auto w-full max-w-layer py-12 px-5 md:px-12"
    >
      {/* ===== TARJETA ===== */}
      <div className="relative overflow-hidden rounded-4xl">
        {/* Imagen de fondo */}
        <ImageComponent
          src="https://thumbs.dreamstime.com/b/vista-a%C3%A9rea-superior-ecosistema-de-bosque-r%C3%ADo-y-lago-en-prado-valle-textura-desde-arriba-212814274.jpg"
          width={1400}
          height={700}
          className="absolute inset-0 h-full w-full object-cover"
          alt="Vista aérea de un ecosistema de bosque, río y lago"
        />

        {/* Tinte base (contraste en móvil) + degradado verde → natural */}
        <div className="absolute inset-0 bg-[#053215]/30" />
        <div className="absolute inset-0 bg-linear-to-r from-[#053215] via-[#053215]/85 to-transparent" />
        <div className="relative flex flex-col gap-8 p-8 md:grid md:grid-cols-2 md:items-center md:gap-12 md:p-16">
          {/* Logo — arriba en móvil, columna derecha en desktop */}
          <div className="flex justify-start md:order-2 md:justify-center">
            <ImageComponent
              src="/footer_image_profile.png.png"
              width={210}
              height={220}
              className="h-18 w-18 object-contain brightness-0 invert md:h-52 md:w-52"
              alt="Logo Reciclando Unidos"
            />
          </div>

          {/* Texto — debajo del logo en móvil, columna izquierda en desktop */}
          <div className="w-full">
            <h2 className="title text-white">
              Unidos hacemos diferencia
            </h2>

            <p className="mt-6 max-w-[55ch] paragraph text-white/85 md:text-base">
              Somos una fundación que da una segunda vida a los computadores en
              desuso. Recibimos donaciones de equipos de empresas, entidades
              públicas y particulares, los reacondicionamos y los entregamos a
              colegios, fundaciones y familias de Bogotá y Cundinamarca
            </p>
          </div>
        </div>
      </div>

      {/* ===== STATS ===== */}
      <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 md:mt-16 lg:grid-cols-4 md:px-16">
        {stats.map((s, i) => (
          <div key={i}>
            <p className="subtitle text-[#053215]">
              {s.value}
            </p>
            <p className="mt-3 paragraph-posts-item text-gray-600">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section >
  );
}