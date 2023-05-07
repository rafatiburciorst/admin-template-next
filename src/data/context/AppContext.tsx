import { createContext, ReactNode } from "react";

interface AppContextProps {
    theme: string
}

interface ContextProps {
    children?: ReactNode
}

const AppContext = createContext<AppContextProps>({
    theme: ''
});

export function AppProvider(props: ContextProps) {
    return (
        <AppContext.Provider value={{
            theme: 'dark'
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext;