import React from 'react'
import styled from 'styled-components'
import { getThemeFromStorage } from '../Helpers/themeStore';


const {footerBgColor, footerColor, footerHeight} = getThemeFromStorage();



const FooterWrapper = styled.div`


  background-color: ${footerBgColor};
  width: 100%;
  height: ${footerHeight}px;
  color: ${footerColor};
  text-align: center;
  

  position: relative;
  z-index: -1;

 
  bottom: 0;
  left: 0;

`;


export default function Footer() {
  return (
    <FooterWrapper>
        <footer>
            <p>Footer</p>
            <p>Copyright © 2022</p>
        

        </footer>
       </FooterWrapper>
        
  
  )
}
