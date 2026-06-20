"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Whatsapp } from "@thesvg/react";
import { Send, X } from "lucide-react";

export default function WhatsappWidget({
  phone = "573135410348", // número con indicativo, sin + ni espacios
  name = "Fundacion Reciclando Unidos",
  welcome = "¡Hola! 👋 ¿En qué podemos ayudarte? Escríbenos y te respondemos enseguida.",
}) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("Hola, quiero donar mi computador 💻");

  const sendToWhatsapp = () => {
    const text = encodeURIComponent(message.trim() || "Hola");
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank", "noopener,noreferrer");
  };

  const onKeyDown = (e) => {
    // Enter envía, Shift+Enter hace salto de línea
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendToWhatsapp();
    }
  };

  return (
    <div className="fixed bottom-24 left-5 z-50 flex flex-col items-start gap-3">
      {/* ===== Ventana de chat ===== */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            transition={{ type: "spring", stiffness: 320, damping: 26 }}
            style={{ transformOrigin: "bottom left" }}
            className="w-[320px] overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/5"
          >
            {/* Cabecera estilo WhatsApp */}
            <div className="flex items-center gap-3 bg-[#075E54] px-4 py-3 text-white">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
                <Whatsapp className="h-7 w-7"/>
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold leading-tight">{name}</p>
                <p className="text-xs text-white/80">En línea</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Cerrar chat"
                className="rounded-full p-1 hover:bg-white/15"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Cuerpo del chat */}
            <div className="bg-[#e5ddd5] px-4 py-5">
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="relative max-w-[85%] rounded-lg rounded-tl-none bg-white px-3 py-2 text-sm text-gray-800 shadow"
              >
                {welcome}
                <span className="mt-1 block text-right text-[10px] text-gray-400">
                  ahora
                </span>
              </motion.div>
            </div>

            {/* Campo para escribir */}
            <div className="flex items-end gap-2 bg-[#f0f0f0] p-3">
              <textarea
                rows={1}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder="Escribe tu mensaje…"
                className="max-h-24 flex-1 resize-none rounded-full bg-white px-4 py-2 text-sm text-gray-800 outline-none ring-1 ring-black/5 focus:ring-2 focus:ring-[#25D366]"
              />
              <button
                onClick={sendToWhatsapp}
                aria-label="Enviar por WhatsApp"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white transition-transform hover:scale-105 active:scale-95"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== Burbuja flotante (siempre visible) ===== */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        whileTap={{ scale: 0.9 }}
        aria-label={open ? "Cerrar chat de WhatsApp" : "Abrir chat de WhatsApp"}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-2xl shadow-green-900/20 "
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="h-7 w-7 text-white" />
            </motion.span>
          ) : (
            <motion.span
              key="logo"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <Whatsapp className="h-8 w-8 [&_path]:fill-white" />
            </motion.span>
          )}
        </AnimatePresence>

        {/* Punto de notificación (opcional) */}
        {!open && (
          <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white ring-2 ring-white">
            1
          </span>
        )}
      </motion.button>
    </div>
  );
}