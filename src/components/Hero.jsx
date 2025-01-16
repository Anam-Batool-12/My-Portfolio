
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Text from './Text';
const Hero= () => {
  const leftPanel = useRef(null);
  const rightPanel = useRef(null);
  const sliderContainer = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline();
    timeline
      .to(leftPanel.current, {
        x: "-100%", 
        duration: 1.5,
        ease: "power2.inOut",
      })
      .to(rightPanel.current, {
        x: "100%", 
        duration: 1.5,
        ease: "power2.inOut",
      }, "<") 
      .to(sliderContainer.current, {
        height: "0", 
        duration: 1,
        ease: "power2.inOut",
      }, "-=0.5"); 
  }, []);

  return (
   
    <div className="relative w-full h-screen bg-black overflow-hidden">
      <div 
        ref={sliderContainer} 
        className="absolute top-0 left-0 w-full h-full flex flex-col sm:flex-row"
      >
        <div 
          ref={leftPanel} 
          className="w-full sm:w-1/2 h-full bg-white"
        ></div>
         <div 
          ref={rightPanel} 
          className="w-full sm:w-1/2 h-full bg-white"
        ></div>
      </div>
      <div className="relative z-10 p-6 sm:p-10">
        <Text />
      </div>
     
    </div>
  );
};

export default Hero;