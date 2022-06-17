/* eslint-disable @next/next/no-img-element */
import React from 'react'

const ImageSection = ({name, data}) => {
  console.log(name);
  return (
    <div className="others md:px-[10%] px-2 py-5">
    <h3 data-aos='fade-down' className="text-center font-semibold text-2xl py-5 md:py-20 text-blue-800">{name}</h3>
    <div className="img-section gap-5 flex flex-wrap justify-center">
    {
      data.map(item => <div data-aos="fade-up" key={item.id} className='shadow-lg'>
        <div className="img">
          <img className='w-[400px] h-[300px] hover:scale-105 transition-all ease-in-out  object-cover p-2' src={item.img} alt='' />
        </div>
        <div className="text py-5">
          <h4 className='text-center font-semibold'>{item.title}</h4>
          <hr />
          <p className='text-center py-2 font-normal text-lg'>{item.desc1}</p>
          <p className='text-gray-700 whitespace-pre-line text-center text-sm'>{item.desc2}</p>
        </div>
      </div>)
    }

    </div>
    </div>
  )
}

export default ImageSection