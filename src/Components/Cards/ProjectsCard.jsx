import React from "react"
import { FaArrowRight } from "react-icons/fa"

export default function ProjectsCard({ project }) {
  return (
    <div className="w-[80%] lg:w-sm mb-10 p-5 shadow-md hover:scale-105 duration-300 ease-in-out rounded-2xl bg-gray-50">
      <p className="font-bold text-xl mb-3">{project.title}</p>
      <p className="text-[#4b5563] mb-3">{project.description}</p>
      <div className="flex justify-evenly">
        <a
          href={project.githubLink}
          target="_blank"
          className="text-blue-500 flex items-center gap-2 hover:opacity-45"
        >
          <p>View on GitHub</p>
          <FaArrowRight />
        </a>
        {project.deployLink && (
          <a
            href={project.deployLink}
            target="_blank"
            className="text-blue-500 flex items-center gap-2 hover:opacity-45"
          >
            <p>View Demo</p>
            <FaArrowRight />
          </a>
        )}
      </div>
    </div>
  )
}
