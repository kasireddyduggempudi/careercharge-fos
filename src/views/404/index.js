function NotFoundView(props) {
    return (
        <div>
            {JSON.stringify(props.location)}
            <h1 style={{textAlign: "center", padding: "10px"}}>Oops!! Page not found. <a href="/">Career Charge</a></h1>
        </div>
    )
}

export default NotFoundView;