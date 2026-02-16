import { useEffect, useState } from "react";

function Users(){
    const [users,setUsers] = useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setUsers(data));
    },[])

    return(
        <ul>
            {users.map(user => {
                return <li key={user.id}>{user.name} - {user.email}</li>
            })}
        </ul>
    )
}

export default Users;