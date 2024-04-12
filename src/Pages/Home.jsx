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
        <div className='h-screen overflow-auto'>
            <Navbar />
            <Header />
            <Skills />

            <div className='py-5 flex flex-col gap-4'>
                <div className='flex flex-col items-center text-start mx-2 md:mx-20 md:flex-row gap-2'>
                    <div className='w-2/3'>
                        <img className='w-full aspect-square object-cover' src={currentIndex?.image} alt='' />
                    </div>
                    <div className='flex flex-col gap-2  p-1'>

                        <Link
                            to={currentIndex?.link}
                            className='flex flex-1 gap-3 text-center items-center'>

                            <p className='text-xl font-medium'>
                                {currentIndex?.title}
                            </p>
                            {
                                currentIndex?.link && (
                                    <FiExternalLink size={22} />
                                )
                            }

                        </Link>

                        <p className='font-normal text-base'>{currentIndex?.description}</p>

                    <Link to={'/project'}>
                        <button>
                            See All Porjects
                        </button>
                    </Link>
                    </div>

                </div>
            </div>

            <Footer />



        </div>
    )
}
