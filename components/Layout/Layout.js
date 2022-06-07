import React from 'react'
import Navbar from '../Navbar/Navbar'

const Layout = ({children}) => {
  return (
    <>
        <Navbar />
        <main className='bg-[#EDF2F7] sm:px-[5%] px-[2px]'>
            {children}
        </main>
    </>
  )
}

export default Layout