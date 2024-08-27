import React, { useState, useEffect } from "react";
import Spline from "@splinetool/react-spline";
import "../CSS/HomePage/Hero.css";

const Hero: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 479);
        };

        // Set the initial value
        handleResize();

        // Update value on window resize
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
      <div className="hero-container">
        {isMobile ? (
          <Spline scene="https://prod.spline.design/wOZrH8Syt9tt-bGk/scene.splinecode" />
        ) : (
          <Spline scene="https://draft.spline.design/aQD4tblkjjSaFZJT/scene.splinecode" />
        )}
      </div>
    );
};

export default Hero;