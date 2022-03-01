import React ,{useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { selectedUser,removeSelectedUser } from '../../container/redux/actions/userAction'
import { useDispatch } from 'react-redux'
import Card from './Card'

export default function User() {
    const user = useSelector((state) => state.user)
    const { id } = useParams();
    const dispatch = useDispatch();
    const fetchUser = async () => {
      
        const response = await axios.get(`https://reqres.in/api/users/${id}`).catch((err) => { console.log('Err', err) });
     dispatch(selectedUser(response.data.data))
    }
    useEffect(() => {
        if (id && id !=="")fetchUser();
    return ()=> {
        dispatch(removeSelectedUser())
    }
    }, [])

    

  return (
    <>
    {Object.keys(user).length === 0 ? (<div>... LOADING</div>) : (<Card/>) }
    </>
  )
}
