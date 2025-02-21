import React, { useEffect, useState } from 'react';
import { FaInstagram } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { RiLinkedinFill } from "react-icons/ri";
import { motion } from 'framer-motion';
import { PiGithubLogoFill } from "react-icons/pi";


export const SocialMedia = () => {


    const navigate = useNavigate();

    const isEmail = 'imshaswatkumar@gmail.com'

    const handleEmail = (isEmail) => {
        window.open(`https://mailto:${isEmail}`)
    }

    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    }

    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    })

    const iconVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    }

    return (
        <div>
            <motion.div
                animate={{ y: animate ? 1 : 0 }}
                className='flex flex-row sm:gap-10 gap-6 sm:pt-6 py-6 sm:py flex-wrap'>

                <Link to={'https://www.instagram.com/imshaswatkumar/'}
                    className='icon-insta hover:text-cyan-300 text-white ring-white ring-1 w-10 h-10 p-1.5 rounded-full text-center items-center justify-center flex'>
                      
                    <FaInstagram size={26} />
                </Link>


                <Link to={'https://www.linkedin.com/in/shaswat-chaudhary/'}
                    className='hover:text-cyan-300 bg-blue-600 text-white ring-white ring-1 w-10 h-10 p-1.5 rounded-full text-center items-center justify-center flex'>
                    <RiLinkedinFill size={26} />
                </Link>

                <Link to={'https://www.github.com/shaswat-chaudhary/'}
                    className='hover:text-cyan-300 bg-black text-white ring-white ring-1 w-10 h-10 p-1 rounded-full text-center items-center justify-center flex '>
                    <PiGithubLogoFill size={30} />
                </Link>

                <Link to={'https://www.twitter.com/imshaswatkumar/'}
                    className='hover:text-cyan-300 bg-black text-white ring-white ring-1 w-10 h-10 p-1.5 rounded-full text-center items-center justify-center flex'>
                    <FaXTwitter size={23} />
                </Link>

                <Link className='icon-gmail hover:text-cyan-300 text-white ring-white ring-1 w-10 h-10 p-1.5 rounded-full text-center items-center justify-center flex'
                    onClick={() => handleEmail(isEmail)}>

                    <BiLogoGmail size={26} />
                </Link>

                {/* <Link className='hover:text-cyan-300 ring-1 w-10 h-10 p-1.5 rounded-full text-center items-center justify-center flex relative'
                    onClick={() => window.location.href = '/gallery'}
                >
                    <IoMdPhotos className='text-cyan-400' size={24} />
                    <span className='absolute top-10'>Gallery</span>
                </Link> */}

            </motion.div>
        </div>
    )
}
