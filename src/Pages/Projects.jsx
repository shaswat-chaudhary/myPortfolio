import React, { useState } from 'react'
import { Navbar } from '../components/Navbar'
import projectData from '../data/data';
import { FiExternalLink } from "react-icons/fi";
import { Link } from 'react-router-dom';


export const Projects = () => {


  return (
    <div>
      <Navbar />

      <div className='mx-3 sm:mx-20'>

        {
          projectData.map((item) => (
            <div key={item?.id} item={item}
              className='flex flex-col sm:flex-row w-full items-center mt-5 gap-10 '>

              <div className='sm:w-1/2 w-full sm:p-5'>
                <img className='w-full aspect-video object-cover rounded-lg'
                  src={item?.image}
                  alt='' />
              </div>

              <div className='px-1 py-3 gap-2 flex flex-col sm:w-1/2'>
                <Link to={item?.link}
                  className='flex flex-row text-center items-center gap-4'>
                  <p className='text-xl sm:text-2xl font-medium cursor-pointer'>
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
  )
}
