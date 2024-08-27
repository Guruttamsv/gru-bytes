import React, { useEffect, useRef} from "react";
import WorkGrid from "../components/WorkPage/WorkGrid";
import "../pagesCSS/WorkPage.css";

const WorkPage: React.FC = () => {
  const subHeadingRef = useRef<HTMLDivElement>(null);
  const workGridRef = useRef<HTMLDivElement>(null);

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
        <WorkGrid />
      </div>
    </div>
  );
};

export default WorkPage;
