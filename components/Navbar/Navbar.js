import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='flex shadow-md justify-between px-[10%] py-5'>
        <div className="logo">
                <Image src='/images/logos/logo.png' height={30} width={150} alt='logo' />
        </div>
        <div className="menu">
          <ul className='list-style-none flex gap-5'>
            <li>
              <Link href='/'>
                <a className='font-semibold ease-in-out duration-150 hover:text-blue-500 hover:border-blue-500 p-2 border-b-4 border-transparent text-lg text-[#555] uppercase'>COMPANY</a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a className='font-semibold ease-in-out duration-150 hover:text-blue-500 hover:border-blue-500 p-2 border-b-4 border-transparent text-lg text-[#555] uppercase'>Product</a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a className='font-semibold ease-in-out duration-150 hover:text-blue-500 hover:border-blue-500 p-2 border-b-4 border-transparent text-lg text-[#555] uppercase'>MACHINERY</a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a className='font-semibold ease-in-out duration-150 hover:text-blue-500 hover:border-blue-500 p-2 border-b-4 border-transparent text-lg text-[#555] uppercase'>Quality</a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a className='font-semibold ease-in-out duration-150 hover:text-blue-500 hover:border-blue-500 p-2 border-b-4 border-transparent text-lg text-[#555] uppercase'>Contact</a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a className='font-semibold ease-in-out duration-150 hover:text-blue-500 hover:border-blue-500 p-2 border-b-4 border-transparent text-lg text-[#555] uppercase'>Careers</a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a className='font-semibold ease-in-out duration-150 hover:text-blue-500 hover:border-blue-500 p-2 border-b-4 border-transparent text-lg text-[#555] uppercase'>Find us</a>
              </Link>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar