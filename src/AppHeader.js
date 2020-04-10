import React from 'react';
import logo from './logo.svg';

function AppHeader() {
  return (
      <header className="app-header">
      <div className="header-item-container">
          <div className="links">
            <a href="#about" target="_top">
              About
            </a>
            <a href="#projects" target="_top">
              Projects
            </a>
            <a href="#contact" target="_top">
              Contact
            </a>
          </div>
        </div>
      </header>
  );
}

export default AppHeader;
