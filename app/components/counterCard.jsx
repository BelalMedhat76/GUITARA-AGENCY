"use client";

import { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Users, ShoppingCart, Briefcase, Star } from "lucide-react";

const CounterCard = ({ icon: Icon, title, target, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let current = 0;
    const interval = setInterval(() => {
      current += Math.ceil(target / 100);
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(current);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [isVisible, target]);

  return (
    <div
      data-aos="zoom-in"
      className="relative flex flex-col items-center justify-center w-full max-w-xs p-6 shadow-lg rounded-2xl bg-gradient-to-br from-[#1E293B] to-[#334155] border border-white/20 backdrop-blur-md text-white hover:scale-105 transition-transform"
    >
      <div className="absolute -top-4 -right-4 bg-blue-400 w-12 h-12 rounded-full flex items-center justify-center">
        <Icon size={30} className="text-gray-900" />
      </div>
      <h2 className="text-4xl font-extrabold text-red-600 drop-shadow-lg">{count}+</h2>
      <p className="text-lg mt-2 font-medium tracking-wide">{title}</p>
    </div>
  );
};

const CounterSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-gray-800 h-full text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 data-aos="fade-down" className="text-3xl md:text-4xl font-bold mb-10 text-red-600 tracking-wide">
          Our Achievements
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8  justify-center items-center">
          <CounterCard icon={Users} title="Happy Clients" target={5000} isVisible={isVisible} />
          <CounterCard icon={ShoppingCart} title="Total Sales" target={1200} isVisible={isVisible} />
          <CounterCard icon={Briefcase} title="Projects Completed" target={350} isVisible={isVisible} />
          <CounterCard icon={Star} title="5-Star Reviews" target={950} isVisible={isVisible} />
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
