import React from "react";
import {
  TrendingUp,
  BarChart,
  Search,
  Settings,
  Tags,
  Globe,
} from "lucide-react";

const services = [
  {
    title: "Keyword Optimization",
    icon: <Search className="w-8 h-8 text-green-500" />,
  },
  {
    title: "Product Ranking",
    icon: <TrendingUp className="w-8 h-8 text-green-500" />,
  },
  {
    title: "Paid Ads (Amazon/Flipkart)",
    icon: <BarChart className="w-8 h-8 text-green-500" />,
  },
  {
    title: "Listing Enhancement",
    icon: <Tags className="w-8 h-8 text-green-500" />,
  },
  {
    title: "SEO & Branding for E-commerce Sellers",
    icon: <Globe className="w-8 h-8 text-green-500" />,
  },
  {
    title: "Campaign Management",
    icon: <Settings className="w-8 h-8 text-green-500" />,
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-24 px-6 text-center border-t border-green-100"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-blue-500 to-green-600 mb-14 tracking-tight">
        Our E-Commerce Services
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="rounded-3xl p-6 bg-white shadow-md border border-green-100 hover:shadow-xl hover:scale-[1.05] hover:bg-gradient-to-br from-white to-green-100 transition duration-300 ease-in-out"
          >
            <div className="mb-4 flex justify-center">{service.icon}</div>
            <h4 className="text-lg font-bold text-green-800">
              {service.title}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
