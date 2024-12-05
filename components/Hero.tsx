import React from 'react';

const Hero = () => {
  return (
    <div
      className="relative w-full h-[300vh] bg-center bg-no-repeat mx-auto"
      style={{
        backgroundImage: "url('/img7.jpg')",
        backgroundSize: "cover",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col text-white px-10 pt-[400px] space-y-24">
        
        {/* Subtitle */}
        <p className="text-lg md:text-2xl max-w-xl text-left ">
          We blend creativity, strategy, and technology to craft impactful digital solutions that 
          look stunning, engage users and drive results.
        </p>

        <h1 className='text-[14rem] leading-[204px]'>
          <span className='text-left'>Design,</span><br/>
          <span className='text-center'>Develop,</span><br/>
          <span className='text-right'>Experience.</span>
        </h1>


        <p className="text-lg md:text-xl max-w-2xl">
          Our mission is to bring your vision to life with sleek designs, seemless functionality, and a user-centered approach.
          From responsive websites to interactive interfaces, we ensure your digital identity stands out in today's competitive landscape.
        </p>
       
      </div>
    </div>
  );
};

export default Hero;
