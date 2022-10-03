type PersonListProps = {
    name: {
        first: string
        last: string
    }[]
}


export const Personlist = (props: PersonListProps) => {
    return (
        <div>
            {props.name.map(name => {
                return (
                    //<h2>{name.first} {name.last}</h2>
                    <h2 key={name.first}> {name.last}</h2>
                )
            })}
        </div>
    )
        
}