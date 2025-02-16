"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Briefcase, Code, Globe, Users } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description: "Building high-performance websites and web apps tailored to your needs.",
    icon: <Code size={40} />,
  },
  {
    title: "Brand Strategy",
    description: "Creating unique brand identities that stand out in a competitive market.",
    icon: <Globe size={40} />,
  },
  {
    title: "Marketing Solutions",
    description: "Helping businesses grow with strategic digital marketing campaigns.",
    icon: <Briefcase size={40} />,
  },
  {
    title: "Creative Consulting",
    description: "Providing expert insights to refine your vision and achieve your goals.",
    icon: <Users size={40} />,
  },
];

const ServicesPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  return (
    <div className="min-h-screen pt-[150px] bg-gradient-to-r from-gray-900 to-gray-800 text-white p-10">
      <div className="text-center" data-aos="fade-up">
        <h2 className="text-4xl text-red-600 font-bold mb-4">Our Services</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Empowering businesses with cutting-edge digital solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition duration-300 relative overflow-hidden"
            data-aos="zoom-in"
          >
            <div className="absolute -top-5 -right-5 text-gray-600 opacity-20 text-9xl">
              {service.icon}
            </div>
            <div className="relative z-10">
              <div className="text-red-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
