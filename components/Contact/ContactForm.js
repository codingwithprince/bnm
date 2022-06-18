import React from 'react'

const ContactForm = () => {
    return (
        <div className='flex flex-col justify-center'>
            <p data-aos='fade-up' className='text-gray-800 mb-10 p-2 text-center md:text-2xl'>Would you like an offer? Are you interested in price? Do you have any comments? <br /> If so, please complete the form and we will respond as soon as possible. You can also call us or send us an e-mail.</p> 

            <form data-aos='fade-up' className='bg-white m-auto shadow-lg md:shadow-2xl rounded px-8 pt-6 w-full md:w-[50%] pb-8 mb-4'>
                <div className='mb-4'>
                    <label className="block text-gray-700 text-sm font-bold mb-2" >
                        Full name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Your name" />
                </div>
                <div className='mb-4'>
                    <label className="block text-gray-700 text-sm font-bold mb-2" >
                        Email Address
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" placeholder="Email" />
                </div>
                <div className='mb-4'>
                    <label className="block text-gray-700 text-sm font-bold mb-2" >
                        Company name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Company" />
                </div>
                <div className='mb-4'>
                    <label className="block text-gray-700 text-sm font-bold mb-2" >
                        Your question
                    </label>
                    <textarea className="shadow appearance-none border rounded h-[150px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Your question" />
                </div>
                <button className='text-md font-semibold bg-blue-700 text-white hover:bg-blue-600 px-4 py-2 rounded-full float-right'>Submit</button>
            </form>
        </div>
    )
}

export default ContactForm