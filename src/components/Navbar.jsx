import React, { useEffect, useState } from 'react'
import { CgMenuRightAlt } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom'
import resume from '../assets/fullstack.pdf'
import { useLocation } from 'react-router-dom'
import logo from '../assets/shaswat-logo-2.png'

export const Navbar = () => {

    const [ismenu, setISMenu] = useState('');
    const [navColor, setNavColor] = useState(false);

    const location = useLocation();

    const [currentPage, setCurrentPage] = useState(location.pathname);

    const handleClick = () => {
        setISMenu(!ismenu);
    }

    const handleClose = () => {
        setISMenu(false)
    }

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
            <div className={navColor ? 'bg-black sticky top-0 duration-300 transition-all ease-in-out z-50 shadow-lg shadow-cyan-400/20' : ''} >

                <div className='sm:mx-20 mx-3 pt-1'>

                    <div className='flex text-center items-center w-full justify-between py-1 sm:py-2'>
                        <Link to={'/'} className='sm:w-28 w-24'>
                          <img src={logo} alt='' className='font-bold brightness-125'/>
                        </Link>

                        <div className='hidden sm:flex flex-row text-start gap-20 px-1'>

                            <Link to={'/'}
                                className={currentPage === '/' ? "active" : "nav"}
                            >
                                Home
                            </Link>

                            <Link to={'/project'}
                                className={currentPage === '/project' ? "active" : "nav"}
                            >
                                Project
                            </Link>

                            <Link to={'/about'}
                                className={currentPage === '/about' ? "active" : "nav"}
                            >
                                About
                            </Link>

                            <Link to={'/contact'}
                                className={currentPage === '/contact' ? "active" : "nav"}
                            >
                                Contact
                            </Link>

                        </div>

                        <button className='hidden sm:flex'>Hire me</button>
                        {
                            ismenu ? (
                                <IoClose
                                    size={35}
                                    onClick={handleClick}
                                    className='hover:rotate-45 transition-all z-30' />
                            ) : (

                                <CgMenuRightAlt
                                    size={35}
                                    onClick={handleClick}
                                    className='md:hidden flex' />
                            )
                        }
                    </div>

                    {
                        ismenu && (

                            <div>

                                <div className='bg-gray-300 w-3/4 fixed right-2 opacity-100 top-16 rounded-xl p-4 h-[50vh] flex flex-col justify-around z-50 '>

                                    <div className='flex flex-col text-start gap-5 px-1 text-lg'>

                                        <Link to={'/'}
                                            className={currentPage === '/' ? "active" : ""}
                                        >
                                            Home
                                        </Link>

                                        <Link to={'/project'}
                                            className={currentPage === '/project' ? "active" : ""}
                                        >
                                            Project
                                        </Link>

                                        <Link to={'/about'}
                                            className={currentPage === '/about' ? "active" : ""}
                                        >
                                            About
                                        </Link>

                                        <Link to={'/contact'}
                                            className={currentPage === '/contact' ? "active" : ""}
                                        >
                                            Contact
                                        </Link>

                                        <button>Hire me</button>

                                    </div>

                                </div>
                            </div>

                        )
                    }
                </div>

            </div>
        </>
    )
}
