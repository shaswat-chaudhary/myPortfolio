import React from 'react'
import { SocialMedia } from './SocialMedia';

export const Footer = () => {

  return (
    <div className='pb-14 pt-10 text-center items-center flex flex-col'>

      <p className='sm:text-xl text-lg font-thin'>
        Shaswat Kumar Chaudhary .
      </p>

      <SocialMedia />

      <p className='font-normal text-sm sm:text-lg text-center text-[#808080]'>
        2024 Portfolio. All rights reserved
        </p>

    </div>
  )
}
