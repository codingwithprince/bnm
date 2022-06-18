import React from 'react'

const cardInfo = [
    {
        title: 'Management',
        desc:'Our management style is based on openness, respect and reliability toward both our employees and our partners. We expect high performance, and we maintain a collaborative management style.',

    },
    {
        title: 'Employees',
        desc : 'We bear our social responsibilities in mind when making business decisions. We assign our employees to work in the areas of their greatest strengths.We encourage entrepreneurial thinking and personal commitment, and show appreciation for achievement.'
    },
    {
        title:'Quality',
        desc:'We make every effort to meet our customers’ quality expectations.',
        title2: 'Environment',
        desc2:'We manage our resources responsibly, and operate on a basis of sustainability. Every employee makes his or her own contribution to protect the environment.'
    },
]


const ValueAndStandards = () => {
  return (
    <div 
    style={{
        backgroundImage:"linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.7)),url('/images/stiskalnice2.jpg')",
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        backgroundPosition:'center'
    }}
    className='py-5 md:py-20 flex justify-center items-center '>
        <div className="flex flex-wrap justify-center items-center">
                    {
                        cardInfo.map(data => <div data-aos="fade-up"
                        className='bg-white shadow-xl hover:shadow-md hover:scale-105 transition ease-in-out duration-300 m-5 p-5 rounded-lg h-[320px] max-w-[350px] overflow-hidden'
                        key={data.title}>
                            <h4 className='text-blue-700 font-bold text-center mb-2'>{data.title}</h4>
                            <hr />
                            <p className='text-justify text-gray-800 mt-3 mb-2'>{data.desc}</p>
                            <h4 className='text-blue-700 font-bold mt-5 text-center'>{data.title2}</h4>
                            <hr />
                            <p className='text-gray-800 mt-3 mb-2'>{data.desc2}</p>
                        </div>)
                    }
                     
                </div>
       

    </div>
  )
}

export default ValueAndStandards