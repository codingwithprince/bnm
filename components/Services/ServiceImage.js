/* eslint-disable @next/next/no-img-element */
import React from 'react'

const ServiceImage = ({images, name}) => {
  return (
    <div className="others px-[10%] py-5">
    <h3 className="text-center font-semibold text-2xl py-5 md:py-20 text-blue-800">{name}</h3>
    <div className="cabines-images flex flex-wrap justify-center">
        {
           images.map(data => <img data-aos="fade-up" className= {`m-5 hover:scale-105 transition duration-200 ease-in-out rounded-sm w-[250px] h-[200px]`} key={data.id} src={data.src} alt='' />)
        }
    </div>
</div>
  )
}

export default ServiceImage