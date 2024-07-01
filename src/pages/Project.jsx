import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

// Sample project data
const projects = [
  {
    id: 1,
    title: "Digital Artworks",
    image:
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
    title: "DAFT PUNK",
    image:
      "https://i.pinimg.com/564x/1b/b3/02/1bb302a549e2b17feda3fc2f634920b5.jpg",
    description: "This is a description for project two.",
    features: ["Feature A", "Feature B", "Feature C"],
    additionalImages: [
      "https://i.pinimg.com/564x/00/b9/3f/00b93fb5b2f01ee57012b26a3df04b3c.jpg",
      "https://i.pinimg.com/564x/00/b9/3f/00b93fb5b2f01ee57012b26a3df04b3c.jpg",
    ],
  },
  {
    id: 3,
    title: "Photography Portfolio",
    image:
      "https://i.pinimg.com/564x/ab/e0/09/abe009738d10bcd7744a95d69edff371.jpg",
    description: "Showcase of professional photography works.",
    features: [
      "High-Resolution Images",
      "Lightbox Gallery",
      "Responsive Design",
    ],
    additionalImages: [
      "https://www.pinterest.com/pin/611293349436994680/",
      "https://i.pinimg.com/564x/c9/3d/94/c93d942bf07607f4a17c527c37f56a2c.jpg",
    ],
  },
  {
    id: 4,
    title: "E-Commerce Website",
    image:
      "https://i.pinimg.com/564x/53/af/af/53afafef93c5b3107095e71d96b4a7e0.jpg",
    description: "An online store with a wide range of products.",
    features: [
      "Shopping Cart",
      "Product Reviews",
      "Payment Gateway Integration",
    ],
    additionalImages: [
      "https://i.pinimg.com/564x/62/be/b9/62beb9113e270992cf47950bd9466999.jpg",
      "https://i.pinimg.com/564x/94/f4/bb/94f4bb6465db6a07008fe3bd094eda0e.jpg",
    ],
  },
  {
    id: 5,
    title: "Travel Blog",
    image:
      "https://i.pinimg.com/564x/88/f2/90/88f2903e1efb197b37c9018a5fbd86f8.jpg",
    description: "A blog sharing travel experiences and guides.",
    features: ["Blog Posts", "Comment Section", "Responsive Design"],
    additionalImages: [
      "https://i.pinimg.com/564x/88/f2/90/88f2903e1efb197b37c9018a5fbd86f8.jpg",
      "https://i.pinimg.com/564x/88/f2/90/88f2903e1efb197b37c9018a5fbd86f8.jpg",
    ],
  },
  {
    id: 6,
    title: "Fitness Tracker",
    image:
      "https://i.pinimg.com/564x/8b/6c/fb/8b6cfbabca639d0fc796338b1478192c.jpg",
    description: "Track your workouts and progress over time.",
    features: ["Workout Logging", "Progress Charts", "Responsive Design"],
    additionalImages: [
      "https://via.placeholder.com/800x400.png?text=Fitness+Tracker+Image+1",
      "https://via.placeholder.com/800x400.png?text=Fitness+Tracker+Image+2",
    ],
  },
  {
    id: 7,
    title: "Recipe App",
    image:
      "https://i.pinimg.com/564x/e8/c7/84/e8c784c90080f4edcb7c208f9024f16f.jpg",
    description: "Find and share recipes.",
    features: ["Recipe Search", "User Ratings", "Responsive Design"],
    additionalImages: [
      "https://i.pinimg.com/564x/de/3d/99/de3d995082e64a567199371722138c70.jpg",
      "https://i.pinimg.com/564x/88/93/dc/8893dcb3459e0ec1054c687f808e7524.jpg",
    ],
  },
  {
    id: 8,
    title: "News Portal",
    image:
      "https://i.pinimg.com/564x/24/4d/26/244d2670f0eedff8893a0f0e48d42c9f.jpg",
    description: "Latest news from around the world.",
    features: ["News Articles", "Categories", "Responsive Design"],
    additionalImages: [
      "https://via.placeholder.com/800x400.png?text=News+Portal+Image+1",
      "https://via.placeholder.com/800x400.png?text=News+Portal+Image+2",
    ],
  },
  {
    id: 9,
    title: "Weather App",
    image:
      "https://i.pinimg.com/564x/2f/a7/e4/2fa7e4ebbb3ff81b227df0dc2c010f8e.jpg",
    description: "Get current weather information.",
    features: ["Current Weather", "Forecasts", "Responsive Design"],
    additionalImages: [
      "https://via.placeholder.com/800x400.png?text=Weather+App+Image+1",
      "https://via.placeholder.com/800x400.png?text=Weather+App+Image+2",
    ],
  },
  {
    id: 10,
    title: "Portfolio Website",
    image:
      "https://i.pinimg.com/564x/1f/b7/6a/1fb76acaaad78825b2213c8870e005f9.jpg",
    description: "Showcase your work and projects.",
    features: ["Project Gallery", "Contact Form", "Responsive Design"],
    additionalImages: [
      "https://via.placeholder.com/800x400.png?text=Portfolio+Website+Image+1",
      "https://via.placeholder.com/800x400.png?text=Portfolio+Website+Image+2",
    ],
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
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
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
