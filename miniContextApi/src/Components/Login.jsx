import React ,{useState,useContext}from 'react'
import UserContext from '../Context/UserContext';
function Login(){

    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({username,password})
    }
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const {setUser}=useContext(UserContext)
return (
            
            <div>
                    <h2>Login here</h2>
                    <input type="text" placeholder='Enter UserName'
                    value={username}
                    onChange={(e)=>
                            setUsername(e.target.value)
                    }
                    />
                    {"  "}
                    <input type="text" placeholder='Enter Password' 
                    value={password}
                    onChange={(e)=>
                            setPassword(e.target.value)
                    }
                    />
                    <button onClick={handleSubmit}> Submit</button>
            </div>
            
)
}

export default Login;