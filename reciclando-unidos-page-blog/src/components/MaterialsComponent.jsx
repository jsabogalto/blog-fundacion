"use client";
import ImageComponent from "./ImageComponent";
import LinkComponent from "./LinkComponent";
import HeadSectionComponent from "./HeadSectionComponent";
import Head from "next/head";

const urlEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL;


//donacion-emanuel_KOxpCa8Bt.webp
//portada-donar-computadores_NOTCD-CFJ.png
//3_OwdeL5Q5i.webp
export default function MaterialsComponent({materials, id, title, text, classNameHeadSection, link, textLink}) {
    return (
        <section
            id={id}
            className="scroll-mb-30"
        >
            <div className="mx-auto w-full max-w-layer px-5 py-8 md:px-12 md:py-14">
                <HeadSectionComponent title={title} text={text} classNameHeadSection={classNameHeadSection}/>

                {/* Grilla: 2 col en móvil, 4 col escalonadas en desktop */}
                <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4 md:gap-x-8 md:gap-y-0 md:mt-16 lg:grid-cols-4 py-8">
                    {materials.map((m, i) => (
                        <div
                            key={m.id}
                            // En desktop, las tarjetas impares (2ª y 4ª) bajan para el efecto escalonado
                            className={`flex flex-col ${i % 2 === 1 ? "md:mt-16" : ""}`}
                        >
                            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl">
                                <ImageComponent
                                    src={`${urlEndpoint}/${m.image}`}
                                    width={600}
                                    height={800}
                                    className="absolute inset-0 h-full w-full object-cover object-center"
                                    alt={m.alt}
                                />
                            </div>
                            <h3 className="mt-4 text-sm leading-snug text-gray-700 md:text-base">
                                {m.title}
                            </h3>
                        </div>
                    ))}
                </div>

                {/* CTA centrado */}
                <div className="mt-12 flex justify-center md:mt-16">
                    <LinkComponent
                        link={link}
                        text={textLink}
                        className="text-green-ru"
                    />
                </div>
            </div>
        </section>
    );
}