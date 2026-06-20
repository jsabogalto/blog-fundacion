"use client";

import dynamic from "next/dynamic";

// El iframe de Drive vive aquí, aislado del resto de la página
const DriveFrame = dynamic(() => import("./DriveFrame"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[1000px] w-full items-center justify-center rounded-lg border border-gray-300 bg-gray-100 text-gray-500">
      Cargando visor…
    </div>
  ),
});

export default function PdfViewer({ file, className }) {
  return <DriveFrame file={file} className={className} />;
}