import React, { useState } from 'react';
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav>
        <div className='Header'>
          <div className='HeaderLeft'>
            <span><a href='/'>MO</a></span>
          </div>
          <div className='Hamburger' onClick={toggleMenu}>
            <div className={isOpen ? 'Bar open' : 'Bar'}></div>
            <div className={isOpen ? 'Bar open' : 'Bar'}></div>
            <div className={isOpen ? 'Bar open' : 'Bar'}></div>
          </div>
          <div className={`HeaderRight ${isOpen ? 'open' : ''}`}>
            <ul>
              <li><a href='/'>Home</a></li>
              <li><a href='www.google.com'>Projects</a></li>
              <li><a href='www.google.com'>Resume</a></li>
              <li><a href='www.google.com'>About</a></li>
              <li><a href='www.google.com' id='hireme'>Hire me</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
