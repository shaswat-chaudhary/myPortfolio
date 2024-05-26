import React, { useEffect, useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Header } from '../components/Header';
import { Skills } from '../components/Skills';
import { Footer } from '../components/Footer';
import { ChatBox } from '../components/ChatBox';
import { About } from './About';
import { Projects } from './Projects';


export const Home = () => {

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
