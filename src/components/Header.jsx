import React from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const navItems = ["Home", "Services", "Tech Stack", "Contact"];

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md fixed top-0 w-full z-50 border-b border-gray-200 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-extrabold bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent tracking-tight">
          Whitecircle Group
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-gray-800 font-medium">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, " ")}`}
              className="relative group transition duration-300"
            >
              <span className="group-hover:text-green-600">{item}</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 pb-4 animate-fade-in-down">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-gray-800 font-medium hover:text-green-600 transition duration-200"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
