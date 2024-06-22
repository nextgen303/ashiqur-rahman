// src/pages/ProjectDetails.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import Magnetic from "../components/MagnetEffect";

// Sample project data (add more as needed)
const projects = [
  {
    id: 1,
    title: "Digital Artworks",
    mainImage:
      "https://i.pinimg.com/564x/00/b9/3f/00b93fb5b2f01ee57012b26a3df04b3c.jpg",
    description: "This is a description for project one.",
    features: ["Smooth Scrolling", "Responsive Design", "Feature 3"],
    additionalImages: [
      "https://via.placeholder.com/800x400.png?text=Additional+Image+1",
      "https://via.placeholder.com/800x400.png?text=Additional+Image+2",
    ],
  },
  {
    id: 2,
    title: "Project Two",
    mainImage:
      "https://i.pinimg.com/564x/1b/b3/02/1bb302a549e2b17feda3fc2f634920b5.jpg",
    description: "This is a description for project two.",
    features: ["Feature A", "Feature B", "Feature C"],
    additionalImages: [
      "https://via.placeholder.com/800x400.png?text=Additional+Image+1",
      "https://via.placeholder.com/800x400.png?text=Additional+Image+2",
    ],
  },
  // Add more projects as needed
];

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <div className="mx-auto px-4">Project not found</div>;
  }

  return (
    <div className="bg-[#ffffff]">
      <div className="max-w-screen-2xl mx-auto py-12 px-20 max-md:px-3">
        <Magnetic>
          <button
            onClick={() => navigate(-1)}
            className=" flex items-center justify-center text-black hover:bg-orange-700 hover:text-black duration-150"
          >
            <FaArrowLeft />
          </button>
        </Magnetic>
        <h1 className="text-[7vw] font-bold mb-20 text-center">
          {project.title}
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <img
            src={project.mainImage}
            alt={project.title}
            className="w-full h-96 object-cover rounded-md"
          />
          <div>
            <p className="text-xl text-gray-700 mb-4">{project.description}</p>
            <h3 className="text-2xl font-semibold mb-2">Features:</h3>
            <ul className="list-disc list-inside text-lg text-gray-600 mb-4">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Additional Images:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.additionalImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Additional ${index + 1}`}
                className="w-full h-64 object-cover rounded-md"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
