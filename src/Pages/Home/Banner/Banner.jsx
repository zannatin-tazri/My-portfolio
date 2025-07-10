import React from 'react';
// import image1 from '../../../assets/1752149051968.jpg';
// import image2 from '../../../assets/IMG_20250709_225532.jpg';
import image3 from '../../../assets/IMG_20250710_184017.jpg';

const Banner = () => {
    return (
        <div className="bg-gradient-to-r from-purple-950 via-gray-900 to-blue-950">
            <div className="min-h-screen flex items-center justify-center px-6 md:px-16 lg:px-28">
                <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-12 text-white py-10">

                    {/* Left Content */}
                    <div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                            Hi, I'm <span className="text-white">Zannatin Tazri Zan</span>
                        </h1>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-purple-400">
                            Front-End Developer.
                        </h2>
                        <p className="mt-4 text-sm md:text-base text-gray-200 leading-relaxed max-w-md">
                            A self-taught front-end developer with over 2 months of experience,
                            I build responsive and user-friendly websites & app. I focus on
                            clean code and efficient design, ensuring seamless interactions that
                            align with both user expectations and business objectives.
                        </p>

                        <button className="btn mt-6 bg-gradient-to-r from-cyan-400 to-purple-500 text-white border-none">
                            Contact
                        </button>
                    </div>

                    {/* Right Image */}
                    <div className="flex justify-center">
                        <img
                            src={image3}
                            alt="Zannatin"
                            className="rounded-lg w-44 h-60 sm:w-52 sm:h-64 md:w-56 md:h-72 lg:w-64 lg:h-80 object-cover shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
