import React from 'react'
import { useState} from 'react'
import axios from 'axios'

export default function LoginForm() {

          const [email, setEmail] = useState('')
          const [password, setPassword] = useState('')
   
   
    
          const handleSubmit = (evt) => {
       
                  axios.post('https://gravitytestapi.herokuapp.com/sessions',{
                    user: {
                      email: email,
                      password: password
                      
                      }
                    },
                    {withCredentials: true}
                  ).catch(err => {
                  console.log('Errors',err)
                }); evt.preventDefault();
              }

     

  return (
     
    <div>  
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <label>
              E-mail
            
            </label><br/>
            <input type ='mail' value={email} onChange={e => setEmail(e.target.value)}/>
            <label>
              Password
              
            </label><br/>
            <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                />
          
            <button type="submit" value="Submit" >Submit</button>
            
          
    </form>
   
    </div>
        
  )
}
