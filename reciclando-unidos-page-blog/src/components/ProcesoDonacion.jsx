import ButtonComponent from "@/components/ButtonComponent";

const PASOS = [
  {
    n: "01",
    title: "Llena el formulario o escribenos por WhatsApp",
    desc: "Cuéntanos qué equipos quieres donar y déjanos tus datos de contacto. Toma menos de 3 minutos y no tiene ningún costo. Tel: 313 541 0348",
  },
  {
    n: "02",
    title: "Agendamos la recogida",
    desc: "Coordinamos contigo el día y la hora para recoger tus computadores a domicilio, gratis y en cualquier localidad de Bogotá.",
  },
  {
    n: "03",
    title: "Recogemos tus equipos",
    desc: "Vamos hasta tu casa, oficina o conjunto residencial. Tú no pagas nada ni tienes que desplazarte para donar.",
  },
  {
    n: "04",
    title: "Reacondicionamos o reciclamos",
    desc: "Reparamos lo que sirve y reciclamos de forma responsable lo que no, borrando tus datos y cuidando el medio ambiente.",
  },
  {
    n: "05",
    title: "Entregamos y certificamos",
    desc: "Llevamos los equipos a estudiantes y comunidades que los necesitan, y te enviamos tu certificado de donación.",
  },
];

export default function ProcesoDonacion() {
  return (
    <section
      aria-labelledby="proceso-donacion-title"
      className="mx-auto w-full max-w-[1400px] px-8 py-16 md:px-12"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-green-ru">
          Paso a paso
        </p>
        <h2 id="proceso-donacion-title" className="subtitle">
          ¿Cómo donar computadores en Bogotá?
        </h2>
        <p className="paragraph mt-4 leading-relaxed text-gray-600">
          Donar tus computadores usados es muy sencillo. Nosotros hacemos el
          trabajo pesado: tú solo nos avisas y nosotros recogemos los equipos a
          domicilio, sin costo, en toda Bogotá.
        </p>
      </div>

      <ol className="relative mt-14 grid gap-10 md:grid-cols-5 md:gap-6">
        {/* Línea conectora en escritorio */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-green-ru/20 md:block"
        />

        {PASOS.map((paso) => (
          <li key={paso.n} className="relative flex flex-col items-center text-center">
            <span
              aria-hidden="true"
              className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-green-ru text-lg font-bold text-white shadow-md"
            >
              {paso.n}
            </span>
            <h3 className="mt-5 text-lg font-semibold text-gray-800">
              {paso.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              {paso.desc}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}