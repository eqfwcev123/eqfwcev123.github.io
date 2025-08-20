'use client';

import React from 'react';
import Image from 'next/image';

const Hero = () => {
  const handleDownloadCV = () => {
    const cvPath = '/robert_cv_latest.pdf';
    
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
      className="relative flex flex-col items-center text-center min-h-screen w-full py-16 md:py-24 px-4 text-white"
    >
      {/* Background image with Material Design surface treatment */}
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
      {/* Material Design scrim overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60 z-0"></div>

      {/* Main content container with Material Design spacing */}
      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
        {/* Profile image with Material Design elevation */}
        <div className="relative mb-6 md:mb-8">
          <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden ring-4 ring-white/20 shadow-2xl backdrop-blur-sm">
            <Image
              src="/self2.webp"
              alt="Profile photo"
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              style={{
                objectPosition: 'center 35%',
              }}
            />
          </div>
          {/* Material Design floating indicator */}
          <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div>

        {/* Typography following Material Design type scale */}
        <div className="space-y-4 md:space-y-6 text-center">
          <p className="text-sm md:text-base font-medium text-white/80 tracking-wide uppercase">
            HI! I&apos;m Robert 👋
          </p>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            <span className="block">Software Engineer</span>
            <span className="block text-blue-300">in Hong Kong</span>
          </h1>
          
          <p className="max-w-2xl text-base md:text-lg leading-relaxed text-white/90 mx-auto px-4">
            I specialize in backend and mobile development, crafting reliable server-side logic, APIs, and database solutions to drive application functionality.
          </p>
        </div>

        {/* Material Design button with proper elevation and states */}
        <div className="mt-8 md:mt-12">
          <button 
            onClick={handleDownloadCV}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full border-2 border-white/30 text-white backdrop-blur-sm bg-white/10 hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/25 transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-2xl active:scale-95"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <span>Download CV</span>
              <svg 
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </span>
            
            {/* Material Design ripple effect */}
            <div className="absolute inset-0 rounded-full bg-white opacity-0 group-active:opacity-30 transition-opacity duration-150"></div>
          </button>
        </div>

        {/* Material Design floating action hint */}
        <div className="mt-12 md:mt-16 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 