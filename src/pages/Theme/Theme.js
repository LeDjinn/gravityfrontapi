import React, { useEffect } from 'react'
import FormTheme from './FormTheme'
import { useSelector,useDispatch } from 'react-redux'
import LoginForm from '../../components/auth/LoginForm';
import Registration from '../../components/auth/Registration';






export default function Theme() {
   
  
    const status = useSelector((state) => state.logStatus.payload);
   
    if( 'a' === 'a'){

        return (
                 <>
                    
                      <div style ={{width:'100%', textAlign:'center'}}>
                          <h1 > Création du Theme </h1>
                      </div>
                         <FormTheme />  
                  
                  </>

  )
}   else{

       return (
                  <><LoginForm/> <Registration/></>)
}   
}

