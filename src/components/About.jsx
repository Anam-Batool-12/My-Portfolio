import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const boxRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    ScrollTrigger.matchMedia({
      // Desktop
      "(min-width: 768px)": () => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: boxRef.current,
              start: "top center",
              end: "bottom center",
              scrub: 0.5,
            },
          })
          .fromTo(
            boxRef.current,
            { scale: 0.8, rotation: -15, opacity: 0 },
            { scale: 1, rotation: 0, opacity: 1, ease: "power4.out" }
          );
      },

      // Mobile
      "(max-width: 767px)": () => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: boxRef.current,
              start: "top 80%",
              end: "center 60%",
              scrub: 0.5,
            },
          })
          .fromTo(
            boxRef.current,
            { scale: 0.9, rotation: -10, opacity: 0 },
            { scale: 1, rotation: 0, opacity: 1, ease: "power4.out" }
          );
      },
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top center",
          end: "center center",
          scrub: 0.5,
        },
      })
      .fromTo(
        textRef.current,
        { opacity: 0, filter: "blur(10px)" },
        { opacity: 1, filter: "blur(0px)", stagger: 0.1, ease: "power4.out" }
      );
  }, []);

  return (
    <div className="w-full min-h-screen bg-black flex flex-col items-center justify-center px-4 sm:px-8">
      <h1 className="text-3xl sm:text-5xl lg:text-[5rem] lg:uppercase font-bold text-white text-center py-8">
        About Me
      </h1>
      <div
        ref={boxRef}
        className="box-section relative max-w-screen-sm w-full bg-gray-800 p-6 sm:p-10 rounded-lg shadow-lg"
      >
        <div className="outline"></div>
        <div className="top-circle"></div>
        <div className="bottom-circle"></div>
        <div ref={textRef} className="text-area text-center">
          <h2 className="text-2xl sm:text-3xl text-white font-semibold mb-4">
            Welcome
          </h2>
          <p className="text-sm sm:text-base text-white leading-6">
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
