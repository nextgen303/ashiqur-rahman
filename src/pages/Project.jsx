import React, { useRef, useEffect, useState } from "react";
import Footer from "../components/Footer";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";

export const projects = [
  {
    id: 1,
    title: "Digital Artworks",
    image:
      "https://i.pinimg.com/564x/41/90/ce/4190ce13e413346bbd2679264c6e2387.jpg",
    description: "Travel Agency Website Design",
    features: ["Smooth Scrolling", "Responsive Design", "Feature 3"],
    languages: ["HTML", "CSS", "JavaScript", "React"],
    additionalImages: [
      "https://via.placeholder.com/800x400.png?text=Additional+Image+1",
      "https://via.placeholder.com/800x400.png?text=Additional+Image+2",
    ],
  },
  {
    id: 2,
    title: "Daft Punk",
    image:
      "https://i.pinimg.com/564x/1b/b3/02/1bb302a549e2b17feda3fc2f634920b5.jpg",
    description: "Travel Agency Website Design",
    features: ["Feature A", "Feature B", "Feature C"],
    languages: ["HTML", "CSS", "JavaScript", "React"],
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
    languages: ["HTML", "CSS", "JavaScript"],
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
    languages: ["HTML", "CSS", "JavaScript", "React"],
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
    languages: ["HTML", "CSS", "JavaScript", "React"],
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
    languages: ["HTML", "CSS", "JavaScript", "React"],
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
    languages: ["HTML", "CSS", "JavaScript", "React"],
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
    languages: ["HTML", "CSS", "JavaScript", "React"],
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
    languages: ["HTML", "CSS", "JavaScript", "React"],
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
    languages: ["HTML", "CSS", "JavaScript", "React"],
  },
];

const Project = () => {
  const [inView, setInView] = useState({});
  const containerRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1, // Adjust the threshold as needed
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInView((prev) => ({
            ...prev,
            [entry.target.dataset.index]: true,
          }));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    containerRef.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      containerRef.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="bg-[#F3F3F5] text-black mb-[350px] px-0 pb-20 pt-10 -mt-8 rounded-bl-3xl rounded-br-3xl">
      <div className="max-w-screen-2xl px-20 max-sm:px-3 mx-auto">
        <div>
          <h1 className="text-[100px] leading-[105px] font-bold my-8 pt-28 pb-12 max-lg:text-center max-lg:pt-5 max-lg:text-[74px] max-lg:leading-[84px] max-md:!text-[44px] max-md:!leading-[54px] max-md:pt-0">
            Explore our <br /> Latest Projects
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 gap-y-24 max-sm:gap-y-12">
          {projects.map((project, index) => (
              <motion.div
              key={project.id}
              className=" text-black rounded-lg p-6 max-md:p-0"
              initial={{ opacity: 0, y: 50 }}
              animate={inView[index] ? { opacity: 1, y: 0.6 } : {}}
              transition={{ duration: 1, delay: index * 0.1 }}
              data-index={index}
              ref={(el) => (containerRef.current[index] = el)}
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-min object-cover rounded-[24px] mb-4 duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 px-5 py-3 max-sm:bg-none bg-gradient-to-b from-transparent to-[#00000042] overflow-hidden rounded-[18px]">
                  <div className="flex items-start flex-wrap gap-2 gap-y-3 max-sm:hidden">
                    {project.languages.map((language, index) => (
                      <div
                        key={index}
                        className="bg-[#ffffff] backdrop-filter backdrop-blur-[30px] text-black px-5 py-1 rounded-full text-[16px] max-sm:text-[15px]"
                      >
                        {language}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between pt-3 max-md:pt-0">
                <div>
                  <h2 className="text-[22px] max-sm:text-[18px] font-medium">
                    {project.title}
                  </h2>
                  <p className="text-[18px] max-sm:text-[15px] text-[#374151] font-light">
                    {project.description}
                  </p>
                </div>
                <div className="border border-[#030712] text-3xl text-gray-800 hover:bg-black hover:text-white transition-all duration-150 flex items-center px-4 rounded-full">
                  <a href={`/project/${project.id}`}>
                    <IoIosArrowRoundForward />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Project;