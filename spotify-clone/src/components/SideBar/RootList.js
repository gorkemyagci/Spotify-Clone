import { Icon } from 'icons'
import React from 'react'
import { NavLink } from 'react-router-dom'

const RootList = () => {
  return (
    <nav className='mt-6'>
        <ul className='flex flex-col'>
            <li>
                <NavLink className="py-2 group px-6 flex text-sm text-link font-semibold hover:text-white gap-x-4 items-center">
                    <span className='w-6 h-6 flex justify-center items-center group-hover:bg-opacity-100 bg-white bg-opacity-60 text-black rounded-[1]'>
                        <Icon name="plus" size={12}/>
                    </span>
                    Çalma Listesi Oluştur
                </NavLink>
            </li>
            <li>
                <NavLink className="py-2 group px-6 flex text-sm text-link font-semibold hover:text-white gap-x-4 items-center">
                    <span className='w-6 h-6 flex justify-center group-hover:opacity-100 bg-gradient-to-br to-blue-300 from-indigo-600 items-center rounded-[1] opacity-70'>
                        <Icon name="heart" size={12}/>
                    </span>
                    Beğenilen Şarkılar
                </NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default RootList