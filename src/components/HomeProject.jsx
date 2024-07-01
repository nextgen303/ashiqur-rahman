import React from "react";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";


// Sample project data
const projects = [
  {
    id: 1,
    title: "Project One",
    image:
      "https://i.pinimg.com/564x/00/b9/3f/00b93fb5b2f01ee57012b26a3df04b3c.jpg",
    description: "This is a description for project one.",
    features: ["Feature 1", "Feature 2", "Feature 3"],
  },
  {
    id: 2,
    title: "Project Two",
    image:
      "https://i.pinimg.com/564x/1b/b3/02/1bb302a549e2b17feda3fc2f634920b5.jpg",
    description: "This is a description for project two.",
    features: ["Feature A", "Feature B", "Feature C"],
  },
];

const HomeProject = () => {
  return (
    <div className="pb-20 bg-[#F3F3F5]">
      <div className="max-w-screen-2xl px-20 max-sm:px-5 mx-auto">
        <div className="titles flex justify-between">
          <h1 className="text-[4vw] w-1/3">Recent Projects</h1>
          <p className="w-1/3 max-sm:w-full pt-36 pb-24">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
            laboriosam a numquam, magni ipsam repellendus laborum minima dei ab
            eius earum
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-24 max-sm:gap-1">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>


        <div className="text-center mt-8">
          <Link to="/project" className="text-blue-500 hover:underline">
            See All Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeProject;
