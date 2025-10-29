import React from "react"

export default function About() {
  return (
    <div
      className="flex flex-col items-center justify-center py-15 w-screen dark:bg-gray-900 dark:text-white transition-colors duration-500"
      id="about"
    >
      <div className="w-[50%] flex justify-center mb-10">
        <p className="text-gray-900 dark:text-gray-100 font-bold text-4xl">
          About Me
        </p>
      </div>
      <div className="w-[80%] lg:w-[50%]">
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-7 leading-relaxed text-justify">
          I'm a passionate Full-Stack Developer and Software Engineer with
          expertise in the MERN stack (MongoDB, Express.js, React, Node.js) and
          mobile app development using React Native. My journey in software
          development began with a curiosity for how digital solutions can solve
          real-world problems.
        </p>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-7 text-justify">
          I specialize in creating scalable web applications and cross-platform
          mobile apps that deliver exceptional user experiences. With a strong
          foundation in both frontend and backend technologies, I enjoy the
          entire development process from conceptualization to deployment.
        </p>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-7 text-justify">
          When I'm not coding, I'm continuously learning about new technologies,
          contributing to open-source projects, and exploring innovative ways to
          improve my craft. I'm always excited to take on new challenges and
          collaborate on meaningful projects.
        </p>
      </div>
    </div>
  )
}
