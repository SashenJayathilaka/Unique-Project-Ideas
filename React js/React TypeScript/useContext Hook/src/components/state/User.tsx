import { useState } from "react"

type AuthUser = {
    name: String
    email: string
}

export const User = () => {

    const [user, setUser] = useState<AuthUser>({} as AuthUser)
    const handleLogin = () => {
        setUser ({
            name: "Hasindu",
            email: " Hasindu@gmail.com"
        })
    }
    const handleLogout = () => {
        setUser ({
            name: "Hasindu",
            email: "Hasindu@gmail.com",
        })
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Log Out</button>
            <div>User Name is {user.name}</div>
            <div>User email{user.email}</div>
        </div>
    )
}