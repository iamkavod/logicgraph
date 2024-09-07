import React from 'react'
import { SoftwareDev } from '../../../../Assets'

export default function Hero() {
    return (
        <main className="relative py-32 lg:py-80 bg-white">
            <div
                className="mx-auto lg:max-w-[1500px] w-full px-5 sm:px-10 md:px-12 lg:px-0 flex flex-col lg:flex-row gap-10 lg:gap-12 items-center justify-center">
                <div className="relative flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8 lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2">

                    <h1 className="text-3xl leading-tight sm:text-4xl md:text-5xl xl:text-6xl font-bold text-black">
                        Software Solutions , <span className="text-transparent bg-clip-text bg-gradient-to-br from-mainColorShade from-20% to-mainColorShade">Digital</span> Technology & Services
                    </h1>
                    <p className="mt-8 text-black">
                        Experience the power of LogicGraph's leading-edge AI technology to transform your business with tailored solutions that increase efficiency and profitability.
                    </p>
                    {/* <div className="mt-10  w-full flex max-w-md mx-auto lg:mx-0">
                        <div className="flex sm:flex-row flex-col gap-5 w-full">
                            <form action="#"
                                className="py-1 pl-6 w-full pr-1 flex gap-3 items-center text-gray-600 shadow-lg shadow-gray-200/20 border border-gray-200 bg-gray-100 rounded-full ease-linear focus-within:bg-white  focus-within:border-mainColor">
                                <span className="min-w-max pr-2 border-r border-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" fill="#464775" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z" />
                                    </svg>
                                </span>
                                <input type="email" name="" id="" placeholder="johndoe@gmail.com"
                                    className="w-full py-3 outline-none bg-transparent" />
                                <button className="flex text-white justify-center items-center w-max min-w-max sm:w-max px-6 h-12 rounded-full outline-none relative overflow-hidden border duration-300 ease-linear after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-[#464775] hover:after:opacity-100 hover:after:scale-[2.5] bg-darkColor border-transparent hover:border-[#464775]">
                                    <span className="hidden sm:flex relative z-[5]">
                                        Get Started
                                    </span>
                                    <span className="flex sm:hidden relative z-[5]">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                        </svg>
                                    </span>
                                </button>
                            </form>
                        </div>
                    </div> */}
                </div>
                <div className="flex flex-1 lg:w-1/2 lg:h-[500px] relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl">
                    <img src={SoftwareDev} alt="Hero image" width="2350" height="2359" className="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-none max-h-96" />
                </div>
            </div>
        </main>
    )
}
