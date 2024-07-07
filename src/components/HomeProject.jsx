import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { projects } from "../pages/Project";
import ProjectCard from "../components/ProjectCard";

const HomeProject = () => {
  const featuredProjects = projects.slice(0, 4);

  return (
    <div className="pb-44 max-md:pb-12 bg-[#F3F3F5]">
      <div className="max-w-screen-2xl px-20 max-sm:px-5 mx-auto">
        <div className="titles flex items-start justify-between max-md:flex-col pb-10">
          <h1 className="text-[40px] font-medium">Selected works</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 gap-y-16">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="btn bg-black w-[200px] rounded-full py-2 mx-auto text-white mt-20">
          <a
            href="/project"
            className="w-full h-full text-[17px] flex items-center justify-center gap-2"
          >
            See All Projects
            <span className="text-2xl">
              
              <IoIosArrowRoundForward />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeProject;
