type COntainerProps = {
    style: React.CSSProperties
}


export const Container = (props: COntainerProps) => {
    return (
        <div style={props.style}>
            Text Content goes here
        </div>
    )
}