import React, { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import ThemeToggle from "./ThemeToggle"

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavClick = (href) => {
    setMenuOpen(false)
    const targetElement = document.querySelector(href)
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }
  return (
    <div className=" w-screen px-5 md:px-20 flex justify-center items-center h-[60px]  fixed z-50 backdrop-blur-sm">
      <div className="flex  items-center w-full">
        <p className="font-bold text-xl text-white flex-1">Abdulaziz Musa</p>
        <ul className="hidden md:flex justify-evenly gap-5 text-lg">
          <li
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500 outline-0 hover:cursor-pointer transition-colors duration-800 ease-in-out"
            onClick={() => handleNavClick("#home")}
          >
            Home
          </li>
          <li
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500 outline-0 hover:cursor-pointer transition-colors duration-800 ease-in-out"
            onClick={() => handleNavClick("#about")}
          >
            About
          </li>
          <li
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500 outline-0 hover:cursor-pointer transition-colors duration-800 ease-in-out"
            onClick={() => handleNavClick("#skills")}
          >
            Skills
          </li>
          <li
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500 outline-0 hover:cursor-pointer transition-colors duration-800 ease-in-out"
            onClick={() => handleNavClick("#projects")}
          >
            Projects
          </li>
          <li
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500 outline-0 hover:cursor-pointer mr-25 transition-colors duration-800 ease-in-out"
            onClick={() => handleNavClick("#contact")}
          >
            Contact
          </li>
        </ul>
        <ThemeToggle />

        <div className="relative">
          <button
            className="ml-5 flex flex-col md:hidden hover:cursor-pointer p-1 hover:shadow-sm hover:shadow-gray-200 rounded-full active:animate-ping"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? (
              <FaTimes className="text-gray-950 dark:text-gray-50 transition-colors duration-800 ease-in-out" />
            ) : (
              <FaBars className="text-gray-950 dark:text-gray-50 transition-colors duration-800 ease-in-out" />
            )}
          </button>
          {menuOpen && (
            <ul className="flex flex-col items-center justify-evenly text-md absolute right-12 top-8 overflow-hidden bg-white dark:bg-gray-900 border-0 rounded-2xl shadow-sm shadow-gray-400 transition-colors duration-800 ease-in-out">
              <li
                className="transition-colors duration-800 ease-in-out text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 h-10 px-10 py-4 flex items-center hover:cursor-pointer  w-full"
                onClick={() => handleNavClick("#home")}
              >
                Home
              </li>
              <li
                className="transition-colors duration-800 ease-in-out text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 h-10 px-10 py-4 flex items-center hover:cursor-pointer  w-full"
                onClick={() => handleNavClick("#about")}
              >
                About
              </li>
              <li
                className="transition-colors duration-800 ease-in-out text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 h-10 px-10 py-4 flex items-center hover:cursor-pointer  w-full"
                onClick={() => handleNavClick("#skills")}
              >
                Skills
              </li>
              <li
                className="transition-colors duration-800 ease-in-out text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 h-10 px-10 py-4 flex items-center hover:cursor-pointer  w-full"
                onClick={() => handleNavClick("#projects")}
              >
                Projects
              </li>
              <li
                className="transition-colors duration-800 ease-in-out text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 h-10 px-10 py-4 flex items-center hover:cursor-pointer  w-full"
                onClick={() => handleNavClick("#contact")}
              >
                Contact
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}
