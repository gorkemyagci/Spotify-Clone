import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const CollectionLayout = () => {
    let className = "px-4 py-2 text-white font-semibold text-base rounded-md";
    let activeClassName = "px-4 py-2 text-white font-semibold text-base rounded-md bg-white bg-opacity-10"
  return (
    <>
    <nav className='flex items-center gap-x-4'>
        <NavLink to={{pathname:"/collection/playlists"}} className={({isActive}) =>
            isActive ? activeClassName : className
        }>
            Çalma Listeleri
        </NavLink>
        <NavLink to={{pathname:"/collection/podcasts"}}  className={({isActive}) =>
            isActive ? activeClassName : className
        }>
            Podcast'ler
        </NavLink>
        <NavLink to={{pathname:"/collection/artists"}}  className={({isActive}) =>
            isActive ? activeClassName : className
        }>
            Sanatçılar
        </NavLink>
        <NavLink to={{pathname:"/collection/albums"}}  className={({isActive}) =>
            isActive ? activeClassName : className
        }>
            Albümler
        </NavLink>
    </nav>
    <div>
        <Outlet/>
    </div>
    </>
  )
}

export default CollectionLayout