type StartProps = {
    status: "loading" | "success" | "error"
}

export const Status = (props: StartProps) => {
    let message
    if (props.status === "loading") {
        message = "Loading..."
    }

    else if (props.status === "success") {
        message = "Data fetch successfully!"
    }

    else if (props.status === "error") {
        message = "Error fetching data"
    }

    return (
        <div>
            <h2>Status - {message}</h2>
        </div>
    )
}