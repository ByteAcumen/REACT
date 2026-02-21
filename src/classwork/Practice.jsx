import React from 'react'
import { useState } from "react";

const App = () => {

  // const [value, setValue] = useState(() => {
  //   console.log("Expensive calc");
  //   return 100;
  // });

  // const [user,setUser] = useState({
  //   names : "ALex",
  //   age : 20
  // })
  // const changename=() => {
  //   setUser(prev => ({
  //     ...prev,
  //     names : "John"
  //   }))
  // }

  // const [count, setCount] = React.useState(0);
  // const incrementtwice = () => {
  //   setCount(prev => prev + 1)
  //   setCount(prev => prev + 1)
  // }

  const[count,setCount] = useState(0);

  if (true) {
    console.log("Excuted")
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=> setCount(prev => prev + 1)}>+1</button>
      <button onClick={()=> setCount(prev => prev - 1)}>-1</button>
      <button onClick={()=> setCount(0)}>reset</button>
    </div>
  )
}

export default App
