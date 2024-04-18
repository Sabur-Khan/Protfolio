import React from 'react'
import Card from '../Card/Card'
import productData from '../../projectData/projectData'
const Projects = () => {
  return (
    <div className=' my-[100px]'>
      <div className=' text-center '>
        <h2 className='relative before:w-6 before:h-6 before:bg-[#f3c623] before:z-50 before:absolute before:bottom-[-12px] before:rounded-full before:shadow-2xl before:ring-inset before:ring-[#0a182e] before:ring-8 lg:before:left-[49%] md:before:left-[50%] sm:before:left-[50%] before:left-[45%] after:w-[250px] after:h-[2px] after:bg-white after:absolute after:bottom-0 lg:after:left-[42%] md:after:left-[34%] sm:after:left-[32%] after:left-[16%] font-Montserrat text-white pb-6 font-medium text-3xl'>
          MY <span className=' text-[#e9af1d]'>PROJECTS</span> 
        </h2>
      </div>
      
      <div className='lg:px-0 md:px-0 sm:px-5 px-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
        {productData.map(productData=>(
          <Card
            key={productData.id}
            images={productData.images}
            title={productData.title}
            cardInfo={productData.cardInfo}
          />
        ))}
      </div>
      
    </div>
  )
}

export default Projects
