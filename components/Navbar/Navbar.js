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
        // background: 'linear-gradient(rgba(0,0,0,1), rgba(0,0,0,0.8))',
        zIndex: '20',
      }}
      className='w-full fixed top-0 left-0 md:px-[5%]  bg-white shadow-md'>
      <div className='md:flex flex flex-wrap items-center justify-between py-3 md:px-10 px-[5%]'>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
    text-gray-700'>
          - B.N.M -
        </div>

        <div onClick={() => setOpen(!open)} className='text-3xl  cursor-pointer md:hidden'>
          {
            open ? <AiOutlineClose color='gray' /> : <BiMenu color='gray' />
          }
        </div>

        <ul className={`md:flex md:items-center shadow-sm md:shadow-none bg-gradient-to-b from-gray-800 to-gray-700 absolute md:static px-4 pr-7 py-2 md:rounded-full items-center md:z-auto z-[5] right-0 w-full md:w-auto md:pl-0 transition-all duration-100 ease-in ${open ? 'top-[50px]' : 'top-[-490px]'}`}>
          {
            menuItems.map((link) => (
              <Link href={link.link} key={link.name}>
                <li onClick={()=> setOpen(!open)}  className='md:ml-8 text-md md:my-0 my-7 cursor-pointer'>
                    <a className='text-white font-semibold uppercase hover:text-gray-300 duration-500'>{link.name}</a>
                </li>
              </Link>
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