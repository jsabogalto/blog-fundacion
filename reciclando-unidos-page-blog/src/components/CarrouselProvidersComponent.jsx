"use client";
import { useEffect, useState } from "react";
import axios from "axios";

/**
 * ProvidersGridComponent — sección estática de logos de donadores.
 *
 * Consume los donadores desde el backend (GET /donors). Cada donador tiene:
 *   { img, url, name } -> img = logo, url = enlace de la empresa, name = alt.
 * Grilla responsive: 2 columnas en móvil, 4 en desktop.
 * Cada logo vive en una caja de tamaño uniforme (object-contain), así todos
 * ocupan el mismo espacio sin deformarse.
 */

const API = process.env.NEXT_PUBLIC_API_URL;

function LogoItem({ donor }) {
  const image = (
    <img
      src={donor.img}
      alt={donor.name || "Donador"}
      draggable="false"
      width={100}
      height={100}
      loading="lazy"
      className="w-40 h-30 object-contain"
    />
  );

  return (
    <div className="group flex h-18 items-center justify-center md:h-26">
      {donor.url ? (
        <a
          href={donor.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={donor.name ? `Visitar ${donor.name}` : "Visitar donador"}
          className="flex h-full w-full items-center justify-center rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
        >
          {image}
        </a>
      ) : (
        image
      )}
    </div>
  );
}

export default function CarrouselProvidersComponent({
  start = "Aliados que creen en la educación",
  end = "El siguiente lugar puede ser para tu empresa",
  donors: donorsProp, // opcional: pasar donadores ya cargados (omitir para usar el backend)
}) {
  const [donors, setDonors] = useState(donorsProp ?? []);

  useEffect(() => {
    if (donorsProp) return;
    let active = true;
    axios
      .get(`${API}/donors`)
      .then((res) => {
        if (active) setDonors(Array.isArray(res.data) ? res.data : []);
      })
      .catch((err) => console.error("Error cargando donadores:", err.message));
    return () => {
      active = false;
    };
  }, [donorsProp]);

  return (
    <section aria-label="Logos de donadores" className="w-full sections-py">
      <div className="mx-auto w-full max-w-layer px-4 md:px-12">
        <h2 className="mx-auto mb-10 max-w-3xl text-center text-2xl md:mb-14 md:text-3xl">
        <span className="font-semibold text-stone-800">{start}</span>{" "}
        {end && <span className="font-serif italic font-normal text-stone-800">{end}</span>}
      </h2>

        {donors.length > 0 && (
          <div className="grid grid-cols-2 items-center gap-x-8 sm:grid-cols-3 md:grid-cols-4 md:gap-x-10 md:gap-y-12">
            {donors.map((donor, i) => (
              <LogoItem
                key={`${donor._id ?? donor.name ?? "donor"}-${i}`}
                donor={donor}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}