// src/pages/Work.jsx
import React from 'react';
import ProjectCard from '../components/ProjectCard';

// Sample project data
const projects = [
  {
    id: 1,
    title: 'Project One',
    image: '/path/to/image1.jpg',
    description: 'This is a description for project one.',
    features: ['Feature 1', 'Feature 2', 'Feature 3']
  },
  {
    id: 2,
    title: 'Project Two',
    image: '/path/to/image2.jpg',
    description: 'This is a description for project two.',
    features: ['Feature A', 'Feature B', 'Feature C']
  }
  // Add more projects as needed
];

const Project = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center my-8">Work</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Project;
