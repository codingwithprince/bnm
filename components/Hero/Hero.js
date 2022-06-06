import React from 'react'
import Image from 'next/image'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import MultiCarousel from './MultiCarousel';


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
    style={{
        backgroundImage : "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)),url('/images/bg.png')",
        backgroundPosition: 'center',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        paddingTop:'80px',
        backgroundAttachment:'fixed'
    }}>
        <div className="hero md:px-[5%] py-0 grid grid-cols-1 md:grid-cols-2">
              <div className="hero-text p-2 flex flex-col text-white md:mt-20">
                  <h2 className='text-2xl md:mb-20'>Welcome to</h2>
                  <h1 className='text-8xl sm:text-[150px] md:mb-20'>B.N.M</h1>
                  <p className='text-justify mb-5'>We specialize in the sheet metal forming process and additional stampings to a desired product quality at a competitive price which will satisfy the needs of all customer and other partners in the sheet metal forming industry.

Our goal is to become an important partner in the field of sheet metal forming and complex stampings for automotive and other industries.</p>
              </div> 
              <div className="hero-image-slider text-white">
                  <Carousel showArrows={true} showThumbs={true} showIndicators={false} swipeable={true} infiniteLoop={true} autoPlay={true}>
                    {
                      heroImages.map(data => <div key={data.name}>
                                <Image className='md:rounded-lg object-cover' src={data.img} height={900} width={1300}  alt='img'/>
                                <p style={{background:'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5))'}} className="legend">
                                  {data.name}
                                  </p>
                        </div>
                    )
                    }
                </Carousel>
              </div> 
        </div>
        <MultiCarousel heroImages={heroImages} />
    </div>
  )
}

export default Hero