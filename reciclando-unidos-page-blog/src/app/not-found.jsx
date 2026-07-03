import Link from "next/link";
import ButtonComponent from "@/components/ButtonComponent";

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4 text-center px-4 bg-black">
      <h1 className="subtitle text-white">404 — Página no encontrada</h1>
      <p className="text-white">La página que buscas no existe o fue movida.</p>
      <ButtonComponent
              className="bg-white text-green-ru"
              text="Volver al inicio"
              link="/"
            />
    </div>
  );
}
