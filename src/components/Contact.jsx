import React from "react";
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaStackOverflow } from 'react-icons/fa';
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import ContactForm from './contact-form';

function Contact(){
    return(
        <div id="contact" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
            <div className="flex justify-center -translate-y-[1px]">
                <div className="w-3/4">
                <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
                </div>
            </div>
            
            <div className="flex justify-center my-5 lg:py-8">
                <div className="flex  items-center">
                    <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                    <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
                        Contact me
                    </span>
                    <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                <ContactForm />
                <div className="lg:w-3/4 ">
                    <div className="flex flex-col gap-5 lg:gap-9">
                        <p className="text-sm md:text-xl flex items-center gap-3">
                            <MdAlternateEmail
                                className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                                size={36}
                            />
                            <span>tu.manh291104@gmail.com</span>
                        </p>
                        <p className="text-sm md:text-xl flex items-center gap-3">
                            <IoMdCall
                                className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                                size={36}
                            />
                            <span>
                                0325831401
                            </span>
                        </p>
                        <p className="text-sm md:text-xl flex items-center gap-3">
                            <CiLocationOn
                                className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                                size={36}
                            />
                            <span>
                                Liên Chiểu - Đà Nẵng - Việt Nam
                            </span>
                        </p>
                    </div>
                    <div className="mt-8 lg:mt-16 flex items-center gap-5 lg:gap-10">
                        <a target="_blank" href="">
                            <IoLogoGithub
                                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                                size={48}
                            />
                        </a>
                        <a target="_blank" href="">
                            <BiLogoLinkedin
                                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                                size={48}
                            />
                        </a>
                        <a target="_blank" href="">
                            <FaStackOverflow
                                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                                size={48}
                            />
                        </a>
                        <a target="_blank" href="">
                            <FaFacebook
                                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                                size={48}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact