/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { BsFillGearFill } from "react-icons/bs";
import ServiceImage from './ServiceImage';


const cabines = [
    {
        id:1,
        src:'/images/products/cabines/1.jpg'
    },
    {
        id:2,
        src:'/images/products/cabines/2.jpg'
    },
    {
        id:3,
        src:'/images/products/cabines/3.jpg'
    },
    {
        id:4,
        src:'/images/products/cabines/4.jpg'
    },
    {
        id:5,
        src:'/images/products/cabines/5.jpg'
    },
    {
        id:7,
        src:'/images/products/cabines/7.jpg'
    },
    {
        id:8,
        src:'/images/products/cabines/8.jpg'
    }
]

const classic = [
    {
        id:1,
        src:'/images/products/chassis-parts/1.png'
    },
    {
        id:2,
        src:'/images/products/chassis-parts/2.png'
    },
    {
        id:3,
        src:'/images/products/chassis-parts/3.png'
    },
    {
        id:4,
        src:'/images/products/chassis-parts/4.png'
    },
    {
        id:5,
        src:'/images/products/chassis-parts/5.png'
    },
]

const others = [
    {
        id:1,
        src:'/images/products/other/1.png'
    },
    {
        id:2,
        src:'/images/products/other/2.png'
    },
    {
        id:3,
        src:'/images/products/other/3.png'
    },
    {
        id:4,
        src:'/images/products/other/4.png'
    },
    {
        id:5,
        src:'/images/products/other/5.png'
    },
    {
        id:6,
        src:'/images/products/other/6.png'
    },
    {
        id:7,
        src:'/images/products/other/7.png'
    },
    {
        id:8,
        src:'/images/products/other/8.png'
    },
]
const Services = () => {
    return (
        <div className='mb-20'>
            <h2 data-aos='fade-down' className='text-center text-2xl sm:text-4xl font-bold text-gray-700'>Products / Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center">
                <div data-aos="fade-right" className="service-text-area flex flex-col justify-center items-center">
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
                <div data-aos="fade-left" className="service-image">
                    <img src='/images/car-sheet.jpg' alt='' />
                </div>
            </div>
            <div className="products">
                <ServiceImage images={cabines} name='Cabines'/>
                <ServiceImage images={classic} name='Classic Parts'/>
                <ServiceImage images={others} name='Other Products'/>
            </div>
        </div>
    )
}

export default Services