import React from 'react';
import logo from './logo.svg';

function AppHeader() {
  return (
      <header className="app-header">
      <div className="header-item-container">
          <div className="Title"></div>
          <div className="Links">
            <a>
              About
            </a>
            <a>
              Projects
            </a>
            <a>
              Resume
            </a>
            <a>
              Contact
            </a>
          </div>
        </div>
      </header>
  );
}

export default AppHeader;
