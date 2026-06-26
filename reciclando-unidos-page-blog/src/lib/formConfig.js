// Catálogo de equipos donables
export const ITEMS = [
  { id: "computadores", label: "Computadores portátiles" },
  { id: "tablets", label: "Tablets" },
  { id: "escritorio", label: "Computadores de escritorio" },
  { id: "todo_en_uno", label: "Todo en uno" },
  { id: "monitores", label: "Monitores" },
  { id: "celulares", label: "Celulares" },
  { id: "impresoras", label: "Impresoras" },
  { id: "servidores", label: "Servidores" },
];

export const CHARGERS = [
  { value: "si", label: "Sí, incluyen cargadores" },
  { value: "no", label: "No incluyen cargadores" },
  { value: "algunos", label: "Solo algunos" },
];

export const SOURCES = [
  { value: "google", label: "Google" },
  { value: "facebook", label: "Facebook" },
  { value: "instagram", label: "Instagram" },
  { value: "tiktok", label: "TikTok" },
];

// Orden de los pasos del wizard
export const STEPS = [
  "intro",
  "type",
  "name",
  "contact",
  "items",
  "quantities",
  "chargers",
  "photo",
  "location",
  "source",
  "success",
];

// Fases visibles en la barra de navegación superior
export const PHASES = [
  { id: "tipo", label: "Tipo", steps: ["type"] },
  { id: "datos", label: "Datos", steps: ["name", "contact"] },
  { id: "equipos", label: "Equipos", steps: ["items", "quantities", "chargers"] },
  { id: "foto", label: "Foto", steps: ["photo"] },
  { id: "ubicacion", label: "Ubicación", steps: ["location", "source"] },
  { id: "listo", label: "Listo", steps: ["success"] },
];

// Estado inicial del formulario
export const INITIAL_FORM = {
  tipo: "", // "personal" | "empresarial"
  primerNombre: "",
  segundoNombre: "",
  empresa: "",
  contactoNombre: "",
  contactoApellido: "",
  correo: "",
  telefono: "",
  items: {}, // { computadores: true, ... }
  cantidades: {}, // { computadores: 2, ... }
  cargadores: "",
  foto: null, // { name, type, dataUrl }
  ciudad: "",
  direccion: "",
  comoNosEncontraste: "",
};
