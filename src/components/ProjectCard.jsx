import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);
  const titleRef = useRef(null);
  const titleTextRef = useRef(null);

  useEffect(() => {
    gsap.set(titleRef.current, { opacity: 0 });
  }, []);

  const handleMouseEnter = () => {
    // Hide all other titles
    gsap.to(".project-title", {
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
    });

    // Hacker-style text reveal
    const text = titleTextRef.current.textContent;
    titleTextRef.current.textContent = ""; // Clear text

    gsap.to(titleRef.current, { opacity: 1, duration: 0.3, ease: "power2.out" });

    let revealChars = "";
    const chars = text.split("");

    chars.forEach((char, i) => {
      setTimeout(() => {
        revealChars += char;
        titleTextRef.current.textContent = revealChars;
      }, i * 50); // Adjust the typing speed here
    });
  };

  const handleMouseLeave = () => {
    gsap.to(titleRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
    });
  };

  return (
    <div
      ref={cardRef}
      className="relative border rounded-lg shadow-lg overflow-hidden transition-shadow p-2 mb-24"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-min object-cover rounded-md mb-4"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h2
          ref={titleRef}
          className="project-title text-6xl font-bold text-[#88FE02] opacity-0 transition-opacity"
        >
          <span ref={titleTextRef}>{project.title}</span>
        </h2>
      </div>
      <div className="relative p-4">
        <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <Link
          to={`/project/${project.id}`}
          className="text-blue-500 hover:underline"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
