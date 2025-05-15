import React from "react";
import { motion } from "framer-motion";

const letters = Array.from("Hi, I'M SUBH");

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2 * i,
    },
  }),
};

const greenPulseLetter = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    color: ["#22c55e", "#86efac", "#22c55e"],
    transition: {
      y: { type: "spring", stiffness: 500, damping: 20 },
      opacity: { duration: 0.3 },
      color: { repeat: Infinity, repeatType: "loop", duration: 2 },
    },
  },
};

const staticWhiteLetter = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    color: "#ffffff",
    transition: {
      y: { type: "spring", stiffness: 500, damping: 20 },
      opacity: { duration: 0.3 },
    },
  },
};

const AnimatedHeading = () => {
  return (
    <motion.h1
      style={{ display: "flex", overflow: "hidden", fontWeight: "800" }}
      variants={container}
      initial="hidden"
      animate="visible"
      className="mb-4 text-3xl sm:text-4xl md:text-5xl font-extrabold flex flex-wrap justify-center md:justify-start"
    >
      {letters.map((char, index) => {
        const isGreen = ["S", "U", "B", "H", "A"].includes(char.toUpperCase());
        return (
          <motion.span
            key={index}
            variants={isGreen ? greenPulseLetter : staticWhiteLetter}
            style={{ marginRight: char === " " ? "0.3em" : undefined, cursor: isGreen ? "pointer" : "default" }}
            whileHover={
              isGreen
                ? { scale: 1.3, textShadow: "0 0 10px #22c55e" }
                : { scale: 1.05 }
            }
          >
            {char}
          </motion.span>
        );
      })}
    </motion.h1>
  );
};

const Home = () => {
  return (
    <main className="min-h-screen flex flex-col md:flex-row justify-center items-center bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 pt-24 gap-12 md:gap-24">
      {/* Text section on the left */}
      <div className="flex flex-col justify-center items-center md:items-start max-w-xl w-full text-center md:text-left">
        <AnimatedHeading />

        <motion.p
          className="text-lg sm:text-xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          I'm a passionate Web Developer and DSA enthusiast crafting sleek and powerful apps.
          I love building interactive UI and solving complex problems with clean code.
        </motion.p>

        <motion.p
          className="text-base sm:text-lg mb-8 text-green-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          Let's build something amazing together!
        </motion.p>

        <motion.a
          href="/project"
          className="px-6 py-3 bg-green-500 rounded-lg text-black font-semibold shadow-lg hover:bg-green-600 transition"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.5 }}
        >
          See My Projects
        </motion.a>
      </div>

      {/* Glowing circle image on the right */}
      <motion.div
        className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-green-400 shadow-[0_0_20px_8px_rgba(16,185,129,0.7)] flex justify-center items-center flex-shrink-0"
        animate={{
          rotate: [-1, 1, -1],
          x: [-2, 2, -2],
          y: [-1, 1, -1],
        }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
        style={{ transform: "translateY(-30px)" }}
      >
        <img
          src="Myself.jpg" // Replace with your actual image path
          alt="Subh"
          className="object-cover w-full h-full"
          style={{ display: "block" }}
        />
      </motion.div>
    </main>
  );
};

export default Home;
