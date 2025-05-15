import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Calculator",
    tech: ["HTML", "CSS", "JavaScript"],
    desc: "A simple yet functional calculator for basic arithmetic operations.",
    link: "#", // Replace with actual link if available
  },
  {
    title: "Admin Page",
    tech: ["React", "Material UI", "Redux"],
    desc: "A modern dashboard admin page with dynamic routing and state management.",
    link: "#",
  },
  {
    title: "TODO App",
    tech: ["React"],
    desc: "A responsive and efficient to-do application to manage daily tasks.",
    link: "#",
  },
  {
    title: "SHARENOVA",
    tech: ["Node.js", "Express", "MongoDB", "Tailwind", "HTML", "JS", "Mongoose"],
    desc: "A sharing platform for collaborative tools built using MERN stack.",
    link: "#",
  },
];

const Project = () => {
  return (
    <>
      {/* Glow animation style */}
      <style>
        {`
          @keyframes glowMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          .glow-card {
            position: relative;
            padding: 2px;
            border-radius: 1rem;
            overflow: hidden;
          }

          .glow-card::before {
            content: "";
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            border-radius: inherit;
            background: linear-gradient(270deg, #34d399, #6ee7b7, #34d399, #86efac);
            background-size: 600% 600%;
            animation: glowMove 4s ease infinite;
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: destination-out;
            mask-composite: exclude;
            z-index: 1;
          }

          .glow-inner {
            position: relative;
            z-index: 2;
            background: rgba(0, 0, 0, 0.85);
            border-radius: inherit;
          }
        `}
      </style>

      <section className="min-h-screen pt-24 pb-16 px-6 bg-gradient-to-br from-black via-gray-900 to-black text-white">
        <h2 className="text-4xl font-bold text-center mb-14 text-green-400">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.3}
                glareColor="#34d399"
                glarePosition="all"
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                scale={1.03}
                transitionSpeed={1200}
              >
                <div className="glow-card">
                  <div className="glow-inner rounded-xl p-6 border border-green-500/30 shadow-md hover:shadow-green-500/40 transition-shadow duration-300">
                    <h3 className="text-2xl font-semibold mb-2 text-green-400">{project.title}</h3>
                    <p className="text-gray-300 mb-3">{project.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-green-600/20 text-green-400 px-3 py-1 text-sm rounded-full border border-green-400/40"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 border border-green-400 text-green-400 hover:bg-green-500 hover:text-black rounded transition"
                    >
                      View <FaExternalLinkAlt size={14} />
                    </a>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Project;
