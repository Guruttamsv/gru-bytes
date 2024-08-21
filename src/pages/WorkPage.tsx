import React, { useEffect, useRef, useState } from "react";
import WorkGrid from "../components/WorkPage/WorkGrid";
import "../pagesCSS/WorkPage.css";

const WorkPage: React.FC = () => {
  const subHeadingRef = useRef<HTMLDivElement>(null);
  const workGridRef = useRef<HTMLDivElement>(null);
  const [showWorkGrid, setShowWorkGrid] = useState(false);

  useEffect(() => {
    const subHeadingObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (subHeadingRef.current) {
              const letters = subHeadingRef.current.querySelectorAll(".letter");
              letters.forEach((letter, index) => {
                setTimeout(() => {
                  letter.classList.add("show");
                }, index * 100); // Adjust timing for the effect
              });
            }
            subHeadingObserver.unobserve(entry.target); // Stop observing after animation
          }
        });
      },
      { threshold: 0.1 }
    );

    if (subHeadingRef.current) {
      subHeadingObserver.observe(subHeadingRef.current);
    }

    return () => {
      subHeadingObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const workGridObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowWorkGrid(true); // Render WorkGrid when it comes into view
            workGridObserver.unobserve(entry.target); // Stop observing after rendering
          }
        });
      },
      { threshold: 0.1 }
    );

    if (workGridRef.current) {
      workGridObserver.observe(workGridRef.current);
    }

    return () => {
      workGridObserver.disconnect();
    };
  }, []);

  return (
    <div className="work-page-container">
      <div className="sub-heading" ref={subHeadingRef}>
        {"My Work".split("").map((char, index) => (
          <span key={index} className="letter">
            {char}
          </span>
        ))}
      </div>

      <div ref={workGridRef} style={{ minHeight: "200px" }}>
        {showWorkGrid && <WorkGrid />}
      </div>
    </div>
  );
};

export default WorkPage;
