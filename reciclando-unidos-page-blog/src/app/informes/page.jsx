"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import ImageComponent from "@/components/ImageComponent";
import SectionImageComponent from "@/components/SectionImageComponent";

const API = process.env.NEXT_PUBLIC_API_URL;

const PdfViewer = dynamic(() => import("@/components/PdfViewer"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[1000px] w-full items-center justify-center rounded-lg border border-gray-300 bg-gray-100 text-gray-500">
      Cargando visor…
    </div>
  ),
});

export default function EstatutosPage() {
  const [files, setFiles] = useState([]);
  const [status, setStatus] = useState("loading"); // loading | success | error

  // Carga los documentos desde el backend (GET /files)
  useEffect(() => {
    let active = true;
    axios
      .get(`${API}/files`)
      .then((res) => {
        if (!active) return;
        setFiles(Array.isArray(res.data) ? res.data : []);
        setStatus("success");
      })
      .catch((err) => {
        if (!active) return;
        console.error("Error cargando documentos:", err.message);
        setStatus("error");
      });
    return () => {
      active = false;
    };
  }, []);

  const renderDocuments = () => {
    if (status === "loading") {
      return (
        <p className="mx-auto max-w-[1400px] px-8 py-20 text-center text-gray-500 md:px-12">
          Cargando documentos…
        </p>
      );
    }

    if (status === "error") {
      return (
        <p className="mx-auto max-w-[1400px] px-8 py-20 text-center text-red-600 md:px-12">
          No se pudieron cargar los documentos. Intenta de nuevo más tarde.
        </p>
      );
    }

    if (files.length === 0) {
      return (
        <p className="mx-auto max-w-[1400px] px-8 py-20 text-center text-gray-500 md:px-12">
          Aún no hay documentos publicados.
        </p>
      );
    }

    return files.map((doc, index) => {
      const pdfIzquierda = index % 2 !== 0; // impares: visor a la izquierda

      return (
        <div
          key={doc._id ?? index}
          className="mx-auto grid w-full max-w-[1400px] gap-14 px-8 py-16 md:grid-cols-2 md:px-12 border-b border-gray-200"
        >
          {/* Texto */}
          <div
            className={`text-gray-600 ${pdfIzquierda ? "md:order-2" : "md:order-1"
              }`}
          >
            <h2 className="mb-3 text-2xl font-semibold text-gray-800">
              {doc.title}
            </h2>
            <p className="paragraph leading-relaxed">{doc.desc}</p>
          </div>

          {/* Visor solo lectura */}
          <div
            className={`h-full w-full ${pdfIzquierda ? "md:order-1" : "md:order-2"
              }`}
          >
            <PdfViewer file={doc.url} />
          </div>
        </div>
      );
    });
  };

  return (
    <div className="flex flex-col overflow-x-clip">
      {/* HERO */}
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
      {/* LISTA DE DOCUMENTOS (alternando lados) */}
      {renderDocuments()}
    </div>
  );
}
