import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";
import imghero from "../svg/hero.jpg"
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
      opacity: 0,
      x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

function HeroSection() {
  return (
    <div className="relative flex flex-col items-center justify-between py-4 lg:py-12 bg-gradient-to-r from-blue-400 to-violet-500">
        <motion.div 
            variants={fadeIn('up', 0.5)}
            initial = 'hidden'
            whileInView={'show'}
            viewport={{once:false, amount: 0.7}}
            className="order-1 lg:order-1 relative">
            <img 
              src={imghero}
              alt="hero"
              className="w-60 h-60 rounded-full transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
            />
        </motion.div>
        <motion.div
            variants={fadeIn('up', 0.3)}
            initial = 'hidden'
            whileInView={'show'}
            viewport={{once:false, amount: 0.7}}
             className="order-2 lg:order-2 flex flex-col items-center justify-center p-2 pb-20 md:pb-10 lg:pt-10">
        
              
            <h1 className="text-xl text-center" >
              <span className="text-3xl font-bold"> - Tu Duc Manh - </span>
              <br />
              <TypeAnimation sequence={[
                'Software Developer',
                2000,
                '',
                2000
              ]} 
              speed={50}
              className="text-xl text-gray-200"
              repeat={Infinity}/>
            </h1>

            <div className="my-12 flex items-center gap-5">
              <a
                href="#"
                target='_blank'
                className="transition-all text-white hover:scale-125 duration-300"
              >
                <BsGithub size={30} />
              </a>
              <a
                href="#"
                target='_blank'
                className="transition-all text-white hover:scale-125 duration-300"
              >
                <BsLinkedin size={30} />
              </a>
              <a
                href="#"
                target='_blank'
                className="transition-all text-white hover:scale-125 duration-300"
              >
                <FaFacebook size={30} />
              </a>
              <a
                href="#"
                target='_blank'
                className="transition-all text-white hover:scale-125 duration-300"
              >
                <SiLeetcode size={30} />
              </a>
            </div>
            <div 
              variants={fadeIn('up', 0.5)}
              initial = 'hidden'
              whileInView={'show'}
              viewport={{once:false, amount: 0.7}}
              className="flex items-center gap-3"
            >
              <a className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-blue-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold" role="button" target="_blank" href="#"
              >
                <span>Get Resume</span>
                <MdDownload size={16} />
              </a>
            </div>
      </motion.div>
        
    </div>
  );
};

export default HeroSection;
