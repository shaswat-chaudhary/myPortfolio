import React from 'react';
import data from '../data/mydata.json';
import image from '../assets/IMG20230525222423-01.jpeg';
import { SocialMedia } from '../components/SocialMedia';

export const About = () => {


  return (
    <div className='w-full bg-black'>

      <p className='text-xl font-semibold text-cyan-300 justify-center flex font-serif sm:pt-14  pt-6 '>About Me.</p>

      <div className='flex sm:flex-row flex-col-reverse sm:px-[8vw] px-6 justify-between sm:pt-14 pt-6 sm:py-24 gap-10'>


        <div className='font-serif flex flex-col gap-4 sm:mr-28 pb-4 sm:pb-0'>

          <p className='text-3xl font-semibold'>I'm {data?.fullName}</p>
          <p className='text-lg font-medium'>{data?.profession}</p>
          {/* <p className='text-lg font-medium'>{data?.education}</p> */}
          {/* <p className='text-lg font-medium'>{data?.address}</p> */}
          <p className='text-lg font-medium sm:pr-28 py-3'>{data?.about}</p>

         <SocialMedia />

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
