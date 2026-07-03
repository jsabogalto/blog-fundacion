"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Search } from "@deemlol/next-icons";
import { useSearchParams, useRouter } from "next/navigation";

const SearchComponent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const inputRef = useRef(null);

  // Foco automático al abrir + cerrar con Escape + bloquear scroll del fondo
  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();

    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const runSearch = () => {
    const query = inputRef.current?.value.trim() ?? "";
    const params = new URLSearchParams(searchParams.toString());

    if (query) params.set("search", query);
    else params.delete("search");

    router.push(`/posts?${params.toString()}`);
    setOpen(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") runSearch();
  };

  return (
    <>
      {/* Disparador: la lupa */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Abrir búsqueda"
        className="hover:opacity-80 transition-opacity"
      >
        <Search size={22} strokeWidth={2}/>
      </button>

      {/* Overlay a pantalla completa (portal al body) */}
      {open &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] bg-green-ru/10 backdrop-blur-sm"
            onClick={() => setOpen(false)} // click fuera cierra
          >
            {/* Botón cerrar */}
            <button
              onClick={() => setOpen(false)}
              aria-label="Cerrar búsqueda"
              className="absolute top-4 right-4 p-2 text-green-ru hover:opacity-70 transition-opacity"
            >
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>

            {/* Caja de búsqueda (stopPropagation para que el click dentro no cierre) */}
            <div
              className="max-w-[900px] mx-auto mt-16 px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-stretch bg-white rounded-sm overflow-hidden shadow-2xl">
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Buscar..."
                  onKeyDown={handleKeyDown}
                  defaultValue={searchParams.get("search") ?? ""}
                  className="flex-1 px-5 py-4 text-xs md:text-lg text-gray-800 outline-none"
                />
                <button
                  onClick={runSearch}
                  className="px-4 bg-green-ru text-white font-medium hover:bg-green-ru transition-colors text-xs md:text-lg"
                >
                  Buscar
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default SearchComponent;