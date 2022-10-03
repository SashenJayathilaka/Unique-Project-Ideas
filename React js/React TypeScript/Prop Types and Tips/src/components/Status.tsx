type StatusPops = {
    status: "loading" | "success" | "error"
}

export const Status = (props: StatusPops) => {
    let message
    if (props.status === 'loading') {
        message = "Loading...."    
    }

    else if (props.status === "success") {
        message = "Data Feched Successfully!"
    }

    else{
        message = "Error Feaching Data"
    }


    return (
        <div>
            <h2>Status = {message}</h2>
        </div>
    )
}