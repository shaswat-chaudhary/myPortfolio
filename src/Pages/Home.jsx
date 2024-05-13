import React, { useEffect, useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Header } from '../components/Header';
import { Skills } from '../components/Skills';
import projectData from '../data/data';
import { Link } from 'react-router-dom';
import { FiExternalLink } from "react-icons/fi";
import { Footer } from '../components/Footer';
import { ChatBox } from '../components/ChatBox';
import { About } from './About';
import { Projects } from './Projects';


export const Home = () => {

    const array = projectData;

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const randomObject = Math.floor(Math.random() * array.length);
        setCurrentIndex(array[randomObject]);
    }, [array]);


    return (
        <div className=''>
            <Navbar />
            <Header />
            <About />
            <Skills />
            <ChatBox />

            <Projects />

            <Footer />
        </div>
    )
}
