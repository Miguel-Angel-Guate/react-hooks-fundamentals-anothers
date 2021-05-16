//components
import Modal from './Modal'
//hooks
import {useState, useEffect, useRedecer, useReducer} from 'react'
//dat
import {data} from './../../data'
const reducer = (state,  action) => {

}
const defaultState = {
    people: [],
    isModalOpen: false,
    modalContent: ''
}
const ReducerHook = () => {
    const [name, setName] = useState('')
    const [state, dispatch] = useReducer(reducer, defaultState)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (name) {
            dispatch({type: 'TESTING'})
        }
    }

    console.log(data);
    return ( 
        <>
        <h1>REducer hook</h1>
        {state.isModalOpen &&  <Modal modalContent={state.modalContent} />}

        <form onSubmit={handleSubmit}>
        <input type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Add person</button>
        </form>
        {state.people.map((person) => {
            return <div key={person.id}>
                <h3>{person.name}</h3>
            </div>
        })}
        </>
     );
}
 
export default ReducerHook;