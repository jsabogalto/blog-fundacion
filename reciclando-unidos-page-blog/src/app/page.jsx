import ImpactComponent from "@/components/ImpactComponent";
import HeroSection from "@/components/HeroSection";
import CarrouselProvidersComponent from "@/components/CarrouselProvidersComponent";
import ServicesComponent from "@/components/ServicesComponent";
import DigitalEquity from "@/components/DigitalEquityComponent";
import LatestPosts from "@/components/LatestPosts";
import FaqSeo from "@/components/FaqSeo";
// SEO: metadatos renderizados en el servidor
export const metadata = {
  title: "Reciclaje electrónico y donación de tecnología en Bogotá",
  description:
    "Reparamos, donamos y reciclamos computadores y tecnología en Bogotá y Cundinamarca para apoyar la educación. Recogida gratis a domicilio y certificado de donación.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_CO",
    title: "Dona computadores y transforma la educación en Bogotá",
    description:
      "Al donar computadores apoyas la educación de colegios, jardines y estudiantes. Reacondicionamos, donamos y reciclamos con recogida gratis en Bogotá.",
    url: "/",
    images: [
      {
        url: "/imagepublic.jpg",
        width: 1200,
        height: 630,
        alt: "Donar computadores para la educación — Fundación Reciclando Unidos",
      },
    ],
  },
};
const FAQ_SECTIONS = [
  {
    id: "donaciones",
    eyebrow: "Donaciones",
    title: "Donar computadores: dónde y cómo hacerlo",
    intro:
      "Todo lo que necesitas saber para donar tus equipos de forma fácil, segura y con impacto.",
    items: [
      {
        q: "¿Dónde puedo donar computadores en Colombia?",
        a: "Puedes donar tus computadores a la Fundación Reciclando Unidos, una organización sin ánimo de lucro en Colombia dedicada a reparar y reacondicionar tecnología. Somos una de las fundaciones que donan computadores a comunidades con menos oportunidades, y recibimos tanto equipos de escritorio como portátiles.",
      },
      {
        q: "¿Cómo es el proceso de donar computadores usados?",
        a: "Donar computadores usados con nosotros es sencillo: nos cuentas qué equipos tienes, coordinamos la recogida y nos encargamos del resto. Revisamos cada dispositivo, lo reparamos cuando es posible y lo entregamos a quien lo necesita; lo que no sirve, lo reciclamos de forma responsable.",
      },
      {
        q: "¿Qué equipos reciben en donación?",
        a: "Recibimos computadores de escritorio, portátiles, monitores y componentes, además de otro material electrónico. No importa si el equipo está un poco viejo o no enciende: muchas piezas se aprovechan para reacondicionar otros dispositivos o se reciclan adecuadamente.",
      },
      {
        q: "¿Donar computadores tiene algún costo?",
        a: "No. Donar es completamente gratuito y, además, hacemos domicilio sin costo en Bogotá para recoger tu donación. Nuestro objetivo es que dar una segunda vida a tus equipos sea lo más fácil posible para ti.",
      },
      {
        q: "¿Qué pasa con la información de mi disco duro?",
        a: "La seguridad de tus datos es prioritaria. Antes de reacondicionar cualquier equipo realizamos un borrado seguro de la información almacenada, para que ningún dato personal quede accesible. Puedes donar con total tranquilidad.",
      },
      {
        q: "¿Por qué elegir una fundación de donación de computadores?",
        a: "Entre las fundaciones para donar computadores, Reciclando Unidos garantiza que tu equipo tenga una segunda vida útil y un destino responsable. Como fundación de donación de computadores, unimos el reaprovechamiento tecnológico con un impacto social y ambiental real.",
      },
      {
        q: "¿Dónde donar computadores usados en Colombia?",
        a: "Si te preguntas dónde donar computadores usados en Colombia, la Fundación Reciclando Unidos recibe tus equipos para repararlos, reacondicionarlos y entregarlos a quienes más los necesitan. Aceptamos portátiles y computadores de escritorio, funcionen o no, y nos encargamos de todo el proceso por ti.",
      },
      {
        q: "¿Cómo donar computadores paso a paso?",
        a: "Donar computadores con nosotros toma tres pasos: nos escribes contándonos qué equipos tienes, agendamos la recogida (gratis a domicilio en Bogotá) y nosotros revisamos, reacondicionamos o reciclamos cada dispositivo. Es la forma más fácil y segura de dar una segunda vida a tu tecnología.",
      },
      {
        q: "¿Puedo donar un solo computador o solo se reciben donaciones grandes?",
        a: "Puedes donar desde un solo computador. Cada equipo cuenta y suma a nuestra labor, así que no necesitas tener varios dispositivos para hacer tu donación de computadores. Tanto personas como empresas son bienvenidas.",
      },
      {
        q: "¿Las empresas pueden donar computadores dados de baja?",
        a: "Sí. Las empresas que renuevan su tecnología pueden donar computadores dados de baja en lugar de almacenarlos o desecharlos. Coordinamos la recogida del lote, realizamos borrado seguro de la información y damos a cada equipo un destino responsable, social y ambiental.",
      },
      {
        q: "¿Entregan algún comprobante o certificado de donación?",
        a: "Sí, podemos entregarte una constancia de tu donación de computadores que respalda tu aporte a nuestra labor social y ambiental. Si necesitas el documento para tu empresa o para tus registros, solo coméntanoslo al coordinar la entrega.",
      },
      {
        q: "¿Qué requisitos hay para donar computadores?",
        a: "Donar computadores no tiene requisitos complicados: basta con que quieras darle una segunda vida a tu equipo. No importa la marca, la antigüedad ni si enciende; nosotros evaluamos qué piezas se reacondicionan y qué material se recicla de forma responsable.",
      },
      {
        q: "¿Donar computadores genera algún beneficio para quien dona?",
        a: "Además del impacto social y ambiental, donar computadores te permite liberar espacio, deshacerte de equipos en desuso de forma responsable y contribuir a cerrar la brecha digital. Como organización sin ánimo de lucro, podemos darte una constancia de tu aporte.",
      },
      {
        q: "¿Cuánto tarda la recogida de mi donación?",
        a: "Una vez nos confirmas los equipos que vas a donar, coordinamos la recogida a domicilio en Bogotá en el menor tiempo posible, según la agenda disponible. Buscamos que donar computadores sea cómodo y rápido para ti.",
      },
    ],
  },
  {
    id: "reciclaje",
    eyebrow: "Reciclaje",
    title: "Reciclaje electrónico y manejo de desechos electrónicos",
    intro:
      "Cómo damos disposición final responsable a la tecnología y por qué importa.",
    items: [
      {
        q: "¿Qué es el reciclaje electrónico y por qué importa?",
        a: "El reciclaje electrónico consiste en recuperar, reutilizar y dar disposición final adecuada a los aparatos tecnológicos que ya no se usan. Evita que componentes contaminantes terminen en la basura y permite aprovechar materiales valiosos, reduciendo el impacto ambiental de la tecnología.",
      },
      {
        q: "¿Qué hago con mis desechos electrónicos?",
        a: "En lugar de botar tus desechos electrónicos, puedes entregárnoslos. Nos encargamos de su disposición final y aprovechamiento: reparamos lo que se puede reacondicionar y reciclamos de manera segura lo que no, cerrando correctamente el ciclo de vida de cada dispositivo.",
      },
      {
        q: "¿Por qué no debo botar los aparatos electrónicos a la basura?",
        a: "Los desechos electrónicos contienen materiales contaminantes que dañan el suelo y el agua si terminan en un relleno común. Reciclarlos correctamente protege el medio ambiente y permite recuperar metales y piezas reutilizables.",
      },
      {
        q: "¿Reciben otros aparatos además de computadores?",
        a: "Sí. Recibimos todo tipo de material electrónico, no solo computadores. Si tienes dudas sobre un equipo en particular, escríbenos y te confirmamos si podemos recibirlo y darle el tratamiento adecuado.",
      },
      {
        q: "¿Existen fundaciones de reciclaje confiables en Colombia?",
        a: "Reciclando Unidos es una de las fundaciones de reciclaje que operan en Colombia con un enfoque responsable. Combinamos el reciclaje electrónico con la donación de equipos reacondicionados, para que el aprovechamiento tecnológico también genere un beneficio social.",
      },
      {
        q: "¿Ofrecen mantenimiento de computadores?",
        a: "Como parte del reacondicionamiento, realizamos mantenimiento de computadores: limpieza, reparación de fallas, actualización de piezas y puesta a punto del software. Así, los equipos donados llegan en condiciones funcionales a quienes los reciben.",
      },
      {
        q: "¿Cómo reciclar desechos electrónicos en Colombia?",
        a: "Para reciclar desechos electrónicos en Colombia de forma responsable, puedes entregarlos a la Fundación Reciclando Unidos en lugar de botarlos a la basura. Recuperamos lo que sirve, reacondicionamos equipos y damos disposición final adecuada a los materiales contaminantes.",
      },
      {
        q: "¿Dónde reciclar desechos electrónicos cerca de mí?",
        a: "Si buscas dónde reciclar desechos electrónicos cerca de ti, escríbenos: en Bogotá hacemos recogida a domicilio y, si estás en otra ciudad, te orientamos sobre la mejor manera de hacer llegar tu material electrónico para reciclarlo correctamente.",
      },
      {
        q: "¿Qué son los residuos de aparatos eléctricos y electrónicos (RAEE)?",
        a: "Los RAEE son todos los aparatos eléctricos y electrónicos que llegan al final de su vida útil: computadores, celulares, monitores, cables y más. Reciclar estos desechos electrónicos evita que sus componentes contaminantes terminen en rellenos sanitarios y permite recuperar materiales valiosos.",
      },
      {
        q: "¿Reciclan baterías, cables y otros componentes?",
        a: "Sí. Además de computadores, recibimos baterías, cables, fuentes y componentes para reciclar de forma segura. Reciclar desechos electrónicos completos evita que materiales peligrosos contaminen el suelo y el agua.",
      },
      {
        q: "¿Por qué es importante reciclar los desechos electrónicos?",
        a: "Reciclar desechos electrónicos protege el medio ambiente, evita la contaminación por metales pesados y permite reaprovechar recursos escasos. Además, muchos equipos pueden reacondicionarse y volver a usarse, generando un beneficio social adicional.",
      },
      {
        q: "¿Qué materiales se recuperan al reciclar electrónicos?",
        a: "Al reciclar desechos electrónicos se recuperan metales como cobre, aluminio y oro presentes en placas y componentes, además de plásticos y piezas reutilizables. Ese aprovechamiento reduce la necesidad de extraer nuevos materiales y disminuye el impacto ambiental.",
      },
      {
        q: "¿Reciclar desechos electrónicos con ustedes tiene algún costo?",
        a: "No. Recibir y reciclar tus desechos electrónicos es gratuito, y en Bogotá además ofrecemos recogida a domicilio sin costo. Nuestro objetivo es que dar disposición final responsable a tu tecnología sea fácil para todos.",
      },
      {
        q: "¿Qué pasa con los computadores que no se pueden reparar?",
        a: "Cuando un computador no se puede reacondicionar, aprovechamos sus piezas útiles para reparar otros equipos y reciclamos el resto de manera responsable. Así cerramos correctamente el ciclo de vida del dispositivo y reducimos los desechos electrónicos.",
      },
    ],
  },
  {
    id: "educacion",
    eyebrow: "Educación",
    title: "Educación, niñez e impacto social",
    intro:
      "Cómo la tecnología reacondicionada se convierte en oportunidades de aprendizaje.",
    items: [
      {
        q: "¿Qué fundaciones ayudan a la educación en Colombia?",
        a: "Existen varias fundaciones educativas en Colombia, y Reciclando Unidos es una de las fundaciones que ayudan a la educación llevando tecnología a quienes no tienen acceso. Creemos que un computador en las manos correctas abre puertas al aprendizaje y a nuevas oportunidades.",
      },
      {
        q: "¿Cómo ayuda Reciclando Unidos a los niños?",
        a: "Entre las fundaciones que ayudan a niños en Colombia, trabajamos para que más niñas y niños accedan a herramientas digitales. Los computadores reacondicionados llegan a estudiantes y comunidades, apoyando su educación y reduciendo la brecha tecnológica desde temprana edad.",
      },
      {
        q: "¿Ofrecen cursos gratuitos de tecnología?",
        a: "Sí. Como fundación que promueve la educación, ofrecemos cursos gratuitos de tecnología para que las personas aprendan a usar, cuidar y aprovechar sus equipos. La formación acompaña a la donación para que el impacto sea duradero.",
      },
      {
        q: "¿Cómo puedo solicitar un computador reacondicionado?",
        a: "Si necesitas un equipo, puedes solicitarlo a través de nuestra página de solicitud. Evaluamos cada caso para priorizar a estudiantes, familias y organizaciones que más se beneficien del acceso a la tecnología.",
      },
      {
        q: "¿Cómo ayuda la donación de computadores a cerrar la brecha digital?",
        a: "Cada computador donado se convierte en una oportunidad de estudio, trabajo o emprendimiento. Al unir donación, reacondicionamiento y educación, ayudamos a que comunidades con menos recursos accedan al mundo digital en condiciones más justas.",
      },
      {
        q: "¿Quiénes reciben los equipos reacondicionados?",
        a: "Los equipos llegan a estudiantes, familias y organizaciones comunitarias con necesidades reales. Priorizamos a quienes más se benefician del acceso a la tecnología para estudiar, capacitarse o mejorar su calidad de vida.",
      },
      {
        q: "¿Qué fundaciones educativas hay en Colombia?",
        a: "En Colombia existen diversas fundaciones educativas con distintos enfoques. Reciclando Unidos es una fundación que apoya la educación llevando computadores reacondicionados a estudiantes, colegios y comunidades, para que la tecnología deje de ser una barrera de acceso al aprendizaje.",
      },
      {
        q: "¿Cuáles son las fundaciones que apoyan la educación con tecnología?",
        a: "Entre las fundaciones que apoyan la educación, Reciclando Unidos se enfoca en el acceso tecnológico: reacondicionamos computadores y los entregamos a quienes los necesitan para estudiar. Unimos donación, reciclaje y formación para que el impacto educativo sea duradero.",
      },
      {
        q: "¿Cómo apoyan a las fundaciones que ayudan a los niños?",
        a: "Trabajamos junto a fundaciones que ayudan a los niños entregándoles computadores reacondicionados y acompañamiento en su uso. Un equipo en manos de un niño o niña abre puertas al aprendizaje, la creatividad y nuevas oportunidades.",
      },
      {
        q: "¿Pueden los colegios públicos solicitar computadores?",
        a: "Sí. Los colegios públicos, fundaciones educativas y jardines infantiles pueden solicitar computadores reacondicionados a través de nuestra página de solicitud. Priorizamos a las entidades que garantizan el derecho a la educación de las comunidades con menos recursos.",
      },
      {
        q: "¿Qué fundaciones tecnológicas trabajan por la educación?",
        a: "Reciclando Unidos es una de las fundaciones tecnológicas que trabajan por la educación en Colombia: convertimos tecnología en desuso en herramientas de aprendizaje. Nuestro enfoque une el reaprovechamiento de equipos con un impacto social y educativo medible.",
      },
      {
        q: "¿Ayudan a jardines infantiles y centros de educación inicial?",
        a: "Sí. Los jardines infantiles y centros de educación inicial pueden recibir equipos reacondicionados, porque creemos que el acceso a la tecnología debe empezar desde la primera infancia. Como fundación que apoya la educación, evaluamos cada caso para priorizar el mayor impacto.",
      },
      {
        q: "¿Cómo aporta la tecnología a la educación de los niños?",
        a: "Un computador permite a niñas y niños investigar, practicar, crear y acceder a contenidos que enriquecen su aprendizaje. Por eso, entre las fundaciones que ayudan a niños, llevamos equipos reacondicionados a estudiantes que de otra forma no tendrían acceso.",
      },
      {
        q: "¿Las fundaciones educativas pueden ser aliadas de Reciclando Unidos?",
        a: "Claro. Las fundaciones educativas y organizaciones que trabajan por la educación pueden aliarse con nosotros para recibir computadores reacondicionados o canalizar donaciones. Juntos ampliamos el alcance del reaprovechamiento tecnológico al servicio del aprendizaje.",
      },
    ],
  },
  {
    id: "fundacion",
    eyebrow: "La fundación",
    title: "Sobre Reciclando Unidos: una fundación tecnológica en Colombia",
    intro:
      "Quiénes somos, cómo trabajamos y de qué manera puedes sumarte.",
    items: [
      {
        q: "¿Qué es la Fundación Reciclando Unidos?",
        a: "Somos una fundación tecnológica sin ánimo de lucro en Colombia, dedicada a reparar, reacondicionar y donar tecnología a las comunidades con menos oportunidades. Recibimos material electrónico, nos encargamos de su disposición final y le damos un nuevo propósito.",
      },
      {
        q: "¿En qué se diferencian de otras fundaciones en Colombia?",
        a: "A difPreguntas frecuenteserencia de muchas fundaciones en Colombia, integramos en un solo movimiento el reciclaje electrónico, la donación de computadores y la educación tecnológica. Ese enfoque circular hace que cada equipo donado tenga un impacto social y ambiental medible.",
      },
      {
        q: "¿Reciclando Unidos es una fundación sin ánimo de lucro?",
        a: "Sí. Somos una organización sin ánimo de lucro: todo lo que recibimos se destina a reacondicionar equipos, formar personas y financiar nuestra labor social y ambiental, no a generar utilidades.",
      },
      {
        q: "¿Cómo financian su labor?",
        a: "Nos sostenemos gracias a las donaciones de equipos y material electrónico, al apoyo de aliados y voluntarios, y al aprovechamiento responsable de los recursos que recibimos. Cada aporte se reinvierte en nuestra misión.",
      },
      {
        q: "¿Cómo puedo colaborar o ser aliado de la fundación?",
        a: "Puedes colaborar donando tus computadores y material electrónico, difundiendo nuestra labor o sumándote como aliado o voluntario. Cada aporte ayuda a que más fundaciones y personas se beneficien del reaprovechamiento tecnológico.",
      },
      {
        q: "¿Dónde tienen cobertura?",
        a: "Operamos en Colombia, con recogida a domicilio gratuita en Bogotá para facilitar las donaciones. Si estás en otra ciudad, escríbenos y buscamos la mejor manera de coordinar tu aporte.",
      },
      {
        q: "¿Cuáles son las fundaciones que donan computadores en Colombia?",
        a: "Reciclando Unidos es una de las fundaciones que donan computadores en Colombia a estudiantes, familias, colegios y organizaciones comunitarias. Reacondicionamos equipos recibidos en donación y los entregamos a quienes más se benefician del acceso a la tecnología.",
      },
      {
        q: "¿Qué hace una fundación tecnológica como Reciclando Unidos?",
        a: "Una fundación tecnológica como Reciclando Unidos recupera, repara y reacondiciona equipos electrónicos para darles un nuevo propósito social. Integramos reciclaje de desechos electrónicos, donación de computadores y educación tecnológica en un solo modelo de impacto.",
      },
      {
        q: "¿Cómo sé que una fundación de donación de computadores es confiable?",
        a: "Una fundación de donación de computadores confiable es transparente con su labor, realiza borrado seguro de la información y le da un destino responsable a cada equipo. En Reciclando Unidos te contamos qué pasa con tu donación en cada etapa del proceso.",
      },
      {
        q: "¿Reciclando Unidos es una organización legalmente constituida?",
        a: "Somos una organización sin ánimo de lucro dedicada a la donación de computadores y al reciclaje de desechos electrónicos en Colombia. Si necesitas información formal sobre la fundación para una alianza o donación empresarial, con gusto te la compartimos.",
      },
      {
        q: "¿Cómo puedo contactar a la Fundación Reciclando Unidos?",
        a: "Puedes contactarnos a través de nuestros canales oficiales para donar computadores, solicitar un equipo, reciclar desechos electrónicos o proponer una alianza. Te responderemos para coordinar el siguiente paso de la forma más fácil para ti.",
      },
      {
        q: "¿Tienen programa de voluntariado?",
        a: "Sí. Quienes quieran sumarse pueden colaborar como voluntarios o aliados, difundiendo nuestra labor o apoyando el reacondicionamiento de equipos. Cada aporte ayuda a que más personas y fundaciones se beneficien del reaprovechamiento tecnológico.",
      },
      {
        q: "¿Qué diferencia a Reciclando Unidos de otras fundaciones tecnológicas?",
        a: "A diferencia de otras fundaciones tecnológicas, integramos en un mismo movimiento el reciclaje electrónico, la donación de computadores y la educación. Ese enfoque circular hace que cada equipo donado genere a la vez un impacto ambiental y social real.",
      },
      {
        q: "¿Puedo apoyar la fundación sin tener computadores para donar?",
        a: "Sí. Aunque no tengas equipos para donar, puedes apoyar difundiendo nuestra labor, conectándonos con empresas que renuevan tecnología o sumándote como voluntario. Toda ayuda contribuye a llevar más computadores reacondicionados a quienes los necesitan.",
      },
    ],
  },
  {
    id: "bogota",
    eyebrow: "Bogotá y cobertura",
    title: "Dónde donar computadores en Bogotá y otras ciudades",
    intro:
      "Recogida a domicilio gratuita en Bogotá y opciones para donar desde otras ciudades.",
    items: [
      {
        q: "¿Dónde donar computadores en Bogotá?",
        a: "Si buscas dónde donar computadores en Bogotá, la Fundación Reciclando Unidos hace recogida a domicilio gratuita en la ciudad. Solo nos cuentas qué equipos quieres donar y coordinamos la recogida para que el proceso sea cómodo y sin costo para ti.",
      },
      {
        q: "¿Hacen recogida de computadores a domicilio en Bogotá?",
        a: "Sí. En Bogotá realizamos recogida a domicilio sin costo para facilitar tu donación de computadores. No tienes que desplazarte: vamos hasta donde estén tus equipos para darles una segunda vida.",
      },
      {
        q: "¿Dónde donar computadores usados en Bogotá de forma gratuita?",
        a: "Donar computadores usados en Bogotá con Reciclando Unidos es totalmente gratis e incluye recogida a domicilio. Recibimos equipos de escritorio y portátiles, funcionen o no, y nos encargamos de repararlos o reciclarlos responsablemente.",
      },
      {
        q: "¿Empresas en Bogotá pueden donar lotes de computadores?",
        a: "Sí. Si tu empresa en Bogotá renueva su tecnología, puede donar lotes de computadores en lugar de almacenarlos. Coordinamos la recogida, realizamos borrado seguro de datos y entregamos una constancia de la donación.",
      },
      {
        q: "¿Cómo coordino la recogida de mi donación en Bogotá?",
        a: "Para coordinar la recogida en Bogotá, escríbenos contándonos qué equipos vas a donar y tu ubicación. Agendamos una fecha y vamos a recoger tu donación de computadores sin que tengas que asumir ningún costo.",
      },
      {
        q: "¿Puedo donar computadores si vivo fuera de Bogotá?",
        a: "Sí. Aunque la recogida a domicilio gratuita es en Bogotá, si estás en otra ciudad escríbenos y buscamos juntos la mejor manera de coordinar tu donación de computadores o el envío de tus equipos.",
      },
      {
        q: "¿Reciben donaciones en otras ciudades de Colombia?",
        a: "Operamos en Colombia con base en Bogotá, pero si te encuentras en otra ciudad y quieres donar computadores o reciclar desechos electrónicos, contáctanos. Evaluamos cada caso para encontrar la forma más práctica de recibir tu aporte.",
      },
      {
        q: "¿Cuál es la mejor forma de donar computadores en Bogotá?",
        a: "La forma más fácil de donar computadores en Bogotá es escribirnos, agendar la recogida a domicilio gratuita y dejar el resto en nuestras manos. Nosotros revisamos, reacondicionamos o reciclamos cada equipo de manera responsable.",
      },
      {
        q: "¿Hay un punto físico para entregar donaciones en Bogotá?",
        a: "Si prefieres entregar tu donación directamente en lugar de programar una recogida, escríbenos y te indicamos el punto y horario disponibles en Bogotá. Así te damos la opción más cómoda para donar tus computadores.",
      },
      {
        q: "¿La recogida a domicilio en Bogotá realmente no tiene costo?",
        a: "Correcto. La recogida a domicilio en Bogotá es completamente gratuita, igual que la donación. Queremos que dar una segunda vida a tus computadores sea sencillo y sin gastos para ti.",
      },
    ],
  }
];
export default function Home() {
  return (

    <div className="flex flex-col space-y-16 md:space-y-24">
      <div className="flex flex-col justify-between gap-12">
        <HeroSection />
        <CarrouselProvidersComponent />
      </div>
      <ServicesComponent />
      <DigitalEquity />
      <ImpactComponent />
      <LatestPosts limit={12} cat={"reciclaje-electronico"} title={"Reciclaje Electrónico"}/>
      <FaqSeo sections={FAQ_SECTIONS} />
    </div>
  );
}
