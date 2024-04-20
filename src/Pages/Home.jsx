import React, { useEffect, useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Header } from '../components/Header';
import { Skills } from '../components/Skills';
import projectData from '../data/data';
import { Link } from 'react-router-dom';
import { FiExternalLink } from "react-icons/fi";
import { Footer } from '../components/Footer';


export const Home = () => {

    const array = projectData;

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const randomObject = Math.floor(Math.random() * array.length);
        setCurrentIndex(array[randomObject]);
    }, [array]);


    return (
        <div className=''>
            <Navbar />
            <Header />
            <Skills />

            <div className='py-5 flex flex-col gap-4 items-center'>

                    <p className='bg-gray-700 w-fit px-5 py-0.5 text-base rounded-full font-semibold'>
                        {'Work'}
                    </p>
                <div className='flex flex-col sm:flex-row sm:mx-20 mx-3 justify-between gap-5 sm:gap-10'>


                    <div className='w-full grow'>
                        <img
                            src={currentIndex?.image}
                            className='w-full rounded-lg aspect-video object-cover'
                            alt='' />
                    </div>

                    <div className='flex flex-col gap-3 sm:gap-8 sm:px-12 '>

                        <Link
                            to={currentIndex?.link}
                            className='flex flex-row gap-3 sm:gap-5 items-center text-center'>

                            <p className='sm:text-2xl text-xl font-medium'>
                                {currentIndex?.title}
                            </p>
                            {
                                currentIndex?.link && (
                                    <FiExternalLink size={22} />
                                )
                            }
                        </Link>

                        <p className='font-normal text-base'>{currentIndex?.description}</p>
                    </div>

                </div>
                    <Link to={'/project'} className='mt-4'>
                        <button className='flex justify-center items-center grow w-32 sm:w-48 mb-6 sm:mb-0 text-sm sm:text-lg border border-indigo-200 hover:border-indigo-500 py-2 shadow-lg rounded-lg bg-indigo-100 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-600 hover:text-white duration-500'>
                            More Projects
                        </button>
                    </Link>
            </div>

            <Footer />

        </div>
    )
}
