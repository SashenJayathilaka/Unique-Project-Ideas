import React, { useState ,createContext } from "react"

export type AuthUser = {
    name: string
    email: string
}

type UserCOnstextType = {
    user: AuthUser | null
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}

type UserContectProvidePropos = {
    children: React.ReactNode
}

export const UserContext = createContext<UserCOnstextType | null>(null)

export const UserContextProvider = ({ children }: UserContectProvidePropos) => {
    const [user, setUser] = useState<AuthUser | null>(null)
    return (
        <UserContext.Provider value={{ user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}