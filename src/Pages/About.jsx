import React from 'react'
import { Navbar } from '../components/Navbar'
import data from '../data/mydata.json'

export const About = () => {

  return (
    <div className=''>
      <Navbar />

      <p className='text-xl font-semibold font-serif bg-[#9db0f3]'>About Me.</p>


      <div className='relative'>

        <div className='w-52 absolute z-20'>
          <img src='' alt='' />
        </div>

        {/* <div className='w-52 bg-slate-600 h-52 absolute left-3 top-3 z-10'></div> */}

      </div>

      {/* <p>{data?.fullName}</p>
      <p>{data?.email}</p>
      <p>{data?.profession}</p>
      <p>{data?.mobile}</p>
      <p>{data?.education}</p>
      <p>{data?.address}</p>
      <p>{data?.about}</p>

      <img src={data?.profileUrl} alt='Profile' /> */}
      <img src={data?.profileUrl_1} alt='Profile' />


    </div>
  )
}
