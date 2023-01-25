import React, { useEffect } from 'react'
import { Menu } from '@headlessui/react'
import { Icon } from 'icons'
import { MdArrowDropDown } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import { logout, setUser } from 'store/auth'

const Profile = () => {
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.auth)
    const handleLogout = () => {
        dispatch(logout())
    }
    return (
        <Menu as="nav" className={"relative z-50"}>
            {({ open }) => (
                <>
                    <Menu.Button className={`flex items-center gap-x-2 justify-between rounded-full pl-1.5 py-1 pr-3 transition-colors ${open ? 'bg-active' : 'bg-black'}`}>
                        <span className='w-8 h-8 rounded-full border-black flex justify-center items-center bg-white bg-opacity-30'>
                            <Icon name="profile" size={20} />
                        </span>
                        <div className='flex gap-x-1 items-center'>
                            <span className='font-semibold text-sm'>{user.display_name}</span>
                            <span className={open && 'rotate-180'}>
                                <MdArrowDropDown size={25} />
                            </span>
                        </div>
                    </Menu.Button>
                    <Menu.Items className="absolute top-full pt-2.5 rounded-lg bg-active ounded-md w-48 flex flex-col right-0 translate-y-2">
                        <Menu.Item className="h-10 px-3">
                            {({ active }) => (
                                <NavLink to={"/hesap"} className={`font-bold text-sm ${active && 'bg-white bg-opacity-20'}`}>
                                    <div className='flex justify-between items-center'>
                                        <span>Hesap</span>
                                        <Icon name="externalLink" size={19} />
                                    </div>
                                </NavLink>
                            )}
                        </Menu.Item>
                        <Menu.Item className="h-10 px-3">
                            {({ active }) => (
                                <NavLink to={"/profil"} className={`font-bold text-sm ${active && 'bg-white bg-opacity-20'}`}>
                                    Profil
                                </NavLink>
                            )}
                        </Menu.Item>
                        <Menu.Item className="h-10 px-3">
                            {({ active }) => (
                                <span onClick={handleLogout} className={`font-bold w-full h-full cursor-pointer text-sm ${active && 'bg-white bg-opacity-20'}`}>
                                    Oturumu Kapat
                                </span>
                            )}
                        </Menu.Item>
                    </Menu.Items>
                </>
            )}
        </Menu>
    )
}

export default Profile