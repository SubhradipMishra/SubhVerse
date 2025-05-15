import React, { useState } from "react";
import navLinks from "../json/navLinks.json";
import { Sun, Moon, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-gradient-to-r from-black via-gray-900 to-black border-b border-green-500/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="w-12 h-12 sm:w-15 sm:h-15" />
          <h1 className="text-2xl font-bold">
            <span className="text-green-400">Subh</span>
            <span className="text-white">Verse</span>
          </h1>
        </div>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.1, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a
                href={link.path}
                className="px-3 py-1 rounded-md font-medium text-white hover:text-green-400 hover:bg-black/60 transition-all duration-300"
              >
                {link.title}
              </a>
            </motion.div>
          ))}

          {/* Theme Toggle Button */}
          <button onClick={() => setDarkMode(!darkMode)} className="ml-4 text-white">
            {darkMode ? <Sun size={22} /> : <Moon size={22} />}
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/90 border-t border-green-500/30"
          >
            <div className="flex flex-col px-6 py-4 space-y-4">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white text-lg font-medium hover:text-green-400 hover:bg-black/60 rounded-md px-3 py-2 transition"
                >
                  {link.title}
                </a>
              ))}

              {/* Theme toggle button inside mobile menu */}
              <button
                onClick={() => {
                  setDarkMode(!darkMode);
                  setMobileMenuOpen(false);
                }}
                className="text-white flex items-center gap-2 font-medium hover:text-green-400 transition"
              >
                {darkMode ? <Sun size={22} /> : <Moon size={22} />}
                Toggle Theme
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
