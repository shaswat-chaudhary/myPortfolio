import React, { useState } from 'react'
import projectData from '../data/data';
import { FiExternalLink } from "react-icons/fi";
import { Link } from 'react-router-dom';


export const Projects = () => {

  return (
    <div>

      <div className='px-5 sm:px-[8vw] mb-5'>

        <p className='text-xl px-1 font-semibold text-center border-b mt-4 mb-8 py-2 mx-20 sm:mx-32'>
          My Project
        </p>

        <div className='grid sm:grid-cols-2 grid-cols-1 sm:gap-x-24 sm:gap-y-10 gap-5'>
          {
            projectData.map((item) => (
              <div key={item?.id} item={item}
                className='pb-4 sm:pb-0 ring-1 ring-slate-700 rounded-lg  bg-slate-900 shadow-lg'>

                {/* Banner */}

                <div className='w-full'>
                  <img className='w-full aspect-video object-cover rounded-t-lg'
                    src={item?.image}
                    alt='' />
                </div>

                {/* Description */}

                <div className='px-4 py-3 gap-2 sm:gap-4 flex flex-col'>
                  <Link to={item?.link}
                    className='flex flex-row text-center items-center gap-4 text-blue-400 hover:text-gray-300 duration-200'>
                    <p className='text-xl sm:text-2xl font-medium'>
                      {item?.title}
                    </p>
                    {
                      item.link && (
                        <FiExternalLink size={22} />
                      )
                    }
                  </Link>

                  <p className='text-base font-normal'>
                    {item?.description}
                  </p>

                  <p className='flex flex-col font-semibold text-base'>
                    {'Technologies :'}
                    <span className='text-lg font-medium text-cyan-400'>
                      {item.technologies.join(", ")}
                    </span>
                  </p>

                </div>


              </div>
            ))
          }

        </div>
      </div>

    </div>
  )
}
