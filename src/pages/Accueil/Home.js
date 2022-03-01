import React from 'react'

import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getThemeFromStorage } from '../../Helpers/themeStore';


const {heroHomeHeight, heroHomeBgImage, heroHomeBgColor,   heroHomeColor } = getThemeFromStorage();


const Hero = styled.div`
    width: 100%;
    height: ${heroHomeHeight}px;
    background-image: url(${heroHomeBgImage});
    font-size: 2.5em;
    color: ${heroHomeColor};
    font-weight: bold;
    text-align: center;
    background-size: cover;
    padding-top: 100px;
    margin-bottom: 100px;
    background-color: ${heroHomeBgColor};

`;
  const Container = styled.div`
      padding: 20px;
      text-align: center;
      `;

  const ContainerConnexion = styled.div`
       width: 50%;
       box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
       padding: 20px 20px;
       margin : 0 auto;
       margin-top: 50px;
       background-color: #f1e9f7;

  `;

export default function Home() {

 const loginStatus = useSelector((state) => state.logStatus.payload);

 console.log('loginStatus',loginStatus)



  return (
    <>
          <Hero>
               <h1> Consultant & Co. {} </h1>
          </Hero>
     <Container>
                   <h1>Bienvenu chez <span style={{color: 'violet'}}>Consultant & Co.</span> </h1>
                    <p> 
                        La meilleure plateforme de recherche de consultants.
                    </p>
                  <Link to='/consultants'> <button>Voir la liste des consultants</button></Link> 
 
            <ContainerConnexion>
                    <h3>Pour façonner cette intérface à <span style={{color: 'violet'}}>VOTRE</span> image.</h3><br/>
                   <Link to ='/theme' style={{color:'green'}}> Choisir un thème</Link>
                 
           
             </ContainerConnexion>
              
                    
             
     </Container>
    
       
   
    </>
  )
}
