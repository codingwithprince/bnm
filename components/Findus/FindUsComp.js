/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

const FindUsComp = () => {
  return (
    <div> 
          <h2 data-aos='fade-down' className='text-center text-2xl sm:text-4xl font-bold text-gray-700 md:pb-5'>Where to find us?</h2>
          <p className='text-center text-lg my-10'>Maribor is Slovenia’s second largest city, and at the same time also the economic, academic, cultural, scientific, congress and tourist center of northeastern Slovenia. 
            <br />
            It is also a transportation hub at the crossroads of motorways connecting western Europe to eastern Europe and northern Europe to southern Europe, just 11 km from the Austrian border. 
          </p>
          <div className="address text-center my-10 md:text-lg">
            <h4 className='font-semibold text-gray-500'><span className='text-blue-700 font-bold'>▪ B ▪ N ▪ M ▪</span> CESTA K TAMU 37 
            <br />
            2000 MARIBOR, SLOVENIJA
            </h4>
          </div>
          <div className="images flex justify-center gap-5 flex-wrap my-10 mx-1">
            <Link href='https://www.visitmaribor.si/si/'>
              <img className='rounded-lg hover:scale-105 mx-3 transition ease-in-out duration-300 hover:shadow-xl' src='/images/maribor-lent.png' alt='maribor' />
            </Link>
            <Link href='http://www.maribor2012.info/'>
              <img className='rounded-lg hover:scale-105 mx-3 transition ease-in-out duration-300 hover:shadow-xl' src='/images/maribor.jpg' alt='maribor' />
            </Link>
          </div>
          <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31064.444189038444!2d15.655053679470349!3d46.51335787109482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476f775fe7e887e9%3A0xce460bf9306f234!2sB%20n%20m%20%2C%20Avtomobilska%20industrija%2C%20d.o.o.!5e0!3m2!1sen!2sbd!4v1655527152136!5m2!1sen!2sbd" width="100%" height="450"  allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
    </div>
  )
}

export default FindUsComp