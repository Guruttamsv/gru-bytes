import React, { useState, useEffect } from "react";
import Spline from "@splinetool/react-spline";
import "../CSS/HomePage/Hero.css";

const Hero: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 479);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 479);
    };

    handleResize(); // Set initial value

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={isMobile ? "hero-mobile-container" : "hero-container"}>
      <Spline
        scene={
          isMobile
            ? "https://prod.spline.design/wOZrH8Syt9tt-bGk/scene.splinecode"
            : "https://prod.spline.design/sblpw8btgW8Lsdlc/scene.splinecode"
        }
      />
    </div>
  );
};

export default Hero;
