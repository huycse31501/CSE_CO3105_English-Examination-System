import React from 'react';
import './header.css';
import logo from './logo.png';

function HomepageHeader(props) {
  return (
    <div>
      <div className="header">
        <div className="header__left">
          <img src={logo} alt="logo" className="logo" />
          <h1 className="logo__text">English Examination System</h1>
        </div>
        <div className="header__right"></div>
      </div>
    </div>
  );
}

export default HomepageHeader;
