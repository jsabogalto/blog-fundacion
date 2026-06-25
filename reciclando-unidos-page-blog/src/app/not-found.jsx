import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center px-4">
      <h1 className="text-4xl font-bold text-gray-900">404 — Página no encontrada</h1>
      <p className="text-gray-600">La página que buscas no existe o fue movida.</p>
      <Link href="/" className="mt-4 rounded-lg bg-emerald-600 px-6 py-3 text-white font-semibold hover:bg-emerald-700">
        Volver al inicio
      </Link>
    </div>
  );
}
