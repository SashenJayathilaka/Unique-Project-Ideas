import React from "react";
import { Greet } from "../Greet";


export const CusterComponent = (props: React.ComponentProps<typeof Greet>) => {
    return (
        <div>
            {props.name}
        </div>
    )
}