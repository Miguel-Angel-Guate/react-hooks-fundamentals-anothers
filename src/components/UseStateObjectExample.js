import { useState } from 'react'
const UseStateObjectExample = () => {
    const [person, setPerson] = useState({
        name: 'jhon',
        age: 24,
        message: 'random message'
    })
    const changeMessage = () => {
        setPerson({... person, message: 'another'})
    }
    return ( 
        <>
        <h1>{person.name}</h1>
        <h1>{person.age}</h1>
        <h1>{person.message}</h1>
        <button onClick={changeMessage}>change message</button>

        </>
     );
}
 
export default UseStateObjectExample;