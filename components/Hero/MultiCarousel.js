import React from 'react'
import Image from 'next/image'


const MultiCarousel = ({heroImages}) => {
  return (
    <div className='flex justify-between items-center pb-10'>
        {
                      heroImages.slice(0, 5).map(data => <div className='w-[400px] flex items-center justify-center m-2 overflow-hidden ' key={data.name}>
                                <Image className='object-cover md:rounded-full rounded-full' src={data.img} width='300px' height='300px'   alt='img'/>
                        </div>
                    )
                    }
    </div>
  )
}

export default MultiCarousel