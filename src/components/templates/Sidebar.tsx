import { IconHome, IconLogout, IconNotify, IconSettings } from "../Icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function Sidebar() {
    return (
        <aside className="flex flex-col">
            <div className={`
                flex flex-col items-center justify-center
                bg-gradient-to-r from-indigo-500 to-purple-800
                h-20 w-20
            `}>
                <Logo />
            </div>
            <ul className="flex-grow">
                <MenuItem url="/" text="Início" icon={IconHome} />
                <MenuItem url="/ajustes" text="Ajustes" icon={IconSettings} />
                <MenuItem url="/notificacoes" text="Notificações" icon={IconNotify} />
            </ul>
            <ul>
                <MenuItem
                    onClick={() => console.log('Logout')}
                    text="Sair"
                    icon={IconLogout}
                    className={`
                        text-red-600
                        hover:bg-red-400 hover:text-white
                    `}
                />
            </ul>
        </aside>
    )
}