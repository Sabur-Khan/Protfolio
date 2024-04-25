
import React from 'react'

const MyBlogCard = (props) => {
  return (
    <div>
      <div key={props.id} className=' mt-16 border border-[#1f498a] hover:shadow-md hover:shadow-[#1f498a] rounded transition-all duration-500 hover:-translate-y-2'>
        <img src={props.images} alt="blog-img" />
        <div className='py-2'>
          <div className='px-4 py-4'>
            <h1 className='relative text-white font-Montserrat text-2xl font-medium after:w-4 after:absolute capitalize after:h-[4px] after:bg-[#f3c623] after:left-0 after:bottom-[-3px] py-2'>{props.title}</h1>
            <p className='font-normal font-Montserrat text-white text-justify text-base my-4'>{props.blogInfo}</p>
          </div>
          <div className='px-4 py-1'>
            <ul className='flex justify-between items-center'>
              <li>
                <a className='text-white inline-block font-bold text-base px-3 py-2 hover:bg-[#f3c623] hover:text-black transition-all duration-500 bg-transparent border-[#f3c623] border-2 font-Montserrat uppercase' href="#">Read Details</a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}

export default MyBlogCard
