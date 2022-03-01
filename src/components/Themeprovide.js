import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';









 


export default function Themeprovide() {
    

    const background = useSelector((state) => state.theme.theme.bodyBg);
    const dispatch = useDispatch();
    const fetchtheme = async () => {
        const response = await axios.get('http://localhost:3001/users/51/themes/17').then(response =>{localStorage.setItem('theme',JSON.stringify(response.data))})
        .catch((err) => {console.log('Err',err)});
        ;
    };

    useEffect(() => {
        fetchtheme();
    }, []);

  return (
    <>

    <div style={{width:'100%', backgrounnd :`${background}`}}>Themeprovide</div>
   
   {background}
    </>
  )
}
