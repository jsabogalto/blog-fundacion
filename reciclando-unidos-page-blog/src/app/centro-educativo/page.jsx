import ButtonComponent from "@/components/ButtonComponent";
import SectionImageComponent from "@/components/SectionImageComponent";
import FaqSeo from "@/components/FaqSeo";
import LatestPosts from "@/components/LatestPosts";

export const metadata = {
  // `absolute` controla todo el title y evita la doble marca
  title: {
    absolute: "Computadores Reacondicionados para Centros Educativos | Fundación Reciclando Unidos",
  },
  description:
    "Entregamos computadores reacondicionados a centros educativos, fundaciones y organizaciones de Cundinamarca. Conoce los requisitos y cómo solicitar los equipos.",
  keywords: [
    "computadores reacondicionados",
    "computadores para centros educativos",
    "computadores para fundaciones",
    "solicitar computadores reacondicionados",
  ],
  alternates: { canonical: "/centro-educativo" },
  openGraph: {
    title: "Computadores reacondicionados para centros educativos y fundaciones",
    description:
      "Tecnología asequible para organizaciones, centros educativos y comunidades de Cundinamarca. Conoce cómo solicitar los equipos.",
    type: "website",
    url: "/centro-educativo",
    locale: "es_CO",
    siteName: "Fundación Reciclando Unidos",
    images: [
      {
        url: "/imagepublic.jpg", // 1200×630
        width: 1200,
        height: 630,
        alt: "Computadores reacondicionados para centros educativos - Reciclando Unidos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Computadores reacondicionados para centros educativos | Reciclando Unidos",
    description:
      "Tecnología asequible para organizaciones y centros educativos de Cundinamarca. Aprende cómo solicitarla.",
    images: ["/imagepublic.jpg"],
  },
};
const FAQ_SECTIONS = [{
  id: "educacion",
  eyebrow: "Educación",
  title: "Fundaciones que apoyan la educación de niños y estudiantes",
  intro:
    "Somos una fundación que apoya la educación llevando tecnología a niños y estudiantes con menos oportunidades. Aquí resolvemos las dudas más comunes sobre nuestra labor y cómo puedes ser parte.",
  items: [
    {
      q: "¿Qué fundaciones apoyan la educación en Colombia?",
      a: "En Colombia existen varias fundaciones que apoyan la educación de distintas formas. La Fundación Reciclando Unidos lo hace acercando tecnología a quienes más la necesitan: reparamos y reacondicionamos computadores para entregarlos a niños y estudiantes que no tienen acceso a un equipo propio, ayudándolos a estudiar en igualdad de condiciones.",
    },
    {
      q: "¿Cómo apoya esta fundación la educación de niños y estudiantes?",
      a: "Apoyamos la educación entregando computadores reacondicionados a niños y estudiantes, así como a escuelas y comunidades con pocos recursos. Con un equipo propio, los estudiantes pueden hacer tareas, investigar, conectarse a clases virtuales y aprender habilidades digitales. Es una forma directa y concreta de que una fundación apoye la educación todos los días.",
    },
    {
      q: "¿Qué fundaciones apoyan a niños que no tienen recursos para estudiar?",
      a: "Las fundaciones que apoyan a niños sin recursos buscan cerrar las brechas que les impiden estudiar en igualdad de condiciones. En nuestro caso, ese apoyo se traduce en tecnología: muchos niños no cuentan con un computador en casa, y un equipo donado les abre la puerta a aprender, investigar y desarrollarse. Así apoyamos a niños y estudiantes que de otra forma quedarían rezagados.",
    },
    {
      q: "¿Cómo ayudan a los estudiantes con tecnología?",
      a: "Ayudamos a los estudiantes entregándoles computadores listos para usar, reacondicionados a partir de equipos donados. Tener acceso a un computador mejora su rendimiento académico, les permite aprender programación y herramientas digitales, y los prepara mejor para el estudio superior y el mundo laboral. Es el corazón de nuestra labor como fundación que apoya la educación.",
    },
    {
      q: "¿Por qué son importantes las fundaciones que apoyan la educación?",
      a: "Las fundaciones que apoyan la educación ayudan a reducir la brecha educativa y digital que deja por fuera a miles de niños y estudiantes. Cuando un estudiante recibe las herramientas que necesita, gana oportunidades reales de salir adelante. Su impacto se multiplica: educar a un niño hoy transforma a una familia y a una comunidad entera mañana.",
    },
    {
      q: "¿A qué niños y estudiantes benefician?",
      a: "Beneficiamos a niños y estudiantes de comunidades, escuelas y familias con pocos recursos, que no cuentan con un computador propio para estudiar. Priorizamos los lugares donde la falta de tecnología es una barrera real para aprender, buscando que el apoyo educativo llegue a quienes más lo necesitan.",
    },
    {
      q: "¿Cómo puedo apoyar a una fundación que ayuda a niños y estudiantes?",
      a: "Puedes apoyar nuestra labor donando computadores o equipos electrónicos que ya no uses, difundiendo nuestro trabajo o vinculándote como voluntario o aliado. Cada equipo donado se convierte en una herramienta de estudio para un niño o estudiante. Apoyar a una fundación que ayuda a la educación es más fácil de lo que parece y genera un impacto enorme.",
    },
    {
      q: "¿Las empresas pueden apoyar la educación de niños y estudiantes a través de la fundación?",
      a: "Sí. Las empresas pueden apoyar la educación donando sus equipos en desuso o sumándose como aliados, dentro de sus programas de responsabilidad social. Esos computadores se reacondicionan y llegan a niños y estudiantes que los necesitan, convirtiendo la tecnología que la empresa iba a descartar en oportunidades educativas reales.",
    },
    {
      q: "¿Cómo sé que una fundación que apoya la educación es confiable?",
      a: "Una fundación confiable que apoya la educación muestra con claridad qué hace, a quién beneficia y cómo aprovecha cada donación. En la Fundación Reciclando Unidos puedes conocer nuestro proceso, los equipos que recibimos y el destino que les damos, para que sepas exactamente cómo tu aporte ayuda a niños y estudiantes.",
    },
    {
      q: "¿Qué diferencia a esta fundación de otras que apoyan la educación?",
      a: "Nuestra diferencia está en unir educación y sostenibilidad: apoyamos a niños y estudiantes con tecnología mientras evitamos que computadores útiles terminen como basura electrónica. Así, cada donación cumple un doble propósito: impulsar la educación y cuidar el medio ambiente. Somos una fundación que apoya la educación con un impacto social y ambiental a la vez.",
    },
  ],
}]
export default function SolicitarEquipos() {
  return (
    <div className="flex flex-col overflow-x-clip">
      <SectionImageComponent
        src="/fondo-centro-educativo-page.webp"
        w={1170}
        h={1923}
        alt="Solicitud de computadores reacondicionados"
        title="Prepara a tu organización para el mundo digital"
        subtitle="Computadores reacondicionados para quienes más lo necesitan"
        className="object-[center_60%] md:object-[center_55%]"
      />

      {/* ===== INTRODUCCIÓN (franja teal) ===== */}
      <section className="relative left-1/2 w-screen -translate-x-1/2 bg-teal-700 text-white">
        <div className="mx-auto max-w-[1400px] px-8 py-16 text-center md:px-12">
          <h2 className="subtitle">
            Prepara a tu centro educativo u organización para triunfar en
            nuestro mundo impulsado por la tecnología
          </h2>
          <p className="paragraph mx-auto mt-5 max-w-3xl text-white">
            Proporcionamos computadores de escritorio y portátiles
            reacondicionados a organizaciones sin ánimo de lucro, centros
            educativos y personas de bajos ingresos que necesitan
            acceder a tecnología asequible. Conoce a continuación cómo solicitar
            los equipos reacondicionados.
          </p>
        </div>
      </section>

      {/* ===== A QUIÉN VA DIRIGIDO (franja verde, tarjetas) ===== */}
      <section className="relative left-1/2 w-screen -translate-x-1/2 bg-green-600 text-white">
        <div className="mx-auto max-w-[1400px] px-8 py-16 md:px-12">
          <h2 className="subtitle text-center">¿Quién puede solicitar equipos?</h2>
          <p className="paragraph mx-auto mt-4 max-w-2xl text-center text-white">
            Nuestro programa está pensado para quienes más necesitan acceder a la
            tecnología.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              {
                t: "Organizaciones sin ánimo de lucro",
                d: "Fundaciones y entidades sociales que requieren equipos para cumplir su misión y atender a sus comunidades.",
              },
              {
                t: "Centros educativos",
                d: "Colegios y espacios de formación que buscan dotar sus aulas y fortalecer el aprendizaje digital.",
              },
              {
                t: "Personas de bajos ingresos",
                d: "Estudiantes y familias que necesitan un computador asequible para estudiar, trabajar o capacitarse.",
              },
            ].map((c) => (
              <div key={c.t} className=" bg-white/15 p-6 text-left">
                <h3 className="paragraph font-bold">{c.t}</h3>
                <p className="paragraph mt-2 text-white">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== QUÉ ENTREGAMOS (franja teal, tarjetas) ===== */}
      <section className="relative left-1/2 w-screen -translate-x-1/2 bg-teal-700 text-white">
        <div className="mx-auto max-w-[1400px] px-8 py-16 md:px-12">
          <h2 className="subtitle text-center">¿Qué equipos entregamos?</h2>
          <p className="paragraph mx-auto mt-4 max-w-2xl text-center text-white">
            Computadores reacondicionados, revisados y puestos a punto por
            nuestros practicantes, listos para usarse.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <div className=" bg-white/10 p-6 text-left">
              <h3 className="paragraph font-bold">Computadores de escritorio</h3>
              <p className="paragraph mt-2 text-white">
                Equipos de sobremesa ideales para aulas, salas de cómputo y
                espacios de trabajo fijos.
              </p>
            </div>
            <div className=" bg-white/10 p-6 text-left">
              <h3 className="paragraph font-bold">Computadores portátiles</h3>
              <p className="paragraph mt-2 text-white">
                Equipos portátiles para quienes necesitan estudiar o trabajar
                desde cualquier lugar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CÓMO SOLICITAR (franja verde, pasos) ===== */}
      <section className="relative left-1/2 w-screen -translate-x-1/2 bg-green-600 text-white">
        <div className="mx-auto max-w-[1400px] px-8 py-16 md:px-12">
          <h2 className="subtitle text-center">¿Cómo solicitar los equipos?</h2>
          <p className="paragraph mx-auto mt-4 max-w-2xl text-center text-white">
            Un proceso sencillo, desde tu solicitud hasta la entrega de los
            computadores.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Step
              n="1"
              t="Llena el formulario"
              d="Cuéntanos quién eres, tu organización y cuántos equipos necesitas."
            />
            <Step
              n="2"
              t="Verificación"
              d="Revisamos tu solicitud para confirmar que cumple con los criterios del programa."
            />
            <Step
              n="3"
              t="Asignación"
              d="Según la disponibilidad, asignamos los equipos reacondicionados que mejor se ajusten."
            />
            <Step
              n="4"
              t="Entrega"
              d="Coordinamos contigo la entrega de los computadores, listos para usar."
            />
          </div>
        </div>
      </section>

      {/* ===== POR QUÉ SOLICITAR CON NOSOTROS (franja teal, tarjetas) ===== */}
      <section className="relative left-1/2 w-screen -translate-x-1/2 bg-teal-700 text-white">
        <div className="mx-auto max-w-[1400px] px-8 py-16 md:px-12">
          <h2 className="subtitle text-center">
            ¿Por qué solicitar equipos con Reciclando Unidos?
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                t: "Tecnología reacondicionada",
                d: "Accede a computadores en buen estado, donados para fines academicos.",
              },
              {
                t: "Equipos revisados",
                d: "Cada computador es reacondicionado y probado por nuestro equipo antes de entregarlo.",
              },
              {
                t: "Impacto social y ambiental",
                d: "Al recibir un equipo reutilizado, también ayudas a reducir los residuos electrónicos.",
              },
            ].map((s) => (
              <div key={s.t} className=" bg-white/10 p-6 text-left">
                <h3 className="paragraph font-bold">{s.t}</h3>
                <p className="paragraph mt-2 text-white">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA: SOLICITAR (franja verde) ===== */}
      <section className="relative left-1/2 w-screen -translate-x-1/2 bg-green-600 text-white">
        <div className="mx-auto max-w-3xl px-8 py-20 text-center md:px-12">
          <h2 className="subtitle">Solicita tus computadores reacondicionados</h2>
          <p className="paragraph mx-auto mt-5 max-w-2xl text-white">
            ¿Tu organización, centro educativo o tú necesitan acceder a
            tecnología? Llena el formulario y demos el
            primer paso juntos.
          </p>
          <div className="mt-10 flex justify-center">
            <ButtonComponent
              className="bg-white text-green-700 hover:bg-gray-100"
              text="Solicitar equipos"
              link="/solicitud-computadores"
            />
          </div>
        </div>
      </section>
      <FaqSeo sections={FAQ_SECTIONS} />
    </div>
  );
}

/* ---------- Subcomponente ---------- */
function Step({ n, t, d }) {
  return (
    <div className="flex flex-col items-center text-center">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-xl font-bold">
        {n}
      </span>
      <h3 className="paragraph mt-4 font-bold">{t}</h3>
      <p className="paragraph mt-2 text-white">{d}</p>
    </div>
  );
}