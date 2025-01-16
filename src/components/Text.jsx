import React from 'react';
import Circle from './Circle';

const Text = () => {
  return (
    <div className="relative flex justify-center items-center h-screen">
      {/* Left Container */}
      <div className="left-container-side ">
        <p className="text-[1.5rem] sm:text-[2rem]">Hi! I Am Anam Batool.</p>
        <h1 className="text-[2rem] sm:text-[3rem] font-extrabold">Frontend Website Developer</h1>
        <h2 className="text-[2rem] sm:text-[3rem] font-semibold">UI Designer</h2>
      </div>

      {/* Circle Component */}
      <div className="right-container-side">
        <Circle />
       
      </div>
    </div>
  );
};

export default Text;
