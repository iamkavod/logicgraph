import React from 'react'
import { MdSupervisorAccount } from "react-icons/md";
import { GiDeliveryDrone } from "react-icons/gi";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { RiPassPendingFill, RiCustomerService2Fill } from "react-icons/ri";
import { GrUserExpert } from "react-icons/gr";
import { Coding } from '../../../../Assets';

export default function Body() {
    return (
        <main>
            {/* About */}
            <div class="relative flex flex-col justify-center overflow-hidden bg-white py-8 sm:py-32">
                <div class="w-full items-center mx-auto max-w-[1443px]">
                    <div class="group grid w-full grid-cols-2">
                        <div className='flex justfy-center items-center'>
                            <div class="pr-12">
                                <p class="peer mb-6 text-black">
                                    LogicGraph is a growing digital powerhouse in Nigeria, delivering digital transformations products and services that have impacted lives across the nation.
                                </p>
                                <p class="mb-6 text-black">
                                    We build innovative software solutions that empower people and business across private sectors and the government.
                                </p>
                            </div>
                        </div>
                        <div class="pr-16 relative flex flex-col before:block before:absolute before:h-1/6 before:w-4 before:bg-darkColor before:bottom-0 before:right-0 before:rounded-lg  before:transition-all group-hover:before:bg-mainColor overflow-hidden">
                            <div class="absolute top-0 right-0 bg-darkColor w-4/6 px-12 py-14 flex flex-col justify-center rounded-xl group-hover:bg-sky-600 transition-all ">
                                <span class="block mb-10 font-bold text-white group-hover:text-white">14+ Years of Experience</span>
                                <h2 class="text-white font-bold text-3xl">
                                    Right Partner for Software Innovation
                                </h2>
                            </div>
                            <a class="font-bold text-sm flex mt-2 mb-8 items-center gap-2" href="">
                                <span>MORE ABOUT US</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                            </a>
                            <div class="rounded-xl overflow-hidden">
                                <img src={Coding} alt="" className='h-[400px]' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* What we offer */}
            <div class="px-3 md:lg:xl:px-40   border-t border-b py-20 bg-opacity-10" style={{ "background-image": "url('https://www.toptal.com/designers/subtlepatterns/uploads/dot-grid.png')" }}>
                <div class="flex flex-col gap-4 py-10">
                    <h1 className="text-black font-semibold text-xl text-center">
                        Why Choose Us
                    </h1>
                    <h1 className="text-black font-semibold text-5xl text-center">
                        We Provide Truly Prominent It Solutions
                    </h1>
                </div>
                <div class="grid grid-cols-1 md:lg:xl:grid-cols-3 group bg-white shadow-xl shadow-neutral-100 border ">


                    <div
                        class="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
                        <span class="p-5 rounded-full bg-darkColor text-white shadow-lg shadow-darkColor text-3xl">
                            <MdSupervisorAccount />
                        </span>
                        <p class="text-xl font-medium text-slate-700 mt-3">Excellence</p>
                        {/* <p class="mt-2 text-sm text-slate-500">Team BrainEdge education is a bunch of highly focused, energetic set of people.</p> */}
                    </div>

                    <div
                        class="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
                        <span class="p-5 rounded-full bg-darkColor text-white shadow-lg shadow-darkColor text-3xl">
                            <GiDeliveryDrone />
                        </span>
                        <p class="text-xl font-medium text-slate-700 mt-3">Agile Delivery</p>
                        {/* <p class="mt-2 text-sm text-slate-500">Know where you stand and what next to do to succeed .</p> */}
                    </div>

                    <div class="p-10 flex flex-col items-center text-center group   md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
                        <span class="p-5 rounded-full bg-darkColor text-white shadow-lg shadow-darkColor text-3xl">
                            <VscWorkspaceTrusted />
                        </span>
                        <p class="text-xl font-medium text-slate-700 mt-3">Trustworthiness</p>
                        {/* <p class="mt-2 text-sm text-slate-500">Professional Advice for higher education abroad and select the top institutions worldwide.</p> */}
                    </div>


                    <div class="p-10 flex flex-col items-center text-center group   md:lg:xl:border-r hover:bg-slate-50 cursor-pointer">
                        <span class="p-5 rounded-full bg-darkColor text-white shadow-lg shadow-darkColor text-3xl">
                            <RiPassPendingFill />
                        </span>
                        <p class="text-xl font-medium text-slate-700 mt-3">Cost Effectiveness</p>
                        {/* <p class="mt-2 text-sm text-slate-500">Yet another year ! Yet another jewel in our crown!</p> */}
                    </div>

                    <div class="p-10 flex flex-col items-center text-center group    md:lg:xl:border-r hover:bg-slate-50 cursor-pointer">
                        <span class="p-5 rounded-full bg-darkColor text-white shadow-lg shadow-darkColor text-3xl">
                            <GrUserExpert />
                        </span>
                        <p class="text-xl font-medium text-slate-700 mt-3">Experts</p>
                        {/* <p class="mt-2 text-sm text-slate-500">Get Topic-Wise Tests, Section- Wise and mock tests for your preparation.</p> */}
                    </div>

                    <div class="p-10 flex flex-col items-center text-center group     hover:bg-slate-50 cursor-pointer">
                        <span class="p-5 rounded-full bg-darkColor text-white shadow-lg shadow-darkColor text-3xl">
                            <RiCustomerService2Fill />
                        </span>
                        <p class="text-xl font-medium text-slate-700 mt-3">Good Customer Relationship</p>
                        {/* <p class="mt-2 text-sm text-slate-500">Visa process by helping you create the necessary documentation</p> */}
                    </div>
                </div>

                <div class="w-full   bg-darkColor shadow-xl shadow-indigo-200 py-10 px-20 flex justify-between items-center">
                    <p class=" text-white"> <span class="text-4xl font-medium">Still Confused ?</span> <br /> <span class="text-lg">Book For Free Career Consultation Today ! </span></p>
                    <button class="px-5 py-3  font-medium text-slate-700 shadow-xl  hover:bg-white duration-150  bg-white rounded-full">BOOK AN APPOINTMENT </button>
                </div>

            </div>
        </main>
    )
}
