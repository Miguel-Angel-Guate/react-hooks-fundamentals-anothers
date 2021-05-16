import {useState, useEffect} from 'react'
const UseEffectsBasics = () => {
    const [value, setValue] = useState(0)
    useEffect(() => {
        console.log('call useEffect');
        if (value > 1) {
            document.title = `${value} Time`
        }
    }, [value])
    console.log('render component');
    return ( 
        <>
        <h4>Use Effects Basics</h4>
        <h1>{value}</h1>
        <button onClick={() => setValue(value + 1)}>increment value</button>
        </>
     );
}
 
export default UseEffectsBasics;