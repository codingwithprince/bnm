import React from 'react'
import ImageSection from './ImageSection'


const cutting =[
  {
    id:1,
    title:'3D lasers',
    img:'/images/machinery/cutting/3d-cutting.jpg',
    desc1:'3D CUTTING LASER HELD TRANSGLAS',
    desc2:`3223 - 2,5 kW CO2 \n
    Table max: 2.3 X 3m \n
    CUTTING RANGE: \n
    X = 3.200 mm \n
    Y = 2.300 mm \n
    Z = 1.000 m \n
    B = +-1000 \n
    C = +-∞0\n`
  },
  {
    id:1,
    title:'2D lasers',
    img:'/images/machinery/cutting/2d-laser-big.jpg',
    desc1:'Cutting surface LASER PRIMA 9000, 2,5',
    desc2:`Kw - 2D \n
    Table max: 1,5 X 3m \n`
  }
]

const Machinery = () => {
  return (
    <div>
        <h2 className='text-center text-2xl sm:text-4xl font-bold text-gray-700'>Machinery</h2>
        <ImageSection name='Sheet metal cutting' data={cutting} />
    </div>
  )
}

export default Machinery