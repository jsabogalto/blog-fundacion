import ImpactComponent from "@/components/ImpactComponent";
import HeroSection from "@/components/HeroSection";
import CarrouselProvidersComponent from "@/components/CarrouselProvidersComponent";
import LatestPosts from "@/components/LatestPosts";
import FaqSeo from "@/components/FaqSeo";
import AboutComponent from "@/components/AboutComponent";
import DonationForm from "@/components/DonationForm";
import ImageGalleryComponent from "@/components/ImageGalleryComponent";
import DigitalEquity from "@/components/DigitalEquityComponent";
import MaterialsComponent from "@/components/MaterialsComponent";
import ServicesComponent from "@/components/ServicesComponent";
import ReciclyItems from "@/components/ReciclyItems";
import OdsComponent from "@/components/OdsComponent";
import DilemmaComponent from "@/components/DilenmaComponent";

// SEO: metadatos renderizados en el servidor
export const metadata = {
  title: "Donar computadores en Bogotá: fácil, gratis y a domicilio",
  description:
    "Dona tus computadores en Bogotá: recolección gratuita a domicilio, borrado seguro de datos y certificado de donación. Reciclaje electrónico que apoya la educación.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Donación de Computadores en Bogotá | Recolección Gratis a Domicilio",
    description:
      "Recolección gratuita a domicilio en Bogotá y Cundinamarca. Borrado seguro de datos, certificado de donación y reciclaje responsable.",
    url: "/",
    images: [{
      url: "/imagepublic.jpg", width: 1200, height: 630,
      alt: "Donación de computadores en Bogotá - Fundación Reciclando Unidos"
    }],
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
  ,
  {
    id: "donaciones",
    eyebrow: "Donaciones",
    title: "Donar computadores usados en Colombia",
    intro:
      "Si tu equipo aún puede tener una segunda vida, en nuestra página principal puedes donar computadores y transformarlos en oportunidades.",
    items: [
      {
        q: "¿Cómo puedo donar computadores a la fundación?",
        a: "Es muy sencillo: completa el formulario de donación en nuestra página principal o escríbenos, y coordinamos la entrega. En Bogotá y municipios cercanos recogemos los equipos a domicilio sin costo, tanto para personas como para empresas.",
      },
      {
        q: "¿Puedo donar un computador que no funciona o está dañado?",
        a: "Sí. Recibimos equipos en cualquier estado: los que funcionan se reacondicionan, y de los dañados aprovechamos las piezas útiles para reparar otros. Lo que no se puede recuperar recibe disposición final responsable.",
      },
      {
        q: "¿Qué tipo de computadores puedo donar?",
        a: "Portátiles, computadores de escritorio con su torre y monitor, equipos todo en uno, tablets y servidores empresariales. También aceptamos periféricos como teclados, mouse y cables que complementan los equipos entregados.",
      },
      {
        q: "¿A quién benefician los computadores donados?",
        a: "A estudiantes de colegios públicos, jóvenes de zonas rurales, fundaciones educativas y familias sin acceso a tecnología. Cada equipo reacondicionado ayuda a cerrar la brecha digital en Colombia.",
      },
      {
        q: "¿Las empresas pueden donar sus equipos al renovar tecnología?",
        a: "Sí, y es una de nuestras principales fuentes de equipos. Ofrecemos recogida, borrado seguro de datos y certificado de donación, útil para programas de responsabilidad social empresarial e informes de sostenibilidad.",
      },
      {
        q: "¿Recibo algún certificado por mi donación?",
        a: "Sí. Emitimos certificado de donación a nombre de la persona o empresa donante, que enviamos a tu correo una vez recibimos los equipos.",
      },
      {
        q: "¿Cuál es la diferencia entre donar y reciclar un computador?",
        a: "Al donar, tu equipo se reacondiciona y vuelve a usarse: llega a un estudiante o a un colegio. Al reciclar, el equipo ya no es recuperable y se desintegra de forma segura para aprovechar sus materiales. Nosotros evaluamos cada equipo y le damos el destino que genere mayor impacto.",
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

const materials = [
  {
    id: "universitarios",
    title: "Estudiantes universitarios",
    image: "donacion-emanuel_KOxpCa8Bt.webp",
    alt: "Estudiante universitario recibiendo un computador donado por la Fundación Reciclando Unidos",
  },
  {
    id: "rurales",
    title: "Estudiantes de zonas rurales",
    image: "estudiantes-rurales_velqXRFFp.webp",
    alt: "Estudiantes rurales de Cundinamarca usando computadores donados",
  },
  {
    id: "colegios",
    title: "Colegios y jardines",
    image: "3_OwdeL5Q5i.webp",
    alt: "Entrega de computadores donados a un colegio en Bogotá",
  },
  {
    id: "fundaciones",
    title: "Fundaciones aliadas",
    image: "portada-donar-computadores_NOTCD-CFJ.png",
    alt: "Computadores reacondicionados entregados a una fundación",
  },
];
const sections = [
  {
    id: "por-que-donar",
    overlayTitle: "¿Por qué donar computadores?",
    heading: "¿Por qué donar computadores?",
    text: "Cada equipo que ya no usas puede cambiar una vida. Donarlo evita que termine como basura electrónica y le da una segunda oportunidad como herramienta de estudio y trabajo.",
    cta: { label: "Conócenos", href: "#impacto" },
    image: "https://ik.imagekit.io/2g4mlp2dp/colegio-viota.jpg",
    alt: "Estudiantes del colegio de Viotá con computadores donados por la Fundación Reciclando Unidos",
    reverse: false,
  },
  {
    id: "beneficios-donantes",
    overlayTitle: "Ventajas para ti como donante",
    heading: "Beneficios de donar con Reciclando Unidos",
    text: "Donar con nosotros no solo ayuda a otros: también te da tranquilidad y ventajas concretas. Hacemos borrado seguro de tus datos, no te cuesta nada, recibes tu certificado de donación y puedes ver el impacto real de tu aporte.",
    cta: { label: "Saber más", href: "#beneficios" },
    image: "https://ik.imagekit.io/2g4mlp2dp/lenovo.webp",
    alt: "Computador portátil reacondicionado listo para entregar",
    reverse: true,
  },
  {
    id: "recogida-domicilio",
    overlayTitle: "Recogida a domicilio y gratis en Bogotá",
    heading: "Donar computadores en Bogotá es a domicilio y gratis",
    text: "No tienes que desplazarte ni cargar nada. Vamos hasta la puerta de tu casa u oficina en cualquier zona de Bogotá, en el día y la hora que acordemos contigo, sin ningún costo. Solo agenda tu solicitud y nosotros nos encargamos del resto.",
    cta: { label: "Agendar recolección gratuita", href: "#formulario-donacion" },
    image: "https://ik.imagekit.io/2g4mlp2dp/recoleccion-gratuita.JPG",
    alt: "Recolección gratuita de computadores a domicilio en Bogotá",
    reverse: false,
  },
];
const cards2 = [
  {
    id: "sin-computador",
    title: "826 millones de estudiantes en el mundo no tienen computador en casa (UNESCO, 2020)",
    image: "sin-internet.webp",
    alt: "Estudiante haciendo tareas sin acceso a un computador",
  },
  {
    id: "sin-internet-hogar",
    title: "El 43% de los estudiantes —706 millones— no cuenta con internet en el hogar (UNESCO, 2020)",
    image:
      "escuela-sin-computadores.webp",
    alt: "Familia en un hogar sin conexión a internet",
  },
  {
    id: "poblacion-sin-internet",
    title: "2.600 millones de personas, un tercio de la población mundial, aún no tiene acceso a internet (UIT, 2023)",
    image:
      "brecha-digitla.webp",
    alt: "Comunidad afectada por la brecha digital en zonas rurales",
  },
  {
    id: "escuelas-sin-conexion",
    title: "Cerca del 60% de las escuelas primarias del mundo no está conectado a internet (UNICEF-UIT)",
    image: "fondo-centro-educativo-page.webp",
    alt: "Escuela rural sin conexión a internet",
  },
];

const cards3 = [
  {
    id: "beneficios-tributarios",
    title: "Tributarios",
    text: "Recibes un certificado de donación que respalda formalmente tu aporte. En Colombia, las donaciones a entidades sin ánimo de lucro pueden generar beneficios en tu declaración de renta según tu caso: valídalo con tu contador.",
    image: "beneficios-tributarios.webp",
    alt: "beneficios tributarios por donar computadores",
  },
  {
    id: "Seguridad-de-tus-datos",
    title: "Seguridad de tus datos",
    text: "Hacemos borrado seguro de la información de todos los equipos donados y, si lo solicitas, destruimos físicamente los discos. Tu información personal o empresarial nunca queda expuesta.",
    image:
      "seguridad-datos.webp",
    alt: "borrado seguro de datos por donar computadores",
  },
  {
    id: "Ambientales",
    title: "Ambientales",
    text: "Los equipos aptos se reacondicionan, los que no, aportan repuestos, y lo que no se puede aprovechar se entrega a un gestor ambiental autorizado. Ningún componente termina contaminando.",
    image:
      "ambientales.webp",
    alt: "beneficios ambientales por donar computadores",
  },
  {
    id: "Educativos",
    title: "Educativos",
    text: "Tu equipo llega reacondicionado a colegios, estudiantes universitarios y rurales, y fundaciones aliadas, convirtiéndose en una herramienta real de aprendizaje.",
    image: "holasoyportada_HRJ-llO9RD.webp",
    alt: "beneficios educativos por donar computadores",
  },
];

const cards4 = [
  {
    id: "nuevas-iniciativas",
    overlayTitle: "Tu donación también enseña: talleres de alfabetización digital",
    heading: "Tu donación también enseña: talleres de alfabetización digital",
    text: "Los computadores donados no solo se entregan: también equipan nuestros talleres gratuitos de alfabetización digital, donde niños, jóvenes y adultos aprenden a usar la tecnología para estudiar, trabajar y emprender. Cada equipo que donas multiplica su impacto formando a más personas.",
    cta: { label: "Talleres de alfabetización digital", href: "/nuevas-iniciativas" },
    image: "https://ik.imagekit.io/2g4mlp2dp/3_kQv_ss_L4.webp?updatedAt=1782318361765",
    alt: "Recolección gratuita de computadores a domicilio en Bogotá",
    reverse: false,
  },
];

const nuestraLaborSections = [
  {
    id: "colegios-beneficiados",
    heading: "Colegios beneficiados con tecnología",
    text: "Cada campaña para donar computadores nos permite equipar salas de cómputo en colegios públicos de Bogotá y otras regiones. Los equipos empresariales que las compañías renuevan se reacondicionan y llegan a las aulas listos para que cientos de estudiantes aprendan con herramientas digitales.",
    image: "colegiosbeneficiadospordonarcomputadores.webp",
    alt: "Colegios beneficiados por la donación de computadores reacondicionados",
    reverse: false,
    cta: {
      href: "#formulario-donacion",
      label: "Dona computadores a colegios",
    },
  },
  {
    id: "estudiantes-rurales",
    heading: "Estudiantes rurales conectados",
    text: "Llevamos computadores portátiles donados hasta veredas y zonas apartadas de Colombia. Para un estudiante rural, un portátil significa poder estudiar cómodamente pese a los largos desplazamientos y acceder a las mismas oportunidades educativas que cualquier otro joven del país.",
    image: "donaciondecomputadoresaestudiantesrurales.webp",
    alt: "Donación de computadores portátiles a estudiantes rurales en Colombia",
    reverse: true,
    cta: {
      href: "#formulario-donacion",
      label: "Apoya a un estudiante rural",
    },
  },
  {
    id: "brecha-digital",
    heading: "Cerramos la brecha digital",
    text: "En Fundación Reciclando Unidos convertimos los equipos en desuso en oportunidades reales. Cada computador donado que reacondicionamos acerca la tecnología a familias, fundaciones y comunidades que no podrían adquirirla, mientras los residuos electrónicos reciben una disposición ambientalmente responsable.",
    image: "fundacionreciclandounidosayudandoaestudiantes.webp",
    alt: "Fundación Reciclando Unidos ayudando a estudiantes a cerrar la brecha digital",
    reverse: false,
  },
];

export default function Home() {
  return (

    <div className="flex flex-col">
      <HeroSection />
      <CarrouselProvidersComponent />
      <ImageGalleryComponent />
      <DigitalEquity />
      <div className="sections-py">
        <DonationForm />
      </div>
      <ServicesComponent sections={sections} spanTitle={"DONA TU COMPUTADOR VIEJO O EN DESUSO"} />
      <MaterialsComponent materials={materials} title="¿Qué hacemos con los computadores que donas en Bogotá?" text="Cada computador que recibimos se evalúa: los que funcionan o se pueden reparar los reacondicionamos para darles una segunda vida con propósito, y los que no, se reciclan responsablemente como material electrónico. Después entregamos los equipos a estudiantes, colegios y fundaciones que los necesitan, para que tu donación se convierta en oportunidades educativas reales." textLink={"Ver todas las donaciones"} link={"#proyectos"} />

      <AboutComponent cards={cards2} title="¿Cómo ayuda tu donación a la educación?"
        text="Cifras de la UNESCO y la UIT muestran que el acceso a la tecnología sigue siendo un privilegio para millones de estudiantes. Donar tu computador es una de las formas más directas de cambiar esa realidad y abrir oportunidades de aprendizaje."
        spanTitle={"IMPACTO EN LA EDUCACIóN"}
        spanTitleCollassName={"bg-stone-100"} or={"text-stone-800"} />
      <ReciclyItems />
      <OdsComponent />
      <AboutComponent cards={cards3} title="Beneficios de donar tus computadores con Reciclando Unidos"
        text="Tu donación genera valor en varias direcciones: apoya la educación de estudiantes y colegios, le da a las empresas una gestión responsable de sus equipos y protege el medio ambiente con la disposición correcta de los residuos electrónicos."
        spanTitle={"BENEFICIOS"}
        spanTitleColor={"text-stone-800"}
        id={"beneficios"}
        className={"bg-stone-100"} />
      <ServicesComponent sections={cards4} spanTitle={"NUEVAS INICIATIVAS"} />
      <ImpactComponent />
      <AboutComponent cards={cards} title="¿Quiénes somos y hacia dónde vamos?" text="En Reciclando Unidos damos una segunda vida a la tecnología en desuso. Recuperamos equipos de empresas, entidades y particulares, los reacondicionamos y los entregamos a colegios y fundaciones, reduciendo los residuos electrónicos y cerrando la brecha digital."
        spanTitle={"OBJETIVO, MISIóN Y VISIóN"}
        spanTitleColor={"text-stone-800"} />

      <DilemmaComponent
        spanTitle="nuestra labor"
        title="Donar computadores transforma vidas"
        footerNote="Cada computador donado que recibimos se convierte en una oportunidad: ayudamos a colegios, estudiantes rurales y comunidades a cerrar la brecha digital en Colombia."
        sections={nuestraLaborSections}
      />

      <LatestPosts limit={6} cat={"reciclaje-electronico"} title={"Fundacion Reciclando Unidos y el reciclaje electrónico"} desc={`En Reciclando Unidos damos una segunda vida a la tecnología en desuso. s equipos de empresas, entidades y particulares, los reacondicionamos y los entregamos a colegios y fundaciones, reduciendo los residuos electrónicos y cerrando la brecha digital`} spanTitle={"LECTURAS DE INTERÉS"} spanTextColor={"text-stone-800"} />
      <LatestPosts limit={3} cat={"proyectos"} title={"Proyectos con impacto: computadores donados que cierran la brecha digital"}
        desc={`Conoce las entregas de computadores reacondicionados a colegios, jardines y estudiantes de Bogotá y Cundinamarca. Cada proyecto muestra cómo tu donación se convierte en oportunidades educativas reales y en menos residuos electrónicos.`} spanTitle={"LECTURAS RECOMENDADAS"} spanTextColor={"text-stone-800"} />
      <FaqSeo
        sections={FAQ_SECTIONS}
        heading="Preguntas frecuentes sobre reciclaje electrónico"
        title="Resolvemos tus dudas sobre reciclaje electrónico y disposición final responsable de tu tecnología."
        spanTitle={"FAQ"}
      />
    </div>
  );
}
