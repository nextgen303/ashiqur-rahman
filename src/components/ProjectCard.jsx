import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";

const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);

  return (
    <div ref={cardRef}>
      <div className="relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-min object-cover rounded-[24px] mb-4"
        />

        <div className="absolute flex items-start flex-wrap gap-2 gap-y-3 bottom-[1.4rem] left-5">
          {project.languages.map((language, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF] text-black px-5 py-1 rounded-full"
            >
              {language}
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between pt-3">
        <div>
          <h2 className="text-[22px] font-medium">{project.title}</h2>
          <p className="text-[18px] text-[#374151] font-light">
            {project.description}
          </p>
        </div>
        <div className="border border-[#030712] text-3xl text-gray-800 hover:bg-black hover:text-white transition-all duration-150 flex items-center px-4 rounded-full">
          <a href={`/project/${project.id}`}>
            <IoIosArrowRoundForward />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
