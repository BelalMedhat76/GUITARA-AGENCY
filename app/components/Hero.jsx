// "use client";

// import { useState, useEffect, useRef } from "react";
// import gsap from "gsap";
// import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaPlay } from "react-icons/fa";

// const slides = [
//   {
//     id: 1,
//     title: "GUITARA",
//     subtitle: "GUITARA AGENCY",
//     description:
//       "Exclusive LiveStreaming Services.",
//     image: "/back1.jpg",
//   },
//   {
//     id: 2,
//     title: "INNOVATIVE",
//     subtitle: "SOLUTIONS PROVIDER",
//     description:
//       "We help businesses achieve their goals with cutting-edge technology and creative solutions.",
//     image: "/back2.jpg",
//   },
//   {
//     id: 3,
//     title: "NEXT LEVEL",
//     subtitle: "DESIGN & DEVELOPMENT",
//     description:
//       "Our team of experts creates stunning visuals and seamless experiences for the digital world.",
//     image: "/back3.jpg",
//   },
// ];

// const Hero = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const autoSlideRef = useRef(null);
//   const interactionTimeoutRef = useRef(null);

//   // Animation on slide change
//   useEffect(() => {
//     gsap.fromTo(
//       ".hero-content",
//       { opacity: 0, y: 50 },
//       { opacity: 1, y: 0, duration: 1 }
//     );
//   }, [activeIndex]);

//   // Auto-slide function
//   const startAutoSlide = () => {
//     if (autoSlideRef.current) clearInterval(autoSlideRef.current);

//     autoSlideRef.current = setInterval(() => {
//       setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
//     }, 5000);
//   };

//   useEffect(() => {
//     startAutoSlide();

//     return () => {
//       clearInterval(autoSlideRef.current);
//       clearTimeout(interactionTimeoutRef.current);
//     };
//   }, []);

//   // Pause auto-slide on user interaction
//   const handleSlideChange = (index) => {
//     setActiveIndex(index);
//     clearInterval(autoSlideRef.current);
//     clearTimeout(interactionTimeoutRef.current);

//     interactionTimeoutRef.current = setTimeout(() => {
//       startAutoSlide();
//     }, 7000);
//   };

//   return (
//     <section className="relative h-screen w-full text-white flex items-center justify-center overflow-hidden">
//       {/* Background Image with Gradient Overlay */}
//       <div
//         className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
//         style={{
//           backgroundImage: `url(${slides[activeIndex].image})`,
//         }}
//       >
//         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/80 via-black/30 to-black/80"></div>
//       </div>

//       {/* Hero Content */}
//       <div className="hero-content text-center max-w-4xl px-6 relative z-10">
//         <div className="mb-4 px-4 py-1 border border-white inline-block rounded-md text-sm sm:text-base">
//           WELCOME CREATIVE AGENCY
//         </div>
//         <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold">
//           <span className="text-red-500">{slides[activeIndex].title}</span>
//           <br /> {slides[activeIndex].subtitle}
//         </h1>
//         <p className="mt-4 text-lg sm:text-xl">{slides[activeIndex].description}</p>
//         <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-6">
//           <button className="px-6 py-3 bg-red-500 text-white font-semibold rounded-full hover:bg-red-700 transition">
//             Get Started
//           </button>
//           <button className="flex items-center text-white text-lg">
//             <FaPlay className="mr-2" /> Watch Video
//           </button>
//         </div>
//       </div>

//       {/* Left Dotted Navigation */}
//       <div className="absolute left-5 md:left-10 flex flex-col gap-4 z-10">
//         {slides.map((slide, index) => (
//           <button
//             key={slide.id}
//             onClick={() => handleSlideChange(index)}
//             className={`w-3 h-3 md:w-4 md:h-4 border-2 rounded-full transition-all duration-300 ${
//               index === activeIndex ? "bg-red-500 border-red-500 p-1" : "border-white"
//             }`}
//           />
//         ))}
//       </div>

//       {/* Right Social Icons */}
//       <div className="absolute right-5 md:right-10 flex flex-col gap-4 z-10">
//         <a href="#" className="text-white p-2 border rounded-full hover:bg-red-500">
//           <FaFacebookF />
//         </a>
//         <a href="#" className="text-white p-2 border rounded-full hover:bg-red-500">
//           <FaTwitter />
//         </a>
//         <a href="#" className="text-white p-2 border rounded-full hover:bg-red-500">
//           <FaYoutube />
//         </a>
//         <a href="#" className="text-white p-2 border rounded-full hover:bg-red-500">
//           <FaInstagram />
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero;


"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaPlay } from "react-icons/fa";

const slides = [
  {
    id: 1,
    title: "GUITARA",
    subtitle: "GUITARA AGENCY",
    description:
      "Exclusive LiveStreaming Services.",
    image: "/back1.jpg",
  },
  {
    id: 2,
    title: "INNOVATIVE",
    subtitle: "SOLUTIONS PROVIDER",
    description:
      "We help businesses achieve their goals with cutting-edge technology and creative solutions.",
    image: "/back2.jpg",
  },
  {
    id: 3,
    title: "NEXT LEVEL",
    subtitle: "DESIGN & DEVELOPMENT",
    description:
      "Our team of experts creates stunning visuals and seamless experiences for the digital world.",
    image: "/back3.jpg",
  },
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const autoSlideRef = useRef(null);
  const interactionTimeoutRef = useRef(null);

  // Animation on slide change
  useEffect(() => {
    gsap.fromTo(
      ".hero-content",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    );
  }, [activeIndex]);

  // Auto-slide function
  const startAutoSlide = () => {
    if (autoSlideRef.current) clearInterval(autoSlideRef.current);

    autoSlideRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
  };

  useEffect(() => {
    startAutoSlide();

    return () => {
      clearInterval(autoSlideRef.current);
      clearTimeout(interactionTimeoutRef.current);
    };
  }, []);

  // Pause auto-slide on user interaction
  const handleSlideChange = (index) => {
    setActiveIndex(index);
    clearInterval(autoSlideRef.current);
    clearTimeout(interactionTimeoutRef.current);

    interactionTimeoutRef.current = setTimeout(() => {
      startAutoSlide();
    }, 7000);
  };

  return (
    <section className="relative h-screen w-full text-white flex items-center justify-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${slides[activeIndex].image})`,
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/80 via-black/30 to-black/80"></div>
      </div>

      {/* Hero Content */}
      <div className="hero-content text-center max-w-4xl px-6 relative z-10">
        <div className="mb-4 px-4 py-1 border border-white inline-block rounded-md text-sm sm:text-base">
          WELCOME CREATIVE AGENCY
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold">
          <span className="text-red-500">{slides[activeIndex].title}</span>
          <br /> {slides[activeIndex].subtitle}
        </h1>
        <p className="mt-4 text-lg sm:text-xl">{slides[activeIndex].description}</p>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="px-6 py-3 bg-red-500 text-white font-semibold rounded-full hover:bg-red-700 transition">
            Get Started
          </button>
          <button className="flex items-center text-white text-lg">
            <FaPlay className="mr-2" /> Watch Video
          </button>
        </div>
      </div>

      {/* Left Dotted Navigation - Hidden on Mobile */}
      <div className="absolute left-5 md:left-10 flex flex-col gap-4 z-10 hidden md:flex">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => handleSlideChange(index)}
            className={`w-3 h-3 md:w-4 md:h-4 border-2 rounded-full transition-all duration-300 ${
              index === activeIndex ? "bg-red-500 border-red-500 p-1" : "border-white"
            }`}
          />
        ))}
      </div>

      {/* Right Social Icons - Hidden on Mobile */}
      <div className="absolute right-5 md:right-10 flex flex-col gap-4 z-10 hidden md:flex">
        <a href="#" className="text-white p-2 border rounded-full hover:bg-red-500">
          <FaFacebookF />
        </a>
        <a href="#" className="text-white p-2 border rounded-full hover:bg-red-500">
          <FaTwitter />
        </a>
        <a href="#" className="text-white p-2 border rounded-full hover:bg-red-500">
          <FaYoutube />
        </a>
        <a href="#" className="text-white p-2 border rounded-full hover:bg-red-500">
          <FaInstagram />
        </a>
      </div>

      {/* Mobile Controls - Show on Mobile */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex flex-col justify-center items-center gap-4 z-10 md:hidden">
        {/* Mobile Dots */}
        <div className="flex gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => handleSlideChange(index)}
              className={`w-3 h-3 md:w-4 md:h-4 border-2 rounded-full transition-all duration-300 ${
                index === activeIndex ? "bg-red-500 border-red-500 p-1" : "border-white"
              }`}
            />
          ))}
        </div>

        {/* Mobile Social Icons */}
        <div className="flex gap-2 justify-center">
          <a href="#" className="text-white p-2 border rounded-full hover:bg-red-500">
            <FaFacebookF />
          </a>
          <a href="#" className="text-white p-2 border rounded-full hover:bg-red-500">
            <FaTwitter />
          </a>
          <a href="#" className="text-white p-2 border rounded-full hover:bg-red-500">
            <FaYoutube />
          </a>
          <a href="#" className="text-white p-2 border rounded-full hover:bg-red-500">
            <FaInstagram />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
