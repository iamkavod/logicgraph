import React from 'react'
import { FaPhoneSquareAlt, FaAddressBook, FaPhone } from "react-icons/fa";
import { MdContacts, MdDriveFileRenameOutline, MdOutlineAlternateEmail, MdOutlineTopic } from "react-icons/md";

export default function Body() {
    return (
        <main>
            <section class="h-screen flex">
                <div class="hidden lg:flex w-full lg:w-1/2 login_img_section justify-around items-center">
                    <div
                        class="bg-black opacity-20 inset-0 z-0"
                    >
                    </div>
                    <div class="w-full mx-auto px-20 flex-col items-center space-y-6 text-white">
                        {/* Phone */}
                        <div className='flex items-center gap-5'>
                            <div className='text-5xl'>
                                <FaPhoneSquareAlt />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <p>Phone Number</p>
                                <a href='+234-805-531-6857' className='font-bold'>+(234)805-531-6857</a>
                            </div>
                        </div>

                        {/* Address */}
                        <div className='flex items-center gap-5'>
                            <div className='text-5xl'>
                                <FaAddressBook />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <p>Address</p>
                                <a href='https://maps.app.goo.gl/ciYuSzXN9MBetDtb7'>The Waterside, 5 Admiralty Road Off, Admiralty Way, Lekki Phase 1, Lagos, Nigeria</a>
                            </div>
                        </div>

                        {/* Contact */}
                        <div className='flex gap-5'>
                            <div className='text-5xl'>
                                <MdContacts />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <p>Contact Info</p>
                                <a href='mailto:contactus@logicgraph.io'>contactus@logicgraph.io</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex w-full lg:w-1/2 justify-center items-center bg-white space-y-8">
                    <div class="w-full px-8 md:px-32 lg:px-24">
                        <form class="bg-white rounded-md shadow-2xl p-10">
                            <h1 class="text-gray-800 font-bold text-2xl mb-1 py-10">Send Us A Message</h1>
                            <div class="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
                                <div className='text-xl text-gray-400'>
                                    <MdDriveFileRenameOutline />
                                </div>
                                <input id="name" class=" pl-2 w-full outline-none border-none" type="text" name="name" placeholder="Your Name" />
                            </div>
                            <div class="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
                                <div className='text-xl text-gray-400'>
                                    <MdOutlineAlternateEmail />
                                </div>
                                <input id="email" class=" pl-2 w-full outline-none border-none" type="email" name="email" placeholder="Email Address" />
                            </div>
                            <div class="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
                                <div className='text-lg text-gray-400'>
                                    <FaPhone />
                                </div>
                                <input id="phone" class=" pl-2 w-full outline-none border-none" type="phone" name="phone" placeholder="Phone Number" />
                            </div>
                            <div class="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl ">
                                <div className='text-xl text-gray-400'>
                                    <MdOutlineTopic />
                                </div>
                                <input class="pl-2 w-full outline-none border-none" type="text" name="subject" id="subject" placeholder="Subject" />

                            </div>
                            <div class="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl ">

                                <textarea class="pl-2 w-full outline-none border-none" type="text" name="Text" id="Text" placeholder="Enter Message" />

                            </div>
                            <button type="submit" class="block w-full bg-darkColor mt-5 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2">Send Message</button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Map */}
            <section className="relative h-[100vh] w-full lg:mt-20">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.568961358926!2d3.4695703!3d6.4493440999999985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf5906feb1da5%3A0x865cd308ad80ee19!2sRegus%20-%20Lagos%2C%20Lekki%20Admiralty!5e0!3m2!1sen!2suk!4v1696207079923!5m2!1sen!2suk"
                    width="600"
                    height="450"
                    className="absolute inset-0 w-full h-full"
                    style={{ border: "0" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Location Map"
                ></iframe>
            </section>
        </main>
    )
}
