import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const About = () => {
  const letters = "ABOUT  ME".split("");

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        type: "spring",
        stiffness: 100,
      },
    }),
  };

  return (
    <>
      <style>
        {`
          @keyframes glowMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          .glowing-border {
            position: relative;
            border-radius: 1rem;
            padding: 4px;
            width: 256px;
            height: 256px;
            overflow: visible;
            transition: transform 0.3s ease;
          }

          @media (max-width: 768px) {
            .glowing-border {
              width: 200px;
              height: 200px;
              margin: 0 auto;
            }
          }

          .glowing-border::before {
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
            pointer-events: none;
            z-index: 1;
          }

          .glowing-border img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 1rem;
            position: relative;
            z-index: 2;
            box-shadow: 0 0 25px rgba(34, 197, 94, 0.6);
            transition: transform 0.3s ease;
          }
        `}
      </style>

      <main className="min-h-screen w-full bg-gradient-to-br from-black via-gray-900 to-black text-white px-4 sm:px-6 md:px-12 pt-32 pb-16">
        {/* Animated Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-green-400 text-center mb-16 flex flex-wrap justify-center">
          {letters.map((char, i) => (
            <motion.span
              key={i}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 300, damping: 20 }}
              whileHover={{ scale: 1.3, rotate: 10 }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </h2>

        {/* Content Section (No timeline or line design) */}
        <div className="flex flex-col-reverse lg:flex-row gap-12 max-w-7xl mx-auto items-center">
          {/* Text Content */}
          <div className="flex-1 space-y-5 text-base sm:text-lg leading-relaxed px-2">
            {[
              <>
                Hi, I'm <span className="text-green-400 font-semibold">Subh</span> — a passionate{" "}
                <span className="text-green-400 font-semibold">Web Developer</span> and{" "}
                <span className="text-green-400 font-semibold">DSA enthusiast</span> currently
                pursuing a degree in Computer Science Engineering.
              </>,
              <>
                I specialize in creating{" "}
                <span className="text-green-400 font-semibold">interactive</span> and{" "}
                <span className="text-green-400 font-semibold">responsive</span> web applications
                using modern JavaScript libraries like{" "}
                <span className="text-green-400 font-semibold">React</span>.
              </>,
              <>
                My journey into tech is fueled by curiosity, creativity, and a drive to learn. I love
                solving complex algorithmic problems and building smart UIs.
              </>,
              <>
                Outside of tech, I enjoy gaming, community events, and helping others on their dev journeys.
              </>
            ].map((text, i) => (
              <motion.p
                key={i}
                className="text-white"
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                custom={i}
              >
                {text}
              </motion.p>
            ))}
          </div>

          {/* Tilt Glowing Image */}
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.4}
            glareColor="#34d399"
            glarePosition="all"
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            scale={1.05}
            transitionSpeed={1000}
            className="glowing-border mx-auto lg:mx-0"
          >
            <img src="cu.jpg" alt="Subh" />
          </Tilt>
        </div>
      </main>
    </>
  );
};

export default About;
