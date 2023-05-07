import { ReactNode } from "react"
import Link from "next/link"

interface MenuItemProps {
    text: string
    icon: ReactNode
    url?: string
    className?: string
    onClick?: (event: any) => void
}

export default function MenuItem(props: MenuItemProps) {

    function renderContent() {

    }

    return (
        <li onClick={props.onClick} className={`hover:bg-gray-100 cursor-pointer`}>
            {props.url ? (
                <Link href={props.url} className={`
                flex flex-col justify-center items-center
                h-20 w-20
            `}>
                    {props.icon}
                    <span className={`
                    text-xs font-light text-gray-600
                `}>
                        {props.text}
                    </span>
                </Link>
            ) : <a href={props.url} className={`
            flex flex-col justify-center items-center
            h-20 w-20 text-gray-600 ${props.className}
        `}>
                {props.icon}
                <span className={`
                text-xs font-light
            `}>
                    {props.text}
                </span>
            </a>}
        </li>
    )
}