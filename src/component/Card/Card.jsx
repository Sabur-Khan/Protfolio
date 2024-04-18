import React from 'react'

const Card = (props) => {
    console.log(props.images);
  return (
    <div>
        <div key={props.id} className=' mt-16 border border-[#1f498a] hover:shadow-md hover:shadow-[#1f498a] rounded transition-all duration-500 hover:-translate-y-2'>
            <img className='text-white' src={props.images} alt="cardImg" />
            <div className='py-4 px-4 '>
                <h2 className='py-2 capitalize relative text-white font-Montserrat text-2xl font-medium after:w-4 after:absolute after:h-[4px] after:bg-[#f3c623] after:left-0 after:bottom-[-3px]'>{props.title}</h2>
                <p className='font-normal py-3 font-Montserrat text-white text-justify text-base my-4'>
                    {props.cardInfo}
                </p>
            </div>
            <div className='px-4'>
                <ul className='flex flex-wrap justify-between gap-3'>
                    <li className='text-black cursor-pointer py-2 px-3 bg-[#f3c623] rounded-sm hover:bg-transparent hover:text-white border border-[#f3c623] duration-500 transition-all'>React.js</li>
                    <li className='text-black cursor-pointer py-2 px-3 bg-[#f3c623] rounded-sm hover:bg-transparent hover:text-white border border-[#f3c623] duration-500 transition-all'>Node.js</li>
                    <li className='text-black cursor-pointer py-2 px-3 bg-[#f3c623] rounded-sm hover:bg-transparent hover:text-white border border-[#f3c623] duration-500 transition-all'>Express.js</li>
                    <li className='text-black cursor-pointer py-2 px-3 bg-[#f3c623] rounded-sm hover:bg-transparent hover:text-white border border-[#f3c623] duration-500 transition-all'>MongoDB</li>
                    <li className='text-black cursor-pointer py-2 px-3 bg-[#f3c623] rounded-sm hover:bg-transparent hover:text-white border border-[#f3c623] duration-500 transition-all'>Firebase</li>
                    <li className='text-black cursor-pointer py-2 px-3 bg-[#f3c623] rounded-sm hover:bg-transparent hover:text-white border border-[#f3c623] duration-500 transition-all'>Heroku</li>
                </ul>
            </div>
            <div className='px-4 py-2 my-9'>
                <ul className='flex justify-between items-center flex-wrap'>
                    <li>
                        <a className='text-white font-bold text-base px-7 py-3 hover:bg-[#f3c623] hover:text-black transition-all duration-500 bg-transparent border-[#f3c623] border-2 font-Montserrat' href="#">Live Link</a>
                    </li>
                    <li>
                        <a className='text-white font-bold text-base px-7 py-3 hover:bg-[#f3c623] hover:text-black transition-all duration-500 bg-transparent border-[#f3c623] border-2 font-Montserrat' href="#">GitHub</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Card
