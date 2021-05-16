import {useState, useEffect} from 'react'

const ShortCircuit = () => {

const [text, setText] = useState('')
const [isError, setIsError] = useState(false)
const firstValue = text || 'hello world'
const secondValue = text && 'hello world'

    return ( 
        <>
        <h1>{text || 'jhon'}</h1>
        <button onClick={()  => setIsError(!isError) }>toggle Error</button>
        {isError && <h1>Error...</h1>}
        {isError ? <p>hello true</p>: <div>
            <h2>there is no error</h2>
        </div>  }
        {/* {text && <h1>hellow world</h1>}
        {!text && <h1>hellow world</h1>} */}

        </>
     );
}
 
export default ShortCircuit;