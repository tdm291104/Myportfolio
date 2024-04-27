import React from "react";
import { TbMailForward } from "react-icons/tb";

function ContactForm(){
    return (
        <div className="">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            Contact with me
          </p>
          <div className="max-w-3xl text-white rounded-lg border border-[#464c6a] p-3 lg:p-5">
            <div className="mt-6 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-base">Your Name: </label>
                <input
                  className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
                  type="text"
                  maxLength="100"
                />
              </div>
    
              <div className="flex flex-col gap-2">
                <label className="text-base">Your Email: </label>
                <input
                  className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
                  type="email"
                  maxLength="100"
                />
              </div>
    
              <div className="flex flex-col gap-2">
                <label className="text-base">Your Message: </label>
                <textarea
                  className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
                  maxLength="500"
                  name="message"
                />
              </div>
              <div className="flex flex-col items-center gap-2">
                <button
                  className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-blue-500 to-violet-600 px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
                  role="button"
                >
                  <span>Send Message</span>
                  <TbMailForward className="mt-1" size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )
}

export default ContactForm