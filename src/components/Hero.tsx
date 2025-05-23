'use client';

import React from 'react';
import Image from 'next/image';

const Hero = () => {
  const handleDownloadCV = () => {
    const cvPath = '/robert_cv.pdf';
    
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = 'Robert_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="about"
      className="relative flex flex-col items-center text-center h-full w-full py-32 px-4 text-white"
    >
      {/* Background image with proper optimization */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/hk.webp"
          alt="Hong Kong skyline"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          style={{
            objectPosition: 'center',
          }}
        />
      </div>
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="relative w-32 h-32 rounded-full mb-4 border-2 border-white shadow-lg overflow-hidden">
          <Image
            src="/self.webp"
            alt="Profile photo"
            fill
            className="object-cover"
            style={{
              objectPosition: 'center 35%',
            }}
          />
        </div>
        <p className="text-sm mb-1">HI! I&apos;m Robert 👋</p>
        <h1 className="text-4xl font-bold mb-2">Software Engineer <br /> in Hong Kong</h1>
        <p className="max-w-md text-gray-200 mb-6">
          I specialize in backend development, crafting reliable server-side logic, APIs, and database solutions to drive application functionality.
        </p>
        <div className="flex space-x-4">
          <button 
            onClick={handleDownloadCV}
            className="border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition-colors"
          >
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero; 