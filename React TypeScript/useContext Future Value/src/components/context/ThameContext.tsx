import { createContext } from 'react'
import { TypeFormatFlags } from 'typescript'
import { thame } from './thame'


type ThameContaxtProps = {
    children: React.ReactNode
}

export const ThameContext = createContext(thame)

export const ThameContaxtProps = ({children}: ThameContaxtProps) => {
    return <ThameContext.Provider value={thame}>{children}</ThameContext.Provider>
}
