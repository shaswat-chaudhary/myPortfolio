import React from 'react'
import { Navbar } from '../components/Navbar'
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";

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

      <div>
        <form className='w-auto overflow-hidden md:w-1/3 flex flex-col mx-2 md:mx-20 my-8 md:my-10 gap-2 rounded-lg'>

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
      </div>



      <div className='flex flex-row gap-12 md:gap-40 justify-center text-center mx-2 md:mx-20'>

        <IoCall
          size={50}
          onClick={() => handleCall(number)}
          className='text-blue-500'
        />
        <IoLogoWhatsapp
          size={50}
          onClick={() => handleWhatsapp(number)}
          className='text-green-400'
        />

        <MdEmail
          size={50}
          onClick={() => handleEmail(email)}
          className='text-gray-500'
        />

      </div>

      <div className='flex flex-row gap-14 md:gap-40 justify-center text-center mx-2 md:mx-20 text-sm p-2'>
        <p>Call</p>
        <p>Whatsapp</p>
        <p>Email</p>
      </div>

    </div>
  )
}
