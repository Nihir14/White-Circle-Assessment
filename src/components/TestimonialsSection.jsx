import React from "react";

const testimonials = [
  {
    quote: "Whitecircle helped us scale our business beyond expectations!",
    name: "Ravi Sharma",
  },
  {
    quote: "Their team truly understands e-commerce growth strategies.",
    name: "Priya Mehta",
  },
  {
    quote: "Our listings and sales performance improved drastically.",
    name: "Aman Verma",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-gradient-to-br from-yellow-50 via-white to-blue-50 py-24 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-orange-500 to-yellow-600 mb-20 tracking-tight">
        What Our Clients Say
      </h2>
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-yellow-300 hover:scale-[1.03] transition-all duration-500 border border-yellow-100"
          >
            <div className="text-6xl text-yellow-400 mb-4 leading-none">“</div>
            <p className="italic text-gray-800 mb-6 leading-relaxed text-lg">
              {t.quote}
            </p>
            <p className="font-bold text-yellow-600 text-base tracking-wide">
              – {t.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
