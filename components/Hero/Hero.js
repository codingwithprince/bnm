import React from 'react'

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
        <div className="hero px-[10%] grid grid-cols-1 md:grid-cols-2">
              <div className="hero-text text-white">
                  <h2>Welcome to BNM</h2>
              </div> 
              <div className="hero-image-slider text-white">
                  <h2>Images</h2>
              </div> 

        </div>
    </div>
  )
}

export default Hero