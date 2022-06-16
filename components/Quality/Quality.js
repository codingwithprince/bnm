/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Quality = () => {
  return (
    <div
    className='md:pt-10'
    style={{
        backgroundImage:"linear-gradient(to right, rgba(0,0,0,0.05),rgba(0,0,0,0.05)),url('/images/bg2.png')",
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        backgroundPosition:'center'
    }}
    >
         <h2 className='text-center text-2xl sm:text-4xl font-bold text-gray-700'>Quality</h2>
         <div className="flex flex-col justify-center mt-5 ">
            <div className="quality-image flex justify-center">
                <img className='md:my-10 hover:scale-105 transition-all ease-in-out' src='/images/merilnica.jpg' alt='' />
            </div>
            <div className="quality-text md:w-[50%] m-auto py-5 px-2">
                <p className='text-lg text-gray-800'>The measurement of our policy of quality is the  <strong>zero mistake</strong> strategy from the automobile industry.</p>
                <p className='text-lg text-gray-800 pt-2'>We are certificated  according  ISO/TS 16949:2009.</p>
                <p className='text-md text-gray-800 py-5 font-semibold'>The processes introduced and already implemented are, for example:</p>
                <ul className='list-disc pl-5 py-5'>
                    <li className='text-sm text-gray-800 '>Treatment of customer complaints according to the 8-D report</li>
                    <li className='text-sm text-gray-800 '>Introduction of regular discussions about quality</li>
                    <li className='text-sm text-gray-800 '>Regular internal reviews</li>
                    <li className='text-sm text-gray-800 '>Product traceability</li>
                </ul>
                <p className='text-lg text-gray-800 py-5'>In April 2013 we made for rail industry customers  certification for welding processes according to DIN EN 15085 CL1.</p>

            </div>
           
         </div>
    </div>
  )
}

export default Quality