import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Skills from '../skills/Skills';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div className='bg-gradient-to-r from-purple-900 to-blue-600'>
            <Banner></Banner>
            <Skills></Skills>
            <Projects></Projects>
           <About></About>
        </div>
    );
};

export default Home;