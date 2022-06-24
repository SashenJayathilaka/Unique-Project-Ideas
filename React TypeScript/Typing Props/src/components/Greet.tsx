type GreatPerson = {
    name: string;
}

export const Greet = (person: GreatPerson) => {
    return (
        <div>
            <h2>Welcome {person.name} You have 10 unread message</h2>
        </div>
    )
}
