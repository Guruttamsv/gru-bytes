import React from "react";
import Ticker from "../components/HomePage/Ticker"; // Import the Ticker component
import "../pagesCSS/HomePage.css"; // Assuming you have HomePage.css for other styles
import TypingEffect from "../components/HomePage/Typed"; // Import the TypingEffect component
import Hero from "../components/HomePage/Hero";

const HomePage: React.FC = () => {
  return (
    <div>
      <Ticker /> 
      <TypingEffect /> 
      <Hero />
    </div>
  );
};

export default HomePage;
