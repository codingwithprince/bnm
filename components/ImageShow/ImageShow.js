/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Marquee from "react-fast-marquee";

const images = [
    {
        id:1,
        img:'/images/presa.jpg'
    },
    {
        id:2,
        img:'/images/presa1.jpg'
    },
    {
        id:3,
        img:'/images/sestanek.jpg'
    },
    {
        id:4,
        img:'/images/vhod.jpg'
    },
]

const ImageShow = () => {


  return (
    <div className='sm:py-20 py-5  bg-gray-100'>
    {/* <h2 className='text-gray-700 my-10 font-bold text-2xl text-center pb-5'>Our Images</h2> */}
    <div className='flex flex-wrap justify-center gap-5 '>
        {
           images.map(data => <img className='h-[200px] shadow-sm transition ease-in-out duration-200 m-2 sm:m-4 rounded-lg hover:scale-105' key={data.id} src={data.img} alt={data.id} />) 
        }
    </div>
                
</div>
  )
}

export default ImageShow