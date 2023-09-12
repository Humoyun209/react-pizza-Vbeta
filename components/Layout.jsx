import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <main className='py-[53px] pl-[20px] pr-[15px] sm:pl-[50px] sm:[pr-25px] md:pl-[77px] md:pr-[38px] my-[43px] max-w-[1340px] mx-auto bg-white'>
        <Outlet />
    </main>
  )
}

export default Layout