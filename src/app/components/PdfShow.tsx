import React, { useState, useEffect } from "react";
import { downloadLinks } from "./Lib/string";
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineFilePdf } from "react-icons/ai";

export default function PdfShow() {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleUnhover = () => {
    setIsHovered(false);
  };

  const downloadPDF = () => {
    // Replace this URL with the actual URL of the PDF file you want to download
    const pdfUrl = downloadLinks.pdf;

    // Create an anchor element to trigger the download
    const anchor = document.createElement("a");
    anchor.href = pdfUrl;
    anchor.target = "_blank";
    anchor.download = "estares-jericho-resume.pdf"; // You can set the filename here

    // Trigger a click event on the anchor element to start the download
    anchor.click();

    // Cleanup: Remove the anchor element
    anchor.remove();
  };

  useEffect(() => {
    // Add event listeners for hover and unhover
    const container = document.getElementById("pdf-container");

    if (container) {
      container.addEventListener("mouseenter", handleHover);
      container.addEventListener("mouseleave", handleUnhover);
    }

    // Cleanup: Remove event listeners when the component unmounts
    return () => {
      if (container) {
        container.removeEventListener("mouseenter", handleHover);
        container.removeEventListener("mouseleave", handleUnhover);
      }
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        id="pdf-container"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0, scale: isHovered ? 1 : 1.02 }} // Add scale animation for heartbeat effect
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.3, loop: true }} // Add loop for continuous animation
        className={`fixed right-4 bottom-4 p-4 rounded-lg shadow-lg text-center max-md:hidden ${
          isHovered ? "bg-gradient-to-r from-blue-400 to-teal-400" : ""
        }`}
      >
        <p
          className={`text-sm mb-2 ${
            isHovered ? "text-white" : "text-gray-800"
          }`}
        >
          You can access my resume PDF <br />
          by clicking the button below
        </p>
        <motion.button
          onClick={downloadPDF}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          className={`${
            isHovered
              ? "bg-teal-600 hover:bg-teal-700"
              : "bg-blue-500 hover:bg-blue-600"
          } text-white font-semibold py-2 px-4 rounded`}
        >
          Download
        </motion.button>
      </motion.div>
      {/* Mobile version */}
      <div className="relative lg:hidden text-center items-center rounded-lg my-2 py-4 bg-gray-700">
        <p className="text-[50%] mb-2">
          You can access my resume PDF by clicking the button below
        </p>
        <button
          onClick={downloadPDF}
          className=" bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          <p className="flex">
            <AiOutlineFilePdf />
            <span className="-mt-1 uppercase">Download</span>
          </p>
        </button>
      </div>
    </AnimatePresence>
  );
}
