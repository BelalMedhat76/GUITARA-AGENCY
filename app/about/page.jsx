"use client"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUsers, FaLightbulb, FaFlag, FaAward } from "react-icons/fa";

const AboutPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  return (
    <div className="bg-gray-900 text-white py-40 px-6 md:px-16">
      {/* Hero Section */}
      <div className="text-center mb-16" data-aos="fade-up">
        <h1 className="text-4xl font-bold text-red-600 mb-4">About Guitara Agency</h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Guitara Agency is a leading digital agency specializing in branding, marketing, and web development. Our goal is to help businesses thrive in the digital era through innovative solutions.
        </p>
      </div>

      {/* Mission & Vision Section */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg" data-aos="fade-right">
          <FaLightbulb className="text-red-600 text-5xl mb-4" />
          <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
          <p className="text-gray-300">
            Empowering businesses with cutting-edge digital solutions to enhance brand presence, drive engagement, and maximize success.
          </p>
        </div>
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg" data-aos="fade-left">
          <FaFlag className="text-red-600 text-5xl mb-4" />
          <h2 className="text-2xl font-semibold mb-3">Our Vision</h2>
          <p className="text-gray-300">
            To be the most innovative and client-centric digital agency, transforming brands and setting new standards in the industry.
          </p>
        </div>
      </div>

      {/* Team & Achievements Section */}
      <div className="grid md:grid-cols-2 gap-12">
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg" data-aos="fade-right">
          <FaUsers className="text-red-600 text-5xl mb-4" />
          <h2 className="text-2xl font-semibold mb-3">Meet Our Team</h2>
          <p className="text-gray-300">
            Our team consists of highly skilled professionals dedicated to delivering top-tier digital solutions tailored to our clients’ needs.
          </p>
        </div>
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg" data-aos="fade-left">
          <FaAward className="text-red-600 text-5xl mb-4" />
          <h2 className="text-2xl font-semibold mb-3">Achievements</h2>
          <p className="text-gray-300">
            Recognized as a top-tier agency, we have helped numerous businesses achieve their goals with award-winning strategies and innovative solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;