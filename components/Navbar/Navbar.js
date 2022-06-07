import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BiMenu } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'

const menuItems = [
  {
    name: 'Home',
    link: '/'
  },
  {
    name: 'Products',
    link: '/products'
  },
  {
    name: 'Machinery',
    link: '/machinery'
  },
  {
    name: 'Quality',
    link: '/quality'
  },
  {
    name: 'Careers',
    link: '/careers'
  },
  {
    name: 'Contact',
    link: '/contact'
  }
]

const Navbar = () => {

  let [open, setOpen] = useState(false);

  return (
    <div
      style={{
        backgroundColor:'white',
        // background: 'linear-gradient(rgba(0,0,0,1), rgba(0,0,0,0.8))',
        zIndex: '20'
      }}
      className='shadow-md w-full fixed top-0 left-0 md:px-[5%]'>
      <div className='md:flex flex flex-wrap items-center justify-between py-4 md:px-10 px-[5%]'>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
    text-blue-700'>
          - B.N.M -
        </div>

        <div onClick={() => setOpen(!open)} className='text-3xl  cursor-pointer md:hidden'>
          {
            open ? <AiOutlineClose color='black' /> : <BiMenu color='black' />
          }
        </div>

        <ul className={`md:flex md:items-center  bg-gray-700 absolute md:static px-4 pr-7 py-2 md:rounded-full items-center md:z-auto z-[5] right-0 w-full md:w-auto md:pl-0 transition-all duration-500 ease-in ${open ? 'top-[60px]' : 'top-[-490px]'}`}>
          {
            menuItems.map((link) => (
              <li onClick={()=> setOpen(!open)} key={link.name} className='md:ml-8 text-md md:my-0 my-7'>
                <Link href={link.link}>
                  <a className='text-white  font-semibold uppercase hover:text-gray-300 duration-500'>{link.name}</a>
                </Link>
              </li>
            ))
          }
        </ul>
        {/* <button className='bg-blue-600 text-white text-md md:mx-4 hover:bg-blue-500 uppercase font-semibold px-3 py-2 rounded'>
        Contact
      </button> */}
      </div>
    </div>
  )
}

export default Navbar