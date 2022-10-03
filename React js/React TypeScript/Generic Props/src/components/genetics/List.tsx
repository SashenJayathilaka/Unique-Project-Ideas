type ListProps<T> = {
    items: T[]
    onclick: (value: T) => void
}
 export const List = <T extends string | number>({ items, onclick}: ListProps<T>) => {
    return (
        <div>
            <h2>List of items</h2>
            {items.map((item, index) => {
                return (
                    <div key={index} onClick={() => onclick(item)}>
                        {item}
                    </div>
                )
            })}
        </div>
    )
 }