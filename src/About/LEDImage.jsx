import React from "react";
import { motion } from "framer-motion";

const LEDImage = () => {
  const ledCount = 24; // Number of LEDs around the image
  const leds = Array.from({ length: ledCount });

  return (
    <motion.div
      className="relative w-64 h-80 rounded-xl overflow-hidden"
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      whileHover={{ rotate: [0, -3, 3, 0], scale: 1.05 }}
      transition={{ duration: 1, type: "spring", bounce: 0.4 }}
      style={{ perspective: 600 }}
    >
      {/* Main Image */}
      <img
        src="Myself.jpg"
        alt="Subh"
        className="w-full h-full object-cover rounded-xl"
      />

      {/* LED Lights */}
      {leds.map((_, i) => {
        // Calculate angle and radius to position LEDs around the image border
        const angle = (360 / ledCount) * i - 90; // start from top (-90deg)
        const radiusX = 140; // horizontal radius
        const radiusY = 160; // vertical radius (height)

        // Convert polar coordinates to Cartesian (x,y)
        const x = radiusX * Math.cos((angle * Math.PI) / 180);
        const y = radiusY * Math.sin((angle * Math.PI) / 180);

        return (
          <motion.span
            key={i}
            className="absolute w-3 h-3 rounded-full bg-green-400 shadow-[0_0_8px_2px_rgba(16,185,129,0.8)]"
            style={{
              top: "50%",
              left: "50%",
              transform: `translate(${x}px, ${y}px)`,
            }}
            animate={{
              opacity: [0.4, 1, 0.4],
              scale: [1, 1.5, 1],
              boxShadow: [
                "0 0 8px 2px rgba(16,185,129,0.6)",
                "0 0 15px 5px rgba(52,211,153,1)",
                "0 0 8px 2px rgba(16,185,129,0.6)",
              ],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              delay: i * 0.15,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </motion.div>
  );
};

export default LEDImage;
