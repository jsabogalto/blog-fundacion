import ImageComponent from "./ImageComponent"
import ButtonComponent from "./ButtonComponent"

const SectionImageComponent = ({ w, h, src, alt, title, subtitle, textButton, srcButton, className }) => {
    return (
        <section
            className="relative w-full overflow-hidden h-[420px] sm:h-[500px] lg:h-[660px]"
        >
            <ImageComponent
                src={src}
                alt={alt}
                width={w}
                height={h}
                className={`absolute inset-0 h-full w-full object-cover ${className}`}
                priority
            />

            <div className="absolute inset-0 bg-black/40" />

            <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col items-start justify-end px-8 md:px-12 pb-12 text-center text-white md:pb-16">
                <h1 className="title text-start">{title}</h1>
                <p className="mt-4 max-w-lg paragraph text-white text-start">
                    {subtitle}
                </p>

                {/* Solo se muestra si llegan texto Y enlace del botón */}
                {textButton && srcButton && (
                    <div className="mt-4 flex justify-center">
                        <ButtonComponent
                            className="bg-white text-green-700 hover:bg-gray-100"
                            text={textButton}
                            link={srcButton}
                        />
                    </div>
                )}
            </div>
        </section>
    )
}

export default SectionImageComponent