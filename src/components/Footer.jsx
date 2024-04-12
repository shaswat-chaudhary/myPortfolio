import React from 'react'
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaXTwitter, FaGithub } from "react-icons/fa6";

export const Footer = () => {

  return (
    <div>

      <div className='flex text-3xl flex-1 gap-5 cursor-pointer'>
        <FaFacebook className='faFb hover:text-blue-500 transition-all duration-300'/>
        <FaInstagram className=''/>
        <FaXTwitter className='faX hover:text-black'/>
      </div>

      <div className='flex text-3xl flex-1 gap-5 cursor-pointer'>
        <FaGithub className='hover:text-black hover:bg-white
        ` duration-300 rounded-full'/>
        <FaLinkedin className='hover:text-blue-500 duration-300'/>
      </div>
      
    </div>
  )
}
