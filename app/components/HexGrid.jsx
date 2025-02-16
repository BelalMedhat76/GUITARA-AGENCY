// "use client";

// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { X, Plus } from "lucide-react";
// import Head from "next/head";

// const images = [
//   "/back1.jpg",
//   "/back2.jpg",
//   "/back3.jpg",
//   "/back1.jpg",
//   "/back2.jpg",
//   "/back3.jpg",
// ];

// const HexGrid = () => {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [showMore, setShowMore] = useState(false);

//   useEffect(() => {
//     AOS.init({ duration: 1000, easing: "ease-in-out" });
//   }, []);

//   return (
//     <>
//       {/* Head Title */}
//       <Head>
//         <title>Hexagonal Grid with Accordion</title>
//         <meta name="description" content="A hexagonal grid with animations and an interactive accordion section" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//       </Head>

//       <div className="relative flex flex-col lg:flex-row items-center justify-center min-h-screen px-6 md:px-10 bg-gradient-to-r from-gray-900 to-gray-800">
//         {/* Left Side: Hexagonal Grid (Smaller on Mobile) */}
//         <div
//           data-aos="fade-right"
//           className="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0"
//         >
//           <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
//             {images.map((src, index) => (
//               <motion.div
//                 key={index}
//                 className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 overflow-hidden hexagon relative cursor-pointer"
//                 onClick={() => setSelectedImage(src)}
//                 whileHover={{ scale: 1.1, rotate: [0, 5, -5, 5, 0] }}
//                 transition={{ repeat: Infinity, duration: 1 }}
//               >
//                 <img
//                   src={src}
//                   alt={`Hex Image ${index + 1}`}
//                   className="w-full h-full object-cover rounded-lg"
//                 />
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* Right Side: Accordion Section with List */}
//         <div className="w-full lg:w-1/2 flex flex-col items-center justify-center text-white">
//           {/* Plus Icon & Title */}
//           <div className="flex items-center space-x-4 cursor-pointer" onClick={() => setShowMore(!showMore)}>
//             <motion.button
//               className="flex items-center justify-center w-16 h-16 bg-blue-500 hover:bg-blue-600 rounded-full text-white shadow-lg transition-all"
//               animate={{ rotate: showMore ? 45 : 0 }}
//             >
//               <Plus size={32} />
//             </motion.button>
//             <h2 className="text-lg font-semibold">More Information</h2>
//           </div>

//           {/* Sliding Content */}
//           <motion.div
//             className="w-full max-w-md mt-4 p-6 bg-gray-700 rounded-lg shadow-md"
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: showMore ? 1 : 0, height: showMore ? "auto" : 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <p className="text-sm">
//               Explore the key features of this project:
//             </p>
//             <ul className="mt-3 list-disc list-inside text-sm space-y-2">
//               <li>Hexagonal grid with animations</li>
//               <li>Interactive hover effects</li>
//               <li>Fullscreen image preview</li>
//               <li>Accordion section for more details</li>
//               <li>Fully responsive design</li>
//             </ul>
//           </motion.div>
//         </div>

//         {/* Fullscreen Image Modal */}
//         {selectedImage && (
//           <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-90 z-50">
//             <img
//               src={selectedImage}
//               alt="Full Screen"
//               data-aos="zoom-in"
//               className="max-w-full max-h-full rounded-lg"
//             />
//             <button
//               onClick={() => setSelectedImage(null)}
//               className="absolute top-6 right-6 text-white bg-red-600 rounded-full p-2 hover:bg-red-500 transition"
//             >
//               <X size={40} />
//             </button>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default HexGrid;


"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { X, Plus } from "lucide-react";
import Head from "next/head";

const images = [
  "/back1.jpg",
  "/back2.jpg",
  "/back3.jpg",
  "/back1.jpg",
  "/back2.jpg",
  "/back3.jpg",
];

const HexGrid = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  return (
    <>
      
     

      <div className="pt-10 pb-10 relative flex flex-col lg:flex-row items-center justify-center min-h-screen px-6 md:px-10 bg-gradient-to-r from-gray-900 to-gray-800 text-white">

        <div className="w-full lg:w-1/2 flex flex-col items-center">
          {/* Hexagonal Grid */}
          <div data-aos="fade-right" className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {images.map((src, index) => (
              <motion.div
                key={index}
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 overflow-hidden hexagon relative cursor-pointer"
                onClick={() => setSelectedImage(src)}
                whileHover={{ scale: 1.1, rotate: [0, 5, -5, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
              >
                <img
                  src={src}
                  alt={`Hex Image ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </motion.div>
            ))}
          </div>

     
        </div>

        {/* Right Side: Animated Text Section */}
        <motion.div
          data-aos="fade-left"
          className="w-full lg:w-1/2 text-center  lg:text-left mt-8 lg:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-red-600">
            Explore the Future of Innovation
          </h2>
          <p className="text-gray-300 text-lg md:text-xl">
            Unlock the power of decentralized technology with cutting-edge learning and collaboration.  
            Join the **DeWorld Education Hub** to create, innovate, and shape the future of tech.
          </p>

          {/* Animated List of Features */}
          <motion.ul
            className="mt-6 text-lg space-y-3 text-gray-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.li  className="flex items-center gap-2">
              ✅ AI-Powered Learning
            </motion.li>
            <motion.li className="flex items-center gap-2">
              ✅ Decentralized Tech Resources
            </motion.li>
            <motion.li  className="flex items-center gap-2">
              ✅ Global Collaboration
            </motion.li>
            <motion.li  className="flex items-center gap-2">
              ✅ Innovation Hackathons
            </motion.li>
          </motion.ul>
        </motion.div>

        {/* Fullscreen Image Modal */}
        {selectedImage && (
          <div className= " fixed inset-0 flex justify-center items-center bg-black bg-opacity-90 z-50">
            <img
              src={selectedImage}
              alt="Full Screen"
              data-aos="zoom-in"
              className=" max-w-full max-h-full rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white bg-red-600 rounded-full p-2 hover:bg-red-500 transition"
            >
              <X size={40} />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default HexGrid;
