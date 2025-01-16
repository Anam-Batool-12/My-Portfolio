
import React, { useEffect } from 'react';
import './circle.css'; 

const Circle = () => {
  useEffect(() => {
    const text = document.querySelector('.text-box p');
    if (text) {
      text.innerHTML = text.innerText
        .split("")
        .map(
          (char, i) =>
            `<span style="transform:rotate(${i * 10.2}deg)">${char}</span>`
        )
        .join("");
    }
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="circle relative w-[300px] h-[300px] rounded-[50%] flex justify-center items-center">
        <div className="img-box absolute w-[300px] h-[300px] rounded-[50%]">
          
        </div>
        <div className="text-box absolute w-full h-full">
          <p>HTML*CSS*JS*REACT.JS*GSAP*TAILWIND*</p>
        </div>
      </div>
    </div>
  );
};

export default Circle;
