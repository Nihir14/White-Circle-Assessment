import React from "react";

const ContactForm = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-white via-blue-50 to-white py-24 px-6"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-600 to-blue-700 mb-16 tracking-tight">
        Let’s Grow Together
      </h2>

      <form className="backdrop-blur-xl bg-white/70 max-w-2xl mx-auto p-10 rounded-3xl shadow-2xl space-y-6 border border-blue-100 transition-all duration-300 hover:shadow-blue-300">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition placeholder-gray-400 font-medium text-gray-700"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition placeholder-gray-400 font-medium text-gray-700"
          required
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition placeholder-gray-400 font-medium text-gray-700"
          required
        />
        <textarea
          placeholder="Tell us about your goals..."
          rows="5"
          className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition placeholder-gray-400 font-medium text-gray-700 resize-none"
          required
        ></textarea>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 text-white py-3 rounded-xl font-bold tracking-wide text-lg shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
        >
          🚀 Book Your Free Audit Call
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
