type OscarType = {
    children: React.ReactNode
}

export const Oscar = (props: OscarType) => {
    return (
        <div>
            {props.children}
        </div>
    )
}