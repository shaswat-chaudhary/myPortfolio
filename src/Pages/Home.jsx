import React, { useEffect, useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Header } from '../components/Header';
import { Skills } from '../components/Skills';
import { About } from './About';
import { Projects } from './Projects';
import { Contact } from './Contact';


export const Home = () => {

    return (
        <div className=''>
            <Navbar />
            <Header />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
    )
}
