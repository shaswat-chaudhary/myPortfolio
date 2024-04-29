import React, { useState } from 'react'
import profileImg from '../assets/Snapchat-214351935-01.jpeg'
import resume from '../assets/fullstack.pdf'
import { FiArrowDownCircle } from 'react-icons/fi';
import Typewriter from 'typewriter-effect';
import data from '../data/mydata.json';


export const Header = () => {

  const [isFlipped, setIsFlipped] = useState(false);
  const [startX, setStartX] = useState(null);

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    setStartX(touch.clientX);
  }

  const handleTouchMove = (e) => {

  }

  const handleTouchEnd = (e) => {
    const touch = e.changedTouches[0]
    const endX = touch.clientX;

    const deltaX = endX - startX;

    if (Math.abs(deltaX) > 50) {
      //Swipe right
      setIsFlipped(!isFlipped);
    }

    setStartX(null)
  }


  return (
    <div className='w-full'>

      <div className='md:mx-20 mx-3 flex md:flex-row-reverse flex-col justify-between text-start items-center sm:py-14 sm:my-16 py-4 mt-10 sm:mt gap-8'>

        <div className='flex items-center justify-center text-center sm:w-1/2'>

          <div className='sm:w-1/2 w-auto '>

            <div className={`flip-card ${isFlipped ? 'flipped' : ''}`}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >

              <div className="flip-card-inner">

                <div className="flip-card-front rounded-full">
                  <img className='w-full ring-2 object-cover aspect-square rounded-full'
                    src={'https://t4.ftcdn.net/jpg/05/90/45/35/360_F_590453560_ugMuPncnGYB6XnJqmC8xiPQx4eg3jmMD.jpg'}
                    alt='profile' />
                </div>

                <div className="flip-card-back rounded-full items-center flex justify-center text-center">

                  <img className='rounded-full object-cover aspect-square ring-2'
                    src={profileImg} alt='profile' />
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
                deleteSpeed: 100,
              }}
            />
          </div>


          <p className='text-base font-medium'>
            {data?.about}
          </p>

          <a
            download={"download.pdf"}
            href={resume}
            aria-label='download resume'
            className="flex justify-center items-center grow w-40 sm:w-48 mt-5 sm:mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 hover:border-indigo-500 py-3 shadow-lg rounded-lg bg-indigo-100 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-600 hover:text-white duration-500"
          >
            <FiArrowDownCircle
              className="mr-2 sm:mr-3 h-5 w-5 sm:w-6 sm:h-6 duration-100" />
            <span className="text-sm sm:text-lg duration-100">
              Download CV
            </span>
          </a>

        </div>

      </div>




    </div>
  )
}
