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
    <div className=" w-screen px-5 md:px-20 flex justify-center items-center h-[60px] bg-white/90 fixed z-50">
      <div className="flex  items-center w-full">
        <p className="font-bold text-xl text-blue-500 flex-1">Abdulaziz Musa</p>
        <ul className="hidden md:flex justify-evenly gap-5 text-lg">
          <li
            className="text-gray-700 hover:text-blue-500 outline-0 hover:cursor-pointer"
            onClick={() => handleNavClick("#home")}
          >
            Home
          </li>
          <li
            className="text-gray-700 hover:text-blue-500 outline-0 hover:cursor-pointer"
            onClick={() => handleNavClick("#about")}
          >
            About
          </li>
          <li
            className="text-gray-700 hover:text-blue-500 outline-0 hover:cursor-pointer"
            onClick={() => handleNavClick("#skills")}
          >
            Skills
          </li>
          <li
            className="text-gray-700 hover:text-blue-500 outline-0 hover:cursor-pointer"
            onClick={() => handleNavClick("#projects")}
          >
            Projects
          </li>
          <li
            className="text-gray-700 hover:text-blue-500 outline-0 hover:cursor-pointer mr-25"
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
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
          {menuOpen && (
            <ul className="flex flex-col items-center justify-evenly text-md absolute right-12 top-8 overflow-hidden bg-white border-0 rounded-2xl shadow-sm shadow-gray-400">
              <li className="hover:bg-[#f0f1fb] h-10 px-10 py-4 flex items-center hover:cursor-pointer  w-full">
                <a className="text-gray-700 outline-0" href="#">
                  Home
                </a>
              </li>
              <li className="hover:bg-[#f0f1fb] h-10 px-10 py-4 flex items-center hover:cursor-pointer w-full">
                <a className="text-gray-700 outline-0 " href="#">
                  About
                </a>
              </li>
              <li className="hover:bg-[#f0f1fb] h-10 px-10 py-4 flex items-center hover:cursor-pointer  w-full">
                <a className="text-gray-700 outline-0" href="#">
                  Skills
                </a>
              </li>
              <li className="hover:bg-[#f0f1fb] h-10 px-10 py-4 flex items-center hover:cursor-pointer w-full">
                <a className="text-gray-700 outline-0" href="#">
                  Projects
                </a>
              </li>
              <li className="hover:bg-[#f0f1fb] h-10 px-10 py-4 flex items-center hover:cursor-pointer  w-full">
                <a className="text-gray-700 outline-0" href="#">
                  Contact
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}
