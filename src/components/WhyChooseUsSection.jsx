import React from "react";
import { CheckCircle, Sparkles, ShieldCheck, TrendingUp, Lightbulb } from "lucide-react";

const features = [
  {
    icon: <Sparkles className="w-10 h-10 text-violet-500 group-hover:scale-110 transition-transform duration-300" />,
    title: "Innovative Approach",
    description: "We combine creativity and strategy to deliver cutting-edge solutions."
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-emerald-500 group-hover:scale-110 transition-transform duration-300" />,
    title: "Trusted & Secure",
    description: "We value your trust and ensure secure, reliable outcomes every time."
  },
  {
    icon: <TrendingUp className="w-10 h-10 text-blue-500 group-hover:scale-110 transition-transform duration-300" />,
    title: "Proven Growth",
    description: "Our strategies drive real results and sustainable growth for your brand."
  },
  {
    icon: <Lightbulb className="w-10 h-10 text-yellow-500 group-hover:scale-110 transition-transform duration-300" />,
    title: "Expert Guidance",
    description: "A team of passionate professionals guiding you at every step."
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="bg-gradient-to-br from-white via-blue-50 to-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-violet-600 to-indigo-600 mb-4">
          Why Choose Us
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto text-lg mb-16">
          Discover what makes us the preferred choice for businesses that demand results.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-2xl shadow-lg border border-transparent hover:border-violet-400 hover:shadow-violet-200 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col items-center space-y-4">
                {feature.icon}
                <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
                <p className="text-gray-500 text-sm text-center">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
