import SectionImageComponent from "@/components/SectionImageComponent";
import LatestPosts from "@/components/LatestPosts";
import MaterialsComponent from "@/components/MaterialsComponent";

export const metadata = {
  title: "Talleres gratuitos de alfabetización digital en Bogotá",
  description:
    "Talleres y cursos gratuitos de alfabetización digital en Bogotá y Cundinamarca: programación con Python, habilidades digitales para adultos mayores, mantenimiento de computadores y herramientas de IA.",
  alternates: { canonical: "/nuevas-iniciativas" },
  openGraph: {
    title: "Talleres gratuitos de alfabetización digital en Bogotá",
    description:
      "Cursos gratuitos de programación, habilidades digitales y mantenimiento de computadores, con equipos donados y reacondicionados por la Fundación Reciclando Unidos.",
    type: "website",
    url: "/nuevas-iniciativas",
    locale: "es_CO",
    siteName: "Fundación Reciclando Unidos",
    images: [
      {
        url: "/imagepublic.jpg", // idealmente una imagen propia de los talleres, 1200x630
        width: 1200,
        height: 630,
        alt: "Talleres de alfabetización digital de la Fundación Reciclando Unidos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Talleres gratuitos de alfabetización digital en Bogotá",
    description:
      "Cursos gratuitos de programación, habilidades digitales y mantenimiento de computadores para todas las edades.",
    images: ["/imagepublic.jpg"],
  },
};

const materials = [
  {
    id: "Experiencia para profesionales",
    title: "Experiencia para profesionales y estudiantes",
    image: "practicantes",
    alt: "Estudiantes universitarios con computadores donados",
  },
  {
    id: "rurales",
    title: "Aprendizaje de hablidades digitales para adultos mayores",
    image: "/persona-mayor-2.webp",
    alt: "Estudiantes rurales accediendo a tecnología",
  },
  {
    id: "colegios",
    title: "Programacion basica e intermedia con Python",
    image: "pictoblox.jpg",
    alt: "Entrega de computadores a un colegio",
  },
  {
    id: "fundaciones",
    title: "Arquitectura y mantenimiento de computadores",
    image: "/microprocesador.webp",
    alt: "Computadores donados a fundaciones",
  },
];


export default function TalleresPage() {
  return (
    <div className="flex flex-col overflow-x-clip">
      <SectionImageComponent
        src={"/bg-cursos_ztDwLdDDfc.webp"}
        w={3024}
        h={4032}
        alt={"Talleres gratuitos de alfabetización digital en Bogotá"}
        title={"Talleres de alfabetización digital"}
      />
      <MaterialsComponent materials={materials} title="Voluntariado en alfabetización digital" text="Ofertamos un voluntariado con profesionales y estudiantes para apoyar la educacion tecnologica de adultos mayores, estudiantes de secundaria y bachillerato aprender a programar, arquitectura de computadores, habilidades ditales, uso de herramientas de inteligencia artificial." classNameHeadSection="p-8 green-ru-div rounded-3xl" link={"/"}
        textLink={"Dona tus computadores y apoya los talleres"} />
      <LatestPosts limit={9} cat="cursos" />
    </div>
  );
}