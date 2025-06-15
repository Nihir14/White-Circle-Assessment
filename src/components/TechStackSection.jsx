import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiAdobexd, SiFramer } from "react-icons/si";
import { MdAnimation } from "react-icons/md";

const TechStackSection = () => {
  return (
    <section
      id="tech stack"
      className="bg-gradient-to-tr from-green-50 via-white to-blue-50 py-24 px-6 text-center border-t border-green-100"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-blue-500 to-green-600 mb-16 tracking-tight">
        Technology Stack
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto text-left">
        {/* Frontend Tools */}
        <div className="group rounded-3xl p-6 bg-white shadow-md border border-green-100 hover:shadow-xl hover:scale-105 transform transition duration-300 ease-in-out">
          <h3 className="text-xl font-bold text-gray-700 mb-5 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-500 group-hover:to-blue-500 transition duration-300">
            Frontend Tools
          </h3>
          <ul className="space-y-3 text-gray-700 font-medium">
            <li className="flex items-center gap-3">
              <FaHtml5 className="text-gray-400 group-hover:text-orange-500 transition duration-300 text-2xl" /> HTML5
            </li>
            <li className="flex items-center gap-3">
              <FaCss3Alt className="text-gray-400 group-hover:text-blue-600 transition duration-300 text-2xl" /> CSS3
            </li>
            <li className="flex items-center gap-3">
              <FaJs className="text-gray-400 group-hover:text-yellow-500 transition duration-300 text-2xl" /> JavaScript
            </li>
            <li className="flex items-center gap-3">
              <SiTailwindcss className="text-gray-400 group-hover:text-cyan-500 transition duration-300 text-2xl" /> Tailwind CSS
            </li>
            <li className="flex items-center gap-3">
              <FaReact className="text-gray-400 group-hover:text-blue-400 transition duration-300 text-2xl" /> React.js
            </li>
          </ul>
        </div>

        {/* UI/UX Tools */}
        <div className="group rounded-3xl p-6 bg-white shadow-md border border-green-100 hover:shadow-xl hover:scale-105 transform transition duration-300 ease-in-out">
          <h3 className="text-xl font-bold text-gray-700 mb-5 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-green-500 transition duration-300">
            UI/UX Tools
          </h3>
          <ul className="space-y-3 text-gray-700 font-medium">
            <li className="flex items-center gap-3">
              <SiFigma className="text-gray-400 group-hover:text-pink-500 transition duration-300 text-2xl" /> Figma
            </li>
            <li className="flex items-center gap-3">
              <SiAdobexd className="text-gray-400 group-hover:text-purple-500 transition duration-300 text-2xl" /> Adobe XD (optional)
            </li>
          </ul>
        </div>

        {/* Animations */}
        <div className="group rounded-3xl p-6 bg-white shadow-md border border-green-100 hover:shadow-xl hover:scale-105 transform transition duration-300 ease-in-out">
          <h3 className="text-xl font-bold text-gray-700 mb-5 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-blue-500 transition duration-300">
            Animations
          </h3>
          <ul className="space-y-3 text-gray-700 font-medium">
            <li className="flex items-center gap-3">
              <MdAnimation className="text-gray-400 group-hover:text-indigo-500 transition duration-300 text-2xl" /> LottieFiles
            </li>
            <li className="flex items-center gap-3">
              <SiFramer className="text-gray-400 group-hover:text-blue-600 transition duration-300 text-2xl" /> Framer Motion
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
