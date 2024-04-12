import React, { useState } from 'react'
import { Navbar } from '../components/Navbar'
import projectData from '../data/data';
import { FiExternalLink } from "react-icons/fi";
import { Link } from 'react-router-dom';


export const Projects = () => {


  return (
    <div>
      <Navbar />
      {
        projectData.map((item) => (
          <div key={item?.id} item={item}
            className='flex flex-col md:flex-row items-center mt-5 mx-2'>

            <div className='w-3/4'>
              <img className='w-full aspect-square object-cover'
                src={item?.image}
                alt='' />
            </div>

            <div className='px-1 py-3 gap-2 flex flex-col'>
              <Link to={item?.link}
                className='flex flex-1 text-center items-center gap-4'>
                <p className='text-xl font-medium cursor-pointer'>
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
  )
}
