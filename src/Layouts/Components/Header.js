import React, { useState } from 'react'
import { LogoDark } from '../../Assets';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="absolute inset-x-0 top-0 z-50 py-10">
      <div className="mx-auto lg:max-w-[1500px] w-full px-5 sm:px-10 md:px-12 lg:px-0">
        <nav className="w-full flex justify-between gap-6 relative">
          {/* Logo */}
          <div className="min-w-max inline-flex relative">
            <a href="/" className="relative flex items-center gap-3">
              <img src={LogoDark} alt='Logo' className='w-32'/>
            </a>
          </div>

          {/* Overlay */}
          <div
            data-nav-overlay
            aria-hidden="true"
            className={`fixed ${isOpen ? '' : 'hidden'} inset-0 lg:!hidden bg-gray-800/60 bg-opacity-50 backdrop-filter backdrop-blur-xl`}
            onClick={toggleNavbar}
          ></div>

          {/* Navbar */}
          <div
            data-navbar
            className={`flex ${isOpen ? 'visible opacity-100 translate-y-0' : 'invisible opacity-0 translate-y-10'} 
            lg:visible lg:opacity-100 lg:translate-y-0 lg:scale-y-100 duration-300 ease-linear 
            flex-col gap-y-6 gap-x-4 lg:flex-row w-full lg:justify-between lg:items-center 
            absolute lg:relative top-full lg:top-0 bg-white lg:!bg-transparent border-x border-x-gray-100 lg:border-x-0`}
          >
            <ul className="border-t border-gray-100 lg:border-t-0 px-6 lg:px-0 pt-6 lg:pt-0 flex flex-col lg:flex-row gap-y-4 gap-x-3 text-lg text-gray-700 w-full lg:justify-center lg:items-center"></ul>

            <div className="lg:min-w-max flex items-center sm:w-max w-full pb-6 lg:pb-0 border-b border-gray-100 lg:border-0 px-6 lg:px-0">
            <ul className="border-t border-gray-100 lg:border-t-0 px-6 lg:px-0 pt-6 lg:pt-0 flex flex-col lg:flex-row gap-y-4 gap-x-3 text-lg text-gray-700 w-full lg:justify-center lg:items-center">
              <li>
                <a href="/" className="duration-300 font-bold text-black ease-linear hover:text-mainColor py-3">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="duration-300 font-bold text-gray-300 ease-linear py-3">
                  Services
                </a>
              </li>
              <li>
                <a href="/about" className="duration-300 font-bold text-black ease-linear hover:text-mainColor py-3">
                  About us
                </a>
              </li>
              <li>
                <a href="/contact" className="duration-300 font-bold text-black ease-linear hover:text-mainColor py-3">
                  Contact Us
                </a>
              </li>
            </ul>
            </div>
          </div>

          {/* Hamburger Button */}
          <div className="min-w-max flex items-center gap-x-3">
            <button
              data-toggle-navbar
              data-is-open={isOpen.toString()}
              onClick={toggleNavbar}
              className="lg:hidden lg:invisible outline-none w-7 h-auto flex flex-col relative"
            >
              <span
                id="line-1"
                className={`w-6 h-0.5 rounded-full bg-gray-700 transition-all duration-300 ease-linear ${isOpen ? 'translate-y-1.5 rotate-40' : ''}`}
              ></span>
              <span
                id="line-2"
                className={`w-6 origin-center mt-1 h-0.5 rounded-ful bg-gray-700 transition-all duration-300 ease-linear ${isOpen ? 'scale-x-0 opacity-0' : ''}`}
              ></span>
              <span
                id="line-3"
                className={`w-6 mt-1 h-0.5 rounded-ful bg-gray-700 transition-all duration-300 ease-linear ${isOpen ? '-translate-y-1.5 -rotate-40' : ''}`}
              ></span>
              <span className="sr-only">Toggle Navbar</span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
