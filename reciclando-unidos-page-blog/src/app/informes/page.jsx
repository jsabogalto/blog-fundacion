// SIN "use client". Server Component: Google ve el HTML completo.
import PdfViewer from "@/components/PdfViewer";
import SectionImageComponent from "@/components/SectionImageComponent";

const API = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL;

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

// Fetch en el servidor → el contenido textual queda en el HTML inicial
async function getFiles() {
  try {
    const res = await fetch(`${API}/files`, { next: { revalidate: 300 } });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export default async function InformesPage() {
  const files = await getFiles();

  return (
    <div className="flex flex-col overflow-x-clip">
       <SectionImageComponent
        src="/fondo-registro-web-dian.webp"
        w={740}
        h={431}
        alt="Renovación de equipos"
        title="Informe de gestion y registro web DIAN"
        subtitle="Actualización Registro WEB (Art.364-5 Estatuto Tributario)
                  Aquí se encuentra los documentos requeridos por la Dian para la actualización de la información en el registro WEB."
        className=""
      />
      {files.length === 0 ? (
        <p className="mx-auto max-w-[1400px] px-8 py-20 text-center text-gray-500 md:px-12">
          Aún no hay documentos publicados.
        </p>
      ) : (
        files.map((doc, index) => (
          <div
            key={doc._id ?? index}
            className="mx-auto grid w-full max-w-[1400px] gap-14 px-8 py-16 md:grid-cols-2 md:px-12 border-b border-gray-200"
          >
            <div className={index % 2 !== 0 ? "md:order-2" : "md:order-1"}>
              {/* h2 + p en el HTML del servidor → Google los lee */}
              <h2 className="mb-3 text-2xl font-semibold text-gray-800">{doc.title}</h2>
              <p className="paragraph leading-relaxed text-gray-600">{doc.desc}</p>
            </div>
            {/* Solo el visor es cliente */}
            <div className={index % 2 !== 0 ? "md:order-1" : "md:order-2"}>
              <PdfViewer file={doc.url} />
            </div>
          </div>
        ))
      )}
    </div>
  );
}