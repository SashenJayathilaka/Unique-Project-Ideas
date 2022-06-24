import React from "react"

type Buttenprops = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}

export const Button = (props: Buttenprops) => {
    return (
        <button onClick={event => props.handleClick(event, 1)}>Click</button>
    )
}
