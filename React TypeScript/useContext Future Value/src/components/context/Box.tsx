import { useContext } from "react"
import {ThameContext} from './ThameContext'

export const Box = () => {
    const thame = useContext(ThameContext)
    return (
        <>
        <div
            style={{backgroundColor: thame.primary.main, color: thame.primary.text}}>
            Thame context
        </div>
        
        <div
            style={{backgroundColor: thame.secondary.main, color: thame.secondary.text}}>
            Second Thame context
        </div>

        </>
    )
}