// src/components/ProjectCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <div className="border rounded-lg p-4 m-4 shadow-lg hover:shadow-xl transition-shadow">
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-md mb-4" />
      <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <Link to={`/project/${project.id}`} className="text-blue-500 hover:underline">
        View Details
      </Link>
    </div>
  );
};

export default ProjectCard;
