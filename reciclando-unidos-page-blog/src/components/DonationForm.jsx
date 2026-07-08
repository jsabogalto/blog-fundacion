"use client";

import ImageComponent from "./ImageComponent";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Send, Loader2, RotateCcw } from "lucide-react";
import NavbarForm from "./NavbarForm";
import SpanTextComponent from "./SpanTextComponent";
import {
  IntroStep,
  TypeStep,
  NameStep,
  ContactStep,
  ItemsStep,
  QuantitiesStep,
  ChargersStep,
  PhotoStep,
  LocationStep,
  SourceStep,
  SuccessStep,
} from "./FormSteps";
import { STEPS, INITIAL_FORM, ITEMS } from "@/lib/formConfig";
import { buildPayload } from "@/lib/api";
import { submitDonation } from "@/lib/actions";

const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export default function DonationForm() {
  const [step, setStep] = useState(0); // índice en STEPS
  const [dir, setDir] = useState(1); // 1 = adelante, -1 = atrás
  const [form, setForm] = useState(INITIAL_FORM);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const stepKey = STEPS[step];
  const set = (key, value) => setForm((f) => ({ ...f, [key]: value }));

  // ¿El paso actual permite continuar?
  const canContinue = useMemo(() => {
    switch (stepKey) {
      case "type":
        return !!form.tipo;
      case "name":
        return form.tipo === "empresarial"
          ? form.empresa.trim() && form.contactoNombre.trim() && form.contactoApellido.trim()
          : form.primerNombre.trim();
      case "contact":
        return isEmail(form.correo) && form.telefono.trim();
      case "items":
        return Object.values(form.items).some(Boolean);
      case "chargers":
        return !!form.cargadores;
      case "location":
        return form.ciudad.trim() && form.direccion.trim();
      case "source":
        return !!form.comoNosEncontraste;
      default:
        return true; // intro, quantities, photo (opcional)
    }
  }, [stepKey, form]);

  const goNext = () => {
    setDir(1);
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
  };
  const goBack = () => {
    setError("");
    setDir(-1);
    setStep((s) => Math.max(s - 1, 0));
  };

  const reset = () => {
    setForm(INITIAL_FORM);
    setDir(-1);
    setStep(0);
  };

  const handleSubmit = async () => {
    setError("");
    setSending(true);
    try {
      const payload = buildPayload(form);
      // Añadir las etiquetas legibles de cada equipo
      payload.items = payload.items.map((it) => ({
        ...it,
        label: ITEMS.find((x) => x.id === it.id)?.label || it.id,
      }));
      await submitDonation(payload).then((res) => {
        if (!res?.ok) throw new Error(res?.error || "No se pudo enviar la donación.");
      });
      setDir(1);
      setStep(STEPS.indexOf("success"));
    } catch (e) {
      setError(e.message || "Algo salió mal. Intenta de nuevo.");
    } finally {
      setSending(false);
    }
  };

  const renderStep = () => {
    switch (stepKey) {
      case "intro": return <IntroStep />;
      case "type": return <TypeStep form={form} set={set} />;
      case "name": return <NameStep form={form} set={set} />;
      case "contact": return <ContactStep form={form} set={set} />;
      case "items": return <ItemsStep form={form} set={set} />;
      case "quantities": return <QuantitiesStep form={form} set={set} />;
      case "chargers": return <ChargersStep form={form} set={set} />;
      case "photo": return <PhotoStep form={form} set={set} />;
      case "location": return <LocationStep form={form} set={set} />;
      case "source": return <SourceStep form={form} set={set} />;
      case "success": return <SuccessStep />;
      default: return null;
    }
  };

  const isIntro = stepKey === "intro";
  const isSource = stepKey === "source";
  const isSuccess = stepKey === "success";
  const totalMiddleSteps = STEPS.length - 2; // excluye intro y success

  const variants = {
    enter: (d) => ({ x: d > 0 ? 56 : -56, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d) => ({ x: d > 0 ? -56 : 56, opacity: 0 }),
  };

  return (
    <section
      className="relative flex h-screen flex-col scroll-margin-top"
      id="formulario-donacion"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="sticky top-0 h-screen w-full">
          <ImageComponent
            src="/apoya-talento-ru_pWfC-MFol.webp"
            alt="Solicitar computador — Reciclando Unidos"
            width={4032}
            height={3024}
            className="absolute inset-0 h-full w-full object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-black via-[#053215]/20 to-transparent" />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      </div>

      {/* Eyebrow + heading estilo Aramco sobre la imagen */}
      <div className="relative z-10 mx-auto hidden w-full max-w-layer px-8 pt-10 md:block lg:px-16">
        <SpanTextComponent title={"Dona tu computador y transforma una historia"} textColor={"text-white"}/>
      </div>

      <div className="relative z-10 flex flex-1 items-center justify-center py-8">
        <div className="w-full max-w-xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="relative overflow-hidden rounded-[28px] border border-white/50 bg-white/90 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-7"
          >
            {/* Barra de progreso tipo "stories" */}
            {!isIntro && !isSuccess && (
              <div className="mb-6">
                <div className="flex gap-1.5">
                  {Array.from({ length: totalMiddleSteps }).map((_, i) => (
                    <div
                      key={i}
                      className="h-[3px] flex-1 overflow-hidden rounded-full bg-gray-200"
                    >
                      <motion.div
                        className="h-full bg-gradient-to-r bg-gradient-ru"
                        initial={false}
                        animate={{ width: i < step ? "100%" : "0%" }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                      />
                    </div>
                  ))}
                </div>
                <p className="mt-2.5 text-[11px] uppercase tracking-[0.18em] text-gray-400">
                  Paso {step} de {totalMiddleSteps}
                </p>
              </div>
            )}

            {/* Lienzo animado: cada paso entra/sale en horizontal */}
            <AnimatePresence mode="wait" custom={dir} initial={false}>
              <motion.div
                key={stepKey}
                custom={dir}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              >
                {renderStep()}
              </motion.div>
            </AnimatePresence>

            {error && (
              <p className="mt-4 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-700">
                {error}
              </p>
            )}

            {/* Controles */}
            {!isSuccess && (
              <div className="mt-7 flex items-center justify-between gap-3">
                {!isIntro ? (
                  <button
                    type="button"
                    onClick={goBack}
                    aria-label="Paso anterior"
                    className="group inline-flex items-center gap-3 text-sm font-medium text-gray-500 transition hover:text-pine"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 transition group-hover:border-pine group-hover:text-pine">
                      <ArrowLeft size={16} />
                    </span>
                    <span className="hidden uppercase tracking-[0.15em] text-xs sm:inline">
                      Atrás
                    </span>
                  </button>
                ) : (
                  <span />
                )}

                {isSource ? (
                  <button
                    type="button"
                    disabled={!canContinue || sending}
                    onClick={handleSubmit}
                    className="group inline-flex items-center gap-3 text-sm font-medium text-ink transition disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <span className="uppercase tracking-[0.15em] text-xs sm:text-sm">
                      {sending ? "Enviando…" : "Enviar donación"}
                    </span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-green-ru text-white transition group-enabled:group-hover:bg-pine">
                      {sending ? (
                        <Loader2 size={16} className="animate-spin" />
                      ) : (
                        <Send size={16} />
                      )}
                    </span>
                  </button>
                ) : (
                  <button
                    type="button"
                    disabled={!canContinue}
                    onClick={goNext}
                    className="group inline-flex items-center gap-3 text-sm font-medium text-ink transition disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <span className="uppercase tracking-[0.15em] text-xs sm:text-sm">
                      {isIntro ? "Comenzar donación" : "Continuar"}
                    </span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-green-ru text-white transition group-enabled:group-hover:bg-pine">
                      <ArrowRight size={16} />
                    </span>
                  </button>
                )}
              </div>
            )}

            {isSuccess && (
              <div className="mt-7 flex justify-center">
                <button
                  type="button"
                  onClick={reset}
                  className="group inline-flex items-center gap-3 text-sm font-medium text-ink transition hover:text-pine"
                >
                  <span className="uppercase tracking-[0.15em] text-xs sm:text-sm">
                    Hacer otra donación
                  </span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-green-ru text-white transition group-hover:bg-pine">
                    <RotateCcw size={15} />
                  </span>
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}