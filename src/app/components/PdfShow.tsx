import React, { useState, useEffect } from "react";
import { downloadLinks, infoLabel } from "./Lib/string";
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineFilePdf } from "react-icons/ai";
import toast from "react-hot-toast";

export default function PdfShow() {
  const [isHovered, setIsHovered] = useState(false);

  //Disable
  const [isidentify, setidentify] = useState(infoLabel.statuspdf);
  const [isDisable, setisDisable] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleUnhover = () => {
    setIsHovered(false);
  };

  const downloadPDF = () => {
    try {
      if (infoLabel.statuspdf === true) {
        console.log("Ok!");
        const pdfUrl = downloadLinks.pdf;

        const anchor = document.createElement("a");
        anchor.href = pdfUrl;
        anchor.target = "_blank";
        anchor.download = "estares-jericho-resume.pdf";

        anchor.click();
        anchor.remove();
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
                      feature. I am not actively seeking new job opportunities
                      or clients at the moment.
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
    } catch (err) {
      console.log(err);
    }
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
