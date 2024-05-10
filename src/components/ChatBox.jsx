import React, { useEffect, useRef, useState } from 'react';
import { IoChatbubbleEllipses } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { LuSend } from "react-icons/lu";


export const ChatBox = () => {

    const [isChatBox, setChatBox] = useState(false);
    const menuRef = useRef();

    useEffect(() => {

        const handleClick = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setChatBox(false);
            }
        };

        document.addEventListener("mousedown", handleClick);

        return () => {
            document.removeEventListener('mousedown', handleClick);
        }

    })

    const handleClickOpen = () => {
        setChatBox(true);
    }

    const handleClickClose = () => {
        setChatBox(false);
    }

    return (
        <div className='bg-red-400' ref={menuRef}>
            {
                isChatBox && (
                    <div className='w-5/6 sm:w-1/3 rounded-lg h-[65vh] bg-blue-200 fixed bottom-5 right-5 shadow-lg z-30'>

                        <div className='flex  justify-between text-center items-center bg-blue-400 p-1 rounded-lg'>

                            <div className='flex items-center justify-stretch gap-4'>
                                <img className='w-10 h-10 rounded-full'
                                    src='https://static.vecteezy.com/system/resources/thumbnails/007/225/199/small_2x/robot-chat-bot-concept-illustration-vector.jpg'
                                    alt='chatbot' />

                                <h3 className='font-medium text-lg'>Chat Bot</h3>
                            </div>

                            <IoClose
                                className='m-1 focus:bg-slate-600 rounded-full cursor-pointer'
                                onClick={handleClickClose}
                                size={30}
                                color='black' />
                        </div>

                        <div className='w-full flex justify-stretch gap-2 p-2 absolute bottom-0'>
                            <input
                                type='text'
                                placeholder='Type a message...'
                                className='border-[2px] border-black outline-none rounded-md focus:ring-blue-500 focus:border-blue-500 w-full py-2 px-3 bg-transparent placeholder-black text-black text-lg items-center'
                            />
                            <div
                                className='bg-blue-400 cursor-pointer inline-flex items-center relative flex-nowrap rounded-md outline-offset-2 px-4 text-center'>
                                <LuSend
                                    size={25}
                                    color='black' />
                            </div>
                        </div>

                    </div>
                )
            }

            {
                !isChatBox && (
                    <div className='p-3 bg-[#8dbef3] rounded-full fixed right-5 bottom-5 cursor-pointer'
                        onClick={handleClickOpen}>
                        <IoChatbubbleEllipses
                            size={35}
                            color={'blue'}
                        />
                    </div>
                )
            }
        </div>
    )
}
