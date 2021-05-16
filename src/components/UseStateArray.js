import {useState} from 'react'
import { data} from '../data'
const UseStateArray = () => {
    const [people, setPeople] = useState(data)
    const removeItem = (id) => {
        let newPeople = people.filter((person) => person.id !== id)
        setPeople(newPeople)
    }
    return ( 
        <>
        <h1>Use State Array</h1>
        {people.map((person) => {
            const {id, name} = person
            return (

            <div key={id}>
                <h4>{name}</h4>
                <button onClick={() => removeItem(id)}>revove item</button>
            </div>
            )
        })}
        <button onClick={() => setPeople([])}>Clear</button>
        </>
     );
}
 
export default UseStateArray;