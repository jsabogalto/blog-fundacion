import ImageComponent from "@/components/ImageComponent";
import ButtonComponent from "@/components/ButtonComponent";
import PdfViewer from "@/components/PdfViewer";
import SectionImageComponent from "@/components/SectionImageComponent";

export const metadata = {
  // `absolute` controla el title y evita la doble marca
  title: {
    absolute: "Cómo Solicitar un Computador Donado | Reciclando Unidos",
  },
  description:
    "Conoce los requisitos, el reglamento y los compromisos para solicitar la donación de un computador reacondicionado a la Fundación Reciclando Unidos.",
  keywords: [
    "cómo solicitar computador donado",
    "requisitos para recibir computador donado",
    "solicitar computador reacondicionado",
    "donación de computadores para estudiantes",
  ],
  alternates: { canonical: "/solicitud-computadores" },
  openGraph: {
    title: "Cómo solicitar un computador donado | Fundación Reciclando Unidos",
    description:
      "Requisitos, reglamento y compromisos para solicitar la donación de un computador reacondicionado.",
    type: "website",
    url: "/solicitud-computadores",
    locale: "es_CO",
    siteName: "Fundación Reciclando Unidos",
    images: [
      {
        url: "/imagepublic.jpg", // 1200×630
        width: 1200,
        height: 630,
        alt: "Cómo solicitar un computador donado - Reciclando Unidos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cómo solicitar un computador donado | Reciclando Unidos",
    description:
      "Requisitos, reglamento y compromisos para solicitar la donación de un computador reacondicionado.",
    images: ["/imagepublic.jpg"],
  },
};

export default function EstatutosPage() {
  return (
    <div className="flex flex-col overflow-x-clip">
      <SectionImageComponent src={"/holasoyportada.webp"} w={3024} h={3057} alt={"prueba"} title={"Solicitar Computadores: Proceso y Requisitos"} subtitle={"Aprende cómo solicitar un computador donado en nuestra campaña de inclusión digital."} className={"object-[center_40%] md:object-[center_30%]"}/>
      {/* HERO */}


      {/* CONTENIDO */}
      <div className="mx-auto grid w-full max-w-[1400px] gap-14 px-8 py-16 md:grid-cols-2 md:px-12">
        <div className="text-gray-600">
          <p className="paragraph leading-relaxed">
            Antes de continuar, te pedimos leer el documento que aparece a la
            derecha. Es importante que entiendas cómo funciona Reciclando
            Unidos, los requisitos de participación y los compromisos que asumes
            al unirte. Cuando termines de leerlo, haz clic en el botón para
            continuar.
          </p>

          <ButtonComponent
            className="bg-green-ru text-white mt-8"
            text="Continuar"
            link="https://docs.google.com/forms/d/e/1FAIpQLSf5GS8ZFVxTY7WuI3Y6XpM3pwXtXHPNCa4cNN6FReEysdAPPw/viewform?usp=dialog"
          />
        </div>

        <div className="h-full w-full">
          <PdfViewer file="https://drive.google.com/file/d/1UR12hY4QTHDAxqP-AmlWLo7E5NxUAw9w/view?usp=drive_link" />
        </div>
      </div>
    </div>
  );
}