import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer id="contact" className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-20 px-4 w-full overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.3) 0%, transparent 50%)`
        }}></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header section */}
        <div className="text-center mb-16">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Let&apos;s Connect
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Ready to collaborate on exciting projects or discuss opportunities
            </p>
          </div>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Contact card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8 md:p-12 shadow-2xl hover:shadow-3xl transition-all duration-300">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-8 lg:space-y-0">
              {/* Contact info */}
              <div className="text-center lg:text-left space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Get in Touch
                  </h3>
                  <p className="text-gray-300">
                    Available for new opportunities and collaborations
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-center lg:justify-start space-x-3">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <a href="mailto:dohyeonee95@hotmail.com" className="text-lg font-semibold text-white hover:text-blue-300 transition-colors">
                      dohyeonee95@hotmail.com
                    </a>
                  </div>
                  
                  <div className="flex items-center justify-center lg:justify-start space-x-3">
                    <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Hong Kong</span>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="flex justify-center lg:justify-end space-x-6">
                <a 
                  href="https://www.linkedin.com/in/robert-lee-06434467/" 
                  className="group relative p-4 bg-white/10 rounded-2xl hover:bg-blue-600/20 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  title="LinkedIn"
                >
                  <Image
                    src="/linkedin.svg"
                    alt="LinkedIn"
                    width={32}
                    height={32}
                    className="filter invert group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                
                <a 
                  href="https://github.com/eqfwcev123" 
                  className="group relative p-4 bg-white/10 rounded-2xl hover:bg-purple-600/20 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  title="GitHub"
                >
                  <Image
                    src="/github.svg"
                    alt="GitHub"
                    width={32}
                    height={32}
                    className="filter invert group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Robert Lee. Built with Next.js and Material Design principles.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 