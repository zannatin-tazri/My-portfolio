import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  return (
    <div className="navbar bg-gradient-to-r from-purple-900 via-cyan-900 to-gray-800 text-white px-4 shadow-md">
      {/* Mobile Menu */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-900 text-white rounded-box w-52"
          >
            <li>
              <ScrollLink to="about" smooth={true} duration={500} offset={-70}>
                About Me
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="projects" smooth={true} duration={500} offset={-70}>
                Projects
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="contact" smooth={true} duration={500} offset={-70}>
                Contact
              </ScrollLink>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl font-bold text-white">Portfolio</a>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white text-lg">
          <li>
            <ScrollLink to="about" smooth={true} duration={500} offset={-70}>
              About Me
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="projects" smooth={true} duration={500} offset={-70}>
              Projects
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="contact" smooth={true} duration={500} offset={-70}>
              Contact
            </ScrollLink>
          </li>
        </ul>
      </div>

      {/* Avatar or Action */}
      <div className="navbar-end">
        <div className="btn btn-circle avatar">
          <div className="w-10 rounded-full ring ring-white ring-offset-base-100 ring-offset-2">
            <img
              alt="Profile"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
