

const HeadSectionComponent = ({title, text, classNameHeadSection}) => {
    return (

        <div className={`grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12 md:px-16 ${classNameHeadSection}`}>
            <h2 className="subtitle">
                {title}
            </h2>
            <p className="max-w-[60ch] paragraph md:pt-2">
                {text}
            </p>
        </div>
    )
}

export default HeadSectionComponent