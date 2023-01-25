import React from 'react'
import { NavLink } from 'react-router-dom'

const OpenAccount = () => {
    return (
        <div className='flex items-center'>
            <div className='border-r pr-5'>
                <ul className='flex items-center gap-x-6'>
                    {
                        ["Premium", "Destek", "İndir"].map((item, index) => {
                            return (
                                <li key={index} className="font-semibold text-lg cursor-pointer text-gray-400 hover:scale-110 hover:text-white">{item}</li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className='pl-5'>
                <ul className='flex items-center gap-x-8'>
                    <NavLink to={{pathname:"/signup"}} className="font-semibold text-gray-400 text-base hover:text-white hover:scale-105">Kaydol</NavLink>
                    <NavLink to={{pathname:"/login"}} className="py-3 rounded-full bg-white px-8 flex font-bold items-center justify-center text-black">Oturum Aç</NavLink>
                </ul>
            </div>
        </div>
    )
}

export default OpenAccount