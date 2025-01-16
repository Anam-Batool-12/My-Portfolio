import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const leftTextRef = useRef(null);
  const iconsRef = useRef([]);
  const containerRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      leftTextRef.current.children,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 55%",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      iconsRef.current,
      {
        opacity: 0,
        scale: 0.5,
      },
      {
        opacity: 1,
        scale: 1,
        stagger: 0.3,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-screen bg-black flex items-center justify-center p-11"
    >
      <div className="flex flex-col sm:flex-row w-[80%] sm:w-[90%] h-[70%] sm:h-[60%] justify-between items-center gap-12">
        <div className="left-c text-center sm:text-left">
          <h1
            className="text-white uppercase text-[3rem] sm:text-[5rem] leading-tight relative"
            ref={leftTextRef}
          >
            <span className="block -translate-x-[20px]">Let's</span>
            <span className="block translate-x-[40px]">Get in</span>
            <span className="block -translate-x-[20px]">Touch</span>
          </h1>
        </div>
        <div className="right-c flex flex-col justify-evenly items-center bg-transparent shadow-xl w-[260px] sm:w-[300px] h-[350px] sm:h-[400px]">
          <h2 className="text-white text-xl sm:text-2xl font-semibold">
            Connect With Me
          </h2>
          <div className="w-full h-px bg-white my-4"></div>
          <div className="flex gap-6 justify-center sm:justify-start">
            <a
              href="https://github.com/Anam-Batool-12"
              className="text-white hover:text-gray-300 transition duration-300"
              ref={(el) => (iconsRef.current[0] = el)}
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a
              href="https://www.linkedin.com/in/anam-batool-6a7018345"
              className="text-white hover:text-gray-300 transition duration-300"
              ref={(el) => (iconsRef.current[1] = el)}
            >
              <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
            </a>
            <a
              href="mailto:anamb8631@gmail.com"
              className="text-white hover:text-gray-300 transition duration-300"
              ref={(el) => (iconsRef.current[2] = el)}
            >
              <FontAwesomeIcon icon={faMessage} size="2x" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
