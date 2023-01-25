import React from 'react'
import { NavLink } from 'react-router-dom'

const Title = ({title,more}) => {
    return (
        <header className='flex group justify-between items-center mb-4'>
            <h2 className='text-[24px] group-hover:underline group-hover:cursor-pointer font-bold tracking-tight'>{title}</h2>
            {more && <NavLink to={{ pathname: more }} className="text-[15px] font-semibold text-gray-600 hover:underline tracking-wide">TÜMÜNÜ GÖSTER</NavLink>}
        </header>
    )
}

export default Title