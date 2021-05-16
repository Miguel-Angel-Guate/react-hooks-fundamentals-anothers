import {useState } from 'react'
const UseStateBasics = () => {
const [text, setText] = useState('Random Title')
const handleClick = () => {
    if(text === 'Use state basic'){
        setText('Hello')
    } else {
        setText('Use state basic')
    }
}
return <>

    <h1>{text}</h1>
    <button onClick={handleClick}>Change title</button>
    </>
}
export default UseStateBasics;