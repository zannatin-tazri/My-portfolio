import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Skills from '../skills/Skills';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Education from '../Education/Education';
import Certification from '../Certification/Certification';

const Home = () => {
    return (
        <div className='bg-gradient-to-r from-purple-900 to-blue-600'>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Certification></Certification>
            <Education></Education>
            <Contact></Contact>
           
        </div>
    );
};

export default Home;