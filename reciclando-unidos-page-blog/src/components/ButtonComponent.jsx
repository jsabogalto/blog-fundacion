const ButtonComponent = ({link, className, text}) => {
    return (
        <a
            href={link}
            className={`inline-flex items-center justify-center px-8 py-4  text-sm font-semibold rounded-lg shadow-lg transition-all duration-300 hover:bg-green-light hover:scale-[1.03] ${className}`}
        >
            {text}
        </a>
    )
}

export default ButtonComponent