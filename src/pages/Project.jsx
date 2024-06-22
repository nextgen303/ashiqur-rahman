// src/pages/Project.jsx
import React from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

// Sample project data
const projects = [
  {
    id: 1,
    title: 'Project One',
    image: 'https://i.pinimg.com/564x/00/b9/3f/00b93fb5b2f01ee57012b26a3df04b3c.jpg',
    description: 'This is a description for project one.',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
  },
  {
    id: 2,
    title: 'Project Two',
    image: 'https://i.pinimg.com/564x/1b/b3/02/1bb302a549e2b17feda3fc2f634920b5.jpg',
    description: 'This is a description for project two.',
    features: ['Feature A', 'Feature B', 'Feature C'],
  },
  {
    id: 3,
    title: 'Project Three',
    image: 'https://i.pinimg.com/564x/1b/b3/02/1bb302a549e2b17feda3fc2f634920b5.jpg',
    description: 'This is a description for project three.',
    features: ['Feature X', 'Feature Y', 'Feature Z'],
  },
];

const Project = () => {
  return (
    <div className="bg-white mb-[350px] px-0 pb-20 pt-10">
      <div className="max-w-screen-2xl px-20 max-xl:px-10 max-sm:px-3 mx-auto">
        <h1 className="text-4xl font-bold text-center my-8">Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <ul className="list-disc list-inside text-gray-600 mb-4">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <Link
                  to={`/project/${project.id}`}
                  className="inline-block text-blue-500 hover:underline"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Project;
