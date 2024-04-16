import React from 'react'
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaXTwitter, FaGithub } from "react-icons/fa6";

export const Footer = () => {

  return (
    <div>

      <div className='flex justify-center text-2xl sm:text-3xl flex-1 gap-5 sm:gap-10 cursor-pointer py-1'>
        <FaFacebook className='hover:text-blue-300 shadow-slate-100 transition-all duration-300 scale-100 hover:scale-125' />
        <FaInstagram className='transition-all duration-300 scale-100 hover:scale-125' />
        <FaXTwitter className='hover:text-black transition-all duration-300 scale-100 hover:scale-125' />
        <FaGithub className='hover:text-black hover:bg-white
        ` duration-300 rounded-full transition-all scale-100 hover:scale-125'/>
        <FaLinkedin className='hover:text-blue-500  transition-all duration-300 scale-100 hover:scale-125' />
      </div>


      <div className='pb-5 pt-1'>
        <p className='border-t py-1 font-normal text-sm sm:text-lg text-center text-[#808080]'>2024 Portfolio. All rights reserved</p>
      </div>

    </div>
  )
}
