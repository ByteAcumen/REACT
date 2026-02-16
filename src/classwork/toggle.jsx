import { useState } from "react";

function Toggle() {
    const [isOn, setIsOn] = useState(false);
    return(
        <div>
            <h1>{isOn ? "ON" : "OFF"}</h1>
            <button onClick={() => setIsOn(prev => !prev)}>Toggle</button>
        </div>
    )
}

export default Toggle;