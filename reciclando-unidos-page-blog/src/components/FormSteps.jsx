"use client";

import { useRef, useState, useEffect } from "react";

import {
  Laptop,
  Tablet,
  HardDrive,
  Computer,
  Monitor,
  Smartphone,
  Printer,
  Server,
  User,
  Building2,
  Upload,
  ImageIcon,
  X,
  CheckCircle2,
  MapPin,
  ChevronDown
} from "lucide-react";
import { ITEMS, CHARGERS, SOURCES } from "@/lib/formConfig";

/* ───────────────────────── Componentes compartidos ───────────────────────── */

export function StepHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-4">
      {eyebrow && (
        <p className="py-4 text-xs font-semibold uppercase tracking-[0.18em] text-leaf">
          {eyebrow}
        </p>
      )}
      <h2 className="subtitle">{title}</h2>
      {subtitle && <p className="py-2 max-w-md paragraph text-muted">{subtitle}</p>}
    </div>
  );
}

function TextField({ label, value, onChange, ...rest }) {
  return (
    <label className="block">
      <span className="label">{label}</span>
      <input className="field" value={value} onChange={(e) => onChange(e.target.value)} {...rest} />
    </label>
  );
}

function SelectField({ label, value, onChange, options, placeholder }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const selected = options.find((o) => o.value === value);

  // Cerrar al tocar fuera
  useEffect(() => {
    if (!open) return;
    const onDown = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("pointerdown", onDown);
    return () => document.removeEventListener("pointerdown", onDown);
  }, [open]);

  return (
    <div className="block h-[25vh]" ref={ref}>
      <span className="label">{label}</span>

      <div className="relative">
        {/* Disparador */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-haspopup="listbox"
          aria-expanded={open}
          className="flex w-full items-center justify-between rounded-xl border border-line bg-white px-4 py-3 text-left text-ink outline-none transition focus:border-leaf focus:ring-4 focus:ring-leaf/15"
        >
          <span className={selected ? "text-ink" : "text-muted"}>
            {selected ? selected.label : placeholder || "Selecciona una opción"}
          </span>
          <ChevronDown
            size={18}
            className={`shrink-0 text-muted transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>

        {/* Lista DEBAJO, controlada por nosotros */}
        {open && (
          <ul
            role="listbox"
            className="absolute left-0 right-0 top-full z-30 mt-1 max-h-60 overflow-auto rounded-xl border border-line bg-white py-1 shadow-lg"
          >
            {options.map((o) => {
              const active = o.value === value;
              return (
                <li key={o.value}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={active}
                    onClick={() => {
                      onChange(o.value);
                      setOpen(false);
                    }}
                    className={`block w-full px-4 py-2.5 text-left text-sm transition hover:bg-mint ${active ? "bg-leaf/10 font-medium text-pine" : "text-ink"
                      }`}
                  >
                    {o.label}
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

const ITEM_ICONS = {
  computadores: Laptop,
  tablets: Tablet,
  escritorio: HardDrive,
  todo_en_uno: Computer,
  monitores: Monitor,
  celulares: Smartphone,
  impresoras: Printer,
  servidores: Server,
};

/* ───────────────────────────── Paso: Intro ───────────────────────────── */

export function IntroStep() {
  return (
    <div className="text-center">
      <p className="py-6 text-xs font-semibold uppercase tracking-[0.18em] text-leaf">
        Formulario de donacion de equipos
      </p>
      <h2 className="subtitle leading-tight">
        Donar Computadores es Rápido y Gratis: Hazlo en 1 Minuto
      </h2>
    </div>
  );
}

/* ───────────────────────── Paso: Tipo de donación ───────────────────────── */

export function TypeStep({ form, set }) {
  const options = [
    { value: "personal", label: "Personal", desc: "Donas a nombre propio", Icon: User },
    { value: "empresarial", label: "Empresarial", desc: "Donas en nombre de una empresa", Icon: Building2 },
  ];
  return (
    <div>
      <StepHeading
        eyebrow="Donación"
        title="¿Cómo quieres donar?"
        subtitle="Esto nos ayuda a saber a quién contactar después."
      />
      <div className="grid gap-3 sm:grid-cols-2">
        {options.map(({ value, label, desc, Icon }) => {
          const active = form.tipo === value;
          return (
            <button
              key={value}
              type="button"
              onClick={() => set("tipo", value)}
              className={[
                "flex items-start gap-3 rounded-xl border p-4 text-left transition",
                active
                  ? "border-leaf bg-leaf/10 ring-4 ring-leaf/15"
                  : "border-line bg-white hover:border-leaf/60",
              ].join(" ")}
            >
              <span
                className={[
                  "grid h-10 w-10 shrink-0 place-items-center rounded-lg",
                  active ? "bg-pine text-leaf-soft" : "bg-mint text-pine",
                ].join(" ")}
              >
                <Icon size={20} />
              </span>
              <span>
                <span className="block font-display font-semibold text-pine">{label}</span>
                <span className="text-sm text-muted">{desc}</span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ───────────────────────────── Paso: Nombre ───────────────────────────── */

export function NameStep({ form, set }) {
  if (form.tipo === "empresarial") {
    return (
      <div>
        <StepHeading eyebrow="Datos" title="Cuéntanos de la empresa" />
        <div className="grid gap-4">
          <TextField label="Nombre de la empresa" value={form.empresa} onChange={(v) => set("empresa", v)} placeholder="Ej. Tecnología Verde S.A.S." />
          <div className="grid gap-4 sm:grid-cols-2">
            <TextField label="Nombre del contacto" value={form.contactoNombre} onChange={(v) => set("contactoNombre", v)} placeholder="Nombre" />
            <TextField label="Apellido del contacto" value={form.contactoApellido} onChange={(v) => set("contactoApellido", v)} placeholder="Apellido" />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <StepHeading eyebrow="Datos" title="¿Cómo te llamas?" />
      <div className="grid gap-4 sm:grid-cols-2">
        <TextField label="Nombres" value={form.primerNombre} onChange={(v) => set("primerNombre", v)} placeholder="Primer nombre" />
        <TextField label="Apellidos" value={form.segundoNombre} onChange={(v) => set("segundoNombre", v)} placeholder="Segundo nombre (opcional)" />
      </div>
    </div>
  );
}

/* ───────────────────────────── Paso: Contacto ───────────────────────────── */

export function ContactStep({ form, set }) {
  return (
    <div>
      <StepHeading eyebrow="Datos" title="¿Dónde te contactamos?" />
      <div className="grid gap-4">
        <TextField label="Correo electrónico" type="email" value={form.correo} onChange={(v) => set("correo", v)} placeholder="tucorreo@ejemplo.com" />
        <TextField label="Teléfono" type="tel" value={form.telefono} onChange={(v) => set("telefono", v)} placeholder="300 000 0000" />
      </div>
    </div>
  );
}

/* ───────────────────────────── Paso: Equipos ───────────────────────────── */

export function ItemsStep({ form, set }) {
  const toggle = (id) => set("items", { ...form.items, [id]: !form.items[id] });
  return (
    <div>
      <StepHeading
        eyebrow="Equipos"
        title="¿Qué vas a donar?"
        subtitle="Selecciona todos los que apliquen."
      />

      {/* Móvil: tope de altura + scroll interno para no desbordar el panel.
          sm+ : sin límite, comportamiento normal. */}
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 max-h-[32vh] overflow-y-auto overscroll-contain pr-1 sm:max-h-none sm:overflow-visible sm:pr-0">
        {ITEMS.map(({ id, label }) => {
          const Icon = ITEM_ICONS[id];
          const active = !!form.items[id];
          return (
            <button
              key={id}
              type="button"
              onClick={() => toggle(id)}
              className={[
                "flex flex-col items-center gap-2 rounded-xl border p-3 text-center transition sm:p-4",
                active
                  ? "border-leaf bg-leaf/10 ring-4 ring-leaf/15"
                  : "border-line bg-white hover:border-leaf/60",
              ].join(" ")}
            >
              <span
                className={[
                  "grid h-9 w-9 place-items-center rounded-lg sm:h-11 sm:w-11",
                  active ? "bg-pine text-leaf-soft" : "bg-mint text-pine",
                ].join(" ")}
              >
                <Icon size={20} />
              </span>
              <span className="text-xs font-medium leading-tight text-ink">{label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ─────────────────────────── Paso: Cantidades ─────────────────────────── */

export function QuantitiesStep({ form, set }) {
  const selected = ITEMS.filter((it) => form.items[it.id]);
  const setQty = (id, n) =>
    set("cantidades", { ...form.cantidades, [id]: Math.max(1, n) });

  return (
    <div className="">
      <StepHeading eyebrow="Equipos" title="¿Cuántos de cada uno?" />
      <div className="space-y-2.5 ">
        {selected.map(({ id, label }) => {
          const Icon = ITEM_ICONS[id];
          const qty = Number(form.cantidades[id]) || 1;
          return (
            <div key={id} className="flex items-center gap-3 rounded-xl border border-line bg-white p-3">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-mint text-pine">
                <Icon size={18} />
              </span>
              <span className="flex-1 text-sm font-medium text-ink">{label}</span>
              <div className="flex items-center gap-1">
                <button type="button" onClick={() => setQty(id, qty - 1)} className="h-8 w-8 rounded-lg border border-line text-lg leading-none text-pine hover:bg-mint">−</button>
                <input
                  className="h-8 w-12 rounded-lg border border-line text-center text-sm"
                  value={qty}
                  onChange={(e) => setQty(id, parseInt(e.target.value) || 1)}
                  inputMode="numeric"
                />
                <button type="button" onClick={() => setQty(id, qty + 1)} className="h-8 w-8 rounded-lg border border-line text-lg leading-none text-pine hover:bg-mint">+</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ─────────────────────────── Paso: Cargadores ─────────────────────────── */

export function ChargersStep({ form, set }) {
  return (
    <div>
      <StepHeading eyebrow="Equipos" title="¿Incluyen cargadores?" />
      <SelectField
        label="Cargadores"
        value={form.cargadores}
        onChange={(v) => set("cargadores", v)}
        options={CHARGERS}
        placeholder="Selecciona una opción"
      />
    </div>
  );
}

/* ───────────────────────────── Paso: Foto ───────────────────────────── */

export function PhotoStep({ form, set }) {
  const inputRef = useRef(null);

  const onFile = (file) => {
    if (!file) return;
    // ❌ Quita el bloque que hacía: if (file.size > 5 * 1024 * 1024) { ... return; }
    const reader = new FileReader();
    reader.onload = () =>
      set("foto", { name: file.name, type: file.type, dataUrl: reader.result });
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <StepHeading
        eyebrow="Foto"
        title="Súbenos una foto de los equipos"
        subtitle="Una imagen nos ayuda a preparar la recolección."
      />

      {form.foto ? (
        <div className="relative overflow-hidden rounded-xl border border-line bg-white">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={form.foto.dataUrl} alt="Vista previa" className="max-h-64 w-full object-cover" />
          <button
            type="button"
            onClick={() => set("foto", null)}
            className="absolute right-2 top-2 grid h-8 w-8 place-items-center rounded-full bg-white/90 text-pine shadow"
            aria-label="Quitar foto"
          >
            <X size={16} />
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="flex w-full flex-col items-center gap-2 rounded-xl border-2 border-dashed border-line bg-white px-4 py-10 text-center transition hover:border-leaf"
        >
          <span className="grid h-12 w-12 place-items-center rounded-full bg-mint text-pine">
            <Upload size={22} />
          </span>
          <span className="font-medium text-pine">Toca para subir una foto</span>
          <span className="flex items-center gap-1 text-xs text-muted">
            <ImageIcon size={12} /> JPG o PNG · máx. 5 MB
          </span>
        </button>
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => onFile(e.target.files?.[0])}
      />
    </div>
  );
}

/* ───────────────────────────── Paso: Ubicación ───────────────────────────── */

export function LocationStep({ form, set }) {
  return (
    <div>
      <StepHeading eyebrow="Ubicación" title="¿Dónde recogemos?" />
      <div className="grid gap-4">
        <TextField label="Ciudad" value={form.ciudad} onChange={(v) => set("ciudad", v)} placeholder="Ej. Bogotá" />
        <label className="block">
          <span className="label">Dirección</span>
          <div className="relative">
            <MapPin size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
            <input
              className="field pl-9"
              value={form.direccion}
              onChange={(e) => set("direccion", e.target.value)}
              placeholder="Calle, número, barrio…"
            />
          </div>
        </label>
      </div>
    </div>
  );
}

/* ───────────────────────────── Paso: Origen ───────────────────────────── */

export function SourceStep({ form, set }) {
  return (
    <div>
      <StepHeading eyebrow="Ubicación" title="¿Cómo nos encontraste?" />
      <SelectField
        label="Nos encontraste por"
        value={form.comoNosEncontraste}
        onChange={(v) => set("comoNosEncontraste", v)}
        options={SOURCES}
        placeholder="Selecciona una opción"
      />
    </div>
  );
}

/* ───────────────────────────── Paso: Éxito ───────────────────────────── */

export function SuccessStep() {
  return (
    <div className="py-6 text-center">
      <div className="mx-auto mb-5 grid h-20 w-20 place-items-center rounded-full bg-leaf/15">
        <CheckCircle2 size={56} className="text-leaf" strokeWidth={1.75} />
      </div>
      <h2 className="font-display text-2xl font-bold text-pine sm:text-3xl">
        ¡Gracias por tu donación!
      </h2>
      <p className="mx-auto mt-3 max-w-sm text-sm text-muted sm:text-base">
        Recibimos tu información. Muy pronto el equipo de Reciclando Unidos te contactará
        para coordinar la recolección de tus equipos.
      </p>
    </div>
  );
}
