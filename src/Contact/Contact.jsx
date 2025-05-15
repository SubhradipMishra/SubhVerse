import React from "react";
import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

// Shimmer + Keyframes
const shimmerStyle = {
  background: "linear-gradient(90deg, #22c55e 25%, #a3f7bf 50%, #22c55e 75%)",
  backgroundSize: "200% 100%",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  animation: "shimmer 3s linear infinite",
};

const keyframes = `
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
`;

const Contact = () => {
  return (
    <>
      <style>{keyframes}</style>

      <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black px-6 py-24 text-white flex flex-col items-center gap-20">
        {/* Title */}
        <motion.h2
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120 }}
          style={shimmerStyle}
          className="text-4xl font-bold text-center"
        >
          Contact Me
        </motion.h2>

        {/* Form & Info Section */}
        <div className="flex flex-col lg:flex-row justify-center gap-16 w-full max-w-7xl">
          {/* Contact Info */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-full max-w-md bg-green-900/30 backdrop-blur-md p-10 rounded-xl shadow-lg space-y-10"
          >
            <div className="flex items-center gap-5">
              <FaLinkedin className="text-4xl text-green-400" />
              <a
                href="https://www.linkedin.com/in/your-linkedin-username"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-green-300 hover:text-green-500 transition"
              >
                linkedin.com/in/your-linkedin-username
              </a>
            </div>

            <div className="flex items-center gap-5">
              <FaEnvelope className="text-3xl text-green-400" />
              <a
                href="mailto:mishrasubhradip2005@gmail.com"
                className="text-xl text-green-300 hover:text-green-500 transition"
              >
                mishrasubhradip2005@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-5">
              <FaPhone className="text-3xl text-green-400" />
              <a
                href="tel:+919732594577"
                className="text-xl text-green-300 hover:text-green-500 transition"
              >
                +91 9732594577
              </a>
            </div>
          </motion.div>

          {/* Funny Form with Wiggle */}
          <motion.form
            initial={{ rotate: -2, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ type: "spring", bounce: 0.5, delay: 0.3 }}
            className="w-full max-w-md bg-green-900/20 border border-green-400/30 rounded-xl p-8 shadow-md space-y-6"
          >
            <h3 className="text-2xl font-semibold text-green-300">Connect with Me</h3>

            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-black/60 text-white placeholder-green-300 border border-green-400 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-black/60 text-white placeholder-green-300 border border-green-400 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full px-4 py-3 rounded-lg bg-black/60 text-white placeholder-green-300 border border-green-400 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />

            {/* Bouncy Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: [0, 1, -1, 0] }}
              whileTap={{ scale: 0.9 }}
              type="submit"
              className="w-full bg-green-500 text-black font-semibold py-3 rounded-lg hover:bg-green-400 transition"
            >
              Send Message 🚀
            </motion.button>
          </motion.form>
        </div>

        {/* Funny Tilted Image */}
        <motion.div
          whileHover={{ rotate: [0, 3, -3, 3, 0] }}
          className="w-full md:w-96 h-96 rounded-3xl bg-gradient-to-br from-green-800/30 to-green-900/20 border border-green-400 shadow-[0_0_40px_#22c55e] flex items-center justify-center p-2"
        >
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
            alt="Contact Illustration"
            className="w-full h-full object-cover rounded-2xl shadow-inner"
          />
        </motion.div>

        {/* Floating Footer Icons */}
        <footer className="mt-12 text-center text-gray-400 text-sm space-y-4">
          <p>&copy; {new Date().getFullYear()} Subhradip Mishra — mishrasubhradip2005@gmail.com</p>
          <div className="flex justify-center gap-6 text-green-400 text-2xl">
            <motion.a
              href="https://www.linkedin.com/in/your-linkedin-username"
              target="_blank"
              whileHover={{ y: -5 }}
              className="hover:text-green-500 transition"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="mailto:mishrasubhradip2005@gmail.com"
              whileHover={{ y: -5 }}
              className="hover:text-green-500 transition"
            >
              <FaEnvelope />
            </motion.a>
            <motion.a
              href="tel:+919732594577"
              whileHover={{ y: -5 }}
              className="hover:text-green-500 transition"
            >
              <FaPhone />
            </motion.a>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Contact;
