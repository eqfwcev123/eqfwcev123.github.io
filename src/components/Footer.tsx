import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer id="contact" className="bg-black text-white py-16 px-4 w-full mt-16">
      <div className="container mx-auto">
        <div className="text-center md:text-left mb-12">
          <h2 className="text-4xl font-bold underline decoration-gray-600 underline-offset-8">
            Let&apos;s Connect
          </h2>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <p className="text-lg font-semibold">dohyeonee95@hotmail.com</p>
            <p className="text-sm text-gray-400">Hong Kong</p>
          </div>

          <div className="flex space-x-6 items-center">
            <a href="https://www.linkedin.com/in/robert-lee-06434467/" className="hover:opacity-80 transition-opacity" title="LinkedIn">
              <Image
                src="/linkedin.svg"
                alt="LinkedIn"
                width={48}
                height={48}
                className="filter invert"
              />
            </a>
            <a href="https://github.com/eqfwcev123" className="hover:opacity-80 transition-opacity" title="LinkedIn">
              <Image
                src="/github.svg"
                alt="github"
                width={48}
                height={48}
                className="filter invert"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 