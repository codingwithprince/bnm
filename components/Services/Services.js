/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { BsFillGearFill } from "react-icons/bs";

const Services = () => {
    return (
        <div>
            <h2 className='text-center text-2xl sm:text-4xl font-bold text-gray-700'>Products / Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center">
                <div className="service-text-area flex flex-col justify-center items-center">
                    <div className="icons p-5">
                        <BsFillGearFill className='text-[120px] animate-spin-slow text-gray-500 ml-5' />
                        <BsFillGearFill className='text-[70px] animate-reverse-spin text-gray-700' />
                    </div>
                    <div className="service-text p-3 text-justify md:px-[15%]">
                        <p className='text-lg'>
                            Our core businesses are sheet metal forming processes and complex stampings for the automotive industry.Machine capacity, knowledge and experience enable us to produce for other industries which need such products.
                        </p>
                    </div>
                  
                </div>
                <div className="service-image">
                    <img src='/images/car-sheet.jpg' alt='' />
                </div>
            </div>
        </div>
    )
}

export default Services