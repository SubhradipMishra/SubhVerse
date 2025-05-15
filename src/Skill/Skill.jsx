import React from "react";
import {
  SiReact,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPython,
  SiCplusplus,
  SiC,
  SiGithub,
  SiLeetcode,
} from "react-icons/si";
import { FaCode } from "react-icons/fa";
import { motion } from "framer-motion";

const skillData = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: <SiReact />, level: 90, desc: "Component-based frontend library" },
      { name: "HTML", icon: <SiHtml5 />, level: 95, desc: "Markup language for web pages" },
      { name: "CSS", icon: <SiCss3 />, level: 90, desc: "Styling the web beautifully" },
      { name: "JavaScript", icon: <SiJavascript />, level: 85, desc: "Core scripting language of the web" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs />, level: 80, desc: "JavaScript runtime for backend" },
      { name: "Express.js", icon: <SiExpress />, level: 75, desc: "Minimal and flexible Node.js web framework" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB", icon: <SiMongodb />, level: 70, desc: "NoSQL document-oriented DB" },
      { name: "MySQL", icon: <SiMysql />, level: 65, desc: "Relational database management system" },
    ],
  },
  {
    category: "Languages",
    skills: [
      { name: "Python", icon: <SiPython />, level: 75, desc: "High-level programming language" },
      { name: "C++", icon: <SiCplusplus />, level: 80, desc: "Object-oriented programming language" },
      { name: "C", icon: <SiC />, level: 85, desc: "Procedural programming language" },
    ],
  },
  {
    category: "CS Fundamentals",
    skills: [
      { name: "DSA", icon: <SiLeetcode />, level: 75, desc: "Data Structures and Algorithms" },
      { name: "OOPs", icon: <FaCode />, level: 70, desc: "Object-Oriented Programming" },
      { name: "LLD (Learning)", icon: <FaCode />, level: 40, desc: "Learning Low-Level Design" },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const progressBarVariants = {
  hidden: { width: 0 },
  visible: (level) => ({
    width: `${level}%`,
    transition: { duration: 1.5, ease: "easeInOut" },
  }),
};

const iconVariants = {
  animate: {
    scale: [1, 1.15, 1],
    boxShadow: [
      "0 0 10px 2px rgba(16, 185, 129, 0.7)",
      "0 0 20px 5px rgba(16, 185, 129, 1)",
      "0 0 10px 2px rgba(16, 185, 129, 0.7)",
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "loop",
    },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Skill = () => {
  return (
  <section className="min-h-screen pt-24 pb-16 px-6 bg-gradient-to-br from-black via-gray-900 to-black text-white">

      <motion.h2
        className="text-4xl font-bold text-center mb-12 text-green-400"
        initial="hidden"
        animate="visible"
        variants={headingVariants}
      >
        My Skills
      </motion.h2>

      <motion.div
        className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {skillData.map((group, idx) => (
          <div key={idx}>
            <motion.h3
              className="text-2xl font-semibold mb-4 text-white underline underline-offset-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={headingVariants}
            >
              {group.category}
            </motion.h3>

            {group.skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.07, boxShadow: "0 0 15px 5px rgba(16,185,129,0.7)" }}
                transition={{ duration: 0.3 }}
                className="mb-4 p-4 rounded-xl bg-gradient-to-r from-black to-green-900 shadow-lg border border-green-500/30"
              >
                <div className="flex items-center gap-4">
                  <motion.div
                    className="text-3xl text-green-400"
                    variants={iconVariants}
                    animate="animate"
                  >
                    {skill.icon}
                  </motion.div>

                  <div className="w-full">
                    <div className="flex justify-between">
                      <h4 className="font-semibold text-white">{skill.name}</h4>
                      <span className="text-sm text-green-400">{skill.level}%</span>
                    </div>

                    <div className="w-full bg-green-800 h-2 rounded overflow-hidden">
                      <motion.div
                        className="h-full bg-green-400 rounded"
                        custom={skill.level}
                        initial="hidden"
                        animate="visible"
                        variants={progressBarVariants}
                      ></motion.div>
                    </div>

                    <p className="text-sm text-gray-300 mt-1">{skill.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ))}
      </motion.div>

      {/* Resume Button */}
      <div className="mt-16 text-center">
        <a
          href="/Subhradip_Resume.pdf"
          download
          className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-semibold text-green-400 border border-green-400 backdrop-blur-md bg-black/30 hover:bg-green-500 hover:text-black transition-all duration-300 relative overflow-hidden group mx-auto"
          style={{ maxWidth: "fit-content" }}
        >
          <span className="z-10">Download Resume</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 z-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"
            />
          </svg>

          {/* Background animation */}
          <span className="absolute inset-0 bg-green-400 blur-lg opacity-0 group-hover:opacity-20 transition duration-300 rounded-xl"></span>
          <span className="absolute inset-0 border-2 border-green-500 rounded-xl animate-pulse group-hover:animate-none group-hover:border-white"></span>
        </a>
      </div>
    </section>
  );
};

export default Skill;
