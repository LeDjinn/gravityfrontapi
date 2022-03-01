import React from 'react'
import { useState} from 'react'
import axios from 'axios'

export default function Registration() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password_confirmation, setPassword_confirmation] = useState('')
   
    
    const handleSubmit = (evt) => {
       
        axios.post('https://gravitytestapi.herokuapp.com/registrations',{
          user: {
            email: email,
            password: password,
            password_confirmation: password_confirmation
            }
          },
          {withCredentials: true}
        ).catch(err => {
               console.log('Errors',err)
      });       evt.preventDefault();
    }

   

  return (
     
    <div>  
      
        <form onSubmit={handleSubmit}>
            <h2>Registration</h2>
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
      <label>
        Confirm password
      
      </label>
      <input
          type="password"
          value={password_confirmation}  
          onChange={e => setPassword_confirmation(e.target.value)}
          />
      <button type="submit" value="Submit" >Submit</button>
    </form>
    </div>
        
  )
}
