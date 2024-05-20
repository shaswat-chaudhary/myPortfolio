import React, { useEffect, useRef, useState } from 'react'
import { CgMenuRightAlt } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import logo from '../assets/shaswat-logo-2.png'
import { Link as ScrollLink } from 'react-scroll'
export const Navbar = () => {

    const [ismenu, setIsMenu] = useState(false);
    const [navColor, setNavColor] = useState(false);
    const [active, setActive] = useState();


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


                        {
                            currentPage === '/contact' ? (
                                <></>
                            ) : (
                                <div className='hidden sm:flex flex-row text-start gap-20 px-1'>

                                    <ScrollLink
                                        to='home'
                                        activeClass="active"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={300}
                                        className='cursor-pointer hover:text-indigo-400 font-medium'>
                                        Home
                                    </ScrollLink>

                                    <ScrollLink
                                        activeClass="active"
                                        to='about'
                                        spy={true}
                                        smooth={true}
                                        offset={-60}
                                        duration={300}
                                        className=' cursor-pointer hover:text-indigo-400 font-medium'>
                                        About
                                    </ScrollLink>

                                    <ScrollLink
                                        activeClass="active"
                                        to='skill'
                                        spy={true}
                                        smooth={true}
                                        offset={-60}
                                        duration={300}
                                        className='cursor-pointer hover:text-indigo-400 font-medium'>
                                        Skills
                                    </ScrollLink>

                                    <ScrollLink
                                        activeClass="active"
                                        to='project'
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={300}
                                        className='cursor-pointer hover:text-indigo-400 font-medium'>
                                        Projects
                                    </ScrollLink>

                                </div>
                            )
                        }


                        {
                            currentPage === '/' ? (
                                <Link to={'/contact'}>
                                    <button
                                        className="flex sm:px-4 px-3 py-2 my-1 sm:my-0 rounded-lg text-center justify-center items-center grow sm:text-lg text-sm border font-normal border-indigo-400 hover:border-indigo-500 shadow-lg  bg-indigo-100 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-600 hover:text-white duration-500"
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

                </div>

            </div>
        </>
    )
}
