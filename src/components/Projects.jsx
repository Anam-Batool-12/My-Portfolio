import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import img1 from "../assets/images/slide.png";
import img2 from "../assets/images/space.png";
import img3 from "../assets/images/landing.png";
import img4 from "../assets/images/animal.png";
import img5 from "../assets/images/navbar.png";
import img6 from "../assets/images/contact.png";
import img7 from "../assets/images/coffee.png";
import img8 from "../assets/images/carousel.png";
import img9 from "../assets/images/earth.png";
import img10 from "../assets/images/menu.png";

const Projects = () => {
  const galleryRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const images = galleryRef.current.querySelectorAll("img");
    const imgGallery = galleryRef.current;

    const animation = gsap.timeline();

    images.forEach((img, i) => {
      gsap.set(img, { y: `${imgGallery.offsetHeight * i}` });

      animation.to(
        img,
        {
          y: `-${imgGallery.offsetHeight + img.offsetHeight * 1.5}`,
          duration: (i + 1) * 5,
          ease: "none",
        },
        0
      );
    });

    ScrollTrigger.create({
      animation: animation,
      trigger: imgGallery,
      start: "top top",
      end: `+=${images.length * imgGallery.offsetHeight}`,
      pin: true,
      scrub: 1,
      markers: false, 
    });

    return () => {
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);

  return (
    <div
      className="relative w-full h-screen text-gray-100 flex flex-col items-center justify-start overflow-hidden "
      ref={galleryRef}
    >
      <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-center mt-12">
        My Projects
      </h1>
      <div className="absolute bottom-12 w-11/12 md:w-3/5 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
          What I've Built
        </h2>
        <p className="text-sm md:text-base lg:text-lg">
          I have worked on a variety of projects that showcase my expertise in
          front-end development, responsive design, and interactive user
          experiences. Each project reflects my passion for creating visually
          appealing, functional, and user-friendly web applications.
        </p>
      </div>
      {[img1, img2, img3, img4, img5, img6, img7, img8, img9, img10].map(
        (img, i) => (
          <img
            key={i}
            src={img}
            alt={`project_${i + 1}`}
            className={`m-14 absolute w-64 h-64 md:w-80 md:h-80 object-cover shadow-xl rounded-md ${
              i % 2 === 0 ? "left-10" : "right-10"
            } rotate-${i % 2 === 0 ? "[5deg]" : "[-5deg]"} bottom-[-65%]`}
          />
        )
      )}
    </div>
  );
};

export default Projects;
