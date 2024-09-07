import React from 'react'
import { Logo } from '../../Assets'
import { Cookies } from '../Constants'

export default function Footer() {
  return (
    <main>
      <section className="bg-darkColor">
        <div
          className="max-w-lg bg-darkColor px-4 pt-24 py-8 mx-auto text-left md:max-w-none md:text-center"
        >
          <h1
            className="text-3xl font-extrabold leading-10 tracking-tight text-left text-white text-center sm:leading-none md:text-6xl text-4xl lg:text-7xl"
          >
            <span className="inline md:block capitalize">You have a project?</span>
            <span
              className=" mt-2 bg-clip-text text-transparent bg-gradient-to-r from-mainColor via-white to-green-500 md:inline-block"
            > Let's Build<span className="bg-clip-text text-transparent bg-gradient-to-r from-mainColor via-white to-mainColorShade"> For You</span> </span>
          </h1>
          <div
            className="mx-auto rounded-lg font-black mt-5 text-zinc-400 md:mt-12 md:max-w-lg text-center lg:text-lg"
          >
            <button className="bg-tkb border text-sm text-white py-3 px-7 rounded-full">
              Join LogicGraph
            </button>
          </div>
        </div>
      </section>


      <section className="bg-darkColor font-sans">
        <div className="container max-w-[1500px] px-5 py-12 mx-auto">
          <div className="lg:flex lg:justify-between grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10">

            <div>
              <p className="font-semibold text-white text-xl">Quick Links</p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <p className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-white">Home</p>
                <p className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-white">About Us</p>
                <p className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-white">Contact Us</p>
              </div>
            </div>

            <div>
              <p className="font-semibold text-white text-xl">Products</p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <p className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-white">Payroll Software</p>
                <p className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-white">Biometric & Identity Solution</p>
                <p className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-white">e-Accounting</p>
                <p className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-white"> AI Form Extractor</p>
              </div>
            </div>
            <div>
              <p className="font-semibold text-white text-xl">Services</p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <p className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-white">Business Solution</p>
                <p className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-white">Software Development</p>
                <p className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-white">Cloud Computing</p>
                <p className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-white">Data Analysis</p>
              </div>
            </div>
            <div>
              <p className="font-semibold text-white text-xl">Contact</p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <p className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-white">Phone: +234-805-531-6857</p>
                <p className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-white">Email: contactus@logicgraph.io</p>
                <p className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-white">Address: The Waterside, 5 Admiralty Road Off, Admiralty Way, Lekki Phase 1, Lagos, Nigeria</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <hr className="text-white mx-5" />
      <footer className="bg-darkColor pb-5">
        <div className="max-w-[1500px] px-4 pt-8 mx-auto sm:px-6 lg:px-0">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex justify-center text-teal-300 sm:justify-start">
              <img className="rounded-full" src={Logo} width="100" height="40" />
            </div>

            <div className="flex lg:justify-end justify-center lg:mx-0 mx-auto lg:gap-4 gap-10 lg:mt-0 mt-10 hover:cursor-pointer">
              <img src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg" width="30" height="30" alt="tw" />
              <img src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg" width="30" height="30" alt="inst" />
              <img src="https://www.svgrepo.com/show/28145/linkedin.svg" width="30" height="30" alt="in" />
            </div>
          </div>
        </div>
      </footer>
      <Cookies />
    </main>
  )
}
