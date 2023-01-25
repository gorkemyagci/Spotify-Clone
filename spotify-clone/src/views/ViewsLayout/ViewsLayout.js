import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import SideBar from 'components/SideBar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const ViewsLayout = () => {
  return (
    <>
    <div className='wrapper'>
      <SideBar/>
    <main className='flex-auto overflow-auto py-5'>
      <Navbar />
      <div className='px-8 pt-4'>
        <Outlet/>
      </div>
    </main>
    </div>
    <Footer/>
    </>
  )
}

export default ViewsLayout