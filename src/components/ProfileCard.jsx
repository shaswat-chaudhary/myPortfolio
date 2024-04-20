import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import profileImg from '../assets/Snapchat-214351935-01.jpeg';


export const ProfileCard = () => {

    const [profileCard, setProfileCard] = useState(false);

    const handlers = useSwipeable({
        onSwipeStart: () => setProfileCard(true),
        onSwiped: () => setProfileCard(false)
    });


    return (
        <div>
            <div {...handlers} className={`flip-card ${profileCard ? 'flipped' : ''}`}>

                <div className="flip-card-inner">

                    <div className="flip-card-front rounded-full">
                        <img className='w-full ring-2 object-cover aspect-square rounded-full' src={'https://t4.ftcdn.net/jpg/05/90/45/35/360_F_590453560_ugMuPncnGYB6XnJqmC8xiPQx4eg3jmMD.jpg'} alt='profile' />
                    </div>

                    <div className="flip-card-back rounded-full items-center flex justify-center text-center">

                        <img className='rounded-full object-cover aspect-square ring-2' src={profileImg} alt='profile' />
                    </div>

                </div>
            </div>
        </div>
    )
}
