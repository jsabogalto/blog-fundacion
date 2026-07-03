
import SectionImageComponent from "@/components/SectionImageComponent";
import FaqSeo from "@/components/FaqSeo";
import LatestPosts from "@/components/LatestPosts";
import DonationForm from "@/components/DonationForm";
import DigitalEquity from "@/components/DigitalEquityComponent";
import OdsComponent from "@/components/OdsComponent";
import MaterialsComponent from "@/components/MaterialsComponent";
import ServicesComponent from "@/components/ServicesComponent";
import AboutComponent from "@/components/AboutComponent";
import ReciclyItems from "@/components/ReciclyItems";

// SEO: metadatos renderizados en el servidor
export const metadata = {
  title: "Donar computadores en Bogotá — Recogida gratis y certificado",
  description: "Dona tus computadores usados y apoya la educación de colegios y estudiantes. Recogida gratuita a domicilio en Bogotá y Cundinamarca y certificado de donación.",
  keywords: [
    "cómo donar computadores",
    "dónde donar computadores Bogotá",
    "recogida de computadores a domicilio",
    "donar computadores usados o dañados",
    "certificado de donación DIAN",
  ],
  alternates: { canonical: "/donar-computadores" },
  openGraph: {
    title: "Donar computadores en Bogotá — Recogida gratis y certificado",
    description: "Dona tus computadores usados y apoya la educación de colegios y estudiantes. Recogida gratuita a domicilio en Bogotá y Cundinamarca y certificado de donación.",
    type: "website",
    url: "/donar-computadores",
    locale: "es_CO",
    siteName: "Fundación Reciclando Unidos",
    images: [
      {
        url: "/imagepublic.jpg",
        width: 1200,
        height: 630,
        alt: "Cómo donar computadores en Bogotá - Fundación Reciclando Unidos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cómo donar computadores en Bogotá | Fundación Reciclando Unidos",
    description:
      "Recogida gratis a domicilio de tus computadores usados o dañados. Recibe tu certificado de donación.",
    images: ["/imagepublic.jpg"],
  },
};

const FAQ_SECTIONS = [
  {
    id: "como-donar",
    eyebrow: "Cómo donar",
    title: "Cómo donar computadores y agendar la recogida",
    intro:
      "Donar tu computador es fácil: llenas el formulario, coordinamos la recogida gratuita y nosotros nos encargamos del resto.",
    items: [
      {
        q: "¿Cómo dono mi computador paso a paso?",
        a: "1) Llenas el formulario de donación con tus datos y los equipos que quieres entregar. 2) Coordinamos contigo el día y la hora de la recogida a domicilio. 3) Pasamos por tus computadores sin costo. 4) Los reacondicionamos o reciclamos. 5) Te enviamos tu certificado de donación. No necesitas factura, accesorios completos ni que el equipo funcione.",
      },
      {
        q: "¿Dónde puedo donar computadores en Bogotá?",
        a: "Directamente con la Fundación Reciclando Unidos: no tienes que buscar un punto de acopio ni desplazarte. Recogemos a domicilio, gratis, en todas las localidades de Bogotá y en municipios cercanos como Soacha, Chía, Cota, Cajicá, Mosquera y Funza según disponibilidad. Si prefieres entregar personalmente, coordinamos un punto de entrega.",
      },
      {
        q: "¿La recogida a domicilio tiene algún costo?",
        a: "No. La recogida en casas, apartamentos, conjuntos residenciales y oficinas es totalmente gratuita. Tú no pagas transporte ni ningún otro valor: agendamos, pasamos por los equipos y listo.",
      },
      {
        q: "¿Cómo dono computadores si soy una empresa?",
        a: "Llenas el mismo formulario indicando el número aproximado de equipos y la sede. Coordinamos una recogida adaptada al volumen —5, 50 o más equipos—, apoyamos con la documentación para la baja de activos si la necesitan, y entregamos el certificado de donación correspondiente.",
      },
    ],
  },
  {
    id: "equipos",
    eyebrow: "Equipos",
    title: "Qué computadores y equipos puedes donar",
    intro:
      "Recibimos equipos en cualquier estado: funcionales, dañados, antiguos o incompletos.",
    items: [
      {
        q: "¿Reciben computadores dañados, antiguos o que no encienden?",
        a: "Sí. Muchos equipos que ya no encienden se reparan con repuestos, los antiguos sirven para tareas básicas o como fuente de piezas, y lo que definitivamente no es recuperable lo reciclamos de forma responsable. En todos los casos tu donación tiene un destino útil.",
      },
      {
        q: "¿Puedo donar un computador incompleto o sin disco duro?",
        a: "Sí. Si retiraste el disco por seguridad o te faltan el cargador, el teclado u otras piezas, no hay problema: durante el reacondicionamiento completamos lo que falte o usamos el equipo como fuente de repuestos para reparar otros.",
      },
      {
        q: "¿Qué otros equipos reciben además de computadores?",
        a: "Recibimos computadores de escritorio y portátiles de cualquier marca, y también monitores, teclados, mouse, cables y periféricos. En muchos casos aceptamos tablets, celulares e impresoras: indícanos en el formulario qué tienes y te confirmamos.",
      },
      {
        q: "¿Hay un mínimo de equipos para donar?",
        a: "No. Puedes donar un solo computador o un lote completo de una empresa. Toda donación cuenta y coordinamos una sola visita para recoger todo.",
      },
    ],
  },
  {
    id: "certificado-destino",
    eyebrow: "Certificado y destino",
    title: "Certificado de donación y destino de tu equipo",
    intro:
      "Qué respaldo recibes por tu donación y qué pasa con tu computador después de entregarlo.",
    items: [
      {
        q: "¿Me entregan un certificado de donación?",
        a: "Sí. Te entregamos un certificado que respalda formalmente tu aporte, útil para personas y empresas. En Colombia las donaciones a ciertas entidades sin ánimo de lucro pueden tener efectos tributarios; cómo aplica depende de tu situación, así que te recomendamos validarlo con tu contador.",
      },
      {
        q: "¿Qué pasa con mi computador después de donarlo?",
        a: "Entra a evaluación: si sirve o se puede reparar, lo reacondicionamos y lo entregamos a estudiantes, colegios y comunidades que lo necesitan. Si no es aprovechable, lo desensamblamos y gestionamos sus materiales como RAEE con reciclaje responsable. Nada se desperdicia.",
      },
      {
        q: "¿Qué pasa con mis datos personales?",
        a: "Durante el reacondicionamiento formateamos los discos y hacemos borrado seguro de la información; si lo solicitas, también destruimos el disco. Aun así, por tu tranquilidad, te sugerimos respaldar y borrar tus archivos antes de entregar el equipo.",
      },
      {
        q: "¿Cómo sé que mi donación llegó a buen destino?",
        a: "Además del certificado, compartimos públicamente los proyectos y entregas que tu aporte hace posible. En donaciones empresariales o de varios equipos podemos darte información más detallada sobre el destino de los computadores.",
      },
    ],
  },
];

const sections = [
  {
    id: "por-que-donar",
    overlayTitle: "¿Por qué donar computadores?",
    heading: "¿Por qué donar computadores?",
    text: "Cada equipo que ya no usas puede cambiar una vida. Donarlo evita que termine como basura electrónica y le da una segunda oportunidad como herramienta de estudio y trabajo.",
    cta: { label: "Conócenos", href: "/" },
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

const cards = [
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

const sectionsIniciativas = [
  {
    id: "alfabetizacion-digital",
    overlayTitle: "Nuevas iniciativas",
    heading: "Tu donación también enseña: talleres de alfabetización digital",
    text: "Los computadores donados no solo se entregan: también equipan nuestros talleres gratuitos de alfabetización digital, donde niños, jóvenes y adultos aprenden a usar la tecnología para estudiar, trabajar y emprender. Cada equipo que donas multiplica su impacto formando a más personas.",
    cta: { label: "Conoce los talleres de alfabetización digital", href: "/nuevas-iniciativas" },
    image: "https://ik.imagekit.io/2g4mlp2dp/portada-pagina-solicita_Y-G-ScTmIm.webp?updatedAt=1781977771220",
    alt: "Participantes de un taller de alfabetización digital de la Fundación Reciclando Unidos",
    reverse: true,
  }
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

const cardsBeneficios = [
  {
    id: "tributarios",
    title: "Tributarios",
    text: "Recibes un certificado de donación que respalda formalmente tu aporte. En Colombia, las donaciones a entidades sin ánimo de lucro pueden generar beneficios en tu declaración de renta según tu caso: valídalo con tu contador.",
    image: "beneficios-tributarios.webp",
    alt: "Certificado de donación entregado por la Fundación Reciclando Unidos",
  },
  {
    id: "seguridad-datos",
    title: "Seguridad de tus datos",
    text: "Hacemos borrado seguro de la información de todos los equipos donados y, si lo solicitas, destruimos físicamente los discos. Tu información personal o empresarial nunca queda expuesta.",
    image: "seguridad-datos.webp",
    alt: "Borrado seguro de datos en discos de computadores donados",
  },
  {
    id: "ambientales",
    title: "Ambientales",
    text: "Los equipos aptos se reacondicionan, los que no, aportan repuestos, y lo que no se puede aprovechar se entrega a un gestor ambiental autorizado. Ningún componente termina contaminando.",
    image: "ambientales.webp",
    alt: "Reciclaje responsable de componentes electrónicos",
  },
  {
    id: "educativos",
    title: "Educativos",
    text: "Tu equipo llega reacondicionado a colegios, estudiantes universitarios y rurales, y fundaciones aliadas, convirtiéndose en una herramienta real de aprendizaje.",
    image: "holasoyportada_HRJ-llO9RD.webp",
    alt: "Estudiantes usando computadores donados en un aula",
  },
];


export default function DonarComputadoresPage() {
  return (
    <div className="flex flex-col overflow-x-clip">
      <SectionImageComponent
        src={"/bgdonar-computadores.webp"}
        w={3024}
        h={4032}
        alt={"Donar computadores en Bogotá con recogida a domicilio gratis"}
        title={"Donar computadores en Bogotá: fácil, gratis y a domicilio"}
      />
      <DigitalEquity />
      <DonationForm />
      <MaterialsComponent materials={materials} title="¿Qué hacemos con los computadores que donas en Bogotá?" text="Cada computador que recibimos se evalúa: los que funcionan o se pueden reparar los reacondicionamos para darles una segunda vida con propósito, y los que no, se reciclan responsablemente como material electrónico. Después entregamos los equipos a estudiantes, colegios y fundaciones que los necesitan, para que tu donación se convierta en oportunidades educativas reales." textLink={"Ver todas las donaciones"} link={"/posts?cat=proyectos"} />
      <ServicesComponent sections={sections} className={"green-ru-div"} />
      <AboutComponent cards={cards} title="¿Cómo ayuda tu donación a la educación?"
        text="Cifras de la UNESCO y la UIT muestran que el acceso a la tecnología sigue siendo un privilegio para millones de estudiantes. Donar tu computador es una de las formas más directas de cambiar esa realidad y abrir oportunidades de aprendizaje." />
      <ReciclyItems />
      <ServicesComponent sections={sectionsIniciativas} />
      <AboutComponent
        id="beneficios"
        cards={cardsBeneficios}
        title="Beneficios de donar tus computadores con Reciclando Unidos"
        text="Tu donación genera valor en varias direcciones: apoya la educación de estudiantes y colegios, le da a las empresas una gestión responsable de sus equipos y protege el medio ambiente con la disposición correcta de los residuos electrónicos."
        className={"green-ru-div"}
      />
      <OdsComponent />
      <LatestPosts
        limit={9}
        cat="proyectos"
        title="Proyectos hechos realidad con computadores donados"
        desc="Estas son algunas de las entregas y proyectos que las donaciones de computadores han hecho posibles en Bogotá y Cundinamarca. Cada historia empezó con alguien que, como tú, decidió donar un equipo que ya no usaba."
        bgClassName={"green-ru-div"}
      />
      <LatestPosts
        limit={9}
        cat="donar-computadores"
      />
      <FaqSeo
        sections={FAQ_SECTIONS}
        heading="Preguntas frecuentes sobre donar computadores"
        title="Resolvemos tus dudas sobre cómo donar computadores en Bogotá: recogida a domicilio, certificado y destino de tu equipo."
      />
    </div>
  );
}