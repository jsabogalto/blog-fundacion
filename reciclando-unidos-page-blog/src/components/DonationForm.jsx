"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Send, Loader2, RotateCcw } from "lucide-react";
import ImageComponent from "./ImageComponent";
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
    <section className="w-full scroll-margin-top md:py-8" id="formulario-donacion">
      <div className="mx-auto flex w-full max-w-layer flex-col gap-2 px-4 md:px-12 lg:flex-row lg:items-start lg:gap-6">

        {/* ===== Imagen: izquierda en desktop, abajo en móvil ===== */}
        <div className="order-2 w-full lg:order-1 lg:w-1/2 lg:sticky lg:top-24 pt-4 md:pt-0">
          <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[3/4] lg:aspect-auto lg:h-[640px]">
            <ImageComponent
              src="/1777396020675.jpeg"
              alt="Dona tu computador y transforma una historia — Reciclando Unidos"
              width={1200}
              height={1500}
              className="absolute inset-0 h-full w-full object-cover object-center"
              priority
            />
          </div>
        </div>

        {/* ===== Columna derecha: tarjeta de encabezado + formulario ===== */}
        <div className="order-1 w-full lg:order-2 lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="relative mb-6 overflow-hidden rounded-3xl bg-gradient-ru p-8 text-white"
          >
            {/* Zona superior: ilustraciones flotantes */}
            <div className="flex justify-center">
              <ImageComponent
                src="/card-componente.png"
                alt="Dona tu computador y transforma una historia — Reciclando Unidos"
                width={500}
                height={300}
                className="h-50 w-200 object-contain drop-shadow-xl"
                priority
              />
            </div>

            {/* Texto: alineado a la izquierda como la referencia */}
            <div className="mt-2">
              <h2 className="text-2xl text-white font-semibold leading-tight">
                ¿Dónde recogemos tu computador? En Bogotá, sin costo
              </h2>
              <p className="mt-2 max-w-md text-lg leading-relaxed text-white/90">
                Nos acercamos hasta tu casa u oficina. Tú solo indica cuándo te viene bien.
              </p>
            </div>
          </motion.div>

          {/* Formulario wizard */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="border border-stone-200 bg-white p-6 sm:p-8 pt-4"
          >
            {/* Barra de progreso tipo "stories" — cuadrada */}
            {!isIntro && !isSuccess && (
              <div className="mb-6">
                <div className="flex gap-1.5">
                  {Array.from({ length: totalMiddleSteps }).map((_, i) => (
                    <div
                      key={i}
                      className="h-[3px] flex-1 overflow-hidden bg-stone-200"
                    >
                      <motion.div
                        className="h-full bg-gradient-ru"
                        initial={false}
                        animate={{ width: i < step ? "100%" : "0%" }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                      />
                    </div>
                  ))}
                </div>
                <p className="mt-2.5 text-[11px] uppercase tracking-[0.18em] text-stone-400">
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
              <p className="mt-4 border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
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
                    className="group inline-flex items-center gap-3 text-sm font-medium text-stone-500 transition hover:text-pine"
                  >
                    <span className="flex h-10 w-10 items-center justify-center border border-stone-300 transition group-hover:border-pine group-hover:text-pine">
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
                    <span className="flex h-11 w-11 items-center justify-center bg-green-ru text-white transition group-enabled:group-hover:bg-pine">
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
                    <span className="flex h-11 w-11 items-center justify-center bg-green-ru text-white transition group-enabled:group-hover:bg-pine">
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
                  <span className="flex h-11 w-11 items-center justify-center bg-green-ru text-white transition group-hover:bg-pine">
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