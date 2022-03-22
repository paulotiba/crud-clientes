interface BotaoProps {
    cor?: 'green' | 'blue' | 'gray'
    className?: string
    children: any
}


export default function Botao(props: BotaoProps) {
    // const cor = props.cor ?? 'gray' nao deu certo 


    return (
        <button className={`
        bg-gradient-to-r from-blue-400 to-green-700
        text-white px-4 py-2 rounded-md
        ${props.className}
        `}>
            {props.children}
        </button>
    )
}