import React, { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar'
import Flippy, {BackSide, FrontSide} from 'react-flippy'


export const About = () => {

 const [profileCard, setProfileCard] = useState(false);

 const handleChangeCard = () => {
  setProfileCard(!profileCard);
 }

  return (
    <div>
      <Navbar />
      <div className={`flip-card ${profileCard ? 'flipped' : ''}`} onClick={handleChangeCard}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <p>{"frontContent"}</p>
        </div>
        <div className="flip-card-back">
          <p>{"backContent"}</p>
        </div>
      </div>
    </div>
    </div>
  )
}
