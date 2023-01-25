import { Icon } from 'icons'
import React from 'react'
import { useLocation } from 'react-router-dom'

const WithGoogle = () => {
  const location = useLocation();
  return (
    <>
    <button className={`flex items-center gap-x-3 rounded-full bg-white border-2 w-96 hover:scale-105 justify-center py-2.5 ${location.pathname === '/signup' ? 'border-black' : 'border-gray-300'}`}>
        <Icon name="google"/>
        <span className={`font-bold ${location.pathname === '/signup' ? 'text-black tracking-tight' : 'text-gray-500 tracking-wider text-base'}`}>
          {location.pathname === '/signup' ? "Google ile kaydol" : "GOOGLE İLE DEVAM ET"}
        </span>
    </button>
    </>
  )
}

export default WithGoogle