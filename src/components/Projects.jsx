import { projectsData } from "../utils/data/projects-data";
import Marquee from "react-fast-marquee"
import ProjectCard from "./project-card";

const Projects = () => {
    return (
      <div id='projects' className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
        <div className="flex justify-center -translate-y-[1px]">
                <div className="w-3/4">
                <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
                </div>
            </div>
            
            <div className="flex justify-center my-5 lg:py-8">
                <div className="flex  items-center">
                <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
                    Projects
                </span>
                <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                </div>
            </div>

          <div className="pt-24">
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
          </div>
        
      </div>
    );
  };
  
  export default Projects;