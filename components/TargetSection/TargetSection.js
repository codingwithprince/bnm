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

const TargetSection = () => {
    return (
        <div 
        style={{
            backgroundImage:"linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.7)),url('/images/merilnica.jpg')",
            backgroundRepeat:'no-repeat',
            backgroundSize:'cover',
            backgroundPosition:'center'
        }}
        className='py-5 md:py-20 flex justify-center items-center '>
            <div className="flex flex-wrap justify-center items-center">
                        {
                            cardInfo.map(data => <div data-aos="fade-up"
                            className='bg-white shadow-xl hover:shadow-md hover:scale-105 transition ease-in-out duration-300 m-5 p-5 rounded-lg h-[400px] max-w-[350px] overflow-hidden'
                            key={data.title}>
                                <h4 className='text-gray-800 font-bold text-center mb-2'>{data.title}</h4>
                                <hr />
                                <p className='text-gray-800 mt-3'>{data.desc}</p>

                            </div>)
                        }
                        
                    </div>
           

        </div>
    )
}

export default TargetSection