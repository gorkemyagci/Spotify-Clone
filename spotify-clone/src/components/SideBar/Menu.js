import React from 'react'
import { NavLink } from 'react-router-dom'
import { Icon } from 'icons'

const Menu = () => {
    let activeClassName = "bg-active text-white flex items-center h-10 text-sm font-semibold hover:text-white px-4 rounded";
    let className = "flex items-center h-10 text-sm font-semibold text-link hover:text-white px-4 rounded";
    return (
        <nav className='px-2'>
            <ul className='flex flex-col'>
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? activeClassName : className
                    } exact to={{ pathname: "/" }}>
                        <span>
                            <Icon name="home" />
                        </span>
                        Ana sayfa
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? activeClassName : className
                    } to={{ pathname: "/search" }}>
                        <span>
                            <Icon name="search" />
                        </span>
                        Ara
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? activeClassName : className
                    } activeClassName="bg-active text-white" to={{ pathname: "/collection/playlists" }}>
                        <span>
                            <Icon name="playlist" />
                        </span>
                        Kitaplığın
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Menu