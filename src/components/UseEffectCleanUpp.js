import {useState, useEffect} from 'react'

const UseEffectCleanUpp = () => {

    const [size, setSize] = useState(window.innerWidth)

    const checkSize = () => {
        setSize(window.innerWidth)
    }

    useEffect(() => {
        console.log('use Effect');
        window.addEventListener('resize', checkSize)
        return () => {
            console.log('clean up');
            window.removeEventListener('resize', checkSize)
        }
    }, [])
    console.log('render');
    return ( 
        <>
        <h1>Use Effect clean upp</h1>
        <h3>{size} px</h3>
        </>
     );
}
 
export default UseEffectCleanUpp;