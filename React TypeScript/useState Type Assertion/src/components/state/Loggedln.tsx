import { useState } from "react"

export const Loggedln = () => {

    const [isLoggIn, setIsLoggIn] = useState(false)

    const handleLogin = () => {
        setIsLoggIn(true)
    }
    const handleLogout = () => {
        setIsLoggIn(false)
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Log Out</button>
            <div>User is logged on/ {isLoggIn ? "Looged In" : "Logged Out"}</div>
        </div>
    )
}