import {useState} from 'react'

const ControlInputs = () => {

const [person, setPerson] = useState({
    firstName: '', email: '', age: ''
})
const [people, setPeople] = useState([])
const handleChange = (e) => {
 //we acces to the name value in input
 const name = e.target.name 
 const value = e.target.value 
 setPerson({...person, [name]: value})
 console.log(name, value);
}
const handleSubmit = (e) => {
e.preventDefault()
if (person.firstName && person.email && person.age) {
    const newPerson = {...person, id: new Date().getTime().toString()}
    setPeople([...people, newPerson])
    setPerson({firstName: '', email: '', age: ''})
    
}
}

    return ( 
        <>
        <h1>Control inputs</h1>
        {/* if i use the form i can use onSubmite  here  */}
        <form  >
            <div style={{ marginBottom: '10px'}}>
                <label htmlFor="firstName">Name : </label>
                <input
                type="text"
                id='firstName'
                name='firstName' 
                value={person.firstName}
                // onChange={(e) => setFirstName(e.target.value)}
                onChange={handleChange}
                />
            </div>
            <div style={{ marginBottom: '10px'}}>
                <label htmlFor="email">Email : </label>
                <input
                type="text"
                id='email' 
                name='email'
                value={person.email}
                onChange={handleChange}
                />
            </div>
            <div style={{ marginBottom: '10px'}}>
                <label htmlFor="age">Age : </label>
                <input
                type="text"
                id='age' 
                name='age'
                value={person.age}
                onChange={handleChange} 
                />
            </div>
            {/* i can add onclick here and use the funtion to send the inf i don used the form */}
            <button type='submit'
            onClick={handleSubmit} 
            hand
            >Submite</button>
        </form>
        {
            people.map((person, index) => {
                const {id, firstName, email, age} = person;
                return <div key= {index}>
                    <h4>{firstName}</h4>
                    <p>{email}</p>
                    <p>{age}</p>
                </div>
            })
        }
        </>
     );
}
 
export default ControlInputs;