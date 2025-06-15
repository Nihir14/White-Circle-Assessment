import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-green-50 via-white to-blue-50 pt-36 pb-28 px-6 overflow-hidden text-center"
    >
      {/* Glowing Circles Background */}
      <div className="absolute top-[-100px] right-[-100px] w-[250px] h-[250px] bg-green-200 rounded-full opacity-30 blur-3xl z-0 animate-pulse"></div>
      <div className="absolute bottom-[-120px] left-[-80px] w-[300px] h-[300px] bg-blue-200 rounded-full opacity-25 blur-2xl z-0 animate-pulse"></div>

      <motion.h1
        className="relative z-10 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-green-600 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Scale Your E-Commerce <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
          Sales by 10X
        </span>
      </motion.h1>

      <motion.p
        className="relative z-10 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.7 }}
      >
        At <strong className="text-green-600">Whitecircle Group</strong>, we supercharge your brand with
        data-driven growth, intelligent product strategies, and results-focused execution.
      </motion.p>

      <motion.a
        href="#contact"
        className="relative z-10 inline-block px-8 py-3 font-semibold !text-white bg-gradient-to-r from-green-500 to-blue-500 rounded-full shadow-xl hover:shadow-2xl hover:from-green-600 hover:to-blue-600 transition-all duration-300"
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.95 }}
      >
        🚀 Book Free Growth Audit
      </motion.a>
    </section>
  );
};

export default HeroSection;
