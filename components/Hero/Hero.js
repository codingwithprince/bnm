import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Hero = () => {
  return (
    <div
    style={{
        backgroundImage : "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)),url('/images/bg.png')",
        backgroundPosition: 'center',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        height:'100vh',
        paddingTop:'100px',
    }}>
        <div className="hero px-3 md:px-[10%] grid grid-cols-1 md:grid-cols-2">
              <div className="hero-text text-white">
                  <h2>Welcome to BNM</h2>
              </div> 
              <div className="hero-image-slider text-white">

              <Carousel showArrows={true} infiniteLoop={true} autoPlay={true}>
                <div>
                    <img src="/images/bg.png"  alt='img'/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="/images/bg.png"  alt='img'/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="/images/bg.png"  alt='img'/>
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="/images/bg.png"  alt='img'/>
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                    <img src="/images/bg.png"  alt='img'/>
                    <p className="legend bg-white">Legend 5</p>
                </div> 
            </Carousel>
              </div> 

        </div>
    </div>
  )
}

export default Hero