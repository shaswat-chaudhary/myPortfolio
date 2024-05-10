import React from 'react'
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaXTwitter, FaGithub } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export const Footer = () => {

  return (
    <div>

      <div className='flex justify-center text-2xl sm:text-3xl flex-1 gap-5 sm:gap-10 cursor-pointer py-1'>

        <Link to={'https://www.tittwer'}>     
        <FaGithub className='hover:text-black hover:bg-white duration-300 rounded-full transition-all scale-100 hover:scale-125'/>
        </Link>
       

        <Link to={'https://www.linkedin.com/in/shaswat-chaudhary'}>
          <FaLinkedin className='hover:text-blue-500  transition-all duration-300 scale-100 hover:scale-125' />
        </Link>

        <Link to={'https://www.twitter.com/imshaswatkumar'}>
          <FaXTwitter className='hover:text-black transition-all duration-300 scale-100 hover:scale-125' />
        </Link>
      </div>


      <div className='pb-2 mt-1 bg-[#1c1b1b]'>
        <p className='border-t py-2  font-normal text-sm sm:text-lg text-center text-[#808080]'>2024 Portfolio. All rights reserved</p>
      </div>

    </div>
  )
}
