import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import Magnetic from "../components/MagnetEffect";
import { FiGithub } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";
import { HiOutlineHome } from "react-icons/hi2";

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
  {
    id: 3,
    title: "Photography Portfolio",
    mainImage:
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
    mainImage:
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
    mainImage:
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
    mainImage:
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
    mainImage:
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
    mainImage:
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
    mainImage:
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
    mainImage:
      "https://i.pinimg.com/564x/1f/b7/6a/1fb76acaaad78825b2213c8870e005f9.jpg",
    description: "Showcase your work and projects.",
    features: ["Project Gallery", "Contact Form", "Responsive Design"],
    additionalImages: [
      "https://via.placeholder.com/800x400.png?text=Portfolio+Website+Image+1",
      "https://via.placeholder.com/800x400.png?text=Portfolio+Website+Image+2",
    ],
  },
];
const shuffleArray = (array) => {
  let shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [relatedProjects, setRelatedProjects] = useState([]);

  const project = projects.find((p) => p.id === parseInt(id));

  useEffect(() => {
    if (project) {
      const shuffledProjects = shuffleArray(projects.filter((p) => p.id !== project.id));
      setRelatedProjects(shuffledProjects.slice(0, 3));
    }
  }, [id]);

  if (!project) {
    return (
      <div className="mx-auto text-[5vw] font-semibold flex flex-col items-center justify-center h-screen">
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
            <div className="flex items-center gap-3">
              <Magnetic>
                <button
                  onClick={() => navigate(-1)}
                  className="w-8 h-8 bg-black/10 text-2xl flex items-center justify-center text-black p-[6px] rounded-full hover:bg-[#9DA0A3] hover:text-black duration-150"
                >
                  <MdOutlineArrowBackIosNew />
                </button>
              </Magnetic>
              <Magnetic>
                <a
                  className="text-xl flex items-center gap-1 bg-black/10 text-black px-5 py-1 rounded-full hover:bg-[#9DA0A3] duration-150"
                  href="/"
                >
                  <HiOutlineHome /> <span className="text-[16px]">Home</span>
                </a>
              </Magnetic>
            </div>
            <div className="link flex items-center gap-8">
              <Magnetic>
                <a className="text-2xl hover:text-[#9DA0A3] duration-150" href="">
                  <FiGithub />
                </a>
              </Magnetic>
              <Magnetic>
                <a className="text-2xl hover:text-[#9DA0A3] duration-150" href="">
                  <HiOutlineExternalLink />
                </a>
              </Magnetic>
            </div>
          </div>

          <h1 className="text-8xl font-extrabold max-sm:text-4xl max-sm:mb-3 text-center pt-12">
            {project.title}
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 mt-24">
            <img
              src={project.mainImage}
              alt={project.title}
              className="w-full h-96 max-sm:h-full object-cover rounded-md"
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
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.additionalImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Additional ${index + 1}`}
                  className="w-full h-64 max-sm:h-full object-cover rounded-md"
                />
              ))}
            </div>
          </div>

          <div className="mb-8 mt-32">
            <h3 className="text-6xl font-semibold mb-12">Related Projects:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedProjects.map((relatedProject) => (
                <div
                  key={relatedProject.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={relatedProject.mainImage}
                    alt={relatedProject.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h2 className="text-xl font-semibold mb-2">
                      {relatedProject.title}
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {relatedProject.description}
                    </p>
                    <ul className="list-disc list-inside text-gray-600 mb-4">
                      {relatedProject.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>

                    <a
                      href={`/project/${relatedProject.id}`}
                      className="inline-block text-blue-500 hover:underline"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;