import { useReducer } from "react"

type CounterState = {
    count: number
}
type UpdateAction = {
    type: "Increment" | "Descerment" 
    paylode: number
}

type ResetAction = {
    type: "Reset" 
}

type CounterAction = UpdateAction | ResetAction

const initialState = { count:0}


function reducer(state: CounterState, action: CounterAction) {
    switch (action.type) {
        case "Increment":
            return { count: state.count + action.paylode }
        case "Descerment":
            return { count: state.count - action.paylode }
        case "Reset":
            return initialState
        default:
            return state
    }
}

export const Counter = () => {
    const [state, dispath] = useReducer(reducer, initialState)
    return ( 
        <>
        Count: {state.count}
        <button onClick={() => dispath({ type: "Increment", paylode: 10})}>
            Increment 10
        </button>
        <button onClick={() => dispath({ type: "Descerment", paylode: 10})}>
            Decrment 10
        </button>
        <button onClick={() => dispath({ type: "Reset"})}>
            Reset
        </button>

        </>
    )
}