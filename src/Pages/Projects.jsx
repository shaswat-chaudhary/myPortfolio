import React, { useEffect, useState } from 'react'
import projectData from '../data/data';
import { FiExternalLink } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';



export const Projects = () => {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, [])


  return (
    <div id='project'>

      <div
        className='px-3 sm:px-[8vw] mb-5'>

        <div className='w-full relative mb-8 mt-4'>
          <p className='text-xl font-semibold text-center py-1'>
            My Project
          </p>
          <div className='project-line absolute'></div>
        </div>


        <div className='grid sm:grid-cols-2 grid-cols-1 sm:gap-x-24 sm:gap-y-10 gap-5'>
          {
            projectData.map((item) => (
              <div key={item?.id} item={item}
                className={`card`}>

                <div className="card__border"></div>

                {/* Banner */}

                <div className='w-full p-3'>
                  <img className='w-full aspect-video object-cover rounded-2xl'
                    src={item?.image}
                    alt='' />
                </div>

                {/* Description */}

                <div className='px-4 pb-4 pt-2 gap-2 sm:gap-4 flex flex-col'>
                  <Link to={item?.link}
                    className='flex flex-row text-center items-center gap-4 text-blue-400 hover:text-gray-300 duration-200'>
                    <p className='text-xl sm:text-2xl font-medium text-start'>
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
                    <span className='text-lg font-medium'>
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
