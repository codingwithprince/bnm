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
    {
        id:3,
        img:'/images/sestanek.jpg'
    },
    {
        id:4,
        img:'/images/vhod.jpg'
    }
]

const ImageShow = () => {


  return (
    <div className='pb-20 mb-10'>
    <h2 className='text-gray-700 my-10 font-bold text-2xl text-center pb-5'>Our Images</h2>
     <Marquee pauseOnHover={true} gradient={false} loop={0} speed={20}>
        {
           images.map(data => <img className='sm:mx-10 sm:h-[300px] mx-2 hover:rounded-lg' key={data.id} src={data.img} alt={data.id} />) 
        }        
        
    </Marquee>
</div>
  )
}

export default ImageShow