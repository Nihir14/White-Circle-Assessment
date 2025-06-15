import React from "react";
import { FaUsers, FaChartLine, FaDollarSign } from "react-icons/fa";

const StatisticsSection = () => {
  return (
    <section className="bg-gradient-to-bl from-green-50 via-white to-blue-50 py-24 px-6 text-center border-t border-green-100">
      <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-blue-500 to-green-600 mb-20 tracking-tight">
        Our Impact
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-16 max-w-6xl mx-auto">
        {/* Sellers Helped */}
        <div className="flex flex-col items-center transition-transform hover:scale-105">
          <FaUsers className="text-5xl text-green-600 mb-4" />
          <p className="text-5xl font-extrabold text-green-700">500+</p>
          <p className="mt-2 text-gray-700 text-lg font-medium">Sellers Helped</p>
        </div>

        {/* Avg. Sales Growth */}
        <div className="flex flex-col items-center transition-transform hover:scale-105">
          <FaChartLine className="text-5xl text-blue-600 mb-4" />
          <p className="text-5xl font-extrabold text-blue-700">200%</p>
          <p className="mt-2 text-gray-700 text-lg font-medium">Avg. Sales Growth</p>
        </div>

        {/* Revenue Generated */}
        <div className="flex flex-col items-center transition-transform hover:scale-105">
          <FaDollarSign className="text-5xl text-indigo-600 mb-4" />
          <p className="text-5xl font-extrabold text-indigo-700">$2M+</p>
          <p className="mt-2 text-gray-700 text-lg font-medium">Revenue Generated</p>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
