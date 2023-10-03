"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import framer-motion components
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"; // Import social media icons
import About from "./components/About";
import Resume from "./components/Resume";
import { infoLabel, directLinks } from "./components/Lib/string";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";

export default function Home() {
  const [isHomeVisible, setIsHomeVisible] = useState(true);
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [isResumeVisible, setIsResumeVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleVisibility = () => {
    setIsHomeVisible((prev) => !prev);
  };

  const toggleAboutVisibility = () => {
    setIsAboutVisible(true);
    setIsResumeVisible(false);
  };

  const toggleResumeVisibility = () => {
    setIsResumeVisible(true);
    setIsAboutVisible(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

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
                {infoLabel.name}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="text-lg"
              >
                I&apos;m {infoLabel.role} from the Philippines
              </motion.p>
              {/* Social Media Icons */}
              <div className="flex justify-center mt-4 space-x-4">
                <motion.a
                  href={directLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                >
                  <FaLinkedin className="text-3xl hover:text-blue-500" />
                </motion.a>
                <motion.a
                  href={directLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                >
                  <FaGithub className="text-3xl hover:text-gray-400" />
                </motion.a>
                <motion.a
                  href={directLinks.instagram}
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
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-8"
              >
                Open Resume
              </motion.button>
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
            <div className="relative">
              <header>
                <div className="mx-auto max-w-screen-xl flex items-center justify-between px-8 py-6 lg:py-8 lg:flex-row">
                  <div className="flex items-center space-x-6">
                    <h1 className="text-3xl font-extrabold text-primary-500">
                      {infoLabel.name}
                    </h1>
                  </div>
                  <div className="hidden lg:flex items-center space-x-6">
                    <ul className="flex items-center space-x-6">
                      <li>
                        <motion.button
                          onClick={toggleVisibility}
                          className="text-lg font-medium text-gray-600 relative group hover:text-white mb-5"
                        >
                          Home
                          <span className="absolute bottom-[-5px] left-0 w-full h-1 rounded-full bg-green-500 origin-left transform scale-x-0 transition-transform group-hover:scale-x-50 duration-300 group-hover:bg-red-500 group-hover:shadow-md"></span>
                        </motion.button>
                      </li>
                      <li>
                        <motion.button
                          onClick={toggleAboutVisibility}
                          className="text-lg font-medium text-gray-600 relative group hover:text-white mb-5"
                        >
                          About
                          <span className="absolute bottom-[-5px] left-0 w-full h-1 rounded-full bg-green-500 origin-left transform scale-x-0 transition-transform group-hover:scale-x-50 duration-300 group-hover:bg-red-500 group-hover:shadow-md"></span>
                        </motion.button>
                      </li>
                      <li>
                        <motion.button
                          onClick={toggleResumeVisibility}
                          className="text-lg font-medium text-gray-600 relative group hover:text-white mb-5"
                        >
                          Resume
                          <span className="absolute bottom-[-5px] left-0 w-full h-1 rounded-full bg-green-500 origin-left transform scale-x-0 transition-transform group-hover:scale-x-50 duration-300 group-hover:bg-red-500 group-hover:shadow-md"></span>
                        </motion.button>
                      </li>
                      <li>
                        <motion.button
                          onClick={toggleVisibility}
                          className="text-lg font-medium text-gray-600 relative group hover:text-white mb-5"
                        >
                          Portfolio
                          <span className="absolute bottom-[-5px] left-0 w-full h-1 rounded-full bg-green-500 origin-left transform scale-x-0 transition-transform group-hover:scale-x-50 duration-300 group-hover:bg-red-500 group-hover:shadow-md"></span>
                        </motion.button>
                      </li>
                    </ul>
                  </div>
                  <div className="lg:hidden">
                    <button
                      className="flex h-10 w-10 items-center justify-center"
                      type="button"
                      onClick={() => setIsOpen(true)}
                    >
                      <span className="sr-only">Open menu</span>
                      <Bars3Icon className="h-6 w-6 text-primary-500" />
                    </button>
                  </div>
                </div>

                {/* Mobile Menu */}
                <div
                  className={clsx(
                    isOpen ? "visible opacity-100" : "invisible opacity-0",
                    "text-dark-300 absolute inset-0 z-10 min-h-screen w-full overflow-hidden bg-white transition-all",
                  )}
                  aria-expanded={isOpen}
                >
                  <div className="container relative h-full bg-black">
                    <div className="px-8 flex items-center justify-between py-8">
                      <button type="button" onClick={() => setIsOpen(false)}>
                        <XMarkIcon className="h-6 w-6 text-primary-500" />
                      </button>
                    </div>
                    <nav
                      className="relative z-40 pt-32 text-left "
                      aria-label="Mobile menu"
                    >
                      <ul className="space-y-4 lg:space-y-8">
                        <li>
                          <motion.button
                            onClick={toggleAboutVisibility}
                            className="text-lg font-medium text-gray-600 relative group hover:text-white mb-5"
                          >
                            About
                            <span className="absolute bottom-[-5px] left-0 w-full h-1 rounded-full bg-green-500 origin-left transform scale-x-0 transition-transform group-hover:scale-x-50 duration-300 group-hover:bg-red-500 group-hover:shadow-md"></span>
                          </motion.button>
                        </li>
                        <li>
                          <motion.button
                            onClick={toggleResumeVisibility}
                            className="text-lg font-medium text-gray-600 relative group hover:text-white mb-5"
                          >
                            Resume
                            <span className="absolute bottom-[-5px] left-0 w-full h-1 rounded-full bg-green-500 origin-left transform scale-x-0 transition-transform group-hover:scale-x-50 duration-300 group-hover:bg-red-500 group-hover:shadow-md"></span>
                          </motion.button>
                        </li>
                        <li>
                          <motion.button
                            onClick={toggleVisibility}
                            className="text-lg font-medium text-gray-600 relative group hover:text-white mb-5"
                          >
                            Portfolio
                            <span className="absolute bottom-[-5px] left-0 w-full h-1 rounded-full bg-green-500 origin-left transform scale-x-0 transition-transform group-hover:scale-x-50 duration-300 group-hover:bg-red-500 group-hover:shadow-md"></span>
                          </motion.button>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </header>

              {/*Links*/}
              <div className="mx-auto max-w-screen-xl flex items-center justify-between px-8 py-6 lg:py-8 lg:flex-row">
                {/* About */}
                <AnimatePresence>
                  {isAboutVisible && (
                    <motion.section
                      id="about"
                      initial={{ opacity: 0, y: -50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 0 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                      <About />
                    </motion.section>
                  )}

                  {/* Resume */}
                  <AnimatePresence>
                    {isResumeVisible && (
                      <motion.section
                        id="resume"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        hidden={isAboutVisible}
                      >
                        <Resume />
                      </motion.section>
                    )}
                  </AnimatePresence>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
