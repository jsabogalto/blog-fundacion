// Construye el HTML del correo que recibe la fundación.
const SOURCE_LABELS = {
  google: "Google",
  facebook: "Facebook",
  instagram: "Instagram",
  tiktok: "TikTok",
};

const CHARGER_LABELS = {
  si: "Sí, incluye cargadores",
  no: "No incluye cargadores",
  algunos: "Solo algunos",
};

export function buildDonationEmail(d) {
  const esEmpresa = d.tipo === "empresarial";

  const donante = esEmpresa
    ? `
      <tr><td style="${TD_KEY}">Empresa</td><td style="${TD_VAL}">${esc(d.empresa)}</td></tr>
      <tr><td style="${TD_KEY}">Contacto</td><td style="${TD_VAL}">${esc(d.contactoNombre)} ${esc(d.contactoApellido)}</td></tr>`
    : `
      <tr><td style="${TD_KEY}">Nombre</td><td style="${TD_VAL}">${esc(d.primerNombre)} ${esc(d.segundoNombre)}</td></tr>`;

  const itemsRows =
    (d.items || [])
      .map(
        (it) =>
          `<tr><td style="${TD_VAL}">${esc(it.label)}</td><td style="${TD_VAL};text-align:right">${Number(it.cantidad) || 1}</td></tr>`
      )
      .join("") ||
    `<tr><td style="${TD_VAL}" colspan="2">Sin equipos seleccionados</td></tr>`;

  return `
  <div style="font-family:Inter,Segoe UI,Arial,sans-serif;background:#f4f7f2;padding:24px;color:#15241c">
    <div style="max-width:600px;margin:0 auto;background:#ffffff;border:1px solid #c9dccf;border-radius:16px;overflow:hidden">
      <div style="background:#14492f;padding:20px 24px">
        <p style="margin:0;color:#9ff0c4;font-size:12px;letter-spacing:2px;text-transform:uppercase">Reciclando Unidos</p>
        <h1 style="margin:6px 0 0;color:#ffffff;font-size:20px">Nueva donación · ${esEmpresa ? "Empresarial" : "Personal"}</h1>
      </div>

      <div style="padding:24px">
        <h2 style="${H2}">Donante</h2>
        <table style="${TABLE}">${donante}
          <tr><td style="${TD_KEY}">Correo</td><td style="${TD_VAL}">${esc(d.correo)}</td></tr>
          <tr><td style="${TD_KEY}">Teléfono</td><td style="${TD_VAL}">${esc(d.telefono)}</td></tr>
        </table>

        <h2 style="${H2}">Equipos a donar</h2>
        <table style="${TABLE}">
          <tr><th style="${TH}">Equipo</th><th style="${TH};text-align:right">Cantidad</th></tr>
          ${itemsRows}
        </table>

        <h2 style="${H2}">Detalles</h2>
        <table style="${TABLE}">
          <tr><td style="${TD_KEY}">Cargadores</td><td style="${TD_VAL}">${CHARGER_LABELS[d.cargadores] || "—"}</td></tr>
          <tr><td style="${TD_KEY}">Ciudad</td><td style="${TD_VAL}">${esc(d.ciudad)}</td></tr>
          <tr><td style="${TD_KEY}">Dirección</td><td style="${TD_VAL}">${esc(d.direccion)}</td></tr>
          <tr><td style="${TD_KEY}">Nos encontró por</td><td style="${TD_VAL}">${SOURCE_LABELS[d.comoNosEncontraste] || "—"}</td></tr>
        </table>

        ${
          d.fotoUrl
            ? `<p style="margin-top:16px"><a href="${d.fotoUrl}" style="color:#14492f">Ver foto en la nube ↗</a></p>`
            : `<p style="margin-top:16px;color:#5a6b60;font-size:13px">📎 La foto va adjunta a este correo.</p>`
        }
      </div>

      <div style="background:#f4f7f2;padding:16px 24px;border-top:1px solid #c9dccf">
        <p style="margin:0;color:#5a6b60;font-size:12px">Enviado automáticamente desde el formulario de donaciones.</p>
      </div>
    </div>
  </div>`;
}

function esc(v) {
  if (v == null) return "—";
  return String(v).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
}

const TABLE = "width:100%;border-collapse:collapse;margin:8px 0 4px;font-size:14px";
const TH = "text-align:left;padding:8px 10px;background:#eef5ef;color:#14492f;font-size:12px;text-transform:uppercase;letter-spacing:.5px";
const TD_KEY = "padding:8px 10px;border-top:1px solid #eef0ec;color:#5a6b60;width:38%;vertical-align:top";
const TD_VAL = "padding:8px 10px;border-top:1px solid #eef0ec;color:#15241c";
const H2 = "font-size:13px;text-transform:uppercase;letter-spacing:1px;color:#2f9e67;margin:22px 0 2px";
