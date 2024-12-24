import React from 'react';
import data from '../data/mydata.json';
import image from '../assets/IMG20230525222423-01.jpeg';
import { SocialMedia } from '../components/SocialMedia';

export const About = () => {


  return (
    <div id='about' className='w-full bg-black sm:py-12'>

      <div className='py-6 sm:py-0 sm:pb-6 pb-1'>
        <p className='text-xl font-semibold text-cyan-300 justify-center flex font-serif'>About Me.</p>
      </div>


      <div className='flex sm:flex-row flex-col-reverse sm:px-[8vw] px-3 justify-between gap-10 sm:py-12 py-6'>


        <div className='font-sans flex flex-col gap-7 sm:mr-28 pb-3 sm:pb-0'>

          <p className='text-3xl font-semibold py-1'>I'm {data?.fullName}</p>
          <p className='text-lg bg-red-500 py-1'>{data?.profession}</p>
          {/* <p className='text-lg font-medium'>{data?.education}</p> */}
          {/* <p className='text-lg font-medium'>{data?.address}</p> */}
          <p className='text-lg tracking-wide font-normal sm:pr-28 py-1'>{data?.about}</p>

          <div className='flex flex-col'>
            <p className='font-thin font-sans'>Follow me {":"}</p>
            <SocialMedia />
          </div>

        </div>

        <div className='flex justify-center'>

          <div className='relative'>

            <div className='sm:w-60 sm:h-60 w-52 h-52'>
              <img src={image} alt='Profile' className='aspect-square object-cover absolute right-3 z-20 ring-1' />
            </div>
            <div className='sm:w-60 w-52 bg-slate-600 sm:h-60 h-52 absolute top-3 z-10'></div>
          </div>

        </div>

      </div>

    </div>
  )
}
