import {useState, useEffect} from "react"


const Solomiya = ()=> {
    const [count, setCount] = useState(0)

    useEffect( ()=> {
        console.log("Hi![]")
    })

    return <div>
    <button
        onClick={() => setCount(count + 1)}
    >Click here</button>
    <p>You clicked {count} times</p>
        </div>
}

export default Solomiya