import {useState} from 'react'
const UseStateCounter = () => {
    const [counter, setCounter] = useState(0)

    const rest = () => {
        setCounter(counter -1 )
        const end = 0
        if(counter == 0) {
            setCounter(end)
        }
    } 
    return ( 
        <>
        <h1>Counter </h1>
        <h4>{counter}</h4>
        <button onClick={() => setCounter(counter +1)}>Increment</button>
        <button onClick={rest}>Decrement</button>
        <button>reset</button>
        </>
     );
}
 
export default UseStateCounter;