import { FaGithub, FaLinkedinIn } from "react-icons/fa6"
import { HiOutlineMail } from "react-icons/hi"
import { MdEmail } from "react-icons/md"

export default function Contact() {
  return (
    <div
      className="flex flex-col items-center justify-center py-15 bg-gray-50"
      id="contact"
    >
      <div className="w-[50%] flex justify-center mb-10">
        <p className="text-[#1f2937] font-bold text-4xl">Get In Touch</p>
      </div>
      <div className="py-10 px-10 w-sm md:w-2xl bg-white shadow-md rounded-2xl overflow-hidden ">
        <p className="font-normal text-xl w-full mb-5 text-center">
          I'm always open to discussing new opportunities, collaborations, or
          just having a chat about technology.
        </p>
        <a
          href="mailto:abdumh1268@gmail.com"
          target="_blank"
          style={{ backgroundColor: "#f9fafb" }}
          className="bg-gray-50 flex overflow-hidden gap-5  p-4 mb-3 rounded-2xl w-full hover:scale-105 duration-300 ease-in-out hover:cursor-pointer"
        >
          <div className="rounded-full bg-blue-500 p-4 flex justify-center items-center">
            <HiOutlineMail color="white" size={25} />
          </div>
          <div className="flex-1">
            <p className="font-bold text-lg">Email</p>
            <p>abdumh1268@gmail.com</p>
          </div>
        </a>
        <a
          href="https://github.com/Abdulaziz1268"
          target="_blank"
          style={{ backgroundColor: "#f9fafb" }}
          className="bg-black flex overflow-hidden gap-5  p-4 mb-3 rounded-2xl w-full hover:scale-105 duration-300 ease-in-out hover:cursor-pointer"
        >
          <div className="rounded-full bg-blue-500 p-4 flex justify-center items-center">
            <FaGithub color="white" size={25} />
          </div>
          <div className="flex-1 overflow-hidden">
            <p className="font-bold text-lg">GitHub</p>
            <p>https://github.com/Abdulaziz1268</p>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/abdulaziz-musa-b26798196/"
          target="_blank"
          style={{ backgroundColor: "#f9fafb" }}
          className="bg-green-500 flex overflow-hidden gap-5  p-4 mb-3 rounded-2xl w-full hover:scale-105 duration-300 ease-in-out hover:cursor-pointer"
        >
          <div className="rounded-full bg-blue-500 p-4 flex justify-center items-center">
            <FaLinkedinIn color="white" size={25} />
          </div>
          <div className="flex-1 overflow-hidden">
            <p className="font-bold text-lg">LinkedIn</p>
            <p>https://www.linkedin.com/in/abdulaziz-musa-b26798196/</p>
          </div>
        </a>
      </div>
    </div>
  )
}
