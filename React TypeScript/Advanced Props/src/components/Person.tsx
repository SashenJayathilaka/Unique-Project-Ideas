type personType = {
    name: {
        first: string
        last: string
    }
}

export const Person = (props: personType) => {
    return (
        <div>
            {props.name.first} {props.name.last}
        </div>
    )
}