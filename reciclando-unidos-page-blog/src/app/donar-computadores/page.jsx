import ButtonComponent from "@/components/ButtonComponent";
import PdfViewer from "@/components/PdfViewer";
import DonacionInfo from "@/components/DonacionInfo";
import SectionImageComponent from "@/components/SectionImageComponent";
import FaqSeo from "@/components/FaqSeo";
import LatestPosts from "@/components/LatestPosts";

// SEO: metadatos renderizados en el servidor
export const metadata = {
  title: "Donar computadores | Reciclando Unidos",
  description:
    "Dónde donar computadores en Bogotá? Recogemos tus equipos usados a domicilio GRATIS. Obtén certificado de donación y apoya la educación con tecnología..",
  alternates: {
    canonical: `/donar-computadores`,
  },
  openGraph: {
    title: "Donar computadores | Reciclando Unidos",
    description:
      "Proceso de donación, beneficios y servicio de recogida a domicilio gratuito.",
    type: "website",
    url: `/donar-computadores`,
  },
};
const FAQ_SECTIONS = [{
  id: "beneficios",
  eyebrow: "Beneficios",
  title: "Beneficios de donar computadores: para ti, los estudiantes y la sociedad",
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
}]
export default function EstatutosPage() {
  return (
    <div className="flex flex-col overflow-x-clip">
      <SectionImageComponent src={"/portada-solicitar-computador.webp"} w={3002} h={2100} alt={"prueba"} title={"¿Tienes un computador que ya no usas?. Donalo"} subtitle={"Recibimos computadores usados, dañados o en desuso para darles una segunda vida."} className={"object-[center_40%] md:object-[center_60%]"} />

      <DonacionInfo />

      {/* SERVICIO A DOMICILIO object-[center_40%] md:object-[center_60%]*/}
      <div className="mx-auto grid max-w-[1400px] gap-14 px-8 py-16 md:grid-cols-2 md:px-12">
        <div className="text-gray-600">
          <p className="paragraph leading-relaxed">
            Para que esta donación sea un verdadero paso hacia el cambio, queremos que conozcas los detalles de cómo trabajamos en Reciclando Unidos. Lee el documento de la derecha, donde encontrarás toda la información sobre requisitos, procedimiento y compromisos. Cuando estés listo, haz clic en 'Continuar'.
          </p>

          <ButtonComponent
            className="bg-green-ru text-white mt-8"
            text="Continuar"
            link="https://docs.google.com/forms/d/e/1FAIpQLScmZNIxjs8Y73kafAdJ_0Bxp9L-P8w3txfekwrRnmJG9D-6Bw/viewform?usp=dialog"
          />
        </div>

        <div className="h-full w-full">
          <PdfViewer file="https://drive.google.com/file/d/1NLBLxKzqdrNODzydpTJbB4e-qQZmE5_W/view?usp=drive_link" />
        </div>
      </div>
      <div className="flex flex-col gap-8 mt-8">
        <h2 className="subtitle text-center">Ultimas novedades</h2>
        <LatestPosts limit={6} />
      </div>
      <FaqSeo sections={FAQ_SECTIONS} />
    </div>
  );
}