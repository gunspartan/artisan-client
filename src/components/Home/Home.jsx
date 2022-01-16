import React from "react";
import Hero from "./Hero";
import HomeContent from "./HomeContent";
import PortfolioPreview from "./PortfolioPreview";
import HomeEnd from "./HomeEnd";

function Home() {
  return (
    <div className=" home">
      <div className="container landing">
        <Hero />
        <HomeContent />
      </div>
      <div className="dark-bg preview">
        <PortfolioPreview />
        <HomeEnd />
      </div>
    </div>
  );
}

export default Home;
