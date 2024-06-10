// src/pages/ProjectDetail.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

// Sample project data (same as above, or you can fetch from an API)
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

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <div className="container mx-auto px-4">Project not found</div>;
  }

  return (
    <div className="container mx-auto px-4">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center mb-4 text-blue-500 hover:text-blue-700"
      >
        <FaArrowLeft className="mr-2" /> Back
      </button>
      <h1 className="text-4xl font-bold my-8">{project.title}</h1>
      <img src={project.image} alt={project.title} className="w-full h-96 object-cover rounded-md mb-4" />
      <p className="text-gray-600 mb-4">{project.description}</p>
      <h3 className="text-2xl font-semibold mb-2">Features:</h3>
      <ul className="list-disc list-inside">
        {project.features.map((feature, index) => (
          <li key={index} className="text-gray-600">{feature}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectDetails;
