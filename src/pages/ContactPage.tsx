import React, { useEffect, useRef } from "react";
import "../pagesCSS/ContactPage.css";

const ContactPage: React.FC = () => {
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
    
    <div className="contact-page">
      <div className="subheading-container">
        <div className="sub-heading" ref={subHeadingRef}>
          {"Get in Touch".split("").map((char, index) => (
            <span key={index} className="letter">
              {char}
            </span>
          ))}
        </div>
      </div>
      <div className="content-container">
        <p>
          If you’d like to collaborate on a project, feel free to reach out to
          me. I am always open to discussing new ideas or opportunities. Here’s
          how you can contact me:
        </p>

        <div className="contact-details">
          <div className="contact-info">
            <h3>Contact Info</h3>
            <p>
              <strong>Email:</strong> example@gmail.com
            </p>
            <p>
              <strong>Phone:</strong> +1 234 567 890
            </p>
            <p>
              <strong>Address:</strong> 1234 Main St, City, Country
            </p>
          </div>

          <div className="contact-form">
            <h3>Send a Message</h3>
            <form>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
              ></textarea>

              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
