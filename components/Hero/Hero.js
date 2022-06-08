/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import MultiCarousel from './MultiCarousel';
import  TypeAnimation  from 'react-type-animation'



const heroImages =[
  {
    name:'sestava kabin',
    img:'/images/sestavakabin.jpg'
  },
  {
    name:'varjenje',
    img:'/images/varjenje.jpg'
  },
  {
    name:'stiskalnice',
    img:'/images/stiskalnice.jpg'
  },
  {
    name:'merilnica',
    img:'/images/merilnica.jpg'
  },
  {
    name:'stiskalnice2',
    img:'/images/stiskalnice2.jpg'
  },
  {
    name:'stiskalnice3',
    img:'/images/stiskalnice3.jpg'
  },
  {
    name:'heldtransglas',
    img:'/images/heldtransglas.jpg'
  },
  {
    name:'3-3d-laser',
    img:'/images/3-3d-laser.jpg'
  },
  {
    name:'3d-laser',
    img:'/images/3d-laser.jpg'
  },
  {
    name:'sestava kabin',
    img:'/images/sestava-kabin.jpg'
  },
  {
    name:'proizvodnja kabin',
    img:'/images/proizvodnja-kabin.jpg'
  }

]



const Hero = () => {


  return (
    <div 
    // style={{
    //   backgroundImage: "url('/images/bg.png')",
    //   backgroundRepeat: 'no-repeat',
    //   backgroundSize:'cover',
    //   backgroundPosition:'center',
    // }}
    className='pt-[80px] sm:px-[5%] px-[2px] sm:py-[120px] flex items-center bg-[#EDF2F7]'>


      
        <div className="hero md:px-[2%] py-0 grid grid-cols-1 lg:grid-cols-3">
              <div className="hero-text p-2 text-left text-white md:mt-20">
                  <h2 className='text-center sm:text-left text-8xl font-extrabold font-mono mb-5 text-blue-700'> B.N.M </h2>
                      <TypeAnimation
                          className='text-gray-700 md:text-4xl md:text-left text-center text-2xl font-semibold '
                          cursor={true}
                          sequence={['Avtomobilska Industrija', 4000, '']}
                          wrapper="h2"
                          repeat={Infinity}
                        />
                
             
               <p className='text-gray-700 mt-5 text-xl text-justify md:pr-10'>Our field of activity is sheet metal forming, complex stamping and welding for the automotive industry.
Machine capacities, knowledge and experience give us the opportunity to cooperate also with other industries which require such services or sheet metal products.</p>

                <div className="buttons text-center sm:text-left">
                   <button className='mt-5 text-lg font-semibold bg-blue-600 text-white hover:bg-blue-500 px-4 py-2 rounded-full'>Contact</button>
                </div>
              

                 
              </div> 


              {/* =============== Slider with image =================== */}


              <div className="hero-image-slider col-span-2 text-gray-700 flex justify-center items-center">
                <div className="card w-[100%]  p-1 md:p-5 rounded-lg">
                    <h3 className='py-5 font-semibold text-2xl text-center'>Our Work</h3>
                    <Carousel showThumbs={true} showArrows={true} showIndicators={false} swipeable={true} infiniteLoop={true} autoPlay={true}>
                    {
                      heroImages.map(data => <div key={data.name}>
                                <img className='md:rounded-lg ' src={data.img} height={700} width={1250}  alt='img'/>
                                <p style={{background:'linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7))',}} className="legend">
                                  {data.name}
                                  </p>
                                  
                        </div>
                      )
                    }
                  </Carousel>
                  

                </div>  
              </div> 
        </div>
    </div>
  )
}

export default Hero