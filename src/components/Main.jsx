import React, { useEffect } from 'react';
import gsap from 'gsap';
import arrow from '../assets/icons/arrow.png';

const Marquee = ({ text, image }) => {
  return (
    <div className="mar">
      <h1 className="text-[100px] font-extrabold">{text}</h1>
      <img src={image} alt="arrow" className="h-[200px]" />
    </div>
  );
};

const Main = () => {
  useEffect(() => {
    const animation = () => {
      window.addEventListener("wheel", function (dets) {
        if (dets.deltaY > 0) {
          gsap.to(".mar", {
            transform: "translateX(-200%)",
            duration: 2,
            repeat: -1,
            ease: "none",
          });
          gsap.to(".mar img", {
            rotation: "+=180",
            duration: 0.2,
            ease: "none",
          });
        } else {
          gsap.to(".mar", {
            transform: "translateX(0%)",
            duration: 4,
            repeat: -1,
            ease: "none",
          });
          gsap.to(".mar img", {
            rotation: "+=180",
            duration: 0.2,
            ease: "none",
          });
        }
      });
    };
    animation();

    return () => {
      window.removeEventListener("wheel", animation);
    };
  }, []);

  return (
    <div className="bg-white">
      <div className="box">
        <div className="move overflow-hidden flex p-4 bg-green-800 text-gray-200">
          <Marquee text="Development Designing" image={arrow} />
          <Marquee text="Development Designing" image={arrow} />
          <Marquee text="Development Designing" image={arrow} />
          <Marquee text="Development Designing" image={arrow} />
        </div>
      </div>
    </div>
  );
};

export default Main;
