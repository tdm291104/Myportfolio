import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import imgSGroup from "../svg/SGroup.jpg"
import imgSVC from "../svg/SVC.png"
import { motion } from "framer-motion";
import { fadeIn } from "./HeroSection";

function Experience() {
    return (
        <div id="experience" className="relative z-50 my-12">
            <div className="flex justify-center -translate-y-[1px]">
                <div className="w-3/4"> 
                    <div className="h-[1px] bg-black w-full" />
                </div>
            </div>
            
            <div className="flex justify-center my-5 lg:py-8">
                <div className="flex  items-center">
                <span className="w-24 h-[2px] bg-green-400"></span>
                <span className="bg-green-400 w-fit text-white p-2 px-5 text-xl rounded-md">
                    Experience
                </span>
                <span className="w-24 h-[2px] bg-green-400"></span>
                </div>
            </div>

            <div className="flex flex-col justify-center px-20 relative">
                <div className="mx-20">
                    <div className="flex flex-col gap-6">
                        
                        <motion.div
                        variants={fadeIn('left', 0.1)}
                        initial = 'hidden'
                        whileInView={'show'}
                        viewport={{once:false, amount: 0.5}} 
                        className="flex justify-start">
                            <img className="w-10 h-10 mt-10 duration-500 hover:scale-[1.15] cursor-pointer" src={imgSGroup} alt="" />
                            <div className="h-full p-8 duration-500 hover:scale-[1.05] cursor-pointer">
                                <div>
                                    <div>
                                        <h1 className="text-2xl font-bold text-green-400">S-Group</h1>
                                        <p className="text-lg text-gray-400">Dec 2023 - Present</p>
                                    </div>
                                    <br />
                                    <div className="text-lg text-gray-700">
                                        <p className="font-medium">FullStack Developer</p>
                                        <p>Programming language: JavaScript</p>
                                        <p>Framework: ExpressJS, VueJS</p>
                                    </div>
                                </div>
                            </div>
                            
                        </motion.div>
                        
                        <motion.div
                        variants={fadeIn('right', 0.1)}
                        initial = 'hidden'
                        whileInView={'show'}
                        viewport={{once:false, amount: 0.5}}
                        className="flex justify-end">
                            <img className="w-20 h-20 mt-5 duration-500 hover:scale-[1.15] cursor-pointer" src={imgSVC} alt="" />
                            <div className="h-full p-8 duration-500 hover:scale-[1.05] cursor-pointer">
                                <div>
                                    <h1 className="text-2xl font-bold text-green-400">Savvycom Software</h1>
                                    <p className="text-lg text-gray-400">Jul 2024 - Present</p>
                                </div>
                                <br />
                                <div className="text-lg text-gray-700">
                                    <p className="font-medium">BackEnd Developer</p>
                                    <p>Programming language: JavaScript</p>
                                    <p>Framework: NestJS</p>
                                </div>
                            </div>
                        </motion.div>   
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Experience