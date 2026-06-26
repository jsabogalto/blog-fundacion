// Convierte el estado interno del formulario al payload de la donación.
// (Función pura, segura para el cliente — no toca credenciales.)
export function buildPayload(form) {
  const items = Object.keys(form.items)
    .filter((id) => form.items[id])
    .map((id) => ({
      id,
      cantidad: Number(form.cantidades[id]) || 1,
    }));

  return {
    tipo: form.tipo,
    primerNombre: form.primerNombre,
    segundoNombre: form.segundoNombre,
    empresa: form.empresa,
    contactoNombre: form.contactoNombre,
    contactoApellido: form.contactoApellido,
    correo: form.correo,
    telefono: form.telefono,
    items, // los labels se completan antes de enviar
    cargadores: form.cargadores,
    foto: form.foto, // { name, type, dataUrl }
    ciudad: form.ciudad,
    direccion: form.direccion,
    comoNosEncontraste: form.comoNosEncontraste,
  };
}
