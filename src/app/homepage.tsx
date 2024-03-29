"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import framer-motion components
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"; // Import social media icons
import About from "./components/About";
import Resume from "./components/Resume";
import Fortpolio from "./components/Fortpolio";
import { infoLabel, directLinks, publisher } from "./components/Lib/string";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import toast from "react-hot-toast";
import "animate.css/animate.min.css";
import Link from "next/link";

export default function Home() {
  const [isHomeVisible, setIsHomeVisible] = useState(true);
  const [isAboutVisible, setIsAboutVisible] = useState(true);
  const [isResumeVisible, setIsResumeVisible] = useState(false);
  const [isFortpolioVisible, setIsFortpolioVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  //Disable
  const [isidentify, setidentify] = useState(infoLabel.status);
  const [isDisable, setisDisable] = useState(false);

  const toggleVisibility = () => {
    if (isidentify === true) {
      console.log("Ok!");
      setIsHomeVisible((prev) => !prev);
    } else {
      console.log("Failed");
      setisDisable(true);
      document.body.classList.add("animate__animated", "animate__shakeX");
      toast.custom(
        (t) => (
          <div
            className={`${
              t.visible
                ? "animate-enter animate__animated animate__flash"
                : "animate-leave animate__animated animate__fadeOut"
            } max-w-md w-full bg-gradient-to-r from-red-500 to-pink-500 shadow-lg rounded-lg overflow-hidden pointer-events-auto ring-1 ring-black ring-opacity-5`}
          >
            <div className="flex-1 p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://scontent.fmnl8-1.fna.fbcdn.net/v/t39.30808-6/273156220_1350584145371011_5649855247010521685_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeGr7_cBpx5v48grqdjm4RKAsF5jDTQH2hGwXmMNNAfaET2xscg7kCn0rzzrNq58Lq1CdRozq74GYjMUH3QHuUJH&_nc_ohc=mFjjKHgSe38AX9ZIfV_&_nc_zt=23&_nc_ht=scontent.fmnl8-1.fna&oh=00_AfDk91_8NGzrK15kw9w1nLQgWjKym4hCzwLgoQnxnW1KnA&oe=65A8A1B6"
                    alt=""
                  />
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-base font-medium text-white">
                    {infoLabel.firstname}
                  </p>
                  <p className="mt-1 text-sm text-gray-200">
                    Apologies, but you are currently unable to access this
                    feature. I am not actively seeking new job opportunities or
                    clients at the moment.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center p-2 font-bold">
              <p className="mt-1">Access Denied!</p>
            </div>
          </div>
        ),
        { duration: 8000 },
      );
    }
  };

  useEffect(() => {
    const cleanupAnimation = () => {
      document.body.classList.remove("animate__animated", "animate__shakeX");
    };

    if (isidentify === true) {
      setTimeout(cleanupAnimation, 1000); // Adjust the delay as needed
    }

    return () => {
      cleanupAnimation();
    };
  }, [isidentify]);

  const toggleAboutVisibility = () => {
    setIsAboutVisible(true);
    setIsResumeVisible(false);
    setIsFortpolioVisible(false);
  };

  const toggleResumeVisibility = () => {
    setIsResumeVisible(true);
    setIsAboutVisible(false);
    setIsFortpolioVisible(false);
  };

  const toggleFortpolioVisibility = () => {
    setIsFortpolioVisible(true);
    setIsResumeVisible(false);
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
                I&apos;m a {infoLabel.role} from the Philippines
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
              {isDisable && (
                <div className="text-white mt-4">
                  <p>Admin say no.</p>
                </div>
              )}
            </div>
            <div
              style={{
                position: "fixed",
                bottom: 0,
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  padding: "10px",
                }}
              >
                <p style={{ color: "white" }} className="text-xs">
                  <Link
                    className="hover:text-green-400"
                    target="_blank"
                    hidden={isDisable}
                    href={publisher.mygitdesign}
                  >
                    {" "}
                    {publisher.publisher}
                  </Link>
                </p>
              </div>
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
                    <h1 className="text-3xl max-md:text-sm font-extrabold text-primary-500">
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
                          onClick={toggleFortpolioVisibility}
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
                    "text-dark-300 absolute inset-0 z-10 min-h-screen w-full overflow-hidden bg-black transition-all",
                  )}
                  aria-expanded={isOpen}
                >
                  <div className="container relative h-full">
                    <div className="px-8 flex items-center justify-between py-8">
                      <button type="button" onClick={() => setIsOpen(false)}>
                        <XMarkIcon className="h-6 w-6 text-primary-500" />
                      </button>
                    </div>
                    <nav
                      className="relative z-40 pt-32 text-left mx-[20%]"
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
                            onClick={toggleFortpolioVisibility}
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
                      >
                        <Resume />
                      </motion.section>
                    )}

                    {/* Fortpolio */}
                    <AnimatePresence>
                      {isFortpolioVisible && (
                        <motion.section
                          id="fortpolio"
                          initial={{ opacity: 0, y: -50 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 0 }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                          <Fortpolio />
                        </motion.section>
                      )}
                    </AnimatePresence>
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
