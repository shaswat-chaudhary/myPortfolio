import React from 'react';
import { Navbar } from '../components/Navbar';
import data from '../data/mydata.json';
import image from '../assets/IMG20230525222423-01.jpeg';
import resume from '../assets/fullstack.pdf';
import { FiArrowDownCircle } from 'react-icons/fi';
import { IoIosCall } from "react-icons/io";
import { IoLogoWhatsapp } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

export const About = () => {

  const number = +919262575513;
  const isEmail = 'imshaswatkumar@gmail.com'

  const handleCall = (number) => {
    window.location.href = `tel:${number}`
  }

  const handleWhatsapp = (number) => {

    window.open(`https://wa.me/${number}`);
  }

  const handleEmail = (isEmail) => {
    window.open(`https://mailto:${isEmail}`)
  }

  return (
    <div className='w-full'>
      <Navbar />


      <div className='flex sm:flex-row flex-col-reverse sm:mx-20 mx-3 justify-between pt-14 sm:py-24 gap-10'>

        <div className='font-serif flex flex-col gap-2 sm:mr-28 '>

          <p className='text-xl font-semibold text-cyan-300 pb-4 hidden sm:flex'>About Me.</p>
          <p className='text-3xl font-semibold'>I'm {data?.fullName}</p>
          <p className='text-lg font-medium'>{data?.profession}</p>
          {/* <p className='text-lg font-medium'>{data?.education}</p> */}
          {/* <p className='text-lg font-medium'>{data?.address}</p> */}
          <p className='text-lg font-medium sm:pr-28 py-3'>{data?.about}</p>

          <div className='flex flex-row text-start gap-10 sm:pt-6 py-6 sm:py-0'>

            <IoIosCall
              size={40}
              onClick={() => handleCall(number)}
              className='text-blue-500 cursor-pointer ring-1 ring-cyan-300 rounded-full p-1.5 hover:bg-blue-500 hover:text-white duration-300'
            />

            <Link to={'https://instagram.com/imshaswatkumar'}>
              <FaInstagram
                size={40}
                className='text-cyan-400 cursor-pointer ring-1 ring-cyan-300 rounded-full p-1.5 hover:text-white duration-300 hover:bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500'
              />
            </Link>

            <IoLogoWhatsapp
              size={40}
              onClick={() => handleWhatsapp(number)}
              className='text-green-500 cursor-pointer ring-1 ring-cyan-300 rounded-full p-1.5 hover:bg-green-500 hover:text-white duration-300'
            />

            <MdEmail
              size={40}
              onClick={() => handleEmail(isEmail
              )}
              className='text-black dark:text-white cursor-pointer ring-1 ring-cyan-300 rounded-full p-1.5 hover:bg-white hover:text-black duration-300'
            />



          </div>

        </div>

        <div className='flex justify-center'>

          <div className='relative'>

            <div className='sm:w-60 sm:h-60 w-52 h-52'>
              <img src={image} alt='Profile' className='aspect-square object-cover absolute right-3 z-20' />
            </div>
            <div className='sm:w-60 w-52 bg-slate-600 sm:h-60 h-52 absolute top-3 z-10'></div>
          </div>

        </div>

      </div>

    </div>
  )
}
