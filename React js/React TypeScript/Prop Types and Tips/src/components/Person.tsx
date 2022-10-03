import { personType } from './Persontype'

export const Person = (props: personType) => {
    return (
        <div>
            {props.name.first} {props.name.last}
        </div>
    )
}