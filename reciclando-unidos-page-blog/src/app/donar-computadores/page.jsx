import DonacionInfoExtra from "@/components/DonacionInfoExtra";
import DonacionInfo from "@/components/DonacionInfo";
import SectionImageComponent from "@/components/SectionImageComponent";
import FaqSeo from "@/components/FaqSeo";
import LatestPosts from "@/components/LatestPosts";
import ProcesoDonacion from "@/components/ProcesoDonacion";
import BeneficiosUnesco from "@/components/BeneficiosUnesco";
import QueHacemos from "@/components/QueHacemos";
import DonationForm from "@/components/DonationForm";

// SEO: metadatos renderizados en el servidor
export const metadata = {
  title: {
    absolute: "Cómo donar computadores usados en Bogotá | Recogida gratis",
  },
  description:
    "Dónde donar computadores usados en Bogotá: llena el formulario en 1 minuto y recogemos gratis a domicilio en Bogotá. Apoya a colegios y estudiantes rurales y universitarios.",
  keywords: [
    "cómo donar computadores",
    "dónde donar computadores Bogotá",
    "recogida de computadores a domicilio",
    "donar computadores usados o dañados",
    "certificado de donación DIAN",
  ],
  alternates: { canonical: "/donar-computadores" },
  openGraph: {
    title: "Cómo donar computadores en Bogotá | Fundación Reciclando Unidos",
    description:
      "Agenda la recogida gratis a domicilio de tus computadores usados o dañados. Recibe tu certificado de donación y apoya la educación.",
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
    id: "beneficios",
    eyebrow: "Beneficios",
    title:
      "Beneficios de donar computadores: para ti, los estudiantes y la sociedad",
    intro:
      "Donar computadores no es solo deshacerte de un equipo: es generar impacto educativo, social y ambiental. Te contamos por qué vale la pena.",
    items: [
      {
        q: "¿Por qué donar computadores en lugar de desecharlos?",
        a: "Donar computadores le da una segunda vida a un equipo que para ti ya cumplió su ciclo, pero que para otra persona puede ser su primera herramienta de estudio o trabajo. En lugar de terminar como basura electrónica contaminante, tu computador se repara, se reacondiciona y llega a manos de quien realmente lo necesita. Es la forma más útil y responsable de despedirte de un equipo.",
      },
      {
        q: "¿Cómo se benefician los estudiantes al recibir un computador donado?",
        a: "Para muchos estudiantes en Colombia, recibir un computador donado significa poder hacer tareas, investigar, presentar trabajos y conectarse a clases virtuales sin depender de un café internet o del celular. Tener su propio equipo mejora su rendimiento académico, amplía sus posibilidades de aprender programación o herramientas digitales, y los pone en igualdad de condiciones frente a compañeros con más recursos.",
      },
      {
        q: "¿Qué impacto tiene donar computadores en la educación?",
        a: "Donar computadores fortalece directamente la educación: escuelas, bibliotecas y comunidades con pocos recursos pueden montar salas de cómputo, dictar talleres digitales y dar acceso a internet educativo. Un solo equipo donado puede pasar por las manos de muchos estudiantes a lo largo de los años, multiplicando el impacto de tu donación.",
      },
      {
        q: "¿Donar computadores ayuda a reducir la brecha digital?",
        a: "Sí, y es uno de sus mayores beneficios. La brecha digital deja por fuera a quienes no tienen acceso a un computador ni a internet, justo las herramientas que hoy abren puertas en estudio y empleo. Al donar computadores, acercas la tecnología a comunidades, familias y estudiantes que de otra forma quedarían rezagados frente a un mundo cada vez más digital.",
      },
      {
        q: "¿Qué beneficios trae donar computadores para el medio ambiente?",
        a: "Donar computadores reduce los residuos electrónicos, uno de los tipos de basura que más rápido crece y más daño causa al ambiente por sus metales y componentes tóxicos. Al reacondicionar un equipo en lugar de fabricar uno nuevo, se ahorran materiales, energía y agua. Y lo que ya no funciona, en la Fundación Reciclando Unidos lo reciclamos de forma responsable.",
      },
      {
        q: "¿Cómo beneficia a la sociedad donar computadores usados?",
        a: "Donar computadores usados genera un efecto en cadena: más personas con acceso a tecnología significa más oportunidades de educación, empleo y emprendimiento. Comunidades enteras se benefician cuando sus jóvenes pueden capacitarse, sus emprendedores digitalizar su negocio y sus familias acceder a trámites y servicios en línea. Tu donación se convierte en desarrollo social real.",
      },
      {
        q: "¿Donar computadores tiene beneficios para las empresas?",
        a: "Para las empresas, donar computadores es una forma concreta de responsabilidad social y de gestión sostenible de su tecnología. En vez de almacenar equipos en desuso, los entregan a una fundación que les da un destino con impacto positivo y trazable. Además, suma a la imagen corporativa y a los objetivos de sostenibilidad, mostrando un compromiso real con la educación y el medio ambiente.",
      },
      {
        q: "¿Qué gano yo al donar mi computador?",
        a: "Ganas la tranquilidad de saber que tu equipo tendrá un destino útil y no contaminante, liberas espacio en casa o en la oficina, y te conviertes en parte de un cambio que beneficia a estudiantes y comunidades. Donar computadores es un gesto pequeño con un impacto grande: tu equipo deja de ser un trasto guardado para convertirse en una oportunidad para alguien más.",
      },
      {
        q: "¿Donar computadores genera oportunidades de empleo?",
        a: "Sí. Por un lado, el acceso a un computador permite a las personas capacitarse, buscar trabajo en línea y desarrollar habilidades digitales muy demandadas hoy. Por otro, el proceso de reparar y reacondicionar los equipos donados también crea aprendizaje técnico y vinculación para quienes participan en esa labor. Donar computadores abre puertas laborales en varios frentes.",
      },
      {
        q: "¿Por qué donar a una fundación es mejor que vender o botar el computador?",
        a: "Donar tu computador a la Fundación Reciclando Unidos garantiza que el equipo se aproveche al máximo: lo que sirve se repara y se entrega a quien lo necesita, y lo que no, se recicla correctamente. A diferencia de venderlo por unos pocos pesos o botarlo y contaminar, donar transforma tu equipo en impacto educativo, social y ambiental. Es la opción que más beneficia a todos.",
      },
    ],
  },
  {
    id: "donde-donar-bogota",
    eyebrow: "Dónde donar",
    title: "Dónde donar computadores en Bogotá",
    intro:
      "Si te preguntas dónde donar computadores en Bogotá, aquí resolvemos las dudas más comunes sobre cobertura, localidades y recogida a domicilio gratuita.",
    items: [
      {
        q: "¿Dónde puedo donar computadores en Bogotá?",
        a: "Puedes donar tus computadores directamente con la Fundación Reciclando Unidos. No necesitas buscar un punto de acopio ni desplazarte: nosotros recogemos los equipos a domicilio, gratis, en cualquier zona de Bogotá. Solo tienes que llenar el formulario de donación y coordinamos contigo la recogida.",
      },
      {
        q: "¿Recogen computadores a domicilio en toda Bogotá?",
        a: "Sí. Nuestro servicio de recogida a domicilio cubre toda Bogotá, desde el norte hasta el sur y de oriente a occidente. Vamos hasta tu casa, apartamento, oficina o conjunto residencial sin que tengas que pagar nada ni cargar los equipos. Es la manera más cómoda de donar computadores en la ciudad.",
      },
      {
        q: "¿En qué localidades de Bogotá recogen los computadores?",
        a: "Recogemos en todas las localidades de Bogotá: Usaquén, Chapinero, Suba, Engativá, Fontibón, Kennedy, Bosa, Teusaquillo, Barrios Unidos, Puente Aranda, Los Mártires, La Candelaria, Santa Fe, San Cristóbal, Usme, Tunjuelito, Antonio Nariño, Rafael Uribe Uribe, Ciudad Bolívar y Sumapaz. No importa en qué barrio estés: coordinamos la recogida a domicilio sin costo.",
      },
      {
        q: "¿Puedo donar computadores si vivo en las afueras de Bogotá?",
        a: "En muchos casos sí. Aunque nuestra cobertura principal es Bogotá, también atendemos donaciones en municipios cercanos como Soacha, Chía, Cota, Cajicá, Mosquera y Funza según disponibilidad. Lo mejor es que llenes el formulario indicando tu ubicación y nosotros confirmamos contigo si podemos recoger tus equipos.",
      },
      {
        q: "¿Tienen un punto físico para llevar mi computador en Bogotá?",
        a: "Si prefieres entregar tu equipo personalmente, podemos coordinar un punto de entrega. Sin embargo, para la mayoría de las personas lo más práctico es la recogida a domicilio gratuita: así donas tu computador sin moverte de casa o de la oficina. Escríbenos por el formulario y te indicamos la mejor opción según tu caso.",
      },
      {
        q: "¿Dónde donar computadores empresariales en Bogotá?",
        a: "Las empresas en Bogotá pueden donar sus computadores en desuso directamente con nosotros. Coordinamos una recogida adaptada al volumen de equipos, ya sean 5, 50 o más, en oficinas, bodegas o sedes corporativas. Entregamos certificado de donación y, cuando se requiere, soporte para la trazabilidad de los equipos.",
      },
      {
        q: "¿Cuál es la mejor fundación para donar computadores en Bogotá?",
        a: "La mejor fundación es la que aprovecha tu equipo al máximo y es transparente con su destino. En Reciclando Unidos reparamos lo que sirve, lo entregamos a estudiantes y comunidades, reciclamos responsablemente lo que no funciona y te damos un certificado de donación. Sumado a la recogida a domicilio gratis, hacemos que donar en Bogotá sea fácil y confiable.",
      },
      {
        q: "¿Puedo donar computadores en Bogotá sin costo?",
        a: "Sí, donar con nosotros es completamente gratis. No cobramos por recibir tu equipo ni por la recogida a domicilio en Bogotá. Tú no pagas nada: solo nos avisas, agendamos y pasamos por tus computadores. El único 'costo' es el de unos minutos llenando el formulario.",
      },
      {
        q: "¿Recogen computadores en conjuntos residenciales y oficinas en Bogotá?",
        a: "Claro que sí. Recogemos computadores en casas, apartamentos, conjuntos residenciales, oficinas, locales y edificios corporativos en Bogotá. Coordinamos con portería o administración cuando es necesario para que la entrega sea sencilla y segura para todos.",
      },
      {
        q: "¿Donan los computadores recibidos en Bogotá a comunidades de la misma ciudad?",
        a: "Buena parte de los equipos donados en Bogotá se quedan beneficiando a estudiantes, escuelas y comunidades de la ciudad y la región. Según las necesidades, también pueden apoyar proyectos educativos en otras zonas del país. En todos los casos, el objetivo es el mismo: que tu computador llegue a quien de verdad lo necesita.",
      },
    ],
  },
  {
    id: "como-donar",
    eyebrow: "Cómo donar",
    title: "Cómo donar computadores paso a paso",
    intro:
      "Donar tu computador es muy fácil. Aquí te explicamos cómo es el proceso, qué necesitas y cómo agendar la recogida a domicilio gratuita.",
    items: [
      {
        q: "¿Cómo dono mi computador paso a paso?",
        a: "El proceso es sencillo: 1) Llenas el formulario de donación con tus datos y los equipos que quieres entregar. 2) Coordinamos contigo el día y la hora de la recogida a domicilio. 3) Pasamos por tus computadores sin costo. 4) Reacondicionamos o reciclamos los equipos. 5) Te enviamos tu certificado de donación. Tú no tienes que desplazarte ni pagar nada.",
      },
      {
        q: "¿Qué necesito para donar un computador?",
        a: "Solo necesitas el equipo que quieres donar y unos minutos para llenar el formulario con tus datos de contacto y tu dirección en Bogotá. No requieres factura, ni que el computador funcione, ni accesorios completos. Nosotros nos encargamos del resto, incluida la recogida a domicilio.",
      },
      {
        q: "¿Cómo agendo la recogida a domicilio?",
        a: "Después de llenar el formulario de donación, nos comunicamos contigo para coordinar el día y la hora que mejor te convengan. Acordamos un horario, confirmamos la dirección y nuestro equipo pasa a recoger los computadores. Todo el proceso de agendamiento es gratuito y sin compromiso.",
      },
      {
        q: "¿Puedo donar varios computadores a la vez?",
        a: "Sí, puedes donar uno o varios computadores en la misma recogida. Tanto si tienes un solo equipo en casa como si manejas un lote de varias unidades de una empresa, coordinamos una sola visita para recoger todo. Solo indícanos la cantidad aproximada en el formulario.",
      },
      {
        q: "¿Cómo dono computadores si soy una empresa?",
        a: "Las empresas llenan el mismo formulario indicando el número aproximado de equipos y la sede. Nosotros coordinamos una recogida adaptada al volumen y, si lo necesitan, apoyamos con la documentación para la baja de activos. Al final entregamos el certificado de donación correspondiente.",
      },
      {
        q: "¿Tengo que borrar mis datos antes de donar?",
        a: "Si puedes, te recomendamos respaldar tu información y borrar tus archivos antes de entregar el equipo, por tu tranquilidad. De todos modos, durante el reacondicionamiento formateamos los discos y eliminamos los datos para que ningún archivo tuyo quede en el computador que se va a reutilizar.",
      },
      {
        q: "¿Cómo sé que mi donación llegó a buen destino?",
        a: "Te entregamos un certificado de donación que respalda tu aporte. Además, en Reciclando Unidos compartimos el impacto de nuestra labor para que veas cómo los equipos donados llegan a estudiantes y comunidades. Si tienes una donación grande, podemos darte mayor detalle del destino de los equipos.",
      },
      {
        q: "¿Puedo donar otros equipos además de computadores?",
        a: "Sí. Aunque nuestro foco son los computadores de escritorio y portátiles, también recibimos periféricos y otros equipos tecnológicos como monitores, teclados, mouse y, en algunos casos, tablets o impresoras. Indícanos en el formulario qué tienes y te confirmamos qué podemos recibir.",
      },
      {
        q: "¿Cuánto tiempo tarda el proceso de donación?",
        a: "Llenar el formulario toma menos de tres minutos. El agendamiento de la recogida suele coordinarse en pocos días, según tu disponibilidad y la nuestra. La recogida en sí es rápida: pasamos, recibimos los equipos y listo. En poco tiempo tu donación ya estará en camino a transformar vidas.",
      },
      {
        q: "¿Cómo dono si no tengo el cargador o accesorios?",
        a: "No hay problema. Puedes donar tu computador aunque no tengas el cargador, el mouse, el teclado u otros accesorios. Nosotros completamos o conseguimos lo que falte durante el reacondicionamiento. Lo importante es que el equipo no termine como basura electrónica.",
      },
    ],
  },
  {
    id: "proceso-recogida-certificado",
    eyebrow: "Proceso y certificado",
    title: "Recogida a domicilio, certificado y destino de tu donación",
    intro:
      "Resolvemos tus dudas sobre la recogida gratuita, el certificado de donación y qué ocurre con tu computador después de donarlo.",
    items: [
      {
        q: "¿La recogida a domicilio tiene costo?",
        a: "No, la recogida a domicilio es totalmente gratuita en Bogotá. No cobramos transporte ni ningún otro valor por pasar a recoger tus computadores. Donar con nosotros no te cuesta nada: ese es justamente el sentido de facilitarte al máximo el proceso.",
      },
      {
        q: "¿Cómo es el proceso de recogida a domicilio?",
        a: "Una vez agendamos día y hora, nuestro equipo se desplaza hasta la dirección que nos indicaste en Bogotá, recibe los computadores y verifica la donación. Tú no tienes que cargar nada pesado ni salir de casa o de la oficina. Es un proceso rápido, cómodo y sin costo.",
      },
      {
        q: "¿Me entregan un certificado de donación?",
        a: "Sí. Como parte del proceso te entregamos un certificado de donación que respalda formalmente tu aporte a la Fundación Reciclando Unidos. Este documento es útil tanto para personas como para empresas que quieren dejar constancia de su contribución.",
      },
      {
        q: "¿El certificado de donación sirve para temas tributarios?",
        a: "El certificado deja constancia oficial de tu donación. En Colombia, las donaciones a ciertas entidades sin ánimo de lucro pueden tener efectos tributarios, pero esto depende de tu situación específica y de la normativa vigente. Te recomendamos validar con tu contador o asesor tributario cómo aplica en tu caso.",
      },
      {
        q: "¿Qué pasa con mi computador después de donarlo?",
        a: "Tu computador entra a un proceso de evaluación. Si sirve o se puede reparar, lo reacondicionamos y lo entregamos a estudiantes y comunidades que lo necesitan. Si ya no es aprovechable, lo desensamblamos y reciclamos de forma responsable, evitando que contamine. Nada se desperdicia.",
      },
      {
        q: "¿Reparan los computadores que reciben?",
        a: "Sí. Una parte central de nuestra labor es reparar y reacondicionar los equipos donados para que vuelvan a funcionar. Cambiamos piezas, limpiamos los componentes, formateamos e instalamos lo necesario para que el computador quede listo para una nueva vida útil en manos de quien lo recibe.",
      },
      {
        q: "¿Qué hacen con los equipos que ya no funcionan?",
        a: "Los equipos que no se pueden reparar se gestionan como residuos de aparatos eléctricos y electrónicos. Los desensamblamos y enviamos sus materiales a reciclaje responsable, recuperando metales y componentes y evitando que terminen contaminando rellenos sanitarios o el medio ambiente.",
      },
      {
        q: "¿Cómo protegen mis datos del computador donado?",
        a: "Durante el reacondicionamiento formateamos los discos y eliminamos la información para que tus archivos no queden en el equipo reutilizado. Aun así, por tu tranquilidad, te sugerimos respaldar y borrar tus datos antes de entregar el computador.",
      },
      {
        q: "¿Puedo hacer seguimiento a mi donación?",
        a: "Sí, especialmente en donaciones de empresas o de varios equipos podemos darte información sobre el destino de los computadores. Para donaciones individuales, el certificado de donación es tu respaldo, y a través de nuestros canales compartimos el impacto general de la labor que tu aporte hace posible.",
      },
      {
        q: "¿Necesito factura o documentos del computador para donarlo?",
        a: "No necesitas factura ni documentos del equipo para donarlo. Basta con que seas el propietario o estés autorizado para entregarlo. Para empresas, podemos coordinar la documentación interna que requieran para la baja de sus activos.",
      },
    ],
  },
  {
    id: "equipos-estado-requisitos",
    eyebrow: "Equipos y requisitos",
    title: "Qué computadores y equipos puedes donar",
    intro:
      "¿No sabes si tu equipo sirve para donar? Aquí te contamos qué computadores recibimos, incluso dañados, antiguos o incompletos.",
    items: [
      {
        q: "¿Reciben computadores dañados o que no encienden?",
        a: "Sí. Recibimos computadores dañados, que no encienden o que están incompletos. Muchas veces un equipo que para ti ya no funciona se puede reparar y reacondicionar con repuestos. Y si definitivamente no es recuperable, lo reciclamos de forma responsable. En ambos casos, tu donación tiene un destino útil.",
      },
      {
        q: "¿Qué tipo de computadores puedo donar?",
        a: "Puedes donar computadores de escritorio (torres) y portátiles de cualquier marca. No importa si son recientes o de hace varios años, si funcionan bien o tienen fallas. Recibimos todos para repararlos cuando es posible o reciclarlos cuando no.",
      },
      {
        q: "¿Reciben computadores muy antiguos?",
        a: "Sí. Aunque un computador antiguo no siempre se puede reutilizar, muchos todavía sirven para tareas básicas o como fuente de repuestos para reparar otros equipos. Y lo que no se aprovecha, se recicla correctamente. Así que sí, también recibimos equipos viejos.",
      },
      {
        q: "¿Donan computadores de escritorio y portátiles?",
        a: "Recibimos ambos: computadores de escritorio completos (torre, y si los tienes, monitor, teclado y mouse) y portátiles. Si solo tienes la torre o solo el portátil sin accesorios, igual puedes donarlo. Cualquier equipo suma.",
      },
      {
        q: "¿Reciben monitores, teclados y otros periféricos?",
        a: "Sí. Además de los computadores, recibimos monitores, teclados, mouse, cables y otros periféricos. Estos elementos nos ayudan a completar equipos reacondicionados que entregamos a estudiantes y comunidades. Inclúyelos en tu donación si los tienes disponibles.",
      },
      {
        q: "¿Sirve donar un computador sin disco duro?",
        a: "Sí, sirve. Un computador sin disco duro sigue siendo útil: podemos instalarle uno nuevo o usar sus piezas para reparar otros equipos. Si retiraste el disco por seguridad de tus datos, no hay problema en donar el resto del equipo.",
      },
      {
        q: "¿Hay un mínimo de computadores para donar?",
        a: "No. Puedes donar un solo computador o varios, según lo que tengas. Toda donación cuenta, sea individual o de un lote completo de una empresa. No exigimos una cantidad mínima para pasar a recogerlos.",
      },
      {
        q: "¿Reciben tablets, celulares o impresoras?",
        a: "En muchos casos sí recibimos tablets, algunos celulares e impresoras, además de los computadores. Como no siempre podemos procesar todos los tipos de equipo, lo mejor es que indiques en el formulario qué tienes y te confirmamos qué podemos recibir en tu donación.",
      },
      {
        q: "¿Qué pasa si mi computador tiene piezas faltantes?",
        a: "No hay inconveniente. Recibimos computadores incompletos o con piezas faltantes. Durante el reacondicionamiento completamos lo que falte o usamos el equipo como fuente de repuestos para reparar otros. Tu donación sirve aunque el computador no esté completo.",
      },
      {
        q: "¿Reciben computadores con sistema operativo desactualizado?",
        a: "Sí. El estado del sistema operativo no es problema, porque durante el reacondicionamiento formateamos el equipo e instalamos lo necesario para dejarlo listo. Un sistema viejo o desactualizado no impide donar tu computador.",
      },
    ],
  },
];

// SEO: datos estructurados FAQPage (JSON-LD) para resultados enriquecidos en Google
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_SECTIONS.flatMap((section) =>
    section.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    }))
  ),
};

export default function DonarComputadoresPage() {
  return (
    <div className="flex flex-col overflow-x-clip">
      <SectionImageComponent
        src={"/portada-solicitar-computador.webp"}
        w={3002}
        h={2100}
        alt={"Donar computadores en Bogotá con recogida a domicilio gratis"}
        title={"Donar computadores en Bogotá"}
        subtitle={
          "¿Tienes un computador que ya no usas? Dónalo"
        }
        className={"object-[center_40%] md:object-[center_60%]"}
      />
      <DonationForm />
      <DonacionInfo />


      {/* Proceso de donación paso a paso */}
      <ProcesoDonacion />

      <BeneficiosUnesco />

      <QueHacemos />

      <DonacionInfoExtra />

      <LatestPosts limit={9} cat="proyectos" title="Últimos Proyectos" />

      <FaqSeo sections={FAQ_SECTIONS} />
    </div>
  );
}