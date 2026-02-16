import { useState, useEffect } from "react";

function Counter(){
    const [count ,setCount] = useState(0);
    useEffect(()=>{
        document.title = `count is ${count}`;
    },[count]);
    return(
        <>
        <h1>{count}</h1>
        <button onClick={() => setCount(prev => prev+1)}>+</button>
        </>
    )
}

export default Counter;