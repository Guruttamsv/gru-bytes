import React, { useState } from "react";
import "../CSS/HomePage/Ticker.css";

const Ticker: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const bio =
    "I am a BSc Computer Science (AI) graduate with experience in software development and quality assurance. I have a passion for building innovative solutions and continuously improving my skills in the tech industry. The sun dipped below the horizon, casting a warm golden glow over the quiet town. As the sky shifted from orange to deep indigo, the first stars began to twinkle, faintly illuminating the winding cobblestone streets. The air was filled with the scent of blooming jasmine, and a gentle breeze rustled the leaves of the ancient oak trees that lined the square. In the distance, the soft murmur of a fountain could be heard, mingling with the occasional laughter of children playing nearby. It was one of those evenings that seemed to suspend time, where the world felt both infinite and fleeting, wrapped in the comforting embrace of twilight.";

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="ticker-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`ticker-text ${isHovered ? "hovered" : ""}`}>
        {bio}
      </div>
    </div>
  );
};

export default Ticker;
