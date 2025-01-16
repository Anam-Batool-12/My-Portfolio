import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const boxRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Scale animation for the box
    gsap.fromTo(
      boxRef.current,
      { scale: 1 },
      {
        scale: 1.5,
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      }
    );

    // Fade-in animation for text content inside the box
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top center",
          end: "center center",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="w-full h-full bg-black">
      <h1 className="about-h1">About Me</h1>
      <div ref={boxRef} className="box-section">
        <div className=" outline "></div>
        <div className=" top-circle"></div>
        <div className=" bottom-circle"></div>
        <div ref={textRef}
          className="text-area">
          <h2 className="about-h2">Welcome</h2>
          <p className="about-p">
            Hi there! I’m a front-end developer passionate about crafting
            responsive, visually engaging websites. From building a stylish
            coffee website to creating interactive animations with GSAP, I love
            blending creativity with functionality. I’m currently honing my
            skills in React and enjoy exploring tools like Figma to enhance my
            designs. Every project I take on is an opportunity to grow and
            create something impactful. Let’s build something amazing together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;










