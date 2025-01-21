import React, { useState } from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer';
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import data from '../data/mydata.json';
import toast from 'react-hot-toast';
import { GoArrowLeft } from "react-icons/go";


export const Contact = () => {

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmit, setIsSubmit] = useState('');
  const [errMsg, setErrMsg] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmit(true);

    try {
      const res = await fetch('http://localhost:3001/api/v1/post-message', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName, email, description })
      });

      if (res.ok) {
        setIsSubmit('Form send successfully');

        setFullName('');
        setEmail('');
        setDescription('');

        toast.success('Message Send');

        setTimeout(() => {
          setIsSubmit('');
        }, 1000);

      }
      else {
        setIsSubmit('Error form, Try again!');
      }
    }
    catch (error) {
      console.error('Error submitting form', error);
      setIsSubmit(false)
    }
  }


  return (
    <div>

      <div className='flex flex-1 gap-5 md:gap-14 items-center text-center px-3 md:px-24 pt-2 md:pt-10'>
        <GoArrowLeft onClick={() => window.location.href = "/"} size={32}
          style={{
            cursor: 'pointer',
            color: '#007bff'
          }} />
        <p className='text-lg font-medium'>Contact me</p>
      </div>

      <div className='flex justify-between flex-col sm:flex-row sm:gap-10 gap-2 px-3 sm:px-[8vw] py-4 md:mt-10'>

        <form onSubmit={handleSubmit} className=' overflow-hidden grow flex flex-col gap-2 rounded-lg'>

          <label htmlFor='name'>Full Name</label>
          <input
            className='py-2 px-4 outline-none rounded-lg bg-neutral-950'
            type='text'
            placeholder='Full Name*'
            id='name'
            name='name'
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />

          <label htmlFor='email'>Email</label>
          <input
            className='py-2 px-4 outline-none rounded-lg bg-neutral-950'
            type='text'
            placeholder='Email ID*'
            id='email'
            name='email'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor='message'>Message</label>
          <textarea
            className='py-2 px-4 h-40 rounded-lg outline-none bg-neutral-950'
            placeholder='Message*'
            id='message'
            name='message'
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          {
            isSubmit ? (
              <div className='flex items-center justify-center w-full font-semibold text-xl py-2 my-5'>

                <svg aria-hidden="true" role="status" className="inline w-6 h-6 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#007bff" />
                </svg>
                Sending...
              </div>
            ) : (
              <button type='submit' className='my-5 bg-[#007bff]'>Send</button>
            )
          }

        </form>

        <div className='bg-slate-950 h-[1px]'></div>

        <div className='flex flex-col grow gap-3 sm:gap-5'>
          <p className='font-semibold text-2xl py-4 font-serif text-cyan-300'>Contact me</p>

          <p className='font-medium text-xl'>
            {data?.fullName}
          </p>

          <p className='flex items-center text-lg gap-3 sm:gap-5'>
            <CiLocationOn />
            <span className='font-medium text-base'>
              {data?.address}
            </span>
          </p>

          <p className='flex items-center text-lg gap-3 sm:gap-5'>
            <IoCallOutline />
            <span className='font-medium text-base'>
              {data.mobile}
            </span>
          </p>

          <p className='flex flex-row text-lg gap-3 sm:gap-5 items-center'>
            <MdOutlineEmail />
            <span className='font-medium text-base pb-0.5'>
              {data?.email}
            </span>
          </p>


        </div>

      </div>

      <Footer />


      {/* <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
        <circle class="path circle" fill="none" stroke="#73AF55" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1" />
        <polyline class="path check" fill="none" stroke="#73AF55" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 " />
      </svg>
      <p class="success">Oh Yeah!</p> */}

    </div>
  )
}
