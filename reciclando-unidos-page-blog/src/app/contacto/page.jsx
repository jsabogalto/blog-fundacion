import SectionImageComponent from "@/components/SectionImageComponent"
import { HandHeart, Handshake, Clock, MapPin, MessageCircle, Mail } from "lucide-react";

export const metadata = {
  title: "Contacto",
  description:
    "Contáctanos para donaciones de computadores, residuos electrónicos y colaboraciones con la Fundación Reciclando Unidos. Horario de atención de lunes a viernes, 8:00 a.m. a 5:00 p.m. en Bogotá.",
  alternates: { canonical: "/contacto" },
  openGraph: {
    type: "website",
    title: "Contacto | Reciclando Unidos",
    description:
      "Escríbenos para donar computadores, colaborar o resolver tus dudas. Atención de lunes a viernes, 8 a.m. – 5 p.m.",
    url: "/contacto",
  },
};

// --- Datos editables ---------------------------------------------------------
const EMAIL = "ambiental@fundacionreciclandounidos.com"; // reemplaza por tu correo real
const WHATSAPP = "573135410348";
const DIRECCION = "Bogotá D.C., Carrera 53 #136 - 50"; // reemplaza por la dirección exacta
const MAPS_EMBED =
  "https://www.google.com/maps/embed?pb=!3m2!1ses!2sco!4v1781924014723!5m2!1ses!2sco!6m8!1m7!1sPEsY_v7LPCcnqFX32Tfqdg!2m2!1d4.72410311447866!2d-74.05690889742743!3f145.7900701226273!4f2.7992619903525764!5f0.7820865974627469";


export default function ContactoPage() {
  return (
    <div className="bg-white">
      <SectionImageComponent src={"/contacto-bg.webp"} w={3002} h={2100} alt={"prueba"} title={"Hablemos"} subtitle={"¿Quieres donar computadores, sumar a tu empresa o resolver una duda? Estamos para ayudarte. Escríbenos por el canal que prefieras y te responderemos lo antes posible."} className={"object-[center_40%] md:object-[center_60%]"} />
      <section className="mx-auto max-w-[1400px] px-8 py-16 md:px-12 md:py-24">
        {/* Encabezado */}
        {/* Contenido principal: info + mapa */}
        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Columna izquierda: información de contacto */}
          <div className="flex flex-col gap-6">
            {/* Donaciones */}
            <div className="border border-gray-200 p-6 shadow-sm transition hover:shadow-md py-8">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-green-ru">
                  <HandHeart className="h-6 w-6" strokeWidth={1.8} />
                </span>
                <div className="flex flex-col gap-4">
                  <h2 className="subtitle font-semibold text-gray-900">
                    Donaciones
                  </h2>
                  <p className="mt-4 paragraph text-gray-600">
                    Dona tus computadores y material electrónico. Coordinamos la
                    recogida a domicilio gratuita en Bogotá.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <a
                      href={`https://wa.me/${WHATSAPP}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-md bg-green-ru  px-4 py-2 text-md font-medium text-white"
                    >
                      <MessageCircle className="h-4 w-4" /> Escribir por WhatsApp
                    </a>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-4 py-2 text-md font-medium text-gray-700 transition "
                    >
                      <Mail className="h-4 w-4" /> Enviar correo
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Colaboraciones */}
            <div className="border border-gray-200 p-6 shadow-sm transition hover:shadow-md">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-green-ru">
                  <Handshake className="h-6 w-6" strokeWidth={1.8} />
                </span>
                <div className="flex flex-col gap-4">
                  <h2 className="subtitle font-semibold text-gray-900">
                    Colaboraciones y alianzas
                  </h2>
                  <p className="mt-4 paragraph text-gray-600">
                    ¿Tu empresa quiere vincularse? Construyamos juntos proyectos
                    de impacto social y ambiental.
                  </p>
                  <a
                      href={`mailto:${EMAIL}`}
                      className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-4 py-2 text-md font-medium text-gray-700 transition mt-4 w-45"
                    >
                      <Mail className="h-4 w-4" /> Enviar correo
                    </a>
                </div>
              </div>
            </div>

            {/* Horario + Dirección */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div className=" border border-gray-200 p-6 flex flex-col gap-4">
                <span className="flex rounded-2xl h-11 w-11 items-center justify-center bg-emerald-50 text-green-ru">
                  <Clock className="h-6 w-6" strokeWidth={1.8} />
                </span>
                <h3 className="mt-4 subtitle font-semibold text-gray-900">
                  Horario de atención
                </h3>
                <p className="mt-2 paragraph text-gray-600">
                  Lunes a viernes
                  <br />
                  8:00 a.m. – 5:00 p.m.
                </p>
              </div>

              <div className=" border border-gray-200 p-6 flex flex-col gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-green-ru">
                  <MapPin className="h-6 w-6" strokeWidth={1.8} />
                </span>
                <h3 className="mt-4 subtitle font-semibold text-gray-900">Dirección</h3>
                <p className="mt-2 paragraph text-gray-600">{DIRECCION}</p>
              </div>
            </div>
          </div>

          {/* Columna derecha: mapa */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="overflow-hidden border border-gray-200 shadow-sm">
              <iframe
                title="Ubicación de la Fundación Reciclando Unidos"
                src={MAPS_EMBED}
                className="h-[420px] w-full md:h-[560px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="mt-3 paragraph text-center text-gray-500">
              Encuéntranos en {DIRECCION}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}



