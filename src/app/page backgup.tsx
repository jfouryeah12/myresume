"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import framer-motion components

import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"; // Import social media icons
import About from "./components/About";
import Resume from "./components/Resume";

export default function Home() {
  const [isHomeVisible, setIsHomeVisible] = useState(true);

  const toggleVisibility = () => {
    setIsHomeVisible((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-black text-primary-500">
      <AnimatePresence>
        {isHomeVisible && (
          <motion.section
            id="home"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-purple-900 to-indigo-700 text-white"
          >
            <div className="p-8 text-white text-center">
              <motion.h1
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="text-4xl font-extrabold"
              >
                Estares Y. Jericho
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="text-lg"
              >
                I&apos;m Full-Stack Developer from the Philippines
              </motion.p>
              {/* Social Media Icons */}
              <div className="flex justify-center mt-4 space-x-4">
                <motion.a
                  href="https://www.linkedin.com/in/jericho-estares-883837218/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                >
                  <FaLinkedin className="text-3xl hover:text-blue-500" />
                </motion.a>
                <motion.a
                  href="https://github.com/jfouryeah12"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                >
                  <FaGithub className="text-3xl hover:text-gray-400" />
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/jerichoybanez36/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                >
                  <FaInstagram className="text-3xl hover:text-blue-400" />
                </motion.a>
              </div>
              <motion.button
                onClick={toggleVisibility}
                whileHover={{ scale: 1.05 }}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-8 disabled:hover:bg-red-600"
                disabled
              >
                My Resume Is Closed! Come Back Soon.
              </motion.button>
              <motion.p whileHover={{ scale: 1.05 }} className="text-xs mt-2">
                Why did this happen? - This happened because I haven&apos;t
                finished fixing the website.
              </motion.p>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!isHomeVisible && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div>
              {/*Links*/}
              <div className="mx-auto max-w-screen-xl flex items-center justify-between px-8 py-6 lg:py-8 lg:flex-row bg-violet-300">
                {/*About*/}
                <About />
                {/*Resume*/}
                <Resume />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
