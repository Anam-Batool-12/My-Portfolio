import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import js from "../assets/images/js.png";
import react from "../assets/images/react.png";
import tailwind from "../assets/images/tailwind.png";
import gsap1 from "../assets/images/gsap.png";
import git from "../assets/images/git.png";
import py from "../assets/images/py.png";
const Skills = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const icons = skillsRef.current.querySelectorAll(".skill-icon");
    gsap.fromTo(
      icons,
      { opacity: 0, scale: 0 },
      {
        opacity: 1,
        scale: 1,
        stagger: 0.2,
        duration: 1.5,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div
      ref={skillsRef}
      className="relative flex justify-center items-center min-h-screen overflow-hidden py-32"
    >
      {/* Center Text */}
      <h1 className=" uppercase text-4xl md:text-6xl font-bold text-white absolute">
        My Skills
      </h1>

      {/* Icons in a circular layout */}
      <div className="relative w-[800px] h-[680px]">
        {/* Top Icon */}
        <div className="skill-icon absolute top-4 left-1/2 transform -translate-x-1/2">
          <img src={html} alt="HTML" className="w-24 h-24 m-4" />
        </div>

        {/* Top Left Icon */}
        <div className="skill-icon absolute top-1/4 left-[20%] transform -translate-x-1/2 -translate-y-1/2">
          <img src={css} alt="CSS" className="w-24 h-24 m-4" />
        </div>

        {/* Top Right Icon */}
        <div className="skill-icon absolute top-1/4 right-[20%] transform translate-x-1/2 -translate-y-1/2">
          <img src={js} alt="JavaScript" className="w-24 h-24 m-4" />
        </div>

        {/* Left Icon */}
        <div className="skill-icon absolute top-1/2 left-1 transform -translate-y-1/2">
          <img src={react} alt="React" className="w-24 h-24 mr-60" />
        </div>

        {/* Bottom Left Icon */}
        <div className="skill-icon absolute bottom-1/4 left-[12%] transform -translate-x-1/2 translate-y-1/2">
          <img src={tailwind} alt="tailwind" className="w-24 h-24 m-4" />
        </div>

        {/* Bottom Right Icon */}
        <div className="skill-icon absolute bottom-1/4 right-[18%] transform translate-x-1/2 translate-y-1/2">
          <img src={gsap1} alt="GSAP" className="w-24 h-24 m-4" />
        </div>

        {/* Right Icon */}
        <div className="skill-icon absolute top-1/2 right-2 transform -translate-y-1/2 text-white">
          <img src={git} alt="Git" className="w-24 h-24 m-2" />
        </div>

        {/* Bottom Icon */}
        <div className="skill-icon absolute bottom-6 left-1/2 transform -translate-x-1/2">
          <img src={py} alt="PYTHON" className="w-24 h-24 m-4" />
        </div>
      </div>
    </div>
  );
};

export default Skills;













