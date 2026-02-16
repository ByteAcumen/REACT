import { useEffect } from "react";

function UseEffectDemo() {
    useEffect(() => {
        const interval = setInterval(()=>{
            console.log("running..")
        },1000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div>
            <h1>UseEffect Demo</h1>
        </div>
    );
}

export default UseEffectDemo;