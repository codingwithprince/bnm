/* eslint-disable @next/next/no-img-element */
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import TypeAnimation from 'react-type-animation'
import Link from 'next/link';
import styles from '../../styles/heroSecton.module.css'

const heroImages = [
    {
        name: 'sestava kabin',
        img: '/images/sestavakabin.jpg'
    },
    {
        name: 'varjenje',
        img: '/images/varjenje.jpg'
    },
    {
        name: 'stiskalnice',
        img: '/images/stiskalnice.jpg'
    },
    {
        name: 'merilnica',
        img: '/images/merilnica.jpg'
    },
    {
        name: 'stiskalnice2',
        img: '/images/stiskalnice2.jpg'
    },
    {
        name: 'stiskalnice3',
        img: '/images/stiskalnice3.jpg'
    },
    {
        name: 'heldtransglas',
        img: '/images/heldtransglas.jpg'
    },
    {
        name: '3-3d-laser',
        img: '/images/3-3d-laser.jpg'
    },
    {
        name: '3d-laser',
        img: '/images/3d-laser.jpg'
    },
    {
        name: 'sestava kabin',
        img: '/images/sestava-kabin.jpg'
    },
    {
        name: 'proizvodnja kabin',
        img: '/images/proizvodnja-kabin.jpg'
    }

]


const HeroSection = () => {
    return (
        <div>
            <div className="images h-[70vh] relative mt-[50px]">
                <Carousel showThumbs={false} showArrows={false} showIndicators={false} swipeable={true} infiniteLoop={true} autoPlay={true}>
                    {
                        heroImages.map(data => <div key={data.name}>
                            <img className='h-[70vh] blur-sm object-cover' src={data.img} height={700} width={1250} alt='img' />
                        </div>
                        )
                    }
                </Carousel>
                <div style={{
                    background: 'linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7))',
                }} className="overlay h-[100%] absolute top-0 w-[100%] flex text-white justify-center items-center">


                    <div className="hero-text p-2 text-left text-white md:mt-20">
                        {/* <div className="companyName text-center text-white">
                             <p className={styles.btnShine} > BNM</p>
                        </div> */}

                        
                        <h2 className='text-center text-8xl font-extrabold font-mono mb-5 text-sky-400/100  drop-shadow-lg animate-bounce'> B.N.M </h2>
                        <TypeAnimation
                            className='text-gray-100 md:text-4xl text-center text-2xl font-semibold '
                            cursor={true}
                            sequence={['Avtomobilska Industrija', 4000, '']}
                            wrapper="h2"
                            repeat={Infinity}
                        />


                        <p className='text-gray-300 mt-5 m-auto text-md text-justify w-[100%]  md:w-[40%]'>Our field of activity is sheet metal forming, complex stamping and welding for the automotive industry.
                            Machine capacities, knowledge and experience give us the opportunity to cooperate also with other industries which require such services or sheet metal products.</p>

                        <div className="buttons text-center">
                            <button className='mt-5 text-lg font-semibold bg-blue-500 hover:shadow-lg hover:shadow-blue-500/50  text-white hover:bg-blue-500 px-4 py-2 rounded-full'>Contact</button>
                        </div>



                    </div>
                </div>

            </div>


        </div>
    )
}

export default HeroSection