import React, { useEffect, useState } from 'react';
import profileImg from '../assets/Snapchat-214351935-01.jpeg';
import resume from '../assets/fullstack.pdf';
import { FiArrowDownCircle } from 'react-icons/fi';
import Typewriter from 'typewriter-effect';
import data from '../data/mydata.json';
import { LiaHandPointerSolid } from "react-icons/lia";



export const Header = () => {

  const [isFlipped, setIsFlipped] = useState(false);
  const [startX, setStartX] = useState(null);
  const [endX, setEndX] = useState(null);
  const [swipeiIcon, setSwipeIcon] = useState(true);
  const [iconSize, setIconSize] = useState(250);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the scroll position has passed a certain threshold
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    setStartX(touch.clientX);
  }

  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    setEndX(touch.clientX);

  }

  const handleTouchEnd = (e) => {
    const touch = e.changedTouches[0]
    const endX = touch.clientX;

    const deltaX = endX - startX;

    if (Math.abs(deltaX) > 50) {
      //Swipe right
      setIsFlipped(!isFlipped);
      setSwipeIcon(false);
    }
    setStartX(null);

  }

  useEffect(() => {
    const handleScroll = () => {

      if (window.scrollY >= 50) {
        setSwipeIcon(false);
      }
      if (window.scrollY < 150) {
        setSwipeIcon(true);
      }

      const newSize = Math.max(40, 250 - window.scrollY / 1);
      setIconSize(newSize);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // useEffect(() => {

  //   if (isFlipped) {
  //     const timeOut = setTimeout(() => {
  //       setIsFlipped(false);
  //       setSwipeIcon(true);
  //     },);

  //     return () => clearTimeout(timeOut);
  //   }

  // }, [isFlipped])



  const number = +919262575513;

  const handleCall = (number) => {
    window.location.href = `tel:${number}`
  }


  return (
    <div className='w-full' id='home'>

      <div className='sm:px-[8vw] px-3 flex md:flex-row-reverse flex-col justify-between text-start items-center sm:py-16 mb-6 py-4 mt-10 sm:mt gap-8 relative'>


        <div className='flex items-center justify-center text-center sm:w-1/2 '>

          <div className='sm:w-1/2 w-auto '>


            <header className={`navbar ${isScrolled ? "scrolled" : ""}`}>
              <div className={`flip-card ${isScrolled ? "small" : "large"}`}>

                <div className={`flip-card ${isFlipped ? 'flipped' : ''}  z-40`}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}>

                  <div className={`flip-card-inner`}

                    style={{ width: `${iconSize}px`, height: `${iconSize}px` }}>

                    <div className="flip-card-front rounded-full last:">
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

              </div>
            </header>
          </div>


          <div className='flex flex-col gap-4 sm:w-1/2 mt-60'>

            <div>
              {
                swipeiIcon && (
                  <div className='path flex flex-col items-center'>
                    <LiaHandPointerSolid className='swipe-icon' size={40} />
                    <span className='text-xs'>Swipe Right</span>
                  </div>
                )
              }
            </div>

            <div className='sm:h-32 mb-2'>
              <Typewriter
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


            <p className='text-lg font-thin'>
              {data?.about}
            </p>

            <div className='flex w-fit flex-row gap-12 items-center mt-5 sm:mt-12 mb-6 sm:mb-0'>

              <a
                download={"download.pdf"}
                href={resume}
                aria-label='download resume'
                className="flex justify-center items-center grow w-40 sm:w-48 text-lg border border-indigo-200 hover:border-indigo-500 py-3 shadow-lg rounded-lg bg-indigo-100 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-600 hover:text-white duration-500"
              >
                <FiArrowDownCircle
                  className="mr-2 sm:mr-3 h-5 w-5 sm:w-6 sm:h-6 duration-100 animate-bounce" />
                <span className="text-sm sm:text-lg duration-100">
                  Download CV
                </span>
              </a>


              <div
                onClick={() => handleCall(number)}
                className='Phone is-animating'>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}
