import SectionImageComponent from "@/components/SectionImageComponent";
import { HandHeart, Handshake, Clock, MapPin, MessageCircle, Mail } from "lucide-react";

export const metadata = {
  title: "Contacto",
  description:
    "Contáctanos para donar computadores, gestionar residuos electrónicos o colaborar con la Fundación Reciclando Unidos en Bogotá. Atención de lunes a viernes, 8 a.m. a 5 p.m.",
  alternates: { canonical: "/contacto" },
  openGraph: {
    type: "website",
    title: "Contacto | Fundación Reciclando Unidos",
    description:
      "Escríbenos para donar computadores, colaborar o resolver tus dudas. Atención de lunes a viernes, 8 a.m. – 5 p.m.",
    url: "/contacto",
    locale: "es_CO",
    siteName: "Fundación Reciclando Unidos",
    images: [{ url: "/imagepublic.jpg", width: 1200, height: 630, alt: "Contacto - Fundación Reciclando Unidos" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto | Fundación Reciclando Unidos",
    description:
      "Escríbenos para donar computadores o colaborar. Atención de lunes a viernes, 8 a.m. – 5 p.m.",
    images: ["/imagepublic.jpg"],
  },
};

// --- Datos editables ---------------------------------------------------------
const EMAIL = "ambiental@fundacionreciclandounidos.com";
const WHATSAPP = "573135410348";
const DIRECCION = "Bogotá D.C., Carrera 53 #136 - 50";
const MAPS_EMBED =
  "https://www.google.com/maps/embed?pb=!3m2!1ses!2sco!4v1781924014723!5m2!1ses!2sco!6m8!1m7!1sPEsY_v7LPCcnqFX32Tfqdg!2m2!1d4.72410311447866!2d-74.05690889742743!3f145.7900701226273!4f2.7992619903525764!5f0.7820865974627469";

export default function ContactoPage() {
  return (
    <section>
      <SectionImageComponent
        src={"https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/product-categories/contact-center/approved/images/9bc12e3d6af9e207f5ca351e04150d07.a058fe8f5366fd51c8128998e283c070cbdaa5e7.jpeg"}
        w={3002}
        h={2100}
        alt={"persona contactando a la fundacioan reciclando unidos"}
        title={"Hablemos"}
        className={"object-[center_40%] md:object-[center_60%]"}
      />

      <div className="mx-auto max-w-layer px-5 py-16 md:px-12 md:py-24">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          {/* ───────── Columna izquierda: información ───────── */}
          <div className="flex flex-col gap-8">
            {/* Donaciones */}
            <div className="green-ru-div rounded-3xl p-8 md:p-10">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-green-ru">
                <HandHeart className="h-6 w-6" strokeWidth={1.8} />
              </span>
              <h2 className="subtitle mt-6">Donaciones</h2>
              <p className="paragraph mt-3 text-gray-600">
                Dona tus computadores y material electrónico. Coordinamos la
                recogida a domicilio gratuita en Bogotá.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={`https://wa.me/${WHATSAPP}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-green-ru px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
                >
                  <MessageCircle className="h-4 w-4" /> Escribir por WhatsApp
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-[#053215] transition hover:bg-white/70"
                >
                  <Mail className="h-4 w-4" /> Enviar correo
                </a>
              </div>
            </div>

            {/* Colaboraciones */}
            <div className="green-ru-div rounded-3xl p-8 md:p-10">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-green-ru">
                <Handshake className="h-6 w-6" strokeWidth={1.8} />
              </span>
              <h2 className="subtitle mt-6">Colaboraciones y alianzas</h2>
              <p className="paragraph mt-3 text-gray-600">
                ¿Tu empresa quiere vincularse? Construyamos juntos proyectos de
                impacto social y ambiental.
              </p>
              <div className="mt-6">
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-[#053215] transition hover:bg-white/70"
                >
                  <Mail className="h-4 w-4" /> Enviar correo
                </a>
              </div>
            </div>

            {/* Horario + Dirección */}
            <div className="grid gap-8 sm:grid-cols-2">
              <div className="green-ru-div rounded-3xl p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-green-ru">
                  <Clock className="h-6 w-6" strokeWidth={1.8} />
                </span>
                <h3 className="subtitle mt-6 text-xl md:text-2xl">Horario de atención</h3>
                <p className="paragraph mt-3 text-gray-600">
                  Lunes a viernes
                  <br />
                  8:00 a.m. – 5:00 p.m.
                </p>
              </div>

              <div className="green-ru-div rounded-3xl p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-green-ru">
                  <MapPin className="h-6 w-6" strokeWidth={1.8} />
                </span>
                <h3 className="subtitle mt-6 text-xl md:text-2xl">Dirección</h3>
                <p className="paragraph mt-3 text-gray-600">{DIRECCION}</p>
              </div>
            </div>
          </div>

          {/* ───────── Columna derecha: mapa ───────── */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="overflow-hidden rounded-3xl">
              <iframe
                title="Ubicación de la Fundación Reciclando Unidos"
                src={MAPS_EMBED}
                className="h-[420px] w-full lg:h-[640px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="paragraph mt-4 text-center text-gray-500">
              Encuéntranos en {DIRECCION}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}