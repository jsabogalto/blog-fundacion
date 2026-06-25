import ButtonComponent from "@/components/ButtonComponent";
import SectionImageComponent from "@/components/SectionImageComponent";
import FaqSeo from "@/components/FaqSeo";
import LatestPosts from "@/components/LatestPosts";

export const metadata = {
  // `absolute` controla todo el title y evita la doble marca.
  // Lidera con la intención que SÍ se busca.
  title: {
    absolute: "Cursos Gratuitos de Tecnología en Bogotá | Fundación Reciclando Unidos",
  },
  description:
    "Cursos gratuitos de tecnología para la comunidad y prácticas para estudiantes que reacondicionan los computadores donados. Conoce el programa y participa.",
  keywords: [
    "cursos gratuitos de tecnología Bogotá",
    "cursos para reparar computadores",
    "prácticas reacondicionamiento de computadores",
    "voluntariado tecnológico Bogotá",
  ],
  alternates: { canonical: "/renovacion-equipos" },
  openGraph: {
    title: "Cursos gratuitos de tecnología y prácticas en Bogotá",
    description:
      "Estudiantes y practicantes ganan experiencia reacondicionando donaciones, y la comunidad accede a cursos gratuitos de tecnología.",
    type: "website",
    url: "/renovacion-equipos",
    locale: "es_CO",
    siteName: "Fundación Reciclando Unidos",
    images: [
      {
        url: "/imagepublic.jpg", // 1200×630
        width: 1200,
        height: 630,
        alt: "Cursos gratuitos de tecnología en Bogotá - Reciclando Unidos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cursos gratuitos de tecnología en Bogotá | Reciclando Unidos",
    description:
      "Cursos gratuitos para la comunidad y prácticas para estudiantes que reacondicionan computadores donados.",
    images: ["/imagepublic.jpg"],
  },
};
const FAQ_SECTIONS = [{
  id: "cursos",
  eyebrow: "Cursos y apoyo tecnológico",
  title: "Cursos de tecnología para niños, estudiantes y adultos mayores",
  intro:
    "Impulsamos cursos de tecnología para todas las edades: desde programación y ofimática para estudiantes hasta habilidades digitales para adultos mayores. Necesitamos apoyo tecnológico para llegar a más personas, y aquí te contamos cómo.",
  items: [
    {
      q: "¿Qué cursos de tecnología ofrece la fundación?",
      a: "Ofrecemos cursos de tecnología pensados para distintas edades y niveles: programación básica, manejo de herramientas ofimáticas, arquitectura de computadores y habilidades digitales para adultos mayores. La idea es que niños, estudiantes y personas mayores aprovechen la tecnología para estudiar, trabajar y comunicarse en este mundo cada vez más digital.",
    },
    {
      q: "¿Tienen cursos de programación básica para niños y estudiantes?",
      a: "Sí. Nuestros cursos de programación básica introducen a niños y estudiantes en la lógica y el pensamiento computacional de forma práctica y cercana. Aprenden a crear sus primeros programas y a entender cómo funciona la tecnología que usan a diario, una habilidad muy valiosa para su futuro académico y laboral.",
    },
    {
      q: "¿Enseñan manejo de herramientas ofimáticas?",
      a: "Sí. En los cursos de ofimática los participantes aprenden a usar procesadores de texto, hojas de cálculo, presentaciones y correo electrónico. Son herramientas indispensables para estudiar, buscar empleo y desenvolverse en cualquier trabajo, por lo que este curso es uno de los más útiles para estudiantes y adultos.",
    },
    {
      q: "¿Qué es el curso de arquitectura de computadores y para quién es?",
      a: "El curso de arquitectura de computadores enseña cómo está formado un computador por dentro: sus componentes, cómo funcionan y cómo se ensamblan. Es ideal para estudiantes y jóvenes interesados en la tecnología, y conecta muy bien con nuestra labor de reparar y reacondicionar equipos, dándoles conocimientos técnicos aplicables en la vida real.",
    },
    {
      q: "¿Dictan cursos de tecnología para adultos mayores?",
      a: "Sí, y es uno de nuestros programas más importantes. Los cursos de tecnología para adultos mayores están diseñados con un ritmo tranquilo y un lenguaje sencillo, para que aprendan sin sentirse abrumados. Buscamos que ninguna persona quede excluida del mundo digital por su edad.",
    },
    {
      q: "¿Qué habilidades digitales aprenden los adultos mayores?",
      a: "Los adultos mayores aprenden habilidades digitales prácticas para su día a día: enviar y recibir correos, usar el celular y el computador con confianza, pedir citas médicas en línea, hacer videollamadas y comunicarse con su familia. Son herramientas que les devuelven autonomía y los conectan con este nuevo mundo digital.",
    },
    {
      q: "¿Los cursos de tecnología tienen algún costo?",
      a: "Trabajamos para que nuestros cursos lleguen sin costo a las comunidades, niños, estudiantes y adultos mayores que más lo necesitan. Esto solo es posible gracias al apoyo de donantes, aliados y voluntarios que aportan equipos, recursos y tiempo para sostener la formación.",
    },
    {
      q: "¿Cómo puedo apoyar con tecnología estos cursos?",
      a: "Puedes brindar apoyo tecnológico donando computadores, portátiles o componentes que ya no uses; cada equipo nos permite habilitar más cupos en los cursos. También puedes aportar como aliado, patrocinador o voluntario. Tu apoyo tecnológico se transforma directamente en oportunidades de aprendizaje para más personas.",
    },
    {
      q: "¿Qué necesita la fundación para impulsar más cursos de tecnología?",
      a: "Para impulsar más cursos necesitamos apoyo tecnológico constante: computadores y equipos para las aulas, herramientas, conectividad y aliados que crean en el proyecto. Cada donación de tecnología amplía nuestra capacidad de formar a más niños, estudiantes y adultos mayores en habilidades digitales.",
    },
    {
      q: "¿Cómo me inscribo o inscribo a un familiar en los cursos?",
      a: "Inscribirte o inscribir a un familiar es muy sencillo: contáctanos y te contamos los cursos disponibles, los horarios y los requisitos. Tenemos opciones para niños, estudiantes y adultos mayores, así que hay un espacio de aprendizaje para cada persona que quiera dar el paso al mundo digital.",
    },
  ],
}]
export default function RenovacionEquipos() {
  return (
    <div className="flex flex-col overflow-x-clip">
      <SectionImageComponent
        src="/prolonga-la-vida.webp"
        w={1170}
        h={1923}
        alt="Renovación de equipos"
        title="Renovacion de equipos y cursos"
        subtitle="Apoya a practicantes y estudiantes del sector tecnológico"
        className="object-[center_60%] md:object-[center_55%]"
      />

      {/* ===== CURSOS GRATUITOS (franja teal, tarjetas) ===== */}
      <section className="relative left-1/2 w-screen -translate-x-1/2 bg-teal-700 text-white">
        <div className="mx-auto max-w-[1400px] px-8 py-16 md:px-12">
          <h2 className="subtitle text-center">Cursos gratuitos de tecnología</h2>
          <p className="paragraph mx-auto mt-4 max-w-2xl text-center text-white">
            Formación sin costo, pensada para quienes dan sus primeros pasos en
            la tecnología, sin importar la edad ni la experiencia previa.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                t: "Manejo básico del computador",
                d: "Encender, navegar, usar el teclado y el mouse, y perder el miedo a la tecnología desde cero.",
              },
              {
                t: "Internet y comunicación",
                d: "Correo electrónico, videollamadas y uso seguro de redes para mantenerse conectado con la familia.",
              },
              {
                t: "Herramientas de ofimática",
                d: "Procesador de texto, hojas de cálculo y presentaciones para el estudio y el trabajo.",
              },
              {
                t: "Trámites y servicios en línea",
                d: "Cómo hacer trámites, citas y consultas digitales de forma autónoma y segura.",
              },
              {
                t: "Introducción a la programación",
                d: "Primer acercamiento al pensamiento lógico y al código para jóvenes curiosos.",
              },
              {
                t: "Seguridad digital",
                d: "Identificar fraudes, proteger contraseñas y cuidar la información personal en línea.",
              },
            ].map((c) => (
              <div key={c.t} className="bg-white/15 p-6 text-left">
                <h3 className="paragraph font-bold">{c.t}</h3>
                <p className="paragraph mt-2 text-white">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== A QUIÉN VAN DIRIGIDOS (franja verde) ===== */}
      <section className="relative left-1/2 w-screen -translate-x-1/2 bg-green-600 text-white">
        <div className="mx-auto max-w-[1400px] px-8 py-16 md:px-12">
          <h2 className="subtitle text-center">¿Para quién son nuestros cursos?</h2>
          <p className="paragraph mx-auto mt-4 max-w-2xl text-center text-white">
            La tecnología es para todos. Por eso llevamos nuestros cursos a
            quienes más lo necesitan.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center text-center">
              <h3 className="paragraph font-bold">Comunidad</h3>
              <p className="paragraph mt-2 text-white">
                Cualquier persona del barrio o la ciudad que quiera aprender a
                usar la tecnología en su día a día.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <h3 className="paragraph font-bold">Fundaciones</h3>
              <p className="paragraph mt-2 text-white">
                Llevamos formación a otras organizaciones sociales y a las
                personas que acompañan.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <h3 className="paragraph font-bold">Colegios</h3>
              <p className="paragraph mt-2 text-white">
                Talleres para estudiantes que fortalecen sus habilidades
                digitales desde temprano.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <h3 className="paragraph font-bold">Adultos mayores</h3>
              <p className="paragraph mt-2 text-white">
                Acompañamos a las personas de edad avanzada a integrarse al mundo
                digital a su ritmo y sin presiones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA: SOLICITAR CURSO (franja teal) ===== */}
      <section className="relative left-1/2 w-screen -translate-x-1/2 bg-teal-700 text-white">
        <div className="mx-auto max-w-3xl px-8 py-20 text-center md:px-12">
          <h2 className="subtitle">Solicita un curso gratuito para tu comunidad</h2>
          <p className="paragraph mx-auto mt-5 max-w-2xl text-white">
            ¿Representas un colegio, una fundación, un grupo de adultos mayores o
            simplemente quieres aprender? Cuéntanos qué necesitas y coordinamos
            un curso gratuito contigo.
          </p>
          <div className="mt-10 flex justify-center">
            <ButtonComponent
              className="bg-white text-teal-700 hover:bg-gray-100"
              text="Solicitar un curso gratuito"
              link="https://docs.google.com/forms/d/e/1FAIpQLSfpm26_1r7DlW0Vzg17Lju2iOeT5nbPRFbqOlTx0a-VcNI3QA/viewform?usp=publish-editor"
            />
          </div>
        </div>
      </section>

      {/* ===== EL PROGRAMA DE REACONDICIONAMIENTO (franja verde) ===== */}
      <section className="relative left-1/2 w-screen -translate-x-1/2 bg-green-600 text-white">
        <div className="mx-auto max-w-[1400px] px-8 py-16 text-center md:px-12">
          <h2 className="subtitle">
            Reacondicionamos las donaciones con practicantes y estudiantes
          </h2>
          <p className="paragraph mx-auto mt-5 max-w-3xl text-white">
            Los computadores que recibimos en donación son reparados y puestos a
            punto por practicantes y estudiantes del sector tecnológico,
            supervisados por nuestro equipo. No es un servicio de reparación al
            público: es un programa de formación, donde cada equipo donado se
            convierte en una oportunidad para que un joven gane experiencia real
            antes de dar el salto al mundo laboral.
          </p>
        </div>
      </section>

      {/* ===== BENEFICIOS DEL PROGRAMA (franja teal, tarjetas) ===== */}
      <section className="relative left-1/2 w-screen -translate-x-1/2 bg-teal-700 text-white">
        <div className="mx-auto max-w-[1400px] px-8 py-16 md:px-12">
          <h2 className="subtitle text-center">Lo que logra este programa</h2>
          <p className="paragraph mx-auto mt-4 max-w-2xl text-center text-white">
            Una sola donación genera impacto en varias direcciones a la vez.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                t: "Experiencia real para practicantes",
                d: "Los estudiantes practican reparando equipos de verdad, no ejercicios de aula, y construyen su primer recorrido profesional.",
              },
              {
                t: "Primer paso al sector tecnológico",
                d: "Esta práctica se convierte en su puerta de entrada a empleos en tecnología o en educación.",
              },
              {
                t: "Equipos listos para donar",
                d: "Cada computador reacondicionado vuelve a la vida para llegar a un estudiante, un colegio o una familia.",
              },
              {
                t: "Menos residuos electrónicos",
                d: "Recuperar un equipo evita que termine como basura electrónica y cuida el medio ambiente.",
              },
              {
                t: "Habilidades técnicas y humanas",
                d: "Además de reparar, los practicantes aprenden trabajo en equipo, responsabilidad y servicio a la comunidad.",
              },
              {
                t: "Comunidad fortalecida",
                d: "El conocimiento se queda en el barrio: quienes se forman hoy enseñan y reparan mañana.",
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

      {/* ===== CÓMO FUNCIONA (franja verde) ===== */}
      <section className="relative left-1/2 w-screen -translate-x-1/2 bg-green-600 text-white">
        <div className="mx-auto max-w-[1400px] px-8 py-16 md:px-12">
          <h2 className="subtitle text-center">Así funciona el programa</h2>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Step n="1" t="Recibimos la donación" d="Llega un computador donado por una persona o empresa." />
            <Step n="2" t="Diagnóstico" d="Los practicantes revisan el equipo e identifican qué necesita." />
            <Step n="3" t="Reacondicionamiento" d="Reparan, limpian y ponen a punto el equipo, supervisados por el equipo técnico." />
            <Step n="4" t="Nueva vida" d="El computador se dona a quien lo necesita y el practicante suma experiencia." />
          </div>
        </div>
      </section>

      {/* ===== APOYO A LA EDUCACIÓN (franja teal) ===== */}
      <section className="relative left-1/2 w-screen -translate-x-1/2 bg-teal-700 text-white">
        <div className="mx-auto max-w-[1400px] px-8 py-16 text-center md:px-12">
          <h2 className="subtitle">
            Apoyamos la educación tecnológica de toda la comunidad
          </h2>
          <p className="paragraph mx-auto mt-5 max-w-3xl text-white">
            A través de nuestros programas de voluntariado, los jóvenes adquieren
            experiencia práctica reparando computadores y dictando cursos
            informales de tecnología. Esta formación constituye su primer paso
            hacia el sector tecnológico o educativo. Y mientras ellos se forman,
            abrimos esos cursos de manera gratuita para que más personas se
            integren al mundo digital.
          </p>
        </div>
      </section>
      <div className="flex flex-col gap-8 mt-14">
        <h2 className="subtitle text-center">Ultimas novedades</h2>
        <LatestPosts limit={15} />
      </div>
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