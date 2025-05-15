import React from "react";
import { motion } from "framer-motion";
import { FaTrophy, FaCode, FaStar } from "react-icons/fa";

const achievements = [
  {
    title: "2nd Position in CodeWar 5.0",
    desc: "Secured 2nd place in CodeWar 5.0 organized by IEEE and Coding Ninjas.",
    icon: <FaTrophy />,
    date: "2024",
  },
  {
    title: "350+ DSA Questions Solved",
    desc: "Solved over 350 DSA problems on LeetCode through consistent practice.",
    icon: <FaCode />,
    date: "2023-2025",
  },
  {
    title: "1750+ LeetCode Contest Rating",
    desc: "Reached a rating of 1750+ in LeetCode contests with strong performance.",
    icon: <FaStar />,
    date: "Present",
  },
];

const Achievement = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black px-6 py-24 text-white flex flex-col md:flex-row items-center justify-center gap-16">
      
      {/* Timeline Section */}
      <div className="relative max-w-xl pl-8 before:absolute before:top-0 before:left-4 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-green-400 before:via-green-500 before:to-green-700 before:rounded-full before:animate-pulse">
        <motion.h2
          className="text-4xl font-bold text-green-400 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Achievements
        </motion.h2>

        {achievements.map((item, index) => (
          <motion.div
            key={index}
            className="relative pl-12 mb-12"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Icon */}
            <div className="absolute left-0 top-2 w-8 h-8 bg-green-500 text-black flex items-center justify-center rounded-full shadow-lg border-2 border-white">
              {item.icon}
            </div>

            {/* Achievement Box */}
            <div className="bg-green-900/30 backdrop-blur-md p-5 rounded-xl shadow-md hover:shadow-green-300/40 transition duration-300">
              <h3 className="text-2xl font-semibold text-green-300">{item.title}</h3>
              <span className="text-sm text-gray-400 italic">{item.date}</span>
              <p className="text-gray-300 mt-2">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Glowing Image Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full md:w-96 h-96 rounded-3xl bg-gradient-to-br from-green-800/30 to-green-900/20 border border-green-400 shadow-[0_0_40px_#22c55e] flex items-center justify-center p-2"
      >
        <img
          src="second.jpg"
          alt="Achievement Art"
          className="w-full h-full object-cover rounded-2xl shadow-inner"
        />
      </motion.div>
    </section>
  );
};

export default Achievement;
