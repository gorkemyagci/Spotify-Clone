import React from 'react'
import brand from 'img/logo.svg'
import { Link } from 'react-router-dom'
import Menu from './SideBar/Menu'
import { Icon } from 'icons'
import RootList from './SideBar/RootList'
import Playlists from './SideBar/Playlists'
import DownloadApp from './SideBar/DownloadApp'
import { useSelector } from 'react-redux'
import SideBarCover from './SideBar/SideBarCover'

const SideBar = () => {
  const { sideBar } = useSelector(state => state.player);
  return (
    <div className='w-60 relative pt-6 flex flex-shrink-0 flex-col bg-black'>
      <Link to={{ pathname:"/" }} className="px-6 mb-6 flex flex-row space-x-2 items-center font-bold">
        <Icon name="brand" size={30}/>
        <span className='text-2xl'>Spotify</span>
      </Link>
      <Menu/>
      <RootList/>
      <Playlists/>
      <DownloadApp/>
      {sideBar && <SideBarCover/>}
    </div>
  )
}

export default SideBar