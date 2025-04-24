import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center w-full p-4">
      <div>dohyeonee95@hotmail.com</div>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header; 