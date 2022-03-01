import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { getThemeFromStorage } from '../Helpers/themeStore';


const {bgNavbar, colorNavbar } = getThemeFromStorage();



const NavbarContainer = styled.div`
        nav {
            background: ${bgNavbar};
            color: ${colorNavbar};
            font-size: 1.2rem;
            padding: 0.5rem 1rem;
            text-align: center;
            text-align: right;
            justify-content: space-around;
            display: flex;

         
            
        }
`;


export default function Navbar() {


  function refreshPage() {
    window.location.reload(false);

  } 

   function MainTheme() {
    localStorage.removeItem("theme");
    refreshPage();
    
  }
   

 


      


  return (
    <NavbarContainer>
        <nav className='navbar'>
            <Link to="/">Accueil</Link>
            <Link to="/consultants">L'équipe</Link>
            <Link to="/qui_sommes_nous">Qui Sommes nous ?</Link>
            <Link to="/theme">Thème</Link>
          <button onClick={MainTheme} style={{background: 'red', color:'white'}}>MainTheme</button>

        </nav>
    </NavbarContainer>
    
  )
}
