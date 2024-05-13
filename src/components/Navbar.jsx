import React, { useEffect, useRef, useState } from 'react'
import { CgMenuRightAlt } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import logo from '../assets/shaswat-logo-2.png'

export const Navbar = () => {

    const [ismenu, setIsMenu] = useState(false);
    const [navColor, setNavColor] = useState(false);
    // let menuRef = useRef();

    // const handleClickOutside = (e) => {
    //     if (menuRef.current && !menuRef.current.contains(e.target)) {
    //         setIsMenu(false);
    //     }
    // };

    // useEffect(() => {
    //     document.addEventListener('mousedown', handleClickOutside);

    //     return () => {
    //         document.removeEventListener('mousedown', handleClickOutside);
    //     };
    // }, []);

    const location = useLocation();

    const [currentPage, setCurrentPage] = useState(location.pathname);


    const scrollHandler = () => {
        if (window.scrollY >= 20) {
            setNavColor(true);
        } else {
            setNavColor(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", scrollHandler);
    })



    return (
        <>
            <div className={navColor ? 'bg-black sticky top-0 duration-200  z-50 shadow-lg shadow-cyan-400/20' : ''} >

                <div className='sm:px-[8vw] px-5 py--1'>

                    <div className='flex text-center items-center w-full justify-between py-1 sm:py-2 '>
                        <Link to={'/'} className='sm:w-28 w-24'>
                            <img src={logo} alt='' className='font-bold brightness-125' />
                        </Link>

                        <div className='hidden sm:flex flex-row text-start gap-20 px-1'>

                            <Link to={'/'}
                                className={currentPage === '/' ? "active" : "nav"}
                            >
                                Home
                            </Link>

                            <Link to={''}
                                className={currentPage === '' ? "active" : "nav"}
                            >
                                Project
                            </Link>

                            <Link to={''}
                                className={currentPage === '/about' ? "active" : "nav"}
                            >
                                About
                            </Link>

                            <Link to={''}
                                className={currentPage === '/skill' ? "active" : "nav"}
                            >
                                Skills
                            </Link>

                        </div>


                        {
                            currentPage === '/' ? (
                                <Link to={'/contact'}>
                                    <button
                                        className="flex sm:px-4 px-3 py-2 my-1 sm:my-0 rounded-lg text-center justify-center items-center grow sm:text-lg text-sm border font-normal border-indigo-200 hover:border-indigo-500 shadow-lg  bg-indigo-100 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-600 hover:text-white duration-500"
                                    >
                                        Contact me
                                    </button>
                                </Link>
                            ) : (
                                <Link to={'/'}>
                                    <button
                                        className="flex sm:px-4 px-3 py-2 my-1 sm:my-0 rounded-lg text-center justify-center items-center grow sm:text-lg text-sm border font-normal border-indigo-200 hover:border-indigo-500 shadow-lg  bg-indigo-100 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-600 hover:text-white duration-500">
                                        Home
                                    </button>
                                </Link>
                            )
                        }

                  </div>

                        {/* {
                            ismenu ? (
                                <IoClose
                                    size={35}
                                    onClick={handleClick}
                                    className='hover:rotate-45 transition-all z-30 cursor-pointer text-white' />
                            ) : (

                                <CgMenuRightAlt
                                    size={35}
                                    onClick={handleClick}
                                    className='md:hidden flex cursor-pointer text-white' />
                            )
                        } */}
                    {/* {
                        ismenu && (

                            <div className='bg-slate-600 w-3/4 fixed right-2 opacity-100 top-14 rounded-2xl p-4 h-[50vh] flex flex-col justify-between py-5 z-50 text-white font-semibold shadow-lg'>

                                <div className='flex flex-col text-start gap-4 pt-4 text-lg'>

                                    <Link to={'/'}
                                        className={currentPage === '/' ?
                                            "bg-slate-800 px-4 py-1 rounded-lg" : "px-4 py-1 rounded-lg hover:bg-slate-500 "}
                                    >
                                        Home
                                    </Link>

                                    <Link to={'/project'}
                                        className={currentPage === '/project' ? "bg-slate-800 px-4 py-1 rounded-lg" : "px-4 py-1 rounded-lg hover:bg-slate-500"}
                                    >
                                        Project
                                    </Link>

                                    <Link to={'/about'}
                                        className={currentPage === '/about' ? "bg-slate-800 px-4 py-1 rounded-lg" : "px-4 py-1 rounded-lg hover:bg-slate-500 "}
                                    >
                                        About
                                    </Link>

                                    <Link to={'/contact'}
                                        className={currentPage === '/contact' ? "bg-slate-800 px-4 py-1 rounded-lg" : "px-4 py-1 rounded-lg hover:bg-slate-500 "}
                                    >
                                        Contact
                                    </Link>

                                </div>

                                <button className=''>Hire me</button>

                            </div>
                        )
                    } */}
                </div>

            </div>
        </>
    )
}
