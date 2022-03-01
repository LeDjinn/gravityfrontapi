import React , {useState} from 'react';
import { arrayObject } from '../themesStore';
import axios from 'axios';
import store from '../../container/redux/store';




export default function FormTheme() {

  function refreshPage() {
    window.location.reload(false);
  } 

 const user_id = store.getState().logStatus.payload.user;

  
  const [theme, setTheme] = useState({});
  let url = `https://gravitytestapi.herokuapp.com/users/${user_id}/themes`;

  const handleSubmit = (evt) => {
              axios.post(url, {theme}, {withCredentials :true})
              .then(response => {localStorage.setItem('theme',JSON.stringify(response.data))})
              .catch(err => {console.log('Erreurs',err)}).then(() => {refreshPage()});
              evt.preventDefault();
            
  }

  const handleChange = (evt) => {
              setTheme({
                ...theme, [evt.target.name]: evt.target.value})
  }



      return (
    <form  onSubmit={handleSubmit}>
                <h2>Créez votre propre thème </h2>
                <p>
                  Pour cela il vous suffit de remplir les champs suivants :<br/>
            
                  <span style={{'font-size':'10px'}}> (pour l'appélation BG = background, et Height doit etre en chiffre)</span>
                </p>

                {arrayObject.map(function Use(key){
                  return(
                <>
                      <label>{key}</label>
                      <input name={key } type={key.includes('Height')  ? 'number' : ' text' } value={theme.key === 'user_id' ? 51 : theme.key} onChange={handleChange}/>
                      
                </>
       )
       })
        }
  
              <input type='submit' name='Submit' style={{background:'green', color:'white'}}/> 
    </form>
  )
}
