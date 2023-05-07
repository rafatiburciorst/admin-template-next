import { ReactNode } from "react"

import Content from "./Content"
import Header from "./Header"
import Sidebar from "./Sidebar"

interface LayoutProps {
    title: string
    subtitle: string
    children?: ReactNode
}

export default function Layout(props: LayoutProps) {
    return (
        <div className={`
            dark
            flex h-screen w-screen
        `}>
            <Sidebar />
            <div className={`flex w-full p-7 flex-col bg-gray-300 dark:bg-gray-800`}>
                <Header title={props.title} subtitle={props.subtitle} />
                <Content>
                    {props.children}
                </Content>
            </div>
        </div>
    )
}