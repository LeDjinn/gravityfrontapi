import { createGlobalStyle } from 'styled-components';


import { getThemeFromStorage } from './Helpers/themeStore';

const {bodyBg, buttonBgColor, buttonColor, buttonShadow, buttonBorderRadius } = getThemeFromStorage();


 



     


const GlobalStyle = createGlobalStyle`

  body {
   
 
    background: ${bodyBg};
    font-family: Arial };
  }
  button {
 
      background-color: ${buttonBgColor};
      border-radius: ${buttonBorderRadius}px;
      border-style: none;
      box-sizing: border-box;
      color: ${buttonColor};
      cursor: pointer;
      display: inline-block;
     
      font-size: 14px;
      font-weight: 500;
      height: 40px;
      line-height: 20px;
      list-style: none;
      margin: 8px;
      outline: none;
      padding: 10px 16px;
      box-shadow: ${buttonShadow};
      text-align: center;
      text-decoration: none;
      transition: color 100ms;
      vertical-align: baseline;
    
    }
    
  a{
    color: white;
    text-decoration: none;
    


  }
  form {
    margin: 0 auto;
    padding: 20px;
    width: 25%;
    height: 30%;
    display: flex;
    flex-direction: column;
    text-align: center;
    border-radius: 10px;
    border: 1px solid #EA4C89;
    margin-top: 50px;
    margin-bottom: 100px;
  }
  input {
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
    margin: 5px 5px ;
    padding: 8px;

}
 
  
`;
 
export default GlobalStyle;