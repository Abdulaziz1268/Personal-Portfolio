import { FaGithub, FaLinkedinIn } from "react-icons/fa6"
import { HiOutlineMail } from "react-icons/hi"
import { MdEmail } from "react-icons/md"

export default function Contact() {
  return (
    <div
      className="flex flex-col items-center justify-center py-15 bg-gray-50 dark:bg-gray-950"
      id="contact"
    >
      <div className="flex justify-center mb-10 w-full">
        <p className="text-gray-900 dark:text-gray-100 font-bold text-4xl">
          Get In Touch
        </p>
      </div>
      <div className="py-10 px-10 w-sm md:w-2xl bg-white dark:bg-gray-900 shadow-md rounded-2xl overflow-hidden ">
        <p className="font-normal text-xl w-full mb-5 text-center dark:text-gray-300">
          I'm always open to discussing new opportunities, collaborations, or
          just having a chat about technology.
        </p>
        <a
          href="mailto:abdumh1268@gmail.com"
          target="_blank"
          className="bg-gray-50 dark:bg-gray-950 flex overflow-hidden gap-5  p-4 mb-3 rounded-2xl w-full hover:scale-105 duration-300 ease-in-out hover:cursor-pointer"
        >
          <div className="rounded-full bg-blue-500 p-4 flex justify-center items-center">
            <HiOutlineMail
              size={25}
              className="text-white dark:text-gray-950"
            />
          </div>
          <div className="flex-1 dark:text-gray-300">
            <p className="font-bold text-lg">Email</p>
            <p>abdumh1268@gmail.com</p>
          </div>
        </a>
        <a
          href="https://github.com/Abdulaziz1268"
          target="_blank"
          className="bg-gray-50 dark:bg-gray-950 flex overflow-hidden gap-5  p-4 mb-3 rounded-2xl w-full hover:scale-105 duration-300 ease-in-out hover:cursor-pointer"
        >
          <div className="rounded-full bg-blue-500 p-4 flex justify-center items-center">
            <FaGithub size={25} className="text-white dark:text-gray-950" />
          </div>
          <div className="flex-1 overflow-hidden dark:text-gray-300">
            <p className="font-bold text-lg">GitHub</p>
            <p>https://github.com/Abdulaziz1268</p>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/abdulaziz-musa-b26798196/"
          target="_blank"
          className="bg-gray-50 dark:bg-gray-950 flex overflow-hidden gap-5  p-4 mb-3 rounded-2xl w-full hover:scale-105 duration-300 ease-in-out hover:cursor-pointer"
        >
          <div className="rounded-full bg-blue-500 p-4 flex justify-center items-center">
            <FaLinkedinIn size={25} className="text-white dark:text-gray-950" />
          </div>
          <div className="flex-1 overflow-hidden dark:text-gray-300">
            <p className="font-bold text-lg">LinkedIn</p>
            <p className="whitespace-nowrap">
              https://www.linkedin.com/in/abdulaziz-musa-b26798196/
            </p>
          </div>
        </a>
      </div>
    </div>
  )
}
