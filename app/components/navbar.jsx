"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, Info, Briefcase, PhoneCall } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" fixed top-0 left-0 w-full bg-gradient-to-r from-black to-gray-900 text-white shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">
          <span className="text-red-500">GUITARA</span> AGENCY
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg">
          <li className="hover:text-red-400 transition"><a href="/">Home</a></li>
          <li className="hover:text-red-400 transition"><a href="/services">Services</a></li>
          <li className="hover:text-red-400 transition"><a href="/about">About</a></li>

          <li className="hover:text-red-400 transition"><a href="/contact">Contact</a></li>
        </ul>

        {/* Toggle Button (Mobile) */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-white p-2 focus:outline-none"
        >
          <Menu size={30} />
        </button>
      </div>

      {/* Full-Screen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-8 text-xl z-50"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-white"
            >
              <X size={40} />
            </button>

            {/* Menu Items */}
            <ul className="flex flex-col items-center gap-8 text-white text-2xl">
              <li><a href="/" className="flex items-center gap-2"><Home size={24} /> Home</a></li>
              <li><a href="/services" className="flex items-center gap-2"><Briefcase size={24} /> Services</a></li>
              <li><a href="/about" className="flex items-center gap-2"><Info size={24} /> About</a></li>

              <li><a href="/contact" className="flex items-center gap-2"><PhoneCall size={24} /> Contact</a></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
