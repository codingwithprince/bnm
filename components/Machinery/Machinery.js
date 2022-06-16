import React from 'react'
import ImageSection from './ImageSection'


const cutting =[
  {
    id:1,
    title:'3D lasers',
    img:'/images/machinery/cutting/3d-cutting.jpg',
    desc1:'3D CUTTING LASER HELD TRANSGLAS',
    desc2:`3223 - 2,5 kW CO2
    Table max: 2.3 X 3m
    CUTTING RANGE:
    X = 3.200 mm
    Y = 2.300 mm
    Z = 1.000 m
    B = +-1000 
    C = +-∞0`
  },
  {
    id:1,
    title:'2D lasers',
    img:'/images/machinery/cutting/2d-laser-big.jpg',
    desc1:'Cutting surface LASER PRIMA 9000, 2,5',
    desc2:`Kw - 2D 
    Table max: 1,5 X 3m`
  }
]

const forming =[
  {
    id:1,
    title:'Line of heavy presses',
    img:'/images/machinery/forming/velika-stiskalnica-big.jpg',
    desc1:'',
    desc2:`Pressure: 5000-16000 kN
    Table size: 3500 x 2500 mm`
  },
  {
    id:2,
    title:'Line of middle presses',
    img:'/images/machinery/forming/srednja-stiskalnica-big.jpg',
    desc1:'',
    desc2:`Pressure: 1000-10.000 kN
    Table size: 1400 x 1500 mm`
  },
  {
    id:3,
    title:'Line of light presses',
    img:'/images/machinery/forming/mala-stiskalnica-big.jpg',
    desc1:'',
    desc2:`Pressure: 350-1600 kN
    Table size: 1000 x 700 mm`
  }
]

const assembly =[
  {
    id:1,
    title:'Assembly',
    img:'/images/machinery/assembly/sestavljanje-kabin.jpg',
    desc1:'',
    desc2:`Hanging spot welding machines with power of: 40 - 180 kW
    Stable spot welding machines with power of: 60 - 200 kW`
  }
]

const Machinery = () => {
  return (
    <div>
        <h2 data-aos='fade-down' className='text-center text-2xl sm:text-4xl font-bold text-gray-700'>Machinery</h2>
        <ImageSection name='Sheet metal cutting' data={cutting} />
        <ImageSection name='Sheet metal forming' data={forming} />
        <ImageSection name='Assembly' data={assembly} />


    </div>
  )
}

export default Machinery