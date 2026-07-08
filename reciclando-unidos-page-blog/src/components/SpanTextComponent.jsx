const SpanTextComponent = ({title, textColor}) => {
    return (
        <span className={`mb-4 flex items-center gap-3 text-sm uppercase tracking-[0.25em] ${textColor}`}>
            <span className="h-px w-8 bg-gradient-ru" />
            {title}
        </span>
    )
}

export default SpanTextComponent