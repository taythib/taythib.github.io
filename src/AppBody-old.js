import React, { Component } from 'react';
import blurbImg from './blurb.svg';
import shotgunUrl from "./shotgun.png";
import BodySection from './BodySection.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

class AppBody extends Component {
  componentDidMount() {
    alert("Hi! Excuse the mess, this page is a work in progress as of 1/10/2020");
  };

  render(){
    return (
      <div className="app-body">
        <section className="body-section">
          /*<div className="background img" style={{ backgroundImage:`url(${shotgunUrl})` }}>
          </div>
          <img src={blurbImg} className="center-img" alt="logo" />*/
          <div className="section-footer center">
            <div className="footer-component thirds"></div>
            <div className="footer-component thirds"> <FontAwesomeIcon className="icon white" icon={faChevronDown} /></div>
            <div className="footer-component thirds white">
              <span className="grow tooltip-trigger">What's up with the house?
                <span class="tooltip">It's a <a href="https://en.wikipedia.org/wiki/Shotgun_house">shotgun house!</a> Commonly found in New Orleans.</span>
                </span>
            </div>
          </div>
        </section>
        <section className="body-section">
          <div className="background" style={{ backgroundColor:"#5c7a65" }}>
          </div>
          <div className="center-text white">
            <h1>About</h1>
            <h2>Hailing from Cajun country, Louisiana, I graduated from Louisiana State University with a degree in Computer Science. Since then I've worked all over the world in tech.</h2>
          </div>
        </section>
      </div>
    );
  }
}

export default AppBody;
