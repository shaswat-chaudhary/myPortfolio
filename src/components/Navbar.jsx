import React, { useState } from 'react'
import { CgMenuRightAlt } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom'

export const Navbar = () => {

    const [ismenu, setISMenu] = useState('');

    const [activeLink, setActiveLink] = useState('');

    const handleClick = () => {
        setISMenu(!ismenu);
    }

    const handleClose = () => {
        setISMenu(false)
    }

    return (
        <>
            <div className='mx- md:mx-20 bg-red-300'>
                <div className='flex text-center items-center w-full justify-between px-2 py-1'>
                    <h1 className='font-semibold font-[Helvetica] text-3xl'>Shaswat</h1>
                    {
                        ismenu ? (
                            <IoClose
                                size={35}
                                onClick={handleClick}
                                className='absolute top-1 right-2 hover:rotate-45 transition-all text-black z-30' />
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

                        <div className=' w-full z-10 inset-0 fixed'>
                            <div className='bg-gray-800 absolute right-1 top-12 rounded-xl p-4 h-[50vh] flex flex-col justify-around z-50'>

                                <div className='flex flex-col text-start gap-5 px-1 text-lg'>
                                    <Link to={'/'}>
                                        Home
                                    </Link>
                                    <Link to={'/project'}>
                                        Project
                                    </Link>
                                    <Link to={'/about'}>
                                        About
                                    </Link>
                                    <Link to={'/contact'}>
                                        Contact
                                    </Link>

                                </div>

                                <button>Click here for download resume</button>

                            </div>
                        </div>

                    )
                }
              
            </div>
        </>
    )
}
