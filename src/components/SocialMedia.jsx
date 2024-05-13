import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { BiLogoGmail } from "react-icons/bi";
import { RiLinkedinFill } from "react-icons/ri";


export const SocialMedia = () => {

    const isEmail = 'imshaswatkumar@gmail.com'

    const handleEmail = (isEmail) => {
        window.open(`https://mailto:${isEmail}`)
    }

    return (
        <div>
            <div className='flex flex-row sm:gap-10 gap-6 sm:pt-6 py-6 sm:py flex-wrap'>

                <Link to={'https://www.instagram.com/imshaswatkumar/'}
                    className='hover:text-cyan-300 ring-1 w-9 h-9 p-1.5 rounded-full text-center items-center justify-center flex'>
                    <FaInstagram size={24} />
                </Link>


                <Link to={'https://www.linkedin.com/in/shaswat-chaudhary/'}
                    className='hover:text-cyan-300 ring-1 w-9 h-9 p-1.5 rounded-full text-center items-center justify-center flex'>
                    <RiLinkedinFill size={24} />
                </Link>

                <Link to={'https://www.github.com/shaswat-chaudhary/'}
                    className='hover:text-cyan-300 ring-1 w-9 h-9 p-1.5 rounded-full text-center items-center justify-center flex'>
                    <FiGithub size={23} />
                </Link>

                <Link to={'https://www.twitter.com/imshaswatkumar/'}
                    className='hover:text-cyan-300 ring-1 w-9 h-9 p-1.5 rounded-full text-center items-center justify-center flex'>
                    <FaXTwitter size={21} />
                </Link>

                <Link className='hover:text-cyan-300 ring-1 w-9 h-9 p-1.5 rounded-full text-center items-center justify-center flex'
                    onClick={() => handleEmail(isEmail)}>

                    <BiLogoGmail size={24} />
                </Link>

            </div>
        </div>
    )
}
