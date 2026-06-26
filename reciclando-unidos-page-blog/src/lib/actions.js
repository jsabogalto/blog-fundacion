"use server";

import nodemailer from "nodemailer";
import { buildDonationEmail } from "./emailTemplate";

const FOUNDATION_EMAIL =
  process.env.FOUNDATION_EMAIL || "fnambientalreciclandounidos@gmail.com";

function getTransporter() {
  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    family: 4,
    // Subir timeouts: los adjuntos grandes tardan más en enviarse.
    connectionTimeout: 20000,
    greetingTimeout: 20000,
    socketTimeout: 120000,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });
}

// Traduce el error técnico en un mensaje que puedas leer en el celular.
function describeMailError(err) {
  const code = err?.code;
  const rc = err?.responseCode;
  const msg = err?.message || "";

  if (code === "EAUTH" || rc === 535)
    return "Error de autenticación con Gmail (EAUTH). Revisa MAIL_USER y la contraseña de aplicación.";
  if (code === "ETIMEDOUT" || code === "ESOCKET" || code === "ECONNECTION")
    return `No se pudo conectar al correo (${code}). Posible bloqueo de SMTP o red.`;
  if (code === "ENETUNREACH")
    return "Sin salida de red hacia Gmail (ENETUNREACH).";
  if (rc === 552 || /size|large|exceed|too big/i.test(msg))
    return "La imagen es demasiado pesada (Gmail acepta hasta ~25 MB por correo).";
  if (code === "EENVELOPE")
    return "Dirección de correo inválida (EENVELOPE).";
  return `No se pudo enviar la donación (${code || rc || "desconocido"}).`;
}

export async function submitDonation(payload) {
  if (!payload?.tipo || !payload?.correo) {
    return { ok: false, error: "Faltan datos obligatorios (tipo y correo)." };
  }

  // Foto → adjunto, cualquier formato (usa el tipo y nombre originales)
  let attachments;
  if (payload.foto?.dataUrl) {
    const base64 = payload.foto.dataUrl.split(",")[1] || "";
    attachments = [
      {
        filename: payload.foto.name || "donacion",
        content: base64,
        encoding: "base64",
        // Sin forzar JPG: respeta el formato real (png, heic, webp, pdf, etc.)
        contentType: payload.foto.type || "application/octet-stream",
      },
    ];
  }

  const nombreRef =
    payload.tipo === "empresarial"
      ? payload.empresa
      : `${payload.primerNombre || ""} ${payload.segundoNombre || ""}`.trim();

  try {
    await getTransporter().sendMail({
      from: `"Reciclando Unidos" <${process.env.MAIL_USER}>`,
      to: FOUNDATION_EMAIL,
      replyTo: payload.correo,
      subject: `Nueva donación (${payload.tipo}) — ${nombreRef || payload.correo}`,
      html: buildDonationEmail(payload),
      attachments,
    });
    return { ok: true };
  } catch (err) {
    console.error("Error enviando donación:", err);
    return { ok: false, error: describeMailError(err) }; // 👈 mensaje identificable
  }
}