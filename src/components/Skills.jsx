import React from 'react';
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";

export const Skills = () => {
    return (
        <div className='bg-slate-900 py-6' id='skill'>

            <div className=''>
                <div className='items-center flex flex-col gap-2 pb-6 mx-3 text-center'>
                    <p className='bg-gray-800 w-fit px-5 py-0.5 rounded-full font-semibold'>Skills</p>
                    <p className='text-lg tracking-wider font-'>
                        He Skills, tools and technologies I am really good at
                    </p>
                </div>

                <div className='sm:px-[8vw] px-5 grid grid-cols-2 gap-6 md:gap-16 sm:grid-cols-3 md:grid-cols-4 items-center justify-between text-white sm:pb-9 pb-1'>

                    <div className='bg-slate-800 py-6 gap-2 rounded-xl shadow-lg text-center flex flex-col justify-center hover:scale-105 duration-200 transition-all'>
                        <h1 className='text-yellow-300 flex justify-center'>
                            <IoLogoJavascript className='bright'/>
                        </h1>
                        <p> JavaScript</p>
                    </div>
                    <div className='bg-slate-800 py-6 gap-2 rounded-xl shadow-lg text-center flex flex-col justify-center hover:scale-105 duration-200 transition-all'>
                        <h1 className='text-blue-500 flex justify-center'>
                            <FaReact className='logo' />
                        </h1>
                        <p>React</p>
                    </div>
                    <div className=' bg-slate-800 py-6 gap-2 rounded-xl shadow-lg text-center flex flex-col justify-center hover:scale-105 duration-200 transition-all'>
                        <h1 className=' text-green-500 flex justify-center'>
                            <FaNodeJs className='bright'/>
                        </h1>
                        <p>Node.js</p>
                    </div>
                    <div className=' bg-slate-800 py-6 gap-2 rounded-xl shadow-lg text-center flex flex-col justify-center hover:scale-105 duration-200 transition-all'>
                        <h1 className='flex justify-center'>
                            <SiExpress className='bright text-white'/>
                        </h1>
                        <p>Express.js</p>
                    </div>
                    <div className=' bg-slate-800 py-6 gap-2 rounded-xl shadow-lg text-center flex flex-col justify-center hover:scale-105 duration-200 transition-all'>
                        <h1 className=' text-green-800 flex justify-center'>
                            <SiMongodb className='bright'/>
                        </h1>
                        <p>MongoDB</p>
                    </div>
                    <div className='bg-slate-800 py-6 gap-2 rounded-xl shadow-lg text-center flex flex-col justify-center hover:scale-105 duration-200 transition-all'>
                        <h1 className=' text-blue-500 flex justify-center'>
                            <SiTailwindcss className='bright'/>
                        </h1>
                        <p>Tailwind</p>
                    </div>
                    <div className='bg-slate-800 py-6 gap-2 rounded-xl shadow-lg text-center flex flex-col justify-center hover:scale-105 duration-200 transition-all'>
                        <h1 className='flex justify-center'>
                            <FaFigma className='bright text-white'/>
                        </h1>
                        <p>Figma</p>
                    </div>
                    <div className=' bg-slate-800 py-6 gap-2 rounded-xl shadow-lg text-center flex flex-col justify-center hover:scale-105 duration-200 transition-all'>
                        <h1 className='flex justify-center'>
                            <FaGithubSquare className='bright text-white'/>

                        </h1>
                        <p>Github</p>
                    </div>
                    <div className=' bg-slate-800 py-6 gap-2 rounded-xl shadow-lg text-center flex flex-col justify-center hover:scale-105 duration-200 transition-all'>
                        <h1 className='flex justify-center'>
                            <TbBrandVscode className='bright text-blue-500'/>
                        </h1>
                        <p>VS Code</p>
                    </div>

                </div>


            </div>
        </div>
    )
}
