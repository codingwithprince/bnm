/* eslint-disable @next/next/no-img-element */
import React from 'react'
import {FaPhoneAlt} from 'react-icons/fa'
import { MdEmail} from 'react-icons/md'

const ContactComp = () => {
  return (
    <div className='sm:mt-[60px] py-20'>
        <h2 data-aos='fade-down' className='text-center text-2xl sm:text-4xl font-bold text-gray-700 md:pb-5'>Contact</h2>
        <div className="contact-hero mt-5 flex flex-wrap justify-around items-center">
            <div className="contact-admins flex flex-wrap justify-center">
                <div className="ceo flex flex-wrap justify-center gap-2 items-center">
                    <img src="/images/gorazd_brecko.jpg" alt="" />
                    <div className="ceo-text p-2 sm:text-left text-center">
                       <h4 className='text-gray-700 text-2xl font-semibold'>Gorazd Brečko <span className='text-gray-600'>( CEO )</span></h4>
                       <br />
                       <p><FaPhoneAlt size={20} color='gray' className='inline-block pr-1' /> 00386 (0)59 096 301</p>
                       <p className='font-semibold'><MdEmail size={20} color='gray' className='inline-block pr-1' /> <a className='text-blue-700' href="mailto:gorazd.brecko@bnm.si">gorazd.brecko@bnm.si</a></p>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2">


                </div>
            </div>
            <div className="bnm-contact py-10">
                <img src='/images/logos/logo.png' alt='bnm-logo' />
                <p className='mt-7 text-gray-600 font-semibold'>BNM d.o.o., Cesta k Tamu 37 <br />
                    SI-2000 Maribor</p>
                <p className='mt-3 text-gray-600 font-semibold'>Tel: 00386 59 096 300 <br />
                Email : <a href="mailto:info@bnm.si" className="text-blue-700">info@bnm.si</a></p>
                <p className='mt-3 text-gray-600 font-semibold'>VAT ID: SI77641949 <br />
                Registration number: 6004741000</p>
            </div>
        </div>
    </div>
  )
}

export default ContactComp