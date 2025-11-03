import React from "react"
import ProjectsCard from "./Cards/ProjectsCard"

const projects = [
  {
    title: "Complaint Management System",
    description:
      "A system for managing and tracking complaints with admin and user roles.",
    githubLink: "https://github.com/Abdulaziz1268/CMS",
    deployLink: "https://commansys.netlify.app/",
  },
  {
    title: "CMS Mobile",
    description: "A mobile app for complaint management system",
    githubLink: "https://github.com/Abdulaziz1268/CMS-Mobile",
  },
  {
    title: "Tender Management System",
    description:
      "Platform for managing tender processes from submission to evaluation.",
    githubLink: "https://github.com/Abdulaziz1268/TMS",
  },
  {
    title: "Doctor Appointment System",
    description:
      "Mobile application for scheduling and managing doctor appointments.",
    githubLink: "https://github.com/Abdulaziz1268/SDAS-Mobile",
  },
  {
    title: "Task Trail",
    description: "Productivity app for tracking tasks and managing workflows.",
    githubLink: "https://github.com/Abdulaziz1268/TaskTrail",
  },
  {
    title: "Collabspace Client",
    description: "Frontend for a collaborative workspace application.",
    githubLink: "https://github.com/Abdulaziz1268/Collabspace-client",
  },
  {
    title: "Collabspace Backend",
    description: "Backend API and server for the Collabspace application.",
    githubLink: "https://github.com/Abdulaziz1268/Collabspace-backend",
  },
]

export default function Projects() {
  return (
    <div
      className="dark:bg-gray-900 flex flex-col items-center justify-center py-15 w-screen transition-colors duration-800 ease-in-out"
      id="projects"
    >
      <div className="w-[50%] flex justify-center mb-10">
        <p className="text-gray-900 dark:text-gray-100 font-bold text-4xl transition-colors duration-800 ease-in-out">
          Projects
        </p>
      </div>
      <div className="flex flex-wrap gap-6 justify-evenly">
        {projects.map((project, index) => (
          <ProjectsCard project={project} key={index} />
        ))}
      </div>
    </div>
  )
}
