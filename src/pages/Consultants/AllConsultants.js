import React,{useEffect} from 'react'
import axios from 'axios'
import {setUsers} from '../../container/redux/actions/userAction'

import { useSelector, useDispatch } from 'react-redux'
import List from './List'
import styled from 'styled-components'
import { getThemeFromStorage } from '../../Helpers/themeStore';


const {heroConsultantsHeight,heroConsultantsBgImage, heroConsultantsBgColor,   heroConsultantsColor } = getThemeFromStorage();


const Hero = styled.div`
width: 100%;
height: ${heroConsultantsHeight}px;
background-image: url(${heroConsultantsBgImage});
font-size: 2.5em;
color: ${heroConsultantsColor};
font-weight: bold;
text-align: center;
background-size: cover;
padding-top: 100px;
margin-bottom: 100px;
background-color: ${heroConsultantsBgColor};
`;

const ListWrapper = styled.div`
      box-shadow:  rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
      margin : 0 auto;
      width: 50%;
  
      padding: 70px 20px;
      text-align: center;
      

`;
const Container = styled.div`
      padding: 20px;
      text-align: center;

`;

export default function AllConsultants() {



const users = useSelector((state) => state)

const dispatch = useDispatch();



useEffect(() => {
  async function  fetchUsers  () {
    const response = await axios.get('https://reqres.in/api/users').catch((err) => {console.log('Err',err)});
    dispatch(setUsers(response.data.data));
  };
  fetchUsers() }, []);



console.log("users: ",users)


  return (
    <>
    <Hero>Nos Consultants  </Hero>

     <Container>
           <h1>Liste complètes des consultants</h1> 
      </Container>
    <ListWrapper>
           <List/>
    </ListWrapper>
           
    
    </>
  )
}
