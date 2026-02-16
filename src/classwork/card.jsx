function card({names,role}){
    return(
        <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
            <h3>{names}</h3>
            <p>{role}</p>
        </div>
    )
}

export default card;