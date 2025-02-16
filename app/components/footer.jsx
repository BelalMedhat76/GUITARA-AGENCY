"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Mail, MapPin, PhoneCall, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const [count, setCount] = useState(0);
  const targetCount = 3000;

  useEffect(() => {
    AOS.init({ duration: 1000 });
    
    let current = 0;
    const interval = setInterval(() => {
      current += 10;
      if (current >= targetCount) {
        setCount(targetCount);
        clearInterval(interval);
      } else {
        setCount(current);
      }
    }, 10);

    return () => clearInterval(interval);
  }, []);
const otherCount = count-300
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

        {/* Contact Info Section */}
        <div data-aos="fade-up" className="space-y-4">
          <h2 className="text-2xl font-semibold italic border-b border-gray-500 pb-2">Contact Us</h2>
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <PhoneCall className="text-green-500" />
            <span>+2 01282020076</span>
          </div>
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <Mail className="text-red-400" />
            <span>Contact@GuitaraAgenCy.com</span>
          </div>
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <MapPin className="text-blue-300" />
            <span>1 Mahmoud Taimour St, Almaza, Heliopolis, Cairo</span>
          </div>
        </div>

        {/* Social Links Section */}
        <div data-aos="fade-up" className="space-y-4">
          <h2 className="text-2xl font-semibold italic border-b border-gray-500 pb-2">Follow Us</h2>
          <div className="flex justify-center md:justify-start space-x-6 text-xl">
            <Facebook className="cursor-pointer hover:text-gray-400 transition" />
            <Twitter className="cursor-pointer hover:text-gray-400 transition" />
            <Linkedin className="cursor-pointer hover:text-gray-400 transition" />
            <Instagram className="cursor-pointer hover:text-gray-400 transition" />
          </div>
        </div>

        {/* Country Counter Section */}
        <div data-aos="fade-up" className="space-y-4">
          <h2 className="text-2xl font-semibold italic border-b border-gray-500 pb-2">Visitors</h2>
          <div className="text-sm flex flex-col space-y-2">
            <span className="flex items-center justify-center md:justify-start">
              🇪🇬 Egypt: <span className="ml-1 font-semibold text-green-400">{count}</span>
            </span>
            <span className="flex items-center justify-center md:justify-start">
              🇸🇦 Saudi Arabia: <span className="ml-1 font-semibold text-green-400">{ otherCount}</span>
            </span>
            <span className="flex items-center justify-center md:justify-start">
              🇦🇪 UAE: <span className="ml-1 font-semibold text-green-400">0</span>
            </span>
            <span className="flex items-center justify-center md:justify-start">
              🇶🇦 Qatar: <span className="ml-1 font-semibold text-green-400">0</span>
            </span>
            <span className="flex items-center justify-center md:justify-start">
              🇧🇭 Bahrain: <span className="ml-1 font-semibold text-green-400">0</span>
            </span>
            <span className="flex items-center justify-center md:justify-start">
              🇸🇾 Syria: <span className="ml-1 font-semibold text-green-400">0</span>
            </span>
            <span className="flex items-center justify-center md:justify-start">
              🇮🇶 Iraq: <span className="ml-1 font-semibold text-green-400">0</span>
            </span>
          </div>
        </div>

      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-500 mt-6 pt-4 text-sm text-center">
        ©2025 GuitaraGroup | All Rights Reserved | Developed by countZero
      </div>
    </footer>
  );
};

export default Footer;
