import React, { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react"

interface App {
    children: ReactNode
}

interface context {
    user: { name: string, email: string },
    auth: boolean,
    setAuth: Dispatch<SetStateAction<boolean>>
    setUser: Dispatch<SetStateAction<{ name: string; email: string; }>>
}

export const GlobalContext = createContext({} as context)

export default function AppContext({ children }: App) {
    const [user, setUser] = useState({ name: '', email: '' })
    const [auth, setAuth] = useState(false)

    return (
        <GlobalContext.Provider value={{ user, setUser, auth, setAuth }}>
            {children}
        </GlobalContext.Provider>
    )

}


