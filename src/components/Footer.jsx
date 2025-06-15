import React from "react";
import { Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 backdrop-blur-md shadow-inner border-t border-gray-700 py-12 px-4 mt-20 overflow-hidden">
      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse z-0" />
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left relative z-10">
        
        {/* Left Text */}
        <p className="text-sm tracking-wide font-medium">
          © 2025 <span className="text-blue-400 font-semibold">Whitecircle Group</span>. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-6 justify-center">
          {[
            { icon: <Facebook size={18} />, label: "Facebook", color: "from-blue-500 to-blue-700" },
            { icon: <Twitter size={18} />, label: "Twitter", color: "from-sky-400 to-sky-600" },
            { icon: <Linkedin size={18} />, label: "LinkedIn", color: "from-blue-600 to-indigo-700" },
          ].map((item, index) => (
            <a
              key={index}
              href="#"
              className={`group bg-gradient-to-br ${item.color} p-3 rounded-full shadow-xl border border-white/10 hover:scale-110 transform transition-all duration-300`}
              aria-label={item.label}
            >
              <div className="text-white group-hover:rotate-6 transition-transform duration-300">
                {item.icon}
              </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
