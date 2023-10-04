import React from "react";

export default function Portfolio() {
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
        {/* Replace this comment with your portfolio items/cards */}
        {/* Example:
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <PortfolioCard title="Project 1" description="Description of Project 1" />
          <PortfolioCard title="Project 2" description="Description of Project 2" />
          <PortfolioCard title="Project 3" description="Description of Project 3" />
        </div>
        */}
      </div>
    </section>
  );
}
