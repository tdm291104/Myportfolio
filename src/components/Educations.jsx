import React from "react";

function Educations(){
    return (
        <div id="education" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
            <div className="flex justify-center -translate-y-[1px]">
                <div className="w-3/4">
                <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
                </div>
            </div>
            
            <div className="flex justify-center my-5 lg:py-8">
                <div className="flex  items-center">
                <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
                    Educations
                </span>
                <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                </div>
            </div>
        </div>
    )
}

export default Educations