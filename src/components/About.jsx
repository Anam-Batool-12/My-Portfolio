import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const boxRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const boxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 0.5,
      },
    });
    boxTimeline
      .fromTo(
        boxRef.current,
        { scale: 0.8, rotation: -15, opacity: 0 },
        { scale: 1, rotation: 0, opacity: 1, ease: "power4.out" }
      );

    const textTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top center",
        end: "center center",
        scrub: 0.5,
      },
    });
    textTimeline
      .fromTo(
        textRef.current,
        { opacity: 0, filter: "blur(10px)" },
        { opacity: 1, filter: "blur(0px)", stagger: 0.1, ease: "power4.out" }
      );
  }, []);

  return (
    <div className="w-full h-full bg-black">
      <h1 className="about-h1">About Me</h1>
      <div ref={boxRef} className="box-section">
        <div className="outline"></div>
        <div className="top-circle"></div>
        <div className="bottom-circle"></div>
        <div ref={textRef} className="text-area">
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
