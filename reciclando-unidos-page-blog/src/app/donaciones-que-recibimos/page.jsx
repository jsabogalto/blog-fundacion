import ButtonComponent from "@/components/ButtonComponent";
import SectionImageComponent from "@/components/SectionImageComponent";
import FaqSeo from "@/components/FaqSeo";
import LatestPosts from "@/components/LatestPosts";

export const metadata = {
  title: "¿Qué donaciones recibimos? | Reciclando Unidos",
  description:
    "Recibimos todo tipo de material electrónico: computadores usados, dañados o en desuso. Reparamos lo aprovechable y reciclamos el resto con gestores autorizados. Aquí todo sirve.",
  alternates: {
    canonical: `/donaciones-que-recibimos`,
  },
  openGraph: {
    title: "¿Qué donaciones recibimos? | Reciclando Unidos",
    description:
      "Computadores y material electrónico usado, dañado o en desuso. Recolección, reparación y reciclaje responsable con gestores autorizados.",
    type: "website",
    url: `/donaciones-que-recibimos`,
  },
};

const FAQ_SECTIONS = [{
  id: "reciclaje",
  eyebrow: "Reciclaje electrónico",
  title: "Reciclaje electrónico: qué equipos recibimos y cómo los aprovechamos",
  intro:
    "Recibimos computadores y aparatos electrónicos para reacondicionarlos o reciclarlos de forma responsable. Aquí te contamos qué equipos aceptamos y qué hacemos con cada uno.",
  items: [
    {
      q: "¿Qué es el reciclaje electrónico y por qué es importante?",
      a: "El reciclaje electrónico es el proceso de recuperar, reacondicionar y aprovechar de forma responsable los aparatos electrónicos que ya no se usan. Es importante porque la basura electrónica es uno de los residuos que más rápido crece en el mundo y contiene metales y componentes tóxicos que contaminan el suelo y el agua. Reciclar correctamente tus equipos evita esa contaminación y recupera materiales valiosos.",
    },
    {
      q: "¿Qué equipos electrónicos reciben en la fundación?",
      a: "Recibimos computadores de escritorio, portátiles, monitores, teclados, mouse, impresoras, discos duros, memorias y componentes internos, además de otros aparatos electrónicos. En la página puedes ver el tipo de equipos que aceptamos. Si tienes dudas sobre un dispositivo específico, escríbenos y te confirmamos si podemos recibirlo para reacondicionarlo o reciclarlo.",
    },
    {
      q: "¿Reciben computadores que ya no funcionan o están dañados?",
      a: "Sí. No importa si el equipo está viejo, lento o no enciende: muchos computadores dañados aún tienen piezas que sirven para reparar otros dispositivos, y el resto se recicla de forma adecuada. Entregar un equipo que ya no funciona a un proceso de reciclaje electrónico siempre es mejor que dejarlo guardado o botarlo a la basura.",
    },
    {
      q: "¿Qué hacen con los equipos que no se pueden reparar?",
      a: "Cuando un equipo no se puede reacondicionar, lo desensamblamos y separamos sus materiales para reciclarlos correctamente. Los componentes con metales valiosos se recuperan y los elementos contaminantes se gestionan de forma responsable, evitando que terminen en un relleno sanitario. Así, incluso lo que no sirve aporta a la cadena de reciclaje electrónico.",
    },
    {
      q: "¿Cómo es el proceso de reciclaje electrónico en la fundación?",
      a: "El proceso es sencillo para ti: recibimos tus equipos, los revisamos uno por uno y decidimos su mejor destino. Lo que funciona o se puede reparar, lo reacondicionamos para entregarlo a quien lo necesita; lo que no, lo desarmamos y reciclamos por materiales. De principio a fin, cada dispositivo recibe un manejo responsable.",
    },
    {
      q: "¿Por qué no debo botar mis aparatos electrónicos a la basura?",
      a: "Los aparatos electrónicos contienen plomo, mercurio y otras sustancias que, en la basura común, contaminan el suelo y las fuentes de agua. Además, botarlos desperdicia materiales que podrían recuperarse mediante el reciclaje electrónico. Llevarlos a una fundación garantiza que tus equipos se aprovechen al máximo y no se conviertan en un problema ambiental.",
    },
    {
      q: "¿El reciclaje electrónico protege mis datos personales?",
      a: "Sí. Antes de reacondicionar o reciclar cualquier computador o disco duro, nos encargamos de que la información del equipo quede inaccesible. De todas formas, te recomendamos respaldar tus archivos y, si puedes, borrar tus datos antes de entregar el dispositivo. Tu privacidad es parte del proceso responsable de reciclaje.",
    },
    {
      q: "¿Qué materiales se recuperan al reciclar aparatos electrónicos?",
      a: "Del reciclaje electrónico se recuperan metales como cobre, aluminio, hierro y, en pequeñas cantidades, materiales más valiosos presentes en las placas. También se aprovechan plásticos y componentes reutilizables. Recuperar estos materiales reduce la necesidad de extraer recursos nuevos y disminuye el impacto ambiental de fabricar equipos desde cero.",
    },
    {
      q: "¿Reciben solo computadores o también otros dispositivos y componentes?",
      a: "Además de computadores completos, recibimos partes y componentes sueltos como discos duros, memorias RAM, fuentes de poder, cables y tarjetas. Estos elementos son muy útiles para reacondicionar otros equipos o para el reciclaje electrónico por materiales. En la página puedes revisar el listado de lo que aceptamos como fundación.",
    },
    {
      q: "¿Tiene algún costo entregar mis equipos para reciclaje electrónico?",
      a: "Recibir tus equipos para reciclaje electrónico no tiene costo para ti: solo necesitas contactarnos y coordinar la entrega o recogida. Tú te liberas de aparatos que ya no usas y nosotros nos encargamos de darles el mejor destino posible, ya sea reacondicionarlos o reciclarlos de forma responsable.",
    },
  ],
}]
export default function DonacionesQueRecibimos() {
  return (
    <div className="flex flex-col overflow-x-clip">
      <SectionImageComponent
        src="/que-recibimos.webp"
        w={3024}
        h={4032}
        alt="Donaciones de material electrónico que recibimos"
        title="Qué donaciones recibimos"
        subtitle="Aquí todo sirve: usado, dañado o en desuso, le damos un nuevo propósito"
        className="object-[center_60%] md:object-[center_55%]"
      />
      {/* ===== AQUÍ TODO SIRVE (franja teal) ===== */}
      <section className="relative left-1/2 w-screen -translate-x-1/2 bg-teal-700 text-white">
        <div className="mx-auto max-w-[1400px] px-8 py-16 text-center md:px-12">
          <h2 className="subtitle">Aquí todo sirve</h2>
          <p className="paragraph mx-auto mt-5 max-w-3xl text-white">
            Recibimos todo el material electrónico que ya no usas, sin importar
            su estado. Funcione o no, esté completo o incompleto, para nosotros
            cada equipo es una oportunidad: lo que se puede reparar vuelve a la
            vida, y lo que no, se recicla de forma responsable. Nada se
            desperdicia.
          </p>
        </div>
      </section>

      {/* ===== QUÉ MATERIAL RECIBIMOS (franja verde, tarjetas) ===== */}
      <section className="relative left-1/2 w-screen -translate-x-1/2 bg-green-600 text-white">
        <div className="mx-auto max-w-[1400px] px-8 py-16 md:px-12">
          <h2 className="subtitle text-center">¿Qué material recibimos?</h2>
          <p className="paragraph mx-auto mt-4 max-w-2xl text-center text-white">
            Aceptamos todo tipo de material electrónico, en cualquier condición.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                t: "Computadores usados",
                d: "Equipos de escritorio y portátiles que ya no utilizas pero todavía funcionan.",
              },
              {
                t: "Computadores dañados",
                d: "Equipos con fallas, que no encienden o con piezas rotas. Nos sirven para repararlos o aprovechar sus partes.",
              },
              {
                t: "Equipos en desuso",
                d: "Computadores guardados que dejaste de usar y solo ocupan espacio en casa o en la oficina.",
              },
              {
                t: "Partes y componentes",
                d: "Memorias, discos, fuentes, tarjetas, cables y cualquier repuesto suelto que tengas por ahí.",
              },
              {
                t: "Periféricos",
                d: "Monitores, teclados, mouse, impresoras y demás accesorios tecnológicos.",
              },
              {
                t: "Otro material electrónico",
                d: "Si tienes dispositivos electrónicos en desuso, escríbenos y te confirmamos si los recibimos.",
              },
            ].map((c) => (
              <div key={c.t} className="rounded-lg bg-white/15 p-6 text-left">
                <h3 className="paragraph font-bold">{c.t}</h3>
                <p className="paragraph mt-2 text-white">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PASO A PASO (franja teal) ===== */}
      <section className="relative left-1/2 w-screen -translate-x-1/2 bg-teal-700 text-white">
        <div className="mx-auto max-w-[1400px] px-8 py-16 md:px-12">
          <h2 className="subtitle text-center">Nuestro paso a paso</h2>
          <p className="paragraph mx-auto mt-4 max-w-2xl text-center text-white">
            Desde que nos contactas hasta que tu donación cumple su propósito.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Step
              n="1"
              t="Recolección"
              d="Coordinamos contigo y recogemos el material electrónico, sin que tengas que desplazarte."
            />
            <Step
              n="2"
              t="Reparación y mantenimiento"
              d="Nuestros practicantes diagnostican cada equipo, reparan lo aprovechable y lo ponen a punto."
            />
            <Step
              n="3"
              t="Entrega"
              d="Los equipos reacondicionados se donan a estudiantes, colegios y familias que los necesitan."
            />
          </div>
        </div>
      </section>

      {/* ===== MANEJO RESPONSABLE DE LO QUE NO FUNCIONA (franja verde) ===== */}
      <section className="relative left-1/2 w-screen -translate-x-1/2 bg-green-600 text-white">
        <div className="mx-auto max-w-[1400px] px-8 py-16 md:px-12">
          <h2 className="subtitle text-center">
            ¿Y lo que no se puede reparar?
          </h2>
          <p className="paragraph mx-auto mt-4 max-w-3xl text-center text-white">
            Nada termina en la basura. El material que no se puede reacondicionar
            sigue un manejo ambiental responsable.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <div className="rounded-lg bg-white/10 p-6 text-left">
              <h3 className="paragraph font-bold">Reciclaje con gestores autorizados</h3>
              <p className="paragraph mt-2 text-white">
                Las partes que ya no funcionan las entregamos a recicladores
                autorizados, que aprovechan los materiales y los reincorporan de
                forma adecuada.
              </p>
            </div>
            <div className="rounded-lg bg-white/10 p-6 text-left">
              <h3 className="paragraph font-bold">Disposición final de contaminantes</h3>
              <p className="paragraph mt-2 text-white">
                Los componentes contaminantes se entregan a empresas que cuentan
                con el permiso de disposición final, garantizando que no dañen el
                medio ambiente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== POR QUÉ IMPORTA (franja teal, tarjetas) ===== */}
      <section className="relative left-1/2 w-screen -translate-x-1/2 bg-teal-700 text-white">
        <div className="mx-auto max-w-[1400px] px-8 py-16 md:px-12">
          <h2 className="subtitle text-center">El impacto de tu donación</h2>
          <p className="paragraph mx-auto mt-4 max-w-2xl text-center text-white">
            Un solo equipo donado genera valor en varias direcciones a la vez.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                t: "Cierra la brecha digital",
                d: "Los equipos reacondicionados llegan a quienes no tienen acceso a un computador.",
              },
              {
                t: "Cuida el medio ambiente",
                d: "Reutilizar y reciclar evita que los residuos electrónicos contaminen el planeta.",
              },
              {
                t: "Forma a nuevos técnicos",
                d: "Cada equipo es práctica real para los practicantes que se forman con nosotros.",
              },
            ].map((s) => (
              <div key={s.t} className="rounded-lg bg-white/10 p-6 text-left">
                <h3 className="paragraph font-bold">{s.t}</h3>
                <p className="paragraph mt-2 text-white">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA: DONAR (franja verde) ===== */}
      <section className="relative left-1/2 w-screen -translate-x-1/2 bg-green-600 text-white">
        <div className="mx-auto max-w-3xl px-8 py-20 text-center md:px-12">
          <h2 className="subtitle">Dona tu material electrónico</h2>
          <p className="paragraph mx-auto mt-5 max-w-2xl text-white">
            ¿Tienes computadores o equipos electrónicos usados, dañados o en
            desuso? Aquí todo sirve. Agenda tu donación y nosotros nos
            encargamos del resto.
          </p>
          <div className="mt-10 flex justify-center">
            <ButtonComponent
              className="bg-white text-green-700 hover:bg-gray-100"
              text="Donar ahora"
              link="/donar-computadores"
            />
          </div>
        </div>
      </section>
      <div className="flex flex-col gap-8 mt-14">
        <h2 className="subtitle text-center">Ultimas novedades</h2>
        <LatestPosts limit={6} />
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