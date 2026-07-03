"use client";
import ImageComponent from "./ImageComponent";
import { Recycle, Info } from "lucide-react"
import HeadSectionComponent from "./HeadSectionComponent";

const items = [
  {
    id: "portatiles",
    title: "Portátiles",
    inf: "Usados o dañados",
    tag: "Reacondicionamiento o reciclaje",
    image: "macbook.webp",
    alt: "Computador portátil usado apto para donación",
  },
  {
    id: "cpu",
    title: "Computadores de escritorio (CPU)",
    inf: "Usados o dañados",
    tag: "Reacondicionamiento o reciclaje",
    image: "torres.webp",
    alt: "Torres de computador de escritorio para donar",
  },
  {
    id: "todo-en-uno",
    title: "Todo en uno",
    inf: "Usados o dañados",
    tag: "Reacondicionamiento o reciclaje",
    image: "todo_small.webp",
    alt: "Computador todo en uno usado para donación",
  },
  {
    id: "tablets",
    title: "Tablets",
    inf: "Usadas o dañadas",
    tag: "Reacondicionamiento",
    image: "tablet.webp",
    alt: "Tablet usada apta para donación",
  },
  {
    id: "monitores",
    title: "Monitores",
    inf: "Usados o dañados",
    tag: "Reacondicionamiento o reciclaje",
    image: "monitor.webp",
    alt: "Monitores de computador usados para donar",
  },
  {
    id: "servidores",
    title: "Servidores",
    inf: "Usados o dañados",
    tag: "Reacondicionamiento o reciclaje",
    image: "servidores.webp",
    alt: "Servidores empresariales en desuso para donación",
  },
  {
    id: "electronico",
    title: "Material electrónico",
    inf: "Todo tipo de material electrónico",
    tag: "Disposición final y reciclaje electrónico",
    image: "electronicos.webp",
    alt: "Residuos de aparatos electrónicos para reciclaje responsable",
  },
];

export default function ReciclyItems() {
    return (
        <section
            id="que-recibimos"
            className="green-ru-div"
        >
            <div className="max-w-layer px-5 py-12 md:px-12 md:py-24 mx-auto">
                <HeadSectionComponent title="¿Qué computadores y equipos puedes donar?" text="Recibimos tus equipos funcionen o no: lo que sirve se reacondiciona y lo que no, recibe disposición final ambientalmente responsable."/>
                <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 md:mt-16 md:grid-cols-4">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:shadow-md"
                        >
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <ImageComponent
                                    src={item.image}
                                    width={600}
                                    height={450}
                                    className="absolute inset-0 h-full w-full object-cover object-center"
                                    alt={item.alt}
                                />
                            </div>

                            <div className="p-5 h-full">
                                <h3 className="paragraph font-semibold">
                                    {item.title}
                                </h3>

                                <div className="mt-3 flex items-center gap-2 paragraph text-sm">
                                    <Info className="h-4 w-4 shrink-0" strokeWidth={2} />
                                    <span>{item.inf}</span>
                                </div>

                                <div className="mt-1.5 flex items-center gap-2 paragraph text-sm">
                                    <Recycle className="h-4 w-4 shrink-0 text-green-ru" strokeWidth={2} />
                                    <span>{item.tag}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}