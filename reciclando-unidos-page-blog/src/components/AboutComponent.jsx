"use client";
import ImageComponent from "./ImageComponent";
import HeadSectionComponent from "./HeadSectionComponent";

export default function AboutComponent({ cards, title, text, className, classNameHeadSection, id }) {
    return (
        <section
            id={id}
            className={`w-full ${className} scroll`}
        >
            <div className="max-w-layer px-5 py-10 md:px-12 md:py-12 mx-auto">
                <HeadSectionComponent
                    title={title}
                    text={text} 
                    classNameHeadSection={classNameHeadSection}
                    />
                    
                {/* ===== Grilla de tarjetas ===== */}
                <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 md:mt-16 lg:grid-cols-4">
                    {cards.map((c) => (
                        <div key={c.id}>
                            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                                <ImageComponent
                                    src={c.image}
                                    width={600}
                                    height={450}
                                    className="absolute inset-0 h-full w-full object-cover"
                                    alt={c.alt}
                                />
                            </div>

                            <h3 className="mt-5 text-xl font-semibold tracking-tight text-[#053215]">
                                {c.title}
                            </h3>
                            <p className="mt-2 max-w-[38ch] text-sm leading-relaxed text-gray-600">
                                {c.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            {/* ===== Encabezado: título + intro ===== */}
        </section>
    );
}