import React, { useEffect, useRef } from "react";
import "../pagesCSS/IconsPage.css";
import FloatingIcons from "../components/IconsPage/FloatingIcons";

const IconsPage: React.FC = () => {
  const subHeadingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
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
            observer.unobserve(entry.target); // Stop observing after animation
          }
        });
      },
      { threshold: 0.1 }
    );

    if (subHeadingRef.current) {
      observer.observe(subHeadingRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="icons-page-container">
      <div className="sub-heading" ref={subHeadingRef}>
        {"Why Me".split("").map((char, index) => (
          <span key={index} className="letter">
            {char}
          </span>
        ))}
      </div>
      <FloatingIcons />
    </div>
  );
};

export default IconsPage;
