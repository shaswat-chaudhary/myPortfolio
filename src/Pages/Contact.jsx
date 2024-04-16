import React from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer';
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";


export const Contact = () => {

  const number = +919262575513;
  const email = 'imshaswatkumar@gmail.com'

  const handleCall = (number) => {
    window.location.href = `tel:${number}`
  }

  const handleWhatsapp = (number) => {

    window.open(`https://wa.me/${number}`);
  }

  const handleEmail = (email) => {
    window.open(`https://mailto:${email}`)
  }


  return (
    <div>
      <Navbar />

      <div className='flex justify-between flex-col sm:flex-row sm:gap-10 gap-2  mx-3 sm:mx-20 py-8 md:my-10'>
        <form className=' overflow-hidden grow flex flex-col gap-2 rounded-lg'>

          <label htmlFor='name'>Full Name</label>
          <input
            className='py-2 px-4 outline-none rounded-lg'
            type='text'
            placeholder='Full Name*'
            id='name'
            name='name'

            required
          />

          <label htmlFor='email'>Email</label>
          <input
            className='py-2 px-4 outline-none rounded-lg'
            type='text'
            placeholder='Email ID*'
            id='email'
            name='email'
            required
          />

          <label htmlFor='massage'>Massage</label>
          <textarea
            className='py-2 px-4 h-40 rounded-lg outline-none'
            placeholder='Massage*'
            id='massage'
            name='massage'
            required
          />

          <button type='submit' className='my-5'>Send</button>
        </form>

        <div className='flex flex-col grow gap-3 sm:gap-5'>
          <p className='font-semibold text-3xl pb-4'>Contact Me</p>

          <p className='font-medium text-xl'>
            {'Shaswat Kumar Chaudhary'}
          </p>

          <p className='flex items-center text-lg gap-3 sm:gap-5'>
            <CiLocationOn />
            <span className='font-medium text-base'>
              {'Aurangabad, Bihar, India'}
            </span>
          </p>

          <p className='flex items-center text-lg gap-3 sm:gap-5'>
            <IoCallOutline />
            <span className='font-medium text-base'>
              {'+91 92625 75513'}
            </span>
            </p>

          <p className='flex flex-row text-lg gap-3 sm:gap-5 items-center'>
            <MdOutlineEmail/>
            <span className='font-medium text-base pb-0.5'>
              {'shaswatkumar281@gmail.com'}
            </span>
            </p>

          <div className='flex flex-row text-start gap-10 sm:mt-20 pt-5'>

            <IoCall
              size={40}
              onClick={() => handleCall(number)}
              className='text-blue-500 cursor-pointer'
            />

            <IoLogoWhatsapp
              size={40}
              onClick={() => handleWhatsapp(number)}
              className='text-green-500 cursor-pointer'
            />

            <MdEmail
              size={40}
              onClick={() => handleEmail(email)}
              className='text-white cursor-pointer'
            />
          </div>

        </div>

      </div>

    </div>
  )
}
