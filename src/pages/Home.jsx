// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Footer from "../components/Footer";
import BlogSlider from "../components/BlogSlider";
import Marquee from "../components/Marquee"; // Adjust the import path as needed

// Sample recent projects data
const projects = [
  {
    id: 1,
    title: "Project One",
    image:
      "https://i.pinimg.com/564x/00/b9/3f/00b93fb5b2f01ee57012b26a3df04b3c.jpg",
    description: "This is a description for project one.",
  },
  {
    id: 2,
    title: "Project Two",
    image:
      "https://i.pinimg.com/564x/1b/b3/02/1bb302a549e2b17feda3fc2f634920b5.jpg",
    description: "This is a description for project two.",
  },
  // Add more projects as needed
];

// Sample blog data
const blogs = [
  {
    id: 1,
    title: "Blog Post One",
    image:
      "https://i.pinimg.com/564x/bd/53/66/bd5366fc6adf20de0c45778e7218110b.jpg",
    excerpt: "This is a description for blog post one.",
  },
  {
    id: 2,
    title: "Blog Post Two",
    image:
      "https://i.pinimg.com/564x/92/db/4f/92db4f1026f395298352e299ce823484.jpg",
    excerpt: "This is a description for blog post two.",
  },
  {
    id: 3,
    title: "Blog Post Three",
    image:
      "https://i.pinimg.com/564x/61/b1/bc/61b1bce711f227e7c3d5a34d663b8df5.jpg",
    excerpt: "This is a description for blog post three.",
  },
  // Add more blogs as needed
];

// Sample client logos
const clientLogos = [
  { src: "/path/to/logo1.png", alt: "Client 1" },
  { src: "/path/to/logo2.png", alt: "Client 2" },
  { src: "/path/to/logo3.png", alt: "Client 3" },
  // Add more logos as needed
];

const Home = () => {
  return (
    <div>
      <div className="flex flex-col min-h-screen max-w-screen-xl mx-auto">
        <div className="container mx-auto px-4 flex-grow">
          <div className="flex flex-col items-center text-center my-8">
            {/* <img
            src={profilePic}
            alt="Profile"
            className="w-32 h-32 rounded-full mb-4"
          /> */}
            <h1 className="text-4xl font-bold mb-2">Hello, I'm [Your Name]</h1>
            <p className="text-xl text-gray-600 mb-4">Frontend Web Developer</p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-2xl text-gray-700 hover:text-black" />
              </a>
              <a
                href="https://linkedin.com/in/your-username"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-2xl text-blue-700 hover:text-blue-900" />
              </a>
              <a
                href="https://twitter.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-2xl text-blue-500 hover:text-blue-700" />
              </a>
            </div>
          </div>

          <section className="my-8">
            <h2 className="text-3xl font-bold mb-4">Skills</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>HTML5, CSS3, JavaScript</li>
              <li>React.js, Next.js</li>
              <li>Tailwind CSS, Bootstrap</li>
              <li>Git, GitHub</li>
              <li>Responsive Design</li>
            </ul>
          </section>

          <section className="my-8">
            <h2 className="text-3xl font-bold mb-4">Recent Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="border rounded-lg overflow-hidden"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <Link
                      to={`/project/${project.id}`}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="my-8">
            <h2 className="text-3xl font-bold mb-4">Recent Blogs</h2>
            <BlogSlider blogs={blogs} />
          </section>

          <section className="my-8">
            <h2 className="text-3xl font-bold mb-4">My Clients</h2>
            <Marquee logos={clientLogos} />
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
