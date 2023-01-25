import { Icon } from 'icons'
import React from 'react'
import { useLocation } from 'react-router-dom'

const WithFacebook = () => {
  const location = useLocation();
  return (
    <>
      <button className={`flex items-center gap-x-3 rounded-full w-96 hover:scale-105 justify-center py-2.5 ${location.pathname === '/signup' ? 'bg-[#405A93]' : 'bg-[#1877F2] text-white'}`}>
        {location.pathname === '/signup' ?
          <Icon name="facebook" /> : <Icon name="facebookLogin" />
        }
        <span className={`${location.pathname === '/signup' ? 'font-bold tracking-tight' : 'font-bold tracking-wider text-[15px]'}`}>
          {
            location.pathname === '/signup' ? "Facebook ile kaydol" : "FACEBOOK İLE DEVAM ET"
          }
        </span>
      </button>
    </>
  )
}

export default WithFacebook