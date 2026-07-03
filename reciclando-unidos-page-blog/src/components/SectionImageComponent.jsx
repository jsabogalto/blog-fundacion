import ImageComponent from "./ImageComponent"
import LinkComponent from "./LinkComponent"
import ButtonComponent from "./ButtonComponent"

const SectionImageComponent = ({ w, h, src, alt, title, className }) => {
    return (
        <section
            className="relative w-full overflow-hidden h-80"
        >
            <ImageComponent
                src={src}
                alt={alt}
                width={w}
                height={h}
                className={`absolute inset-0 h-full w-full object-cover object-center ${className}`}
                priority
            />
            <div className="absolute inset-0 bg-linear-to-b from-[#053215]/50 via-[#053215]/10 to-transparent" />
            <div className="absolute inset-0 bg-black/20" />

            <div className="relative z-10 mx-auto flex h-full max-w-layer flex-col items-start justify-end px-5 md:px-12 pb-8 text-center text-white md:pb-16">
                <h1 className="title text-start">{title}</h1>
            </div>
        </section>
    )
}

export default SectionImageComponent