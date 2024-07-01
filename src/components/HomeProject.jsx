import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../pages/Project"; // Adjust the path as necessary
import ProjectCard from "../components/ProjectCard";

const HomeProject = () => {
  const featuredProjects = projects.slice(0, 2);

  return (
    <div className="pb-20 bg-[#F3F3F5]">
      <div className="max-w-screen-2xl px-20 max-sm:px-5 mx-auto">
        <div className="titles flex items-end justify-between max-md:flex-col pb-20">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              Featured Projects
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-md pt-5">
              Explore some of our latest projects showcasing innovative
              solutions and creativity.
            </p>
          </div>

          <div className="allprojectbutton mt-4 md:mt-0">
            <a
              href="/project"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black ocus:outline-none focus:ring-2  focus:ring-offset-2"
            >
              See All Projects
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-24 max-sm:gap-1">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeProject;
