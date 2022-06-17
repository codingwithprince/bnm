/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Careers = () => {
    return (
        <div 
        // style={{
        //     backgroundImage:"linear-gradient(to right, rgba(0,0,0,0.05),rgba(0,0,0,0.05)),url('/images/bg2.png')",
        //     backgroundRepeat:'no-repeat',
        //     backgroundSize:'cover',
        //     backgroundPosition:'center'
        // }}
        >
            <h2 data-aos='fade-down' className='text-center text-2xl sm:text-4xl font-bold text-gray-700 md:pb-5'>Carrer by us</h2>
            <div className="careers mb-20 md:my-20 flex flex-wrap-reverse my-5 justify-center items-center">
                <div data-aos='fade-right' className="careers-text md:mr-10 p-2 md:w-[60%]">
                    <p className='text-gray-800 text-md'>
                        Our company is an important partner in the field of sheet metal forming and additional material for the automotive and other industries.
                        <br /> <br />
                        The quality of our products, complete processes for major automotive manufacturers in Europe, is the reason for doing business with us. <br /> <br />
                        BNM d.o.o is aware of its obligation to assist its employees in their professional and personal development. <br /> <br />
                        Our working environment is free-spoken and team-oriented, but also demanding. Our employees are expected to show high levels of dedication and commitment.
                        In return, we offer you the opportunity to utilize your potential, and we provide support for your further professional training. <br /><br />
                        We know that only committed, contented employees can provide the level of achievement that our customers expect from us. <br /><br />
                        BNM offers a variety of opportunities. If you are interested in activities in the automotive industry, we look forward to receiving your application. <br /><br />
                        Please send your inquiry with curriculum vitae (CV) to <a className='text-blue-700 font-semibold underline' href="mailto:delo@bnm.si">delo@bnm.si</a>
                    </p>
                </div>
                <div data-aos='fade-left' className="careers-img shadow-lg">
                    <img className='md:rounded-md sm:w-[500px] sm:h-[500px] object-cover' src='/images/vodenje-proizvodnje.jpg' alt='' />
                </div>

            </div>
        </div>
    )
}

export default Careers