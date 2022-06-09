import React from 'react'

const cardInfo = [
    {
        title: 'Vision and mission',
        desc:'We specialize in the sheet metal forming process and additional stampings to a desired product quality at a competitive price which will satisfy the needs of all customer and other partners in the sheet metal forming industry. Our goal is to become an important partner in the field of sheet metal forming and complex stampings for automotive and other industries.',

    },
    {
        title: 'History',
        desc : 'Our company is located in the Commercial Production Zone Tezno Maribor which has more than 60 years experience in the metal sector. Until 1996 trucks and buses under the brand TAM had been produced at this location. Individual segments in production have produced even more since then. Knowledge and experience has been transferred to our company and upgraded with modern methods of management and operations.'
    },
    {
        title:'Customers',
        desc:'Our field of activity is sheet metal forming, complex stamping and welding for the automotive industry. Machine capacities, knowledge and experience give us the opportunity to cooperate also with other industries which require such services or sheet metal products.'
    }
]


const ValueAndStandards = () => {
  return (
    <div 
    className='py-[100px] bg-gray-200'>
        <h3 className='text-gray-700 font-bold text-2xl text-center pb-10'>Values and Standards</h3>
            <div className="flex flex-wrap justify-center items-center">
                        {
                            cardInfo.map(data => <div 
                            className='bg-white m-5 p-5 shadow-lg rounded-lg h-[400px] w-[300px] overflow-hidden'
                            key={data.title}>
                                <h4 className='text-gray-900 font-semibold text-center mb-2'>{data.title}</h4>
                                <hr />
                                <p className='text-justify text-gray-700 mt-3'>{data.desc}</p>

                            </div>)
                        }
                        
                    </div>
        </div>
  )
}

export default ValueAndStandards