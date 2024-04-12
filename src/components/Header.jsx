import React from 'react'
import profilePic from '../assets/Frame 3762.png'
import profileImg from '../assets/Snapchat-214351935-01.jpeg'


export const Header = () => {

  const text = "Welcome to my portfolio! I'm a frontend developer."

  
  return (
    <div className='w-full h-[90vh]'>

      <div className='md:mx-20 mx-2 flex md:flex-row-reverse flex-col justify-between text-start items-center py-20 gap-8'>

        <div className='text-center'>
          <div className='w-36 h-36 bg-red-400 rounded-full ring-2 ring-green-600'>
            <img className='w-full object-cover aspect-square rounded-full' src={profilePic} alt='profile' />
{/* 
            <img className='rounded-full top-[124px] w-36 h-36 object-contain aspect-square ring-2 fixed' src={profileImg} alt='profile' /> */}
            <p className='font-medium'>{'Hey !'}</p>
          </div>
        </div>

        <div className='flex flex-col gap-4'>

          <h2 className='font-bold font-serif'>
            {'Im Full Stack Developer'}
          </h2>

          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum esse, ad a mollitia, consectetur, veniam aliquid illo necessitatibus amet velit accusamus? Optio voluptatum laudantium neque dolorem qui corrupti expedita sint.</p>
        </div>

      </div>

    </div>
  )
}
