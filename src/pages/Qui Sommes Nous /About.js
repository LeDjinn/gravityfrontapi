import React from 'react'
import styled from 'styled-components'
import { getThemeFromStorage } from '../../Helpers/themeStore';





const {heroAboutHeight,heroAboutBgImage, heroAboutBgColor,   heroAboutColor } = getThemeFromStorage();


const Hero = styled.div`
width: 100%;
height: ${heroAboutHeight}px;
background-image: url(${heroAboutBgImage});
font-size: 2.5em;
color: ${heroAboutColor};
font-weight: bold;
text-align: center;
background-size: cover;
padding-top: 100px;
margin-bottom: 100px;
background-color: ${heroAboutBgColor};
`;



const Container = styled.div`
      padding: 20px;
      text-align: center;
      

`;

const ContainerSecondary = styled.div`
   width: 50%;
   margin: 0 auto;
   text-align: left;
   
`;


export default function About() {

  return (
    <>
    <Hero>Qui Sommes nous ?</Hero>
    <Container>
      
              <h1>Consultant & Co.</h1>

           
            <img src ='https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' style={{width:'50%'}} alt='Qui Sommes Nous ?'/>
            <ContainerSecondary>
            <p> 
                        Sit fugiat occaecat ut ea proident aute qui labore aute sint do. Duis eu ullamco ipsum aute. Pariatur labore do ea veniam. Nostrud eiusmod ut cillum laboris. Esse veniam enim non ea magna tempor laboris et. Eu anim consequat nulla deserunt anim laboris sunt sunt consectetur. Amet officia exercitation cupidatat tempor aute reprehenderit laborum do qui voluptate labore ex fugiat.

                        Magna laborum velit aliquip non excepteur labore sint eu ut enim do. Fugiat amet occaecat irure consequat nisi deserunt qui aliqua velit nulla sunt eu eu. Est consectetur velit officia sunt exercitation est aliqua duis excepteur ullamco anim. Ipsum sint proident adipisicing nulla qui exercitation anim veniam. Nulla occaecat commodo ad officia pariatur do cupidatat nisi do consequat sit officia ullamco.

                        In non do pariatur mollit mollit tempor elit deserunt mollit voluptate. Consectetur pariatur officia aliqua consectetur do minim eu. Do voluptate incididunt sunt mollit incididunt ut dolor ad nisi officia ad duis Lorem. Dolore quis veniam ut eiusmod.

                        Sit dolor excepteur aute culpa. Esse ipsum eu officia et sunt aliqua. Ex mollit esse minim ipsum ipsum aliquip laborum ut cupidatat. Do non id nulla culpa non dolor anim.

                        Consequat fugiat do magna aliquip commodo do aliquip dolore et qui labore do laborum ex. Minim et ut fugiat reprehenderit non. Excepteur sunt ullamco ea nulla ea pariatur ut ut nulla laborum consectetur proident laboris dolor. Ad laborum id commodo eiusmod et velit non cillum veniam magna consectetur reprehenderit cupidatat.

                        Consectetur elit ullamco irure qui excepteur Lorem aliqua non enim Lorem exercitation ut occaecat qui. Irure laboris Lorem deserunt exercitation velit cupidatat duis. Mollit fugiat deserunt officia laboris laboris ut eu laborum minim commodo anim amet est aute. Voluptate in proident officia eu et. Velit id esse do et commodo ipsum dolor ut dolor aute. Elit eu nostrud ad aute laborum exercitation est.

                        Veniam incididunt elit sunt mollit minim deserunt eiusmod ad adipisicing sunt irure. Pariatur aliquip deserunt sunt pariatur duis reprehenderit. Qui occaecat dolore sunt sint elit magna excepteur minim qui sit eu commodo. Anim adipisicing anim aute pariatur velit tempor dolor non cupidatat. Culpa amet laboris nostrud laborum consequat ex. Deserunt aute in consectetur nulla ipsum eu laboris voluptate magna. Anim quis eiusmod tempor non cupidatat dolore sunt minim veniam voluptate sunt est eiusmod.
            </p>

                </ContainerSecondary>
         </Container>
         

    
    </>
  )
}
