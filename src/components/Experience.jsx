import React from "react";
import './Experience.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

function Experience() {
    return (
        <div id="experience" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
            <div className="flex justify-center -translate-y-[1px]">
                <div className="w-3/4">
                <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
                </div>
            </div>
            
            <div className="flex justify-center my-5 lg:py-8">
                <div className="flex  items-center">
                <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
                    Experience
                </span>
                <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                </div>
            </div>

            <ul id="timeline">
                <li className="text-right">
                    <div className="timeline-badge">
                        <FontAwesomeIcon icon={faBriefcase} />
                    </div>
                    <div className="timeline-panel flex justify-end">
                        <div className="text-gray-600">
                            <h3 className="text-xl font-medium">Official Member</h3>
                            <span className="company flex justify-end">
                                <img src="https://buituananh.tech/images/sgroup_logo.png" alt="" />
                                <span className="pl-3">SGroup - 10/2022 - Current</span>
                            </span>
                            <div className="timeline-body">
                                <p className="max-w-96">Technology: Javascript, ExpressJs, VueJs, NodeJs, TailwindCSS, MySQL</p>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="text-left">
                    <div className="timeline-badge">
                        <FontAwesomeIcon icon={faBriefcase} />
                    </div>
                    <div className="timeline-panel flex justify-end">
                        <div className="text-gray-600">
                            <h3 className="text-xl font-medium">Official Member</h3>
                            <span className="company flex justify-start">
                                <img src="https://buituananh.tech/images/sgroup_logo.png" alt="" />
                                <span className="pl-3">SGroup - 10/2022 - Current</span>
                            </span>
                            <div className="timeline-body">
                                <p className="max-w-96">Technology: Javascript, ExpressJs, VueJs, NodeJs, TailwindCSS, MySQL</p>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Experience