import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';
// import image3 from '../../../assets/IMG_20250710_184017.jpg';
// import image4 from '../../../assets/1752230196216-01.jpeg'
import image5 from '../../../assets/1752231170079.jpeg'
import { FaHtml5, FaReact, FaNodeJs, FaDocker, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiFirebase, SiGnubash } from "react-icons/si";
import { ScrollLink } from 'react-scroll';

const Banner = () => {
    return (
        <div className="bg-gradient-to-r from-purple-950 via-gray-900 to-blue-950">
            <div className="min-h-screen flex items-center justify-center px-6 md:px-16 lg:px-28">
                <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-12 text-white py-10">

                    {/* Left Content */}
                    <div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                            Hi, I'm <span className="text-cyan-300">
                                <Typewriter
                                    words={['Zannatin Tazri Zan', 'IT Graduate', 'MERN Stack Developer']}
                                    loop={0}
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={100}
                                    deleteSpeed={50}
                                    delaySpeed={1500}
                                />
                            </span>
                        </h1>

                        <p className="mt-4 text-sm md:text-base text-gray-200 leading-relaxed max-w-md">
                            <span className="flex flex-wrap items-center gap-2 mt-3">
                                <FaHtml5 title="HTML5" className="text-orange-600 w-6 h-6" />
                                <SiTailwindcss title="Tailwind CSS" className="text-sky-400 w-6 h-6" />
                                <FaReact title="React" className="text-cyan-400 w-6 h-6" />
                                <FaNodeJs title="Node.js" className="text-green-600 w-6 h-6" />
                                <SiExpress title="Express.js" className="text-gray-400 w-6 h-6" /> </span>
                            <span className='flex flex-wrap items-center gap-2 mt-3'>
                                <SiMongodb title="MongoDB" className="text-green-500 w-6 h-6" />
                                <SiFirebase title="Firebase" className="text-yellow-400 w-6 h-6" />
                                <FaDocker title="Docker" className="text-blue-500 w-6 h-6" />
                                <SiGnubash title="Bash" className="text-gray-500 w-6 h-6" />
                                <FaGithub title="GitHub" className="w-6 h-6" />
                            </span>
                        </p>

                        <a href="#contact">
  <button className="btn mt-6 bg-gradient-to-r from-cyan-400 to-purple-500 text-white border-none">
    Contact
  </button>
</a>

                    </div>

                    {/* Right Image */}
                    <div className="flex justify-center">
                        <img
                            src={image5}
                            alt="Zannatin"
                            className="rounded-xl w-44 h-60 sm:w-52 sm:h-64 md:w-56 md:h-72 lg:w-64 lg:h-80 object-cover shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
