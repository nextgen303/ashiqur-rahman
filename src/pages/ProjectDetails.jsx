// src/pages/ProjectDetails.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

import Magnetic from "../components/MagnetEffect";
import { FiGithub } from "react-icons/fi";
import { IoLogoYoutube } from "react-icons/io";
import { HiOutlineExternalLink } from "react-icons/hi";
import { RiYoutubeLine } from "react-icons/ri";

// Sample project data (add more as needed)
const projects = [
  {
    id: 1,
    title: "Digital Artworks",
    mainImage:
      "https://i.pinimg.com/564x/00/b9/3f/00b93fb5b2f01ee57012b26a3df04b3c.jpg",
    description: "This is a description for project one.",
    features: [
      "Smooth Scrolling",
      "Responsive Design",
      "Feature 3",
      "Smooth Scrolling",
      "Responsive Design",
      "Feature 3",
      "Smooth Scrolling",
      "Responsive Design",
      "Feature 3",
      "Smooth Scrolling",
    ],
    additionalImages: [
      "https://via.placeholder.com/800x400.png?text=Additional+Image+1",
      "https://via.placeholder.com/800x400.png?text=Additional+Image+2",
    ],
  },
  {
    id: 2,
    title: "DAFT PUNK",
    mainImage:
      "https://i.pinimg.com/564x/1b/b3/02/1bb302a549e2b17feda3fc2f634920b5.jpg",
    description: "This is a description for project two.",
    features: ["Feature A", "Feature B", "Feature C"],
    additionalImages: [
      "https://i.pinimg.com/564x/00/b9/3f/00b93fb5b2f01ee57012b26a3df04b3c.jpg",
      "https://i.pinimg.com/564x/00/b9/3f/00b93fb5b2f01ee57012b26a3df04b3c.jpg",
    ],
  },
  // Add more projects as needed
];

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="mx-auto text-[5vw] font-semibold flex flex-col  items-center justify-center h-screen">
        <h1>303!</h1>
        <h4>Project not found</h4>
      </div>
    );
  }

  return (
    <div className="bg-[#ffffff] z-50">
      <div className="max-w-screen-2xl mx-auto pt-2 px-20 max-md:px-3">
        <div className="bg-[#ffffff81] rounded-lg py-4">
          <div className="links flex items-center justify-between gap-5">
            <Magnetic>
              <button
                onClick={() => navigate(-1)}
                className=" w-8 h-8 bg-black/10 text-2xl flex items-center justify-center text-black p-[6px] rounded-full hover:bg-[#ff4800] hover:text-black duration-150"
              >
                <MdOutlineArrowBackIosNew />
              </button>
            </Magnetic>

            <div className="link flex items-center gap-6">
              <Magnetic>
                <a
                  className="text-2xl  hover:text-[#ff0000] duration-150"
                  href=""
                >
                  <RiYoutubeLine />
                </a>
              </Magnetic>

              <Magnetic>
                <a
                  className="text-xl  hover:text-[#ff0000] duration-150"
                  href=""
                >
                  <FiGithub />
                </a>
              </Magnetic>

              <Magnetic>
                <a
                  className="text-xl  hover:text-[#ff0000] duration-150"
                  href=""
                >
                  <HiOutlineExternalLink />
                </a>
              </Magnetic>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 mt-16">
            <img
              src={project.mainImage}
              alt={project.title}
              className="w-full h-96 object-cover rounded-md"
            />
            <div>
              <h1 className="text-[3vw] font-semibold line-clamp-1">
                {project.title}
              </h1>

              <p className="text-xl text-gray-700 mb-4">
                {project.description}
              </p>
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
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
    </div>
  );
};

export default ProjectDetails;
