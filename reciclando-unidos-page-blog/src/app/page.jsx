import ImpactComponent from "@/components/ImpactComponent";
import HeroSection from "@/components/HeroSection";
import CarrouselProvidersComponent from "@/components/CarrouselProvidersComponent";
import LatestPosts from "@/components/LatestPosts";
import FaqSeo from "@/components/FaqSeo";
import AboutComponent from "@/components/AboutComponent";
// SEO: metadatos renderizados en el servidor
export const metadata = {
  title: "Reciclaje electrónico en Bogotá y Cundinamarca",
  description: "Fundación de reciclaje electrónico en Bogotá y Cundinamarca. Recibimos, reacondicionamos y reciclamos tecnología de forma responsable para apoyar la educación.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_CO",
    title: "Fundación Reciclando Unidos | Reciclaje electrónico en Bogotá",
    description:
      "Fundación de reciclaje electrónico en Bogotá y Cundinamarca. Recibimos, reacondicionamos y reciclamos tecnología de forma responsable para apoyar la educación.",
    url: "/",
    images: [
      {
        url: "/imagepublic.jpg",
        width: 1200,
        height: 630,
        alt: "Fundación Reciclando Unidos | Reciclaje electrónico en Bogotá",
      },
    ],
  },
};
const FAQ_SECTIONS = [
  {
    id: "reciclaje",
    eyebrow: "Reciclaje",
    title: "Reciclaje electrónico y disposición final responsable",
    intro:
      "Cómo damos disposición final responsable a la tecnología en desuso y por qué importa.",
    items: [
      {
        q: "¿Qué es el reciclaje electrónico?",
        a: "Es el proceso de recuperar, reutilizar y dar disposición final adecuada a los aparatos tecnológicos que llegan al final de su vida útil. Evita que componentes contaminantes terminen en rellenos sanitarios y permite aprovechar materiales valiosos como cobre, aluminio y plásticos.",
      },
      {
        q: "¿Qué son los residuos de aparatos eléctricos y electrónicos (RAEE)?",
        a: "Los RAEE son todos los aparatos eléctricos y electrónicos en desuso: computadores, celulares, monitores, impresoras, cables y periféricos. En Colombia, la Ley 1672 de 2013 establece los lineamientos para su gestión adecuada.",
      },
      {
        q: "¿Por qué no debo botar los aparatos electrónicos a la basura?",
        a: "Contienen metales pesados como plomo, mercurio y cadmio que contaminan el suelo y el agua si terminan en un relleno común. Entregarlos a un gestor responsable protege el medio ambiente y permite recuperar piezas y materiales reutilizables.",
      },
      {
        q: "¿Qué aparatos reciben para reciclaje?",
        a: "Recibimos todo tipo de material electrónico: computadores de escritorio y portátiles, monitores, impresoras, tablets, celulares, baterías, cables, fuentes y periféricos. Si tienes dudas sobre un equipo en particular, escríbenos y te confirmamos.",
      },
      {
        q: "¿Reciclar con ustedes tiene algún costo?",
        a: "No. Recibir y reciclar tu tecnología es gratuito, y en Bogotá y municipios cercanos de Cundinamarca ofrecemos recogida a domicilio sin costo para hogares, empresas y colegios.",
      },
      {
        q: "¿Dónde reciclar desechos electrónicos cerca de mí?",
        a: "Si estás en Bogotá o Cundinamarca (Soacha, Chía, Mosquera, Funza y alrededores), coordinamos la recogida a domicilio. Si estás en otra ciudad, escríbenos y te orientamos sobre la mejor forma de hacernos llegar el material.",
      },
      {
        q: "¿Qué pasa con la información de mis equipos?",
        a: "Antes de reacondicionar o reciclar cualquier equipo realizamos borrado seguro de datos en discos y memorias, para que tu información personal o empresarial no quede expuesta.",
      },
      {
        q: "¿Entregan certificado de disposición final?",
        a: "Sí. Emitimos certificado de disposición final y aprovechamiento, útil para empresas que necesitan soportar su gestión ambiental de RAEE ante auditorías o informes de sostenibilidad.",
      },
      {
        q: "¿Qué pasa con los equipos que no se pueden reparar?",
        a: "Aprovechamos sus piezas útiles para reacondicionar otros equipos y reciclamos el resto de forma segura con gestores autorizados, cerrando correctamente el ciclo de vida de cada dispositivo.",
      },
      {
        q: "¿Qué hacen con los equipos que sí funcionan?",
        a: "Los reacondicionamos —mantenimiento, reparación y puesta a punto— y los entregamos a colegios, jardines y estudiantes que los necesitan. Así el reciclaje electrónico también genera un impacto social y educativo.",
      },
    ],
  },
];
const cards = [
  {
    id: "mision",
    title: "Misión",
    text: "Recolectar equipos electrónicos en desuso y reacondicionarlos para apoyar a colegios y fundaciones, fortaleciendo el acceso a la educación.",
    image: "basura.webp",
    alt: "Equipos electrónicos en desuso listos para reciclar",
  },
  {
    id: "vision",
    title: "Visión",
    text: "Ser la fundación referente en América Latina en donación de tecnología y apoyo educativo mediante equipos reacondicionados.",
    image:
      "objetivo.jpeg",
    alt: "Estudiantes accediendo a tecnología",
  },
  {
    id: "objetivo",
    title: "Objetivo",
    text: "Recolectar y reciclar equipos de cómputo para reducir el impacto ambiental y, a la vez, impulsar la educación de quienes más lo necesitan.",
    image:
      "ambientales.webp",
    alt: "ayudar al planeta",
  },
  {
    id: "historia",
    title: "Historia",
    text: "Nacimos como un proyecto universitario para dar solución a las problemáticas tecnológicas que afectan la educación en Bogotá.",
    image: "historia.webp",
    alt: "Los inicios de la fundación Reciclando Unidos",
  },
];

export default function Home() {
  return (

    <div className="flex flex-col">
      <div className="flex flex-col justify-between gap-12">
        <HeroSection />
        <CarrouselProvidersComponent />
      </div>
      <ImpactComponent />
      <AboutComponent className="green-ru-div" cards={cards} title="¿Quiénes somos y hacia dónde vamos?" text="En Reciclando Unidos damos una segunda vida a la tecnología en desuso. Recuperamos equipos de empresas, entidades y particulares, los reacondicionamos y los entregamos a colegios y fundaciones, reduciendo los residuos electrónicos y cerrando la brecha digital." />
      <LatestPosts limit={12} cat={"reciclaje-electronico"} title={"Fundacion Reciclando Unidos y el reciclaje electrónico"} desc={`En Reciclando Unidos damos una segunda vida a la tecnología en desuso. Recuperamos equipos de empresas, entidades y particulares, los reacondicionamos y los entregamos a colegios y fundaciones, reduciendo los residuos electrónicos y cerrando la brecha digital`} />
      <FaqSeo
        sections={FAQ_SECTIONS}
        heading="Preguntas frecuentes sobre reciclaje electrónico"
        title="Resolvemos tus dudas sobre reciclaje electrónico y disposición final responsable de tu tecnología."
      />
    </div>
  );
}
