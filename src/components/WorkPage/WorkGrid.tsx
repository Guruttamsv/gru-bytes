import React, { useState, useEffect } from "react";
import Spline from "@splinetool/react-spline";
import "../CSS/WorkPage/WorkGrid.css";

const WorkGrid: React.FC = () => {
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
    <div className="work-grid">
      <Spline
        scene={
          isMobile
            ? "https://prod.spline.design/Cij5IwvD4GoA4Hao/scene.splinecode"
            : "https://prod.spline.design/K9mG8FCYeR1O4CAM/scene.splinecode"
        }
      />
    </div>
  );
};

export default WorkGrid;
