import {useState, useEffect} from 'react'
const url = 'https://api.github.com/user'


const UseEffectFetchData = () => {
    const [users, setUsers] = useState([])

    const getUsers = async () => {
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users)
    }
    
    useEffect(() => {
        //remember, can´t use async in useEffect
        getUsers()
    }, [])
    return ( 
        <>
        <h1>github users</h1>
        <ul>
            {users.map((user) => {
                const {id, login, avatar_url, html_url} = users
                return <li key={id}>
                    <img src={avatar_url} alt={login} />
                    <div key={id}> 
                        <h4>{login}</h4>
                        <a href={html_url}></a>
                    </div>
                </li>
            })}
        </ul>
        </>
     );
}
 
export default UseEffectFetchData;