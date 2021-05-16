import {useRef, useEffect} from 'react'


const UseRef = () => {
    const refExample = useRef(null)
    const divContainer = useRef(null)
  const handlerSubmit = (e) => {
      console.log(refExample.current.value);
    e.preventDefault()
  }
  console.log(refExample);
  useEffect(() => {
      divContainer.current.focus()
      console.log(divContainer.current);
  })

    return (
        <>
        <h1>Use Ref</h1>
        <form onSubmit={handlerSubmit}>
            <div>
                <input type="text"
                ref={refExample}
                />
                <button type="submit">submit</button>
            </div>
        </form>
        <div style={{display: 'flex', justifyContent: 'center'}} ref={divContainer}>
                <h1>Hello ref focus</h1>
        </div>
        </>
      );
}
 
export default UseRef;