import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import logo from '../assets/shaswat-logo-2.png'
import { Link as ScrollLink } from 'react-scroll'
import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from 'react-icons/rx';
import { SocialMedia } from './SocialMedia'
import resume from '../assets/fullstack.pdf';
import { FiArrowDownCircle } from 'react-icons/fi';


export const Navbar = () => {

    const [ismenu, setIsMenu] = useState(false);
    const [navColor, setNavColor] = useState(false);
    const [active, setActive] = useState();


    const handleMenuClick = () => {
        setIsMenu(!ismenu);
    }

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
        if (window.scrollY >= 200) {
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
            <div className={navColor ? 'sticky top-0 duration-500 z-40 shadow-lg shadow-cyan-400/20 backdrop-blur-md ' : ''} >

                <div className='sm:px-[8vw] px-2 py-0.5'>

                    <div className='flex text-center items-center w-full z-50 justify-between py-1 sm:py-1 pl-1'>
                        <Link to={'/'} className='flex flex-1 items-center gap-2'>
                            <span className={`${navColor ? "top-0 py-2 ml-12 font-mono text-xl" : "hidden"}`}>Shaswat</span>
                        </Link>
                        <CiMenuFries onClick={handleMenuClick} size={30} />

                        <p className={`${navColor ? 'hidden' :
                            'absolute top-0 left-0 px-3 py-2.5 text-[16px] font-medium'}`}>
                            Welcome to My Portfolio
                        </p>


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
                            ismenu && (
                                <div>
                                    <div className={`fixed top-0 left-0 h-screen w-full bg-[#0a111e] z-50 flex flex-col items-center gap-4 p-4 shadow-lg min-h-min justify-evenly`}>

                                        <div >
                                            <RxCross1 size={40} onClick={() => setIsMenu(false)}
                                                className='cursor-pointer rounded-full hover:bg-[#f9f9f9] p-2 ring-1 ring-[#f9f9f9] duration-200'
                                            />
                                        </div>

                                        <div className='pt-5 flex flex-col'>
                                            <ul className='flex-col flex gap-1'>
                                                <li> <Link to={'/'}>Home</Link> </li>
                                                <li> <Link to={'/contact'}>Contact</Link> </li>
                                                <li> <Link to={''}>Help</Link> </li>
                                                <li> <Link to={'/about'}>About</Link> </li>
                                            </ul>
                                        </div>


                                        <div className='flex w-fit flex-row gap-12 items-center mt-5 sm:mt-12 mb-6 sm:mb-0'>

                                            <a
                                                download={"download.pdf"}
                                                href={resume}
                                                aria-label='download resume'
                                                className="flex justify-center items-center grow w-40 sm:w-48 text-lg border border-indigo-200 hover:border-indigo-500 py-3 shadow-lg rounded-lg bg-indigo-100 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-600 hover:text-white duration-500"
                                            >
                                                <FiArrowDownCircle
                                                    className="mr-2 sm:mr-3 h-5 w-5 sm:w-6 sm:h-6 duration-100 animate-bounce" />
                                                <span className="text-sm sm:text-lg duration-100">
                                                    Download CV
                                                </span>
                                            </a>


                                        </div>

                                        <SocialMedia />

                                    </div>
                                </div>
                            )
                        }

                    </div>

                </div>

            </div>
        </>
    )
}
