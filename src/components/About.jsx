import React from "react";
import ImgTDM from "../svg/TDM.jpg"

function About() {
    return (
        <div id="about" className="relative z-50">
            <div className="flex justify-center -translate-y-[1px]">
                <div className="w-3/4"> 
                <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
                </div>
            </div>
            
            <div className="flex justify-center my-5 lg:py-8">
                <div className="flex  items-center">
                <span className="w-24 h-[2px] bg-gradient-to-r from-blue-400 to-violet-500"></span>
                <span className="bg-gradient-to-r from-blue-500 to-violet-600 w-fit text-white p-2 px-5 text-xl rounded-md">
                    ABOUT ME
                </span>
                <span className="w-24 h-[2px] bg-gradient-to-r from-blue-400 to-violet-500"></span>
                </div>
            </div>
            <div className="flex lg:flex-row flex-col px-5">
                <div className="flex px-5">
                    <div className=" text-gray-600 text-lg flex flex-col min-w-80">
                        <p><span className="font-medium">Full Name: </span> Tu Duc Manh</p>
                        <p><span className="font-medium">Phone: </span> 0325831401</p>
                        <p><span className="font-medium">Email: </span> tu.manh291104@gmail.com</p>
                    </div>
                </div>
                <div className="px-5">
                    <p className="font-medium mb-5 text-gray-600 text-xl uppercase">
                        Hello There!
                    </p>
                    <p className="text-gray-500 text-sm lg:text-lg">
                    I'm Tu Duc Manh, a 19-year-old from Nghe An, Vietnam, currently residing in Da Nang. I'm a third-year student at Da Nang University of Science and Technology, majoring in Computer Science.
                    <br />
                    <br />
                    With a strong dedication to programming and technology, I am constantly honing my skills to create innovative solutions. Being part of the vibrant tech community in Da Nang, I thrive on challenges and am always eager to learn and contribute to the ever-evolving world of software development.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About