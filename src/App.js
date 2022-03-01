
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
  
} from "react-router-dom";
import Home from './pages/Accueil/Home';
import About from './pages/Qui Sommes Nous /About';
import User from './pages/Profil/User';
import Registration from './components/auth/Registration';

import styled from 'styled-components'
import GlobalStyle from './globalstyle';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AllConsultants from './pages/Consultants/AllConsultants';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import {setLoginStatus, setLogoutStatus} from './container/redux/actions/loginAction'
import LoginForm from './components/auth/LoginForm';
import Theme from './pages/Theme/Theme';
import Themeprovide from './components/Themeprovide';






function App() {
  
   const logStatus = useSelector((state) => state.logStatus.payload)
   const dispatch = useDispatch();
   console.log('logStatus',logStatus)
  
  const logout = async () => {
    const response = await axios.delete('https://gravitytestapi.herokuapp.com/logout', {withCredentials: true})
    .then((response) =>{dispatch(setLogoutStatus())})
    .catch((err) => {console.log('Err',err)});
  }
  
  
    const checkLoginStatus = async () => {
      const response = await axios.get('https://gravitytestapi.herokuapp.com/logged_in', {withCredentials: true}).catch((err) => {console.log('Err',err)});
      dispatch(setLoginStatus(response.data));
      

  }
 
  
  useEffect(() => {
    checkLoginStatus();



  }, [])

 
 
  const MainContainer  =  styled.div`
 
  padding-bottom: 100px;
  min-height: 100vh;
  position: relative;

  `;
  return (

 <>
    <MainContainer>
        <Router>
           <GlobalStyle/>
             
         <Navbar/>
        
          <Routes>
              <Route  path ="/" element={ <Home/>}/>
                
                <Route path ="consultants" element ={<AllConsultants/>}/>
                <Route path ="consultants/:id" element ={<User/>}/>
                <Route exact path ="/qui_sommes_nous" element ={  <About/>}/> 
                <Route exact path ="/login" element ={  <LoginForm/>}/>    
                <Route path ="/theme" element ={<Theme/>}/> 
                <Route path ="/registration" element ={<Registration/>}/>   
                <Route path ='/provider' element ={<Themeprovide/>}/>
          
          </Routes>
            

    
          </Router>
      </MainContainer>
            {(logStatus.logged_in === 'logged_in') ?  <div onClick={logout} style={{cursor:'pointer',
                                                            background:'violet', 
                                                            color:'white', 
                                                            width:'60px'}}>
                                                                           Logout
                                                                    </div>  :
                                      <div></div> }
          <Footer/>
      </>
  )
}

  
export default App;
