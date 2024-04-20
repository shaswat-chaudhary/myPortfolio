import React, { useState } from 'react'
import profilePic from '../assets/Frame 3762.png'
import profileImg from '../assets/Snapchat-214351935-01.jpeg'
import resume from '../assets/fullstack.pdf'
import { FiArrowDownCircle } from 'react-icons/fi';
import Typewriter from 'typewriter-effect';

import { useSwipeable } from 'react-swipeable';

export const Header = () => {

  const [profileCard, setProfileCard] = useState(false);


  const handlers = useSwipeable({
    onSwipeStart: () => setProfileCard(true),
    onSwiped: () => setProfileCard(false)
  })

  return (
    <div className='w-full'>

      <div className='md:mx-20 mx-3 flex md:flex-row-reverse flex-col justify-between text-start items-center sm:py-14 sm:my-16 py-4 mt-10 sm:mt gap-8'>

        <div className='flex items-center justify-center text-center sm:w-1/2'>

          <div className='sm:w-1/2 w-auto '>

            <div {...handlers} className={`flip-card ${profileCard ? 'flipped' : ''}`}>

              <div className="flip-card-inner">

                <div className="flip-card-front rounded-full">
                  <img className='w-full ring-2 object-cover aspect-square rounded-full' src={'https://t4.ftcdn.net/jpg/05/90/45/35/360_F_590453560_ugMuPncnGYB6XnJqmC8xiPQx4eg3jmMD.jpg'} alt='profile' />
                </div>

                <div className="flip-card-back rounded-full items-center flex justify-center text-center">

                  <img className='rounded-full object-cover aspect-square ring-2' src={profileImg} alt='profile' />
                </div>

              </div>
            </div>

            <p className='font-medium'>{'Hey !'}</p>
          </div>
        </div>

        <div className='flex flex-col gap-4 sm:w-1/2'>

          <div className='h-40 sm:h-20'>
            <Typewriter
              className="text-red-400"
              options={{
                strings: [
                  "I'm Full Stack Developer",
                  "I'm Front-end Developer"
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </div>


          <p className=''>Full Stack Developer with a proven track record in expert-level Front-End Development. Proficient in designing and implementing innovative user interfaces and experiences using cutting-edge technologies and best practices.</p>

          <a
            download={"download.pdf"}
            href={resume}
            aria-label='download resume'
            className="flex justify-center items-center grow w-40 sm:w-48 mt-5 sm:mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 hover:border-indigo-500 py-3 shadow-lg rounded-lg bg-indigo-100 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-600 hover:text-white duration-500"
          >
            <FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sm:w-6 sm:h-6 duration-100" />
            <span className="text-sm sm:text-lg duration-100">
              Download CV
            </span>
          </a>

        </div>

      </div>




    </div>
  )
}
