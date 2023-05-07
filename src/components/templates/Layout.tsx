import { ReactNode } from "react"
import Header from "./Header"
import Sidebar from "./Sidebar"
import Content from "./Content"

interface LayoutProps {
    title: string
    subtitle: string
    children?: ReactNode
}

export default function Layout(props: LayoutProps) {
    return (
        <div className={`
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