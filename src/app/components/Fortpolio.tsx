import React, { useState } from "react";
import fortpolio, { Props } from "./Lib/fortpolio";
import Image from "next/image";

export default function Portfolio() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  // Filter the portfolio items based on the selected type
  const filteredPortfolio =
    selectedFilter === "all"
      ? fortpolio
      : fortpolio.filter((item) => item.type === selectedFilter);

  // Function to handle filter button click
  const handleFilterClick = (filterType: string) => {
    setSelectedFilter(filterType);
  };

  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-title relative">
          <p className="cool-subtitle uppercase">
            Portfolio
            <span className="bg-green-500 absolute rounded-full ml-4 left-20 top-3 bottom-0 w-20 h-[4%]"></span>
          </p>
          <h1 className="text-3xl font-extrabold text-primary-500 with-green-line">
            MY WORKS
          </h1>
        </div>

        <div className="text-center ">
          {/* Filter buttons */}
          <div className=" mt-4">
            <button
              onClick={() => handleFilterClick("all")}
              className={`mr-2 uppercase shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out ${
                selectedFilter === "all"
                  ? "bg-primary-500 text-white"
                  : "bg-gray-300 text-gray-700"
              } px-3 py-2 rounded-lg hover:bg-primary-600 transition duration-300`}
            >
              All
            </button>
            <button
              onClick={() => handleFilterClick("website")}
              className={`mr-2 uppercase shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out ${
                selectedFilter === "website"
                  ? "bg-primary-500 text-white"
                  : "bg-gray-300 text-gray-700"
              } px-3 py-2 rounded-lg hover:bg-primary-600 transition duration-300`}
            >
              Websites
            </button>
            <button
              onClick={() => handleFilterClick("application")}
              className={`mr-2 uppercase shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out ${
                selectedFilter === "application"
                  ? "bg-primary-500 text-white"
                  : "bg-gray-300 text-gray-700"
              } px-3 py-2 rounded-lg hover:bg-primary-600 transition duration-300`}
            >
              Application
            </button>
            <button
              onClick={() => handleFilterClick("software")}
              className={`mr-2 uppercase shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out ${
                selectedFilter === "software"
                  ? "bg-primary-500 text-white"
                  : "bg-gray-300 text-gray-700"
              } px-3 py-2 rounded-lg hover:bg-primary-600 transition duration-300`}
            >
              Software
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className=" max-w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 ">
          {filteredPortfolio.map((item: Props, index: number) => (
            <div
              key={item.id}
              className="bg-transparent shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out"
              style={{ height: "100%" }}
            >
              {/* Image */}
              <div style={{ height: "350px" }}>
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={284}
                  height={396}
                  className="rounded-lg mt-2 shadow-cool"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-primary-500">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-600">{item.description}</p>
                <a
                  href={item.link}
                  className="mt-4 inline-block bg-primary-500 hover:bg-primary-600 text-white py-2 px-4 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
