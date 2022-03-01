import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const SmallCard = styled.div`
     width: 50%;
     display: flex;
     font-size: 20px;
     justify-content: space-around;
     padding-top: 20px;
     margin-bottom: 20px;
     margin-left: auto;
      margin-right: auto;
    
     
`;




export default function List() {
  

  const usersTest = useSelector((state) => state.allUsers.users)


  return (
    <>
    {usersTest.map((user) => {
      return <div key={user.id} >
          <SmallCard>
                <img src={user.avatar} alt={`${user.last_name}`} style={{width:'20%', height:'10%','border-radius':'50%'}}/>
                <div>
                    <div style={{'margin-top':'20px'}}>{user.first_name} {user.last_name}</div>
                    <div style ={{color:'gray'}}>Consultant</div>
                 </div>   
                <Link to ={`/consultants/${user.id}`}> <button style={{'margin-top':'20px'}}> Détails </button></Link>
           </SmallCard>
     </div>
    })}
    </>
  )
}
