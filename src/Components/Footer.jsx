import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

export default function Footer() {
  return (
    <div className="w-screen bg-gray-900 px-10 md:px-20 pb-10">
      <div className="flex flex-col md:flex-row justify-between items-center border-b border-b-gray-500">
        <div className="flex flex-col gap-1 py-5">
          <p className="text-white text-xl font-bold">Abdulaziz Musa</p>
          <p className="text-gray-400 font-semibold">
            Full-Stack Developer & Software Engineer
          </p>
        </div>
        <div className="text-gray flex gap-4 my-5">
          <a href="mailto:abdumh1268@gmail.com" target="_blank">
            <MdEmail
              size={25}
              className="text-[#9ca3af] hover:text-white hover:cursor-pointer"
            />
          </a>
          <a href="https://github.com/Abdulaziz1268" target="_blank">
            <FaGithub
              size={25}
              className="text-[#9ca3af] hover:text-white hover:cursor-pointer"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/abdulaziz-musa-b26798196/"
            target="_blank"
          >
            <FaLinkedinIn
              size={25}
              className="text-[#9ca3af] hover:text-white hover:cursor-pointer"
            />
          </a>
        </div>
      </div>
      <p className="text-gray-400 py-5 text-center font-semibold">
        © 2023 Abdulaziz Musa. All rights reserved.
      </p>
    </div>
  )
}
