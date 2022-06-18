import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="p-4 bg-white  shadow md:px-6 md:py-8 dark:bg-gray-900">
            <div className=" sm:flex sm:items-center sm:justify-between">
                <a href="#" className="flex text-center items-center mb-4 sm:mb-0">
                    <span className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
    text-gray-700 whitespace-nowrap dark:text-white">- B.N.M -</span>
                </a>
                <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
                    </li>
                    <li>
                        <Link href='/contact'>
                             <a className="hover:underline">Contact</a>
                        </Link>
  
                    </li>
                </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-xs text-gray-500 sm:text-center dark:text-gray-400">© 2012 BNM avtomobilska industrija d.o.o. Vse pravice pridržane <br /> Oblikovanje: JK Izvedba: MD Consultico Mitja Divjak s.p.
            </span>
            <a href="https://www.facebook.com/profile.php?id=100008591616145" target="_blank" rel="noreferrer">
             <p className='text-sm pt-10 text-center text-white  hover:text-blue-700'>Made by Prince ❤️</p>
            </a>
           
        </footer>
    )
}

export default Footer