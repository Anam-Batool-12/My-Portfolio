// import html from "../assets/images/html.png";
// import css from "../assets/images/css.png";
// import js from "../assets/images/js.png";
// import react from "../assets/images/react.png";
// import tailwind from "../assets/images/tailwind.png";
// import gsap1 from "../assets/images/gsap.png";
// import git from "../assets/images/git.png";
// import py from "../assets/images/py.png";

// const SkillsMobile = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white lg:hidden">
//       <h1 className="text-4xl font-bold mb-8">My Skills</h1>
//       {/* Top Row: 4 Icons */}
//       <div className="grid grid-cols-4 gap-4 mb-4">
//         <img src={html} alt="HTML" className="w-16 h-16 mx-auto" />
//         <img src={css} alt="CSS" className="w-16 h-16 mx-auto" />
//         <img src={js} alt="JavaScript" className="w-16 h-16 mx-auto" />
//         <img src={react} alt="React" className="w-16 h-16 mx-auto" />
//       </div>
//       {/* Middle Row: 3 Icons */}
//       <div className="grid grid-cols-3 gap-4 mb-4">
//         <img src={tailwind} alt="Tailwind" className="w-16 h-16 mx-auto" />
//         <img src={gsap1} alt="GSAP" className="w-16 h-16 mx-auto" />
//         <img src={git} alt="Git" className="w-16 h-16 mx-auto" />
//       </div>
//       {/* Bottom Row: 1 Icon */}
//       <div className="flex justify-center">
//         <img src={py} alt="Python" className="w-16 h-16 mx-auto" />
//       </div>
//     </div>
//   );
// };

// export default SkillsMobile;




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

const SkillsMobile = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const icons = skillsRef.current.querySelectorAll(".skill-icon");

    // GSAP Animation
    gsap.fromTo(
      icons,
      { opacity: 0, scale: 0 }, // Initial state: hidden and scaled down
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "back.out(1.7)", // Smooth pop-out effect
        stagger: 0.2, // Staggered animation for each icon
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 90%", // Trigger animation when the component is near the viewport
          end: "bottom 10%",
          toggleActions: "play none none reverse", // Replay animation on scroll-up
        },
      }
    );
  }, []);

  return (
    <div
      ref={skillsRef}
      className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white lg:hidden"
    >
      <h1 className="text-4xl font-bold mb-8">My Skills</h1>
      {/* Top Row: 4 Icons */}
      <div className="grid grid-cols-4 gap-4 mb-4">
        <img src={html} alt="HTML" className="w-16 h-16 mx-auto skill-icon" />
        <img src={css} alt="CSS" className="w-16 h-16 mx-auto skill-icon" />
        <img src={js} alt="JavaScript" className="w-16 h-16 mx-auto skill-icon" />
        <img src={react} alt="React" className="w-16 h-16 mx-auto skill-icon" />
      </div>
      {/* Middle Row: 3 Icons */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        <img
          src={tailwind}
          alt="Tailwind"
          className="w-16 h-16 mx-auto skill-icon"
        />
        <img src={gsap1} alt="GSAP" className="w-16 h-16 mx-auto skill-icon" />
        <img src={git} alt="Git" className="w-16 h-16 mx-auto skill-icon" />
      </div>
      {/* Bottom Row: 1 Icon */}
      <div className="flex justify-center">
        <img src={py} alt="Python" className="w-16 h-16 mx-auto skill-icon" />
      </div>
    </div>
  );
};

export default SkillsMobile;
