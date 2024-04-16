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
        <div className='bg-black py-5'>

            <div className=''>
                <div className='items-center flex flex-col gap-3 mx-3 pb-3 text-center'>
                    <p className='bg-gray-700 w-fit px-5 py-0.5 rounded-full font-semibold'>Skills</p>
                    <p className='text-base tracking-wide py-1'>
                        {"The Skills, tools and technologies I am really good at"}
                    </p>
                </div>

                <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 md:gap-10 gap-2 mx-auto items-center'>

                    <div className='flex flex-col items-center text-center p-4'>
                        <h1 className='text-yellow-300 justify-center flex'>
                            <IoLogoJavascript />
                        </h1>
                        <p>JavaScript</p>
                    </div>
                    <div className='flex flex-col items-center text-center p-4'>
                        <h1 className='text-blue-700 flex justify-center'>
                            <FaReact className='logo' />
                        </h1>
                        <p>React</p>
                    </div>
                    <div className='flex flex-col items-center text-center p-4'>
                        <h1 className=' text-green-500 flex justify-center'>
                            <FaNodeJs />
                        </h1>
                        <p>Node.js</p>
                    </div>
                    <div className='flex flex-col items-center text-center p-4'>
                        <h1 className='flex justify-center'>
                            <SiExpress />
                        </h1>
                        <p>Express.js</p>
                    </div>
                    <div className='flex flex-col items-center text-center p-4'>
                        <h1 className=' text-green-900 flex justify-center'>
                            <SiMongodb />
                        </h1>
                        <p>MongoDB</p>
                    </div>
                    <div className='flex flex-col items-center text-center p-4'>
                        <h1 className=' text-blue-500 flex justify-center'>
                            <SiTailwindcss />
                        </h1>
                        <p>Tailwind</p>
                    </div>
                    <div className='flex flex-col items-center text-center p-4'>
                        <h1 className='flex justify-center'>
                            <FaFigma />
                        </h1>
                        <p>Figma</p>
                    </div>
                    <div className='flex flex-col items-center text-center p-4'>
                        <h1 className='flex justify-center'>
                            <FaGithubSquare />

                        </h1>
                        <p>Github</p>
                    </div>
                    <div className='flex flex-col items-center text-center p-4'>
                        <h1 className='text-sky-600 flex justify-center'>
                            <TbBrandVscode />
                        </h1>
                        <p>VS Code</p>
                    </div>

                </div>


            </div>
        </div>
    )
}
