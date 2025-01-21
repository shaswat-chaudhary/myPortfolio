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
        document.body.style.overflow = !ismenu ? "hidden" : "auto";

    }

    useEffect(() => {
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);


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
            <div className={navColor ? 'sticky top-0 duration-500 z-30 shadow-lg shadow-cyan-400/20 backdrop-blur-md ' : ''} >

                <div className='sm:px-[8vw] px-2 py-0.5'>


                    <div className='flex text-center items-center w-full z-30 justify-between py-1 sm:py-1 pl-1'>
                        <Link to={'/'} className='flex flex-1 items-center gap-2'>
                            <span className={`${navColor ? "top-0 py-2 ml-12 font-mono text-xl" : "hidden"}`}>Shaswat</span>
                        </Link>

                        <CiMenuFries className='flex md:hidden' onClick={handleMenuClick} size={30} />

                        <p className={`${navColor ? 'hidden' :
                            'absolute top-0 left-0 px-3 py-2.5 text-[16px] font-medium flex md:hidden'}`}>
                            My Portfolio
                        </p>


                        {
                            currentPage === '/contact' ? (
                                <></>
                            ) : (
                                <div className='hidden md:flex flex-row text-start gap-24 px-1 py-2'>

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

                                    <Link className='ring-1 ring-cyan-300 hover:bg-cyan-400 duration-500 hover:text-black py-1 px-4 text-sm rounded-md' to={'/contact'}>
                                        Contact
                                    </Link>

                                </div>
                            )
                        }

                        {
                            ismenu && (
                                <div >

                                    <div className='background-overplay'></div>

                                    <div className={`mobile-nav fixed top-0 left-0 h-screen w-80 bg-[#0a111e] z-50 flex flex-col items-start gap-4 shadow-lg min-h-min`}>


                                        <div className='w-full flex justify-between items-center py-3.5 px-5 border-b'>

                                            <Link to={'https://www.linkedin.com/in/shaswat-chaudhary/'}
                                                className='flex flex-1 gap-3'>
                                                <img className='w-10 h-10 rounded-full ring-1 ring-white' src="https://thumbs.dreamstime.com/b/hacker-looking-camera-face-mask-dark-theme-wallpaper-hacker-looking-camera-face-mask-dark-theme-wallpaper-291465611.jpg" alt="" />

                                                <div className='text-slide'>
                                                    <span>Shaswat Kumar Chaudhary</span>
                                                </div>

                                            </Link>

                                            <RxCross1 size={30} onClick={handleMenuClick}
                                                className='cursor-pointer rounded-full hover:bg-[#f9f9f9] duration-200'
                                            />
                                        </div>

                                        <div className='flex flex-col w-full items-start px-5 py-2'>
                                            <ul className='flex-col flex gap-2 text-start text-white font-medium text-lg'>
                                                <li> <Link to={'/'}>Home</Link> </li>
                                                <li> <Link to={'/contact'}>Contact</Link> </li>
                                                <li> <Link to={''}>Help</Link> </li>
                                                <li> <Link to={'/about'}>About</Link> </li>
                                            </ul>
                                        </div>

                                        <div className='py-4 px-5'>

                                            <a
                                                download={"download.pdf"}
                                                href={resume}
                                                aria-label='download resume'
                                                className="flex justify-center items-center grow w-48 sm:w-48 text-lg border border-indigo-200 hover:border-indigo-500 py-3 shadow-lg rounded-lg bg-indigo-100 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-600 hover:text-white duration-500"
                                            >
                                                <FiArrowDownCircle
                                                    className="mr-5 sm:mr-3 h-5 w-5 sm:w-6 sm:h-6 duration-100 animate-bounce" />
                                                <span className="text-sm sm:text-lg duration-100">
                                                    Download CV
                                                </span>
                                            </a>
                                        </div>

                                        <div className='flex flex-col text-start px-5 pt-4 w-full'>
                                            <span className='text-lg tracking-wider font-normal'>Social Media :</span>
                                            <SocialMedia />
                                        </div>

                                        <div className='p-4 text-center w-full'>
                                            <p className='text-center text-white text-base font-thin'>
                                                {`© ${new Date().getFullYear()} Portfolio by Shaswat`}
                                            </p>
                                        </div>


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
