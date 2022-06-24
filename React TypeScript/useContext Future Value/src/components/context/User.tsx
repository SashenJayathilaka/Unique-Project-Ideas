import { useContext } from "react"
import { UserContext } from "./UserContext"


export const User = () => {
    const userContext = useContext(UserContext)
    const handleLogin = () => {
        if (userContext) {
            userContext.setUser({
                name: "Hasindu",
                email: "Hasindu@getMaxListeners.com"
            })
        }
    }
    const handleLogout = () => {
        if (userContext) {
            userContext.setUser(null)
        }
    }
    return (
        <div>
            <button onClick={ handleLogin }>Login</button>
            <button onClick={ handleLogout }>Log out</button>
            <div>User Name is {userContext?.user?.name}</div>
            <div>User Email is {userContext?.user?.email}</div>
        </div>
    )
}