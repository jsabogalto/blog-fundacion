"use server";

// Este archivo corre SIEMPRE del lado servidor (Next.js Server Action).
// Las credenciales viven en .env.local y NUNCA llegan al navegador.
import nodemailer from "nodemailer";
import { buildDonationEmail } from "./emailTemplate";

const FOUNDATION_EMAIL =
  process.env.FOUNDATION_EMAIL || "fnambientalreciclandounidos@gmail.com";

function getTransporter() {
  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    family: 4, // 👈 fuerza IPv4 — evita el ENETUNREACH por IPv6
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });
}
/**
 * Recibe el payload del formulario (incluida la foto en base64),
 * arma el correo y lo envía a la fundación. Devuelve { ok, error? }.
 */
export async function submitDonation(payload) {
  if (!payload?.tipo || !payload?.correo) {
    return { ok: false, error: "Faltan datos obligatorios (tipo y correo)." };
  }

  // Foto → adjunto del correo
  let attachments;
  if (payload.foto?.dataUrl) {
    const base64 = payload.foto.dataUrl.split(",")[1] || "";
    attachments = [
      {
        filename: payload.foto.name || "donacion.jpg",
        content: base64,
        encoding: "base64",
        contentType: payload.foto.type || "image/jpeg",
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
      replyTo: payload.correo, // para responderle al donante
      subject: `Nueva donación (${payload.tipo}) — ${nombreRef || payload.correo}`,
      html: buildDonationEmail(payload),
      attachments,
    });
    return { ok: true };
  } catch (err) {
    console.error("Error enviando donación:", err);
    return { ok: false, error: "No se pudo enviar la donación. Intenta de nuevo." };
  }
}
