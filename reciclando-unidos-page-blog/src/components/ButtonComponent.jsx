import {ArrowRight} from 'lucide-react'

const ButtonComponent = ({link, className, text}) => {
    return (
        <a
            href={link}
            className={`inline-flex items-center justify-center px-8 py-4  text-xs font-semibold rounded-full shadow-lg ${className} gap-2`}
        >
            {text} <ArrowRight className="h-4 w-4" />
        </a>
    )
}

export default ButtonComponent