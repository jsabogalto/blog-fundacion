"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Bot, Send, X } from "lucide-react";

export default function AiChatWidget({ name = "Asistente Reciclando Unidos" }) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "¡Hola! 👋 Soy el asistente de la Fundacion Reciclando Unidos. ¿En qué te ayudo?",
    },
  ]);
  const scrollRef = useRef(null);

  // Auto-scroll al último mensaje
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const newMessages = [...messages, { role: "user", content: text }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // enviamos solo los últimos 10 para no inflar el contexto
        body: JSON.stringify({ messages: newMessages.slice(-10) }),
      });
      const data = await res.json();
      setMessages((m) => [...m, { role: "assistant", content: data.reply }]);
    } catch {
      setMessages((m) => [
        ...m,
        { role: "assistant", content: "Ups, fallé. Intenta de nuevo 🙏" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <div className="fixed bottom-5 left-5 z-50 flex flex-col items-start gap-3">
      {/* Ventana de chat */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            transition={{ type: "spring", stiffness: 320, damping: 26 }}
            style={{ transformOrigin: "bottom left" }}
            className="flex h-[460px] w-[340px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/5"
          >
            {/* Cabecera */}
            <div className="flex items-center gap-3 bg-[#25D366] px-4 py-3 text-white">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
                <Bot className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold leading-tight">{name}</p>
                <p className="text-xs text-white/80">Responde al instante</p>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Cerrar" className="rounded-full p-1 hover:bg-white/15">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Mensajes */}
            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto bg-gray-50 p-4">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-3 py-2 text-sm ${m.role === "user"
                      ? "rounded-br-sm bg-[#25D366] text-white"
                      : "rounded-bl-sm bg-white text-gray-800 shadow-sm ring-1 ring-black/5"
                      }`}
                  >
                    {/* el usuario en texto plano; el asistente con enlaces parseados */}
                    {m.role === "assistant" ? renderContent(m.content) : m.content}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start">
                  <div className="rounded-2xl rounded-bl-sm bg-white px-3 py-2 shadow-sm ring-1 ring-black/5">
                    <span className="flex gap-1">
                      <Dot delay={0} /><Dot delay={0.15} /><Dot delay={0.3} />
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="flex items-end gap-2 border-t border-gray-100 bg-white p-3">
              <textarea
                rows={1}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder="Escribe tu pregunta…"
                className="max-h-24 flex-1 resize-none rounded-full bg-gray-100 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-[#25D366]"
              />
              <button
                onClick={send}
                disabled={loading}
                aria-label="Enviar"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white transition hover:scale-105 active:scale-95 disabled:opacity-50"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Burbuja flotante */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        whileTap={{ scale: 0.9 }}
        aria-label={open ? "Cerrar asistente" : "Abrir asistente"}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl"
      >
        {open ? <X className="h-7 w-7" /> : <Bot className="h-7 w-7" />}
      </motion.button>
    </div>
  );
}

function Dot({ delay }) {
  return (
    <motion.span
      className="h-2 w-2 rounded-full bg-gray-400"
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 0.6, repeat: Infinity, delay }}
    />
  );
}

function renderContent(text) {
  // captura [texto](url)  o  http(s)://...  o  rutas internas /algo
  const regex = /\[([^\]]+)\]\(([^)]+)\)|((?:https?:\/\/|\/)[^\s)]+)/g;
  const parts = [];
  let lastIndex = 0;
  let match;
  let key = 0;

  while ((match = regex.exec(text)) !== null) {
    // texto antes del enlace
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    const label = match[1] || match[3]; // texto del markdown o la URL cruda
    const url = match[2] || match[3]; // destino
    const external = url.startsWith("http");

    parts.push(
      <span key={`lnk-${key++}`} className="block py-1">
        <a
          href={url}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="font-semibold text-[#25D366] underline underline-offset-2 hover:text-[#1da851]"
        >
          {label}
        </a>
      </span >
    );

    lastIndex = regex.lastIndex;
  }

  // texto restante después del último enlace
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
}