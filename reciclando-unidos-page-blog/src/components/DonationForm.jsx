"use client";

import ImageComponent from "./ImageComponent";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Send, Loader2, RotateCcw } from "lucide-react";
import NavbarForm from "./NavbarForm";
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

  const variants = {
    enter: (d) => ({ x: d > 0 ? 56 : -56, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d) => ({ x: d > 0 ? -56 : 56, opacity: 0 }),
  };

  return (
    <section
      className="relative flex h-screen flex-col bg-green-ru/5 scroll-mt-30"
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
          <div className="absolute inset-0 bg-linear-to-b from-[#053215]/80 via-[#053215]/10 to-transparent" />
            <div className="absolute inset-0 bg-black/30" />
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center py-8">
        <div className="w-full max-w-xl px-4">

          <div className="relative overflow-hidden border border-gray-100 rounded-3xl bg-white/80 p-6 shadow-card">
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
              <p className="mt-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>
            )}

            {/* Controles */}
            {!isSuccess && (
              <div className="mt-7 flex items-center justify-between gap-3">
                {!isIntro ? (
                  <button
                    type="button"
                    onClick={goBack}
                    className="flex items-center gap-1.5 rounded-xl px-3 py-2.5 text-sm font-medium transition hover:text-pine"
                  >
                    <ArrowLeft size={16} /> Atrás
                  </button>
                ) : (
                  <span />
                )}

                {isSource ? (
                  <button
                    type="button"
                    disabled={!canContinue || sending}
                    onClick={handleSubmit}
                    className="flex items-center gap-2 rounded-xl bg-green-ru px-5 py-3 text-sm font-semibold text-white transition enabled:hover:bg-pine/90 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    {sending ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                    {sending ? "Enviando…" : "Enviar donación"}
                  </button>
                ) : (
                  <button
                    type="button"
                    disabled={!canContinue}
                    onClick={goNext}
                    className="flex items-center gap-2 rounded-xl bg-green-ru px-5 py-3 text-sm font-semibold text-white transition enabled:hover:bg-pine/90 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    {isIntro ? "Comenzar donación" : "Continuar"}
                    <ArrowRight size={16} />
                  </button>
                )}
              </div>
            )}

            {isSuccess && (
              <div className="mt-7 text-center">
                <button
                  type="button"
                  onClick={reset}
                  className="inline-flex items-center gap-2 bg-green-ru rounded-xl border border-line px-4 py-2.5 text-sm font-medium text-white"
                >
                  <RotateCcw size={15} /> Hacer otra donación
                </button>
              </div>
            )}
          </div>

          {/* Indicador de paso (móvil) */}
          {!isSuccess && !isIntro && (
            <p className="mt-3 text-center text-xs text-muted">
              Paso {step} de {STEPS.length - 2}
            </p>
          )}
        </div>
      </div>
      <NavbarForm stepKey={stepKey} />

    </section>
  );
}
