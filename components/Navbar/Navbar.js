import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {BiMenu} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'

const menuItems = [
  {
    name:'Home',
    link:'/'
  },
  {
    name:'Products',
    link:'/products'
  },
  {
    name:'Machinery',
    link:'/machinery'
  },
  {
    name:'Quality',
    link:'/quality'
  },
  {
    name:'Careers',
    link:'/careers'
  },
  {
    name:'Contact',
    link:'/contact'
  }
]

const Navbar = () => {

  let [open,setOpen]=useState(false);

return (
  <div 
  style={{
    background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5))',
    zIndex:'20'
  }}
  className='shadow-md w-full fixed top-0 left-0 px-[5%]'>
    <div className='md:flex items-center justify-between py-4 md:px-10 px-7'>
    <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
    text-white'>
      - B.N.M -
    </div>
    
    <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      {
        open? <AiOutlineClose color='white' /> : <BiMenu color='white' />
      }
    </div>

    <ul className={`md:flex md:items-center  absolute md:static bg-white px-4 py-2 rounded-lg md:rounded-full items-center md:z-auto z-[-1] right-0 w-full md:w-auto md:pl-0 px-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
      {
        menuItems.map((link)=>(
          <li key={link.name} className='md:ml-8 text-md md:my-0 my-7'>
            <Link href={link.link}>
             <a className='text-gray-800 font-semibold uppercase hover:text-gray-400 duration-500'>{link.name}</a>
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