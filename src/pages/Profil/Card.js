import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { getThemeFromStorage } from '../../Helpers/themeStore';


const {heroProfilHeight,heroProfilBgImage, heroProfilBgColor,   heroProfilColor } = getThemeFromStorage();


const Wrapper  = styled.div`
   section {
        margin: 0 auto;
        width: 75%;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        padding: 30px;
        background-image: linear-gradient( #e9f2f5, #bfe9ff );
        margin-bottom: 50px;
        overflow: hidden;
        
   }
   h2 {
       font-size: 1.2em;
   }
   div {
       padding: 0px;
       text-align: left;
        
   } 
   img {
         width: 200px;
         height: 200px;
         border: 1px solid #ddd;
         border-radius: 50%;
        
         box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        }

`;
const Title = styled.h2`
    font-size: 50px;
   
 
    max-width: 50%;
    
`;


const Text = styled.div`
    font-size: 1em;
    text-align: left;
    border-radius: 10px;
    color: gray;
    padding-left: 40px;

    
`;
const Container = styled.div`
     padding: 20px;
     margin-top: 50px;
`;

const Hero = styled.div`
width: 100%;
height: ${heroProfilHeight}px;
background-image: url(${heroProfilBgImage});
font-size: 2.5em;
color: ${heroProfilColor};
font-weight: bold;
text-align: center;
background-size: cover;
padding-top: 100px;
margin-bottom: 100px;
background-color: ${heroProfilBgColor};
`;

const Flex = styled.div`

    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 20px;
    margin-bottom: 50px;
    `;


export default function Card() {
    const user = useSelector((state) => state.user)
    const {id, email, first_name, last_name, avatar} = user
  return (
      <>
      <Hero>
          
              Découvrez tout les détails de nos experts 
          
        </Hero>
              <Wrapper>
            <section>
           
                <Container>
                <div>
                    <div>  <Flex>
                               <img src={avatar} alt={`${last_name}`}/>
                               <div>
                                <h1>{first_name} {last_name}</h1>
                                <p>Consultant en in formatique </p>
                                </div>
                            </Flex>
                            
                            <p> 
                                Pour Contacter {last_name} vous pouvez contactez <span style={{color: "#d970ff"}}>{email}</span>
                            </p>
                    </div>
                   <Text> 

                         <p>
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. 
                         </p>
                     </Text>
                   
                </div>
                </Container>

            </section>
        </Wrapper>
  </>
  )
}
