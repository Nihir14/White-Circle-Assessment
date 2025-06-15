import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import TechStackSection from "./components/TechStackSection";
import StatisticsSection from "./components/StatsSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans bg-white text-gray-900 w-full overflow-x-hidden">
      <Header />
      <HeroSection />
      <ServicesSection />
      <TechStackSection />
      <StatisticsSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
