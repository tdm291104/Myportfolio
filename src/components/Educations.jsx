import React from "react";
import imgIT_DUT from "../svg/IT_DUT.jpg"
import imgDUT from "../svg/DUT.jpg"
import { motion } from "framer-motion";
import { fadeIn } from "./HeroSection";

function Educations(){
    return (
        <div id="education" className="relative z-50 my-12">
            <div className="flex justify-center -translate-y-[1px]">
                <div className="w-3/4"> 
                <div className="h-[1px] bg-black w-full" />
                </div>
            </div>
            
            <div className="flex justify-center my-5 lg:py-8">
                <div className="flex  items-center">
                <span className="w-24 h-[2px] bg-green-400"></span>
                <span className="bg-green-400 w-fit text-white p-2 px-5 text-xl rounded-md">
                    Educations
                </span>
                <span className="w-24 h-[2px] bg-green-400"></span>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="py-8 px-20  max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                        <div className="flex justify-center items-start">
                            <motion.div 
                            variants={fadeIn('down', 0.1)}
                            initial = 'hidden'
                            whileInView={'show'}
                            viewport={{once:false, amount: 0.5}}
                            className="w-40 flex justify-center m-5 hover:scale-[1.05] duration-500">
                                <img src={imgIT_DUT} alt="" />
                            </motion.div>
                            <motion.div 
                            variants={fadeIn('up', 0.1)}
                            initial = 'hidden'
                            whileInView={'show'}
                            viewport={{once:false, amount: 0.5}}
                            className="w-40 flex justify-center m-5 hover:scale-[1.05] duration-500">
                                <img src={imgDUT} alt="" />
                            </motion.div>
                        </div>

                        <div className="flex flex-col gap-6">
                            <div className="h-full w-auto rounded-lg border border-[#1f223c] p-8 duration-500 hover:scale-[1.05] cursor-pointer">
                                <div>
                                    <h1 className="text-2xl font-bold text-green-400">Da Nang University of Science and Technology</h1>
                                    <p className="text-lg text-gray-400">2022 - 2026</p>
                                </div>
                                <br />
                                <div>
                                    <p className="text-lg text-gray-700">Information technology (Japanese language)</p>
                                </div>
                            </div>   
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Educations