import {useState, useEffect} from 'react'

const ShowHide = () => {

const [show, setShow] = useState(false)
    return ( 
        <>
    <button onClick={() => setShow(!show)}>show/hide</button>
    {show && <Item />}
        </>
     );
}
const Item = () => {
    const [size, setSize] = useState(window.innerWidth)

    const checkSize = () => {
        setSize(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener('resize', checkSize)

        return () => {
            window.removeEventListener('resize', checkSize)
        }
        
    }, [])
    return (
        <div>
            <h1>Window</h1>
            <h2>Size {size} px</h2>
        </div>
    )
}
 
export default ShowHide;