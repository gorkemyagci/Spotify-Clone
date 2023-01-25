import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useSearchParams } from 'react-router-dom'
import { setUser } from 'store/auth'
import Navigation from './Navbar/Navigation'
import OpenAccount from './Navbar/OpenAccount'
import Profile from './Navbar/Profile'
import Search from './Navbar/Search'

const Navbar = () => {
  const searchRoute = useLocation().pathname == '/search';
  const {token} = useSelector(state => state.auth);
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
      const getUserInformation = async () => {
          const {userData} = await axios.get('https://api.spotify.com/v1/me', {
              headers: {
                  Authorization: "Bearer " + token,
                  "Content-Type": "application/json"
              }
          }).then(data => {
              dispatch(setUser(data.data))
              console.log(data.data)
          })
          .catch(err => console.log(err))
      }
    getUserInformation();
  }, [])
  return (
    <div className='h-[3.75rem] w-full flex items-center justify-between px-8'>
      <Navigation/>
      {searchRoute && 
      <Search/>
      }
      {user ? <Profile/> : <OpenAccount/>}
    </div>
  )
}

export default Navbar