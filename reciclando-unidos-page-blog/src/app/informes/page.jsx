// SIN "use client". Server Component: Google ve el HTML completo.
import SectionImageComponent from "@/components/SectionImageComponent";
import { FileDown } from "lucide-react";

export const metadata = {
  title: { absolute: "Transparencia y Documentos Legales | Fundación Reciclando Unidos" },
  description:
    "Consulta el RUT, los estados financieros y la Resolución DIAN de la Fundación Reciclando Unidos. Pertenecemos al Régimen Tributario Especial: transparencia total en cada donación.",
  keywords: [
    "transparencia fundación",
    "resolución DIAN régimen tributario especial",
    "documentos legales fundación Bogotá",
    "estados financieros fundación",
  ],
  alternates: { canonical: "/informes" },
  openGraph: {
    title: "Transparencia y Documentos Legales | Fundación Reciclando Unidos",
    description:
      "RUT, estados financieros y Resolución DIAN. Régimen Tributario Especial y transparencia total en cada donación.",
    type: "website",
    url: "/informes",
    locale: "es_CO",
    siteName: "Fundación Reciclando Unidos",
    images: [{ url: "/imagepublic.jpg", width: 1200, height: 630, alt: "Transparencia - Fundación Reciclando Unidos" }],
  },
};

const informes = [
  { title: "Informe de gestión 2025", url: "https://drive.google.com/file/d/1863Kz-UsjMM3a3kXyY0CVWshVWT6LmTA/view?usp=drive_link" },
  { title: "Estados financieros FE 2025", url: "https://drive.google.com/file/d/1K0kKerIanOosuCjL27WkKc8-pV0EvLXv/view?usp=drive_link" },
  { title: "Certificado cumplimiento requisitos 2025", url: "https://drive.google.com/file/d/1ll8e6VbxFWRpr5L_9O8uJdiOC9q18u81/view?usp=drive_link" },
  { title: "Certificado antecedentes 2025", url: "https://drive.google.com/file/d/12ol6U3ZZCGI8DiczX5kLy6MmvPAs8SW7/view?usp=drive_link" }
];

export default function InformesPage() {
  return (
    <section className="flex flex-col overflow-x-clip">
      <SectionImageComponent
        src="/fondo-registro-web-dian.webp"
        w={740}
        h={431}
        alt="Renovación de equipos"
        title="Registro WEB (Art.364-5 Estatuto Tributario)"
      />

      {/* ───────────── Grilla de informes ───────────── */}
      <div className="mx-auto w-full max-w-layer px-5 py-16 md:px-12 md:py-24">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {informes.map((informe) => (
            <a
              key={informe.url}
              href={informe.url}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="green-ru-div group flex items-start gap-3 rounded-2xl p-5 transition hover:bg-green-ru/30"
            >
              <FileDown
                className="mt-0.5 h-5 w-5 shrink-0 text-[#053215] transition-transform group-hover:translate-y-0.5"
                strokeWidth={2}
              />
              <span className="paragraph-posts-item text-[#053215]">
                {informe.title}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}