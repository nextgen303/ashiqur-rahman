// src/pages/Work.jsx
import React from "react";
import ProjectCard from "../components/ProjectCard";
import Layout from "../components/Layout";

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
  ,
  {
    id: 3,
    title: "Project Three",
    image:
      "https://i.pinimg.com/564x/1b/b3/02/1bb302a549e2b17feda3fc2f634920b5.jpg",
    description: "This is a description for project two.",
    features: ["Feature A", "Feature B", "Feature C"],
  },
];

const Project = () => {
  return (
    <div className="container mx-auto max-w-screen-2xl px-20 bg-[#eaeaea]">
      <h1 className="text-4xl font-bold text-center my-8">Work</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <Layout />
    </div>
  );
};

export default Project;
