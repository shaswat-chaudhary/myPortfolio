import React from 'react'
import { SocialMedia } from './SocialMedia';
import { motion, useInView,   } from 'framer-motion';

export const Footer = ({isVisible}) => {

  const ref = React.useRef(null);
  const isInView = useInView(ref);

  return (
    <div className='pb-14 pt-10 text-center items-center flex flex-col'>

      <p className='sm:text-xl text-lg font-thin'>
        Shaswat Kumar Chaudhary .
      </p>

      <SocialMedia />

      <p className='font-normal text-sm sm:text-lg text-center text-[#808080]'>
      {`© ${new Date().getFullYear()} Portfolio by Shaswat. `}All rights reserved
      </p>

    </div>
  )
}
