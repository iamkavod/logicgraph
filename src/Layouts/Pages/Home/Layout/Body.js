import React from 'react'
import { FgnTreasury, FormExtrator, Payroll } from '../../../../Assets'
import { Swipper } from '../../../Constants'
import { MdComputer } from "react-icons/md";
import { FaDatabase } from "react-icons/fa";
import { AiOutlineAndroid } from "react-icons/ai";
import { CiCloud } from "react-icons/ci";

export default function Body() {
    return (
        <main>
            {/* Body */}
            <section className="relative  bg-blueGray-50">
                <div className="relative pt-16 pb-60 flex content-center items-center justify-center min-h-screen-75">
                    <div className="absolute top-0 w-full h-[600px] bg-center bg-cover">
                        {/* Using iframe to load the Lottie animation */}
                        <iframe
                            src="https://lottie.host/embed/3e981e67-0891-4c0c-93d9-b62df274d684/p6y0kXvSOK.json"
                            style={{ width: '100%', height: '600px', border: 'none', position: 'absolute' }}
                            frameBorder="0"
                        ></iframe>

                        {/* Overlay */}
                        <span id="blackOverlay" className="w-full h-full absolute opacity-90 bg-darkColor"></span>
                    </div>

                    <div className="container relative mx-auto">
                        <div className="items-center flex flex-wrap">
                            <div className="w-full lg:w-full lg:px-20 ml-auto mr-auto text-center">
                                <div className="lg:pr-12">
                                    <h1 className="text-white font-bold lg:text-5xl text-3xl">
                                        Your story starts with us
                                    </h1>
                                    <p className="mt-4 lg:text-lg text-md text-white">
                                        LogicGraph is a growing digital powerhouse in Nigeria, delivering digital transformations products and services that have impacted lives across the nation.
                                    </p>
                                    <p className="mt-4 lg:text-3xl text-xl font-bold text-white">
                                        We Have 14+ Years Of Experience. We Offer Software Solutions , Digital Technology Service
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" style={{
                        transform: "translateZ(0px)",
                    }}>
                        <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                            <polygon className="text-black fill-current" points="2560 0 2560 100 0 100"></polygon>
                        </svg>
                    </div>
                </div>
                <section className="pb-10 bg-blueGray-200 lg:-mt-24 -mt-44">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-4 grid-cols-1">
                            <div className="lg:pt-12 pt-6 w-full px-4 text-center">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-darkColor">
                                            <MdComputer />
                                        </div>
                                        <h6 className="text-xl font-semibold">Software Solutions</h6>
                                        <p className="mt-2 mb-4 text-blueGray-500">
                                            We provide custom software solutions tailored to meet your business needs, driving innovation and efficiency across your organization.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:pt-12 pt-6 w-full px-4 text-center">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-darkColor">
                                            <FaDatabase />
                                        </div>
                                        <h6 className="text-xl font-semibold">Big Data</h6>
                                        <p className="mt-2 mb-4 text-blueGray-500">
                                            Unlock the power of big data with our advanced analytics and processing solutions, transforming vast amounts of data into actionable insights.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:pt-12 pt-6 w-full px-4 text-center">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-darkColor">
                                            <AiOutlineAndroid />
                                        </div>
                                        <h6 className="text-xl font-semibold">AI Solutions</h6>
                                        <p className="mt-2 mb-4 text-blueGray-500">
                                            Enhance your operations with our cutting-edge AI solutions, delivering intelligent automation and predictive analytics to give your business a competitive edge
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:pt-12 pt-6 w-full px-4 text-center">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-darkColor">
                                            <CiCloud />
                                        </div>
                                        <h6 className="text-xl font-semibold">Cloud(Azure/AWS) Computing</h6>
                                        <p className="mt-2 mb-4 text-blueGray-500">
                                            Maximize growth and efficiency with our Azure and AWS cloud services, offering scalable and flexible IT solutions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

            {/* Projects */}
            <section className=" bg-darkColor overflow-x-hidden">
                <div className="py-10  sm:py-16 block lg:py-24 relative bg-opacity-50  z-40  " >
                    <div
                        className="relative mx-auto h-full px-4 pb-20 md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-[1443px] lg:px-8">
                        <div className="px-4 mx-auto max-w-[1443px] sm:px-6 lg:px-8 relative">
                            <div className="max-w-xl mx-auto text-center">
                                <div className="inline-flex px-4 py-1.5 mx-auto rounded-full  ">
                                    <p className="text-4xl font-semibold tracking-widest text-g uppercase text-white">Built Solutions</p>
                                </div>
                                <p className="mt-4 text-base leading-relaxed text-gray-600 text-white">Some of our Software Projects and Products</p>
                            </div>
                            <div className="grid grid-cols-1 gap-2 mt-12 sm:grid-cols-3 lg:mt-20   ">
                                <a href="#"
                                    className="transition-all shadow-xl duration-1000 bg-white hover:bg-darkColor  hover:shadow-xl m-2 p-4 relative z-40 group  ">
                                    <div
                                        className=" absolute  bg-darkColor top-0 left-0 w-24 h-1 z-30  transition-all duration-200   group-hover:bg-white group-hover:w-1/2  ">
                                    </div>
                                    <div className="py-2 px-9 relative  ">

                                        <img src={Payroll} alt='Payroll' />
                                        <h3 className="mt-8 text-lg font-semibold text-black group-hover:text-white ">Payroll Solution
                                        </h3>
                                        <p className="mt-4 text-base text-gray-600 group-hover:text-white  ">Contact Sales</p>
                                    </div>
                                </a>

                                <a href="#"
                                    className="transition-all duration-1000 shadow-xl bg-white hover:bg-darkColor  hover:shadow-xl m-2 p-4 relative z-40 group  ">
                                    <div
                                        className=" absolute  bg-darkColor top-0 left-0 w-24 h-1 z-30  transition-all duration-200   group-hover:bg-white group-hover:w-1/2  ">
                                    </div>
                                    <div className="py-2 px-9 relative">
                                        <img src={FgnTreasury} alt='FgnTreasury' />
                                        <h3 className="mt-8 text-lg font-semibold text-black group-hover:text-white ">FGN Treasure Books</h3>
                                        <p className="mt-4 text-base text-gray-600 group-hover:text-white  ">Contact Sales</p>
                                    </div>
                                </a>

                                <a href="#"
                                    className="transition-all  duration-1000 shadow-xl bg-white hover:bg-darkColor  hover:shadow-xl m-2 p-4 relative z-40 group  ">
                                    <div
                                        className=" absolute  bg-darkColor top-0 left-0 w-24 h-1 z-30  transition-all duration-200   group-hover:bg-white group-hover:w-1/2  ">
                                    </div>
                                    <div className="py-2 px-9 relative  ">
                                        <img src={FormExtrator} alt='FormExtration' />
                                        <h3 className="mt-8 text-lg font-semibold text-black group-hover:text-white ">Form Extrator</h3>
                                        <p className="mt-4 text-base text-gray-600 group-hover:text-white  ">Contact Sales</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sponsors */}
            <section className="bg-white">
                <Swipper />
            </section>
        </main>
    )
}
