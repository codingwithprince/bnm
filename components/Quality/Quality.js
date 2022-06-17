/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Quality = () => {
  return (
    <div
    className='mb-10'
    // style={{
    //     backgroundImage:"linear-gradient(to right, rgba(0,0,0,0.05),rgba(0,0,0,0.05)),url('/images/bg2.png')",
    //     backgroundRepeat:'no-repeat',
    //     backgroundSize:'cover',
    //     backgroundPosition:'center'
    // }}
    >
         <h2 data-aos='fade-down' className='text-center text-2xl sm:text-4xl font-bold text-gray-700'>Quality</h2>
         <div className="flex flex-col justify-center mt-5 ">
            <div className="quality-image flex justify-center">
                <img data-aos="fade-up" className='md:my-10 h-[50vh] object-cover hover:scale-105 transition-all ease-in-out' src='/images/merilnica.jpg' alt='' />
            </div>
            <div className="quality-text md:w-[50%] m-auto py-5 px-2">
                <p data-aos="fade-up" className='text-lg text-gray-800'>The measurement of our policy of quality is the  <strong>zero mistake</strong> strategy from the automobile industry.</p>
                <p data-aos="fade-up" className='text-lg text-gray-800 pt-2'>We are certificated  according  <a className='text-blue-700 underline font-semibold' href="http://www.bnm.si/uploads/47664-msts_en.jpg">ISO/TS
16949:2009.</a></p>
                <p data-aos="fade-up" className='text-md text-gray-800 py-5 font-semibold'>The processes introduced and already implemented are, for example:</p>
                <ul data-aos="fade-up" className='list-disc pl-5 py-5'>
                    <li className='text-sm text-gray-800 '>Treatment of customer complaints according to the 8-D report</li>
                    <li className='text-sm text-gray-800 '>Introduction of regular discussions about quality</li>
                    <li className='text-sm text-gray-800 '>Regular internal reviews</li>
                    <li className='text-sm text-gray-800 '>Product traceability</li>
                </ul>
                <p data-aos="fade-up" className='text-lg text-gray-800 py-5'>In April 2013 we made for rail industry customers  certification for welding processes according to DIN EN 15085 CL1.</p>
            </div>
           
         </div>
    </div>
  )
}

export default Quality