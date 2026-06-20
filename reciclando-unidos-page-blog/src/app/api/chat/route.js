export const runtime = "edge";
// respuesta rápida; quítalo si te da problemas
const URL_PAGE = process.env.URL_PAGE;


const SYSTEM_PROMPT = `
Eres el asistente virtual de la Fundación Reciclando Unidos (Cundinamarca, Colombia).
Ayudas con dudas sobre donar computadores, solicitar equipos reacondicionados,
los cursos gratuitos de tecnología y el reciclaje responsable.

La Fundacion Reciclando Unidos Somos una fundación sin ánimo de lucro dedicada a reparar, reacondicionar y donar tecnología a las comunidades con menos oportunidades.
Recibimos todo el material electronico, nos encargamos de la disposicion final y aprovechamiento tecnologico.

Hacemos Domicilio gratuito en Bogota para que no te preocupes por el transporte de tus donaciones.

Reglas:
- Responde SIEMPRE en español, breve y amable (2-4 frases máximo).
- Cuando aplique, redirige con estos enlaces en markdown:
  • Donar computadores: [Donar](/donar-computadores)
  • Solicitar equipos: [Solicitar equipos](/solicitud-computadores)
  • Cursos gratuitos: [Cursos](/renovacion-equipos)
  • Escribir por WhatsApp: [WhatsApp](https://wa.me/573135410348)
- Si no sabes algo o piden hablar con una persona, sugiere el WhatsApp.
- No inventes precios, fechas ni datos que no conoces.
`;

// Llama al proveedor de IA con una API key concreta.
// Lanza un error si hay timeout, fallo de red o respuesta no-OK,
// para que el llamador pueda intentar con la siguiente key.
async function callAI(apiKey, messages) {
  const res = await fetch(`${process.env.AI_BASE_URL}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: process.env.AI_MODEL,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages, // historial enviado por el cliente
      ],
      temperature: 0.4,
      max_tokens: 400,
    }),
    // Si el proveedor no responde a tiempo, abortamos y probamos la otra key.
    signal: AbortSignal.timeout(15000),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`HTTP ${res.status}: ${err}`);
  }

  return res.json();
}

export async function POST(req) {
  try {
    const { messages } = await req.json();

    // Lista de keys en orden de prioridad. filter(Boolean) ignora las que no estén definidas.
    const apiKeys = [
      process.env.AI_API_KEY_1,
      process.env.AI_API_KEY_2,
    ].filter(Boolean);

    let data = null;
    let lastError = null;

    // Intentamos con cada key hasta que una responda correctamente.
    for (let i = 0; i < apiKeys.length; i++) {
      try {
        data = await callAI(apiKeys[i], messages);
        break; // éxito: salimos del bucle
      } catch (err) {
        lastError = err;
        console.error(`Fallo con AI_API_KEY_${i + 1}:`, err.message);
        // seguimos con la siguiente key (si existe)
      }
    }

    // Si ninguna key funcionó, respondemos con el mensaje de respaldo.
    if (!data) {
      console.error("Todas las API keys fallaron:", lastError?.message);
      return Response.json(
        { reply: "Lo siento, ahora no puedo responder. Escríbenos por WhatsApp 🙏" },
        { status: 200 }
      );
    }

    const reply =
      data.choices?.[0]?.message?.content ??
      "No entendí bien, ¿puedes reformular?";

    return Response.json({ reply });
  } catch (e) {
    console.error(e);
    return Response.json(
      { reply: "Hubo un problema. Intenta de nuevo o escríbenos por WhatsApp." },
      { status: 200 }
    );
  }
}