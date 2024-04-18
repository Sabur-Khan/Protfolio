import React from 'react'
import CV from '../../assets/images/CV-Sabur-Khan.pdf'
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

const SocialLink = () => {
       
  return (
    <div>
      {/* Social Link */}
        <div className='my-10 lg:w-[200px] md:w-[150px] w-[150px] lg:px-0 md:px-0 sm:px-5 px-5'>
            <ul className='flex justify-between items-center gap-4 '>
                <li className=' text-3xl p-2 bg-white rounded-full cursor-pointer hover:bg-black hover:text-white hover:shadow-lg hover:shadow-white/20 transition duration-700 hover:translate-y-2'>
                    <a href="https://github.com/Sabur-Khan">
                        <FaGithub />
                    </a>
                </li>
                <li className=' text-3xl p-2 bg-white rounded-full cursor-pointer hover:bg-[#0077b5] hover:text-white hover:shadow-lg hover:shadow-white/20 transition duration-700 hover:-translate-y-3'>
                    <a href="https://www.linkedin.com/in/sobur-khan-028a69257/">
                        <FaLinkedin />
                    </a>
                </li>
                <li className=' text-3xl p-2 bg-white rounded-full cursor-pointer hover:bg-[#0056b3] hover:text-white hover:shadow-lg hover:shadow-white/20 transition duration-700 hover:translate-y-2'>
                    <a href="https://web.facebook.com/Sk2441139?_rdc=1&_rdr">
                        <FaFacebookSquare  />
                    </a>
                </li>
                <li className=' text-3xl p-2 bg-white rounded-full cursor-pointer hover:bg-[#00acee] hover:text-white hover:shadow-lg hover:shadow-white/20 transition duration-700 hover:-translate-y-3'>
                    <a href="">
                        <FaTwitter />
                    </a>
                </li>
            </ul>

        </div>
        <p className='lg:px-0 md:px-0 sm:px-5 px-5 mt-3 first-letter:font-medium first-letter:text-[40px] text-[#e6f1ff] text-base w-full font-Montserrat font-normal text-justify'>
            I am a highly passionate, enthusiastic, hardworking and dedicated learner. Self-motivated IT professional with deep knowledge and proficiency in JavaScript, HTML, CSS, and mobile responsive website development, as well as highly potent skills and ability in encoding virus-free and efficient code. I have a strong passion for the creativity and discipline that goes into front-end development. Keeping in mind scalability and clean code that is maintainable and readable.
        </p>
        <div className='lg:px-0 md:px-0 sm:px-5 px-5 flex gap-8 justify-start mt-8'>
            <a href='' className='text-black cursor-pointer hover:bg-[#001d48] hover:text-white hover:bg-transparent border border-[#e9af1d] transition duration-700 px-4 py-3 bg-[#e9af1d] rounded-sm text-base font-Montserrat font-medium'>About Me</a>
            <a className='text-black cursor-pointer hover:bg-[#001d48] hover:text-white hover:bg-transparent border border-[#e9af1d] transition duration-700 px-4 py-3 bg-[#e9af1d] rounded-sm text-base font-Montserrat font-medium' href={CV} download="CV-Sabur-Khan.pdf">Resume</a> 
        </div>
    </div>
  )
}

export default SocialLink
