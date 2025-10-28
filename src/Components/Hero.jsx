import React from "react"
import { FaChevronDown } from "react-icons/fa"

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const targetElement = document.querySelector(sectionId)
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }
  return (
    <div
      className=" flex flex-col gap-10 justify-between md:gap-0 md:flex-row py-32 px-10 lg:px-32 bg-linear-to-br from-[#647ae2] to-[#764ba2] w-screen h-auto md:h-screen text-white relative"
      id="home"
    >
      <div className="md:w-[50%]">
        <h1 className="font-bold text-6xl pb-6">Abdulaziz Musa</h1>
        <h2 className="font-bold text-2xl pb-6">
          Full-Stack Developer | Mobile App <br />
          Developer | Software Engineer
        </h2>
        <p className="font-normal text-xl pb-6">
          Passionate about building scalable web and mobile <br />
          applications using the MERN stack. I love transforming <br />
          ideas into functional, user-friendly digital solutions.
        </p>
        <div className="flex gap-5">
          <button className="w-40 h-13 rounded-xl bg-white text-blue-500 text-md font-medium hover:cursor-pointer">
            View My Work
          </button>
          <button className="w-40 h-13 rounded-xl hover:bg-white hover:text-blue-500 text-md hover:cursor-pointer font-medium border-3 hover:border-white">
            Contact Me
          </button>
        </div>
      </div>
      <div className="flex items-center lg:items-start justify-center md:w-[50%]">
        <div className="bg-white/20 rounded-full w-60 h-60 lg:w-95 lg:h-95 flex items-center justify-center">
          <div className="bg-white/30 rounded-full w-50 h-50 lg:w-85 lg:h-85 flex items-center justify-center relative ">
            <img
              src="/profile.jpg"
              alt="profile image"
              className="w-40 lg:w-70 rounded-full hover:scale-135 ease-in-out duration-700 hover:cursor-pointer"
            />
            <div className="flex flex-col justify-center items-center w-30 py-5 px-1 rounded-xl bg-[#3b82f6] absolute bottom-[-20px] right-[-60px] ">
              <p className="text-lg font-bold">1+</p>
              <p className="text-sm"> Years Experience</p>
            </div>
          </div>
        </div>
      </div>
      <button
        className="flex md:hidden lg:flex absolute bottom-8 md:bottom-10 lg:bottom-30 left-[49.5%] animate-bounce hover:cursor-pointer"
        onClick={() => scrollToSection("#about")}
      >
        <FaChevronDown size={25} />
      </button>
    </div>
  )
}
