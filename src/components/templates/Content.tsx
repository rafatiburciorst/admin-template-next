import { ReactNode } from "react"

interface ContentProps {
    children?: ReactNode
}

export default function Content(props: ContentProps) {
    return (
        <div className={`
            flex flex-col mt-7
        `}>
            {props.children}
        </div>
    )
}