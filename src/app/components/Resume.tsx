import React from "react";
import { AiFillInfoCircle, AiOutlineCaretRight } from "react-icons/ai";
import { infoLabel, downloadLinks } from "./Lib/string";
import { AnimatePresence, motion } from "framer-motion";
import PdfShow from "./PdfShow";

export default function Resume() {
  const downloadPDF = () => {
    // Replace this URL with the actual URL of the PDF file you want to download
    const pdfUrl = downloadLinks.pdf;

    // Create an anchor element to trigger the download
    const anchor = document.createElement("a");
    anchor.href = pdfUrl;
    anchor.target = "_blank";
    anchor.download = "downloaded-file.pdf"; // You can set the filename here

    // Trigger a click event on the anchor element to start the download
    anchor.click();

    // Cleanup: Remove the anchor element
    anchor.remove();
  };

  return (
    <section id="resume" className="resume">
      <AnimatePresence>
        <div className="section-title relative ">
          <p className="cool-subtitle uppercase">
            Resumes
            <span className="bg-green-500 absolute rounded-full left-17 ml-2 top-3 bottom-0 w-20 h-[4%]"></span>
          </p>
          <h1 className="text-3xl max-md:text-sm font-extrabold text-primary-500 with-green-line">
            CHECK MY RESUME
          </h1>
        </div>

        <div className="resume-content mt-6">
          {/*Contents*/}
          <div className="flex flex-col sm:flex-row">
            {/* First Container */}
            <div className="w-full sm:w-1/2 my-2 mx-2  max-md:w-[60%]">
              <ul>
                <h1 className="text-2xl max-md:text-sm font-extrabold text-primary-500 with-green-line">
                  Summary
                </h1>
                <li className="mx-4">
                  <h3 className="flex my-2 items-center text-green-300 text-xl font-extrabold shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
                    <AiFillInfoCircle />
                    <span className="ml-2 max-md:text-sm">
                      {infoLabel.name}
                    </span>
                  </h3>
                  <div>
                    <p className="italic max-md:text-xs ml-3 shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
                      I am an enthusiastic person who is fascinated by new
                      technologies. I&apos;ve always been good at solving
                      problems and coming up with new ideas. I prefer to come up
                      with innovative techniques and systems to find new
                      solutions. I&apos;m self-motivated and driven, and
                      I&apos;m always trying out new technologies and
                      strategies. The experience, architecture, and code quality
                      of the solutions I create are all very important to me.
                    </p>
                    <li className="text-md max-md:text-xs mx-6 mt-4">
                      <p className="flex my-2 items-center shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
                        <AiOutlineCaretRight />
                        <span>San Jose Del Monte Bulacan, Ph</span>
                      </p>
                      <p className="flex my-2  items-center shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
                        <AiOutlineCaretRight />
                        <span>jerichoyestares2001@yahoo.com</span>
                      </p>
                    </li>
                  </div>
                </li>

                <h1 className="text-2xl max-md:text-sm font-extrabold text-primary-500 with-green-line">
                  Education
                </h1>
                <li className="mx-4">
                  <h3 className="flex my-2 max-md:text-sm items-center text-green-300 text-sm font-extrabold shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
                    <AiFillInfoCircle />
                    <span className="ml-2">
                      BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY
                    </span>
                  </h3>
                  <div className="w-[30%] mx-5 my-1 text-center max-md:bg-transparent bg-gray-500 rounded-md">
                    <p className="mx-4 max-md:text-[50%]">2019 - Present</p>
                  </div>
                  <p className="mx-5 my-2 max-md:text-xs  italic">
                    STI San Jose Del Monte Bulacan, Ph
                  </p>
                  <div>
                    <p className=" ml-3 shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
                      STI College (formerly known as Systems Technology
                      Institute) is a for-profit college network in the
                      Philippines. They primarily cater to computer science and
                      information technology education, but also offer other
                      courses, such as business management and accountancy.
                    </p>
                  </div>
                </li>
                <li className="mx-4">
                  <h3 className="flex my-2 items-center max-md:text-sm text-green-300 text-sm font-extrabold shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
                    <AiFillInfoCircle />
                    <span className="ml-2 uppercase">Secondary</span>
                  </h3>
                  <div className="w-[30%] mx-5 my-1 text-center max-md:bg-transparent bg-gray-500 rounded-md">
                    <p className="mx-4 max-md:text-[50%]">2018 - 2019</p>
                  </div>
                  <p className="mx-5 my-2 max-md:text-xs  italic shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
                    ALS Program SJDM
                  </p>
                </li>
                <li className="mx-4">
                  <h3 className="flex my-2 items-center text-green-300 text-sm font-extrabold shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
                    <AiFillInfoCircle />
                    <span className="ml-2 uppercase">Primary</span>
                  </h3>
                  <h1 className="text-2xl max-md:text-sm font-extrabold text-primary-500 with-green-line">
                    <p className="mx-4 max-md:text-[50%]">2010 - 2013</p>
                  </h1>
                  <p className="mx-5 my-2 max-md:text-xs  italic shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
                    Marangal National High School, San Jose Del Monte Bulacan,
                    Ph
                  </p>
                </li>
              </ul>
            </div>
            {/* Second Container */}
            <div className="w-full sm:w-1/2 my-2 mx-2 ">
              <ul>
                <h1 className="text-2xl max-md:text-sm font-extrabold text-primary-500 with-green-line">
                  Credentials
                </h1>
                <li className="mx-4">
                  <h3 className="flex my-2 max-md:text-xs  items-center text-green-300 text-sm font-extrabold shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
                    <AiFillInfoCircle />
                    <span className="ml-2 uppercase">
                      Sap Business One Certificate
                    </span>
                  </h3>
                  <div className="w-[30%] mx-5  my-1 text-center bg-gray-500 rounded-md">
                    <p className="mx-4 max-md:text-[50%]">March 1, 2021</p>
                  </div>
                  <p className="mx-5 my-2 italic max-md:text-xs  shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
                    STI San Jose Del Monte Bulacan, Ph
                  </p>
                </li>
                <li className="mx-4">
                  <h3 className="flex my-2 max-md:text-[60%]  items-center text-green-300 text-sm font-extrabold shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
                    <AiFillInfoCircle />
                    <span className="ml-2 uppercase">
                      SAP BUSINESS ONE (FINANCIAL AND LOGISTIC)
                    </span>
                  </h3>
                  <div className="w-[30%] mx-5 my-1 text-center bg-gray-500 rounded-md">
                    <p className="mx-4 max-md:text-[50%]">March 1, 2021</p>
                  </div>
                  <p className="mx-5 my-2 max-md:text-xs  italic shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
                    STI San Jose Del Monte Bulacan, Ph
                  </p>
                </li>
                <li className="mx-4">
                  <h3 className="flex my-2 max-md:text-xs  items-center text-green-300 text-sm font-extrabold shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
                    <AiFillInfoCircle />
                    <span className="ml-2 uppercase">
                      MICROSOFT (AZURE AI FUNDAMENTALS)
                    </span>
                  </h3>
                  <div className="w-[30%] mx-5 my-1 text-center bg-gray-500 rounded-md">
                    <p className="mx-4 max-md:text-xs">2021</p>
                  </div>
                  <p className="mx-5 my-2 max-md:text-xs  italic shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
                    Cloud Ready Ltd
                  </p>
                </li>
                <li className="mx-4">
                  <h3 className="flex my-2 max-md:text-[60%] items-center text-green-300 text-sm font-extrabold shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
                    <AiFillInfoCircle />
                    <span className="ml-2 uppercase">
                      CERTIFICATE OF COMPLETION [INTERN] (WEB DEV)
                    </span>
                  </h3>
                  <div className="w-[30%] mx-5 my-1 text-center bg-gray-500 rounded-md">
                    <p className="mx-4 max-md:text-xs ">June 13, 2023</p>
                  </div>
                  <p className="mx-5 my-2 max-md:text-xs  italic shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
                    Weberlly
                  </p>
                </li>
                <h1 className="text-2xl max-md:text-sm font-extrabold text-primary-500 with-green-line">
                  Awards
                </h1>
                <li className="mx-4">
                  <h3 className="flex my-2 max-md:text-xs  items-center text-green-300 text-sm font-extrabold shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
                    <AiFillInfoCircle />
                    <span className="ml-2 uppercase">
                      DEAN&apos;S HONOR LIST
                    </span>
                  </h3>
                  <div className="w-[30%] mx-5 my-1 text-center bg-gray-500 rounded-md">
                    <p className="mx-4 max-md:text-xs">Jun, 2022</p>
                  </div>
                  <p className="mx-5 my-2 max-md:text-xs  italic shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
                    STI San Jose Del Monte Bulacan, Ph
                  </p>
                </li>
                <li className="mx-4">
                  <h3 className="flex my-2 max-md:text-xs  items-center text-green-300 text-sm font-extrabold shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
                    <AiFillInfoCircle />
                    <span className="ml-2 uppercase">
                      DEAN&apos;S HONOR LIST
                    </span>
                  </h3>
                  <div className="w-[30%] mx-5 my-1 text-center bg-gray-500 rounded-md">
                    <p className="mx-4 text-xs lg:text-base">Jun, 2022</p>
                  </div>
                  <p className="mx-5 my-2 max-md:text-xs  italic shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
                    STI San Jose Del Monte Bulacan, Ph
                  </p>
                </li>
                <li className="mx-4">
                  <h3 className="flex my-2 max-md:text-xs  items-center text-green-300 text-sm font-extrabold shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
                    <AiFillInfoCircle />
                    <span className="ml-2 uppercase">
                      BEST IN COMMUNICATION CHAMPION
                    </span>
                  </h3>
                  <h3 className="flex my-2 max-md:text-xs  items-center text-green-300 text-sm font-extrabold shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
                    <AiFillInfoCircle />
                    <span className="ml-2 uppercase">
                      BEST IN IMPLEMENTATION CHAMPION
                    </span>
                  </h3>
                  <h3 className="flex my-2 max-md:text-xs  items-center text-green-300 text-sm font-extrabold shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
                    <AiFillInfoCircle />
                    <span className="ml-2 uppercase">
                      BEST IN COLLEGE THEME CHAMPION
                    </span>
                  </h3>
                  <h3 className="flex my-2 max-md:text-xs  items-center text-green-300 text-sm font-extrabold shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
                    <AiFillInfoCircle />
                    <span className="ml-2 uppercase">
                      BEST OVERALL EXHIBIT CHAMPION
                    </span>
                  </h3>
                  <div className="w-[30%] mx-5 my-1 text-center bg-gray-500 rounded-md">
                    <p className="mx-4 text-xs lg:text-base">Jan, 2023</p>
                  </div>
                  <p className="mx-5 my-2  max-md:text-xs  italic shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
                    STI San Jose Del Monte Bulacan, Ph
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <PdfShow />
        </div>
      </AnimatePresence>
    </section>
  );
}
