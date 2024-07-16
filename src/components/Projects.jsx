import { projectsData } from "../utils/data/projects-data";
import Marquee from "react-fast-marquee"
import ProjectCard from "./project-card";
import React from "react";
import Project from "./projects/single-project";
import { projectDetails } from "./projects/Details";

const Projects = () => {
    return (
      <div id='projects' className="relative z-50 my-12">
            <div className="flex justify-center -translate-y-[1px]">
                <div className="w-3/4"> 
                    <div className="h-[1px] bg-black w-full" />
                </div>
            </div>
            
            <div className="flex justify-center my-5 lg:py-8">
                <div className="flex  items-center">
                <span className="w-24 h-[2px] bg-green-400"></span>
                <span className="bg-green-400 w-fit text-white p-2 px-5 text-xl rounded-md">
                    Projects
                </span>
                <span className="w-24 h-[2px] bg-green-400"></span>
                </div>
            </div>

          {/* <div className="pt-24">
            <div className="grid grid-cols-2 gap-6">
              {projectsData.slice(0, 4).map((project, index) => (
                <div
                  id={`sticky-card-${index + 1}`}
                  key={index}
                  className="sticky-card w-full mx-auto max-w-2xl sticky"
                >
                  <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
                    <ProjectCard project={project} />
                  </div>
                </div>
              ))}
            </div>
          </div> */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 text-black">
            {React.Children.toArray(
              projectDetails.map(
                ({ title, image, description, techstack }) => (
                  <Project
                    title={title}
                    image={image}
                    description={description}
                    techstack={techstack}
                  />
                )
              )
            )}
          </div>
        
      </div>
    );
  };
  
  export default Projects;