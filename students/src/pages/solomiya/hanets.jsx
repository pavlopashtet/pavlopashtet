import {useState, useEffect} from "react"


const Miki = ()=> {
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

export default Miki