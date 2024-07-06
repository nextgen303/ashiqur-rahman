import React, { useRef } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);

  return (
    <div ref={cardRef} className="group h-min p-3 rounded-lg">
    <div className="relative">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-min object-cover rounded-[24px] mb-4"
      />
  
      <div className="absolute bottom-0 left-0 right-0 px-5 py-3 bg-gradient-to-b from-transparent to-[#00000042] overflow-hidden rounded-[18px]">
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
  
    <div className="flex items-center justify-between pt-3">
      <div>
        <h2 className="text-[22px] font-medium">{project.title}</h2>
        <p className="text-[18px] text-[#374151] font-light">
          {project.description}
        </p>
      </div>
      <div className="border border-[#030712] text-3xl text-gray-800 group-hover:bg-black group-hover:text-white transition-all duration-150 flex items-center px-4 rounded-full">
        <a href={`/project/${project.id}`}>
          <IoIosArrowRoundForward />
        </a>
      </div>
    </div>
  </div>
  
  
  );
};

export default ProjectCard;
