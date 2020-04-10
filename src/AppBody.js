import React, { Component } from 'react';
import tileImg from './full-image.svg';
import cloudImg from './cloud.svg';
import catImg from './cat-tile.svg';
import btownImg from './boston.jpg';
import machineryImg from './machinery.jpg';
import securityImg from './security.jpg';
import mockupImg from './mockup.png';
import plantImg from './plant.jpg';
import plant2Img from './plant2.jpeg';

import { useRef } from 'react'
import BodySection from './BodySection.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

class AppBody extends Component {
  componentDidMount() {
    //alert("Hi! Excuse the mess, this page is a work in progress as of 1/10/2020");
  };
  render(){

    var style = function(){ return "position: 1px;"}
    return (
      <div className="app-body">
        <section className="body-section">
          <div className="flex responsive">
            <div className="thirds desktop-only">
              <img style={{marginTop : "10%"}} src={cloudImg} alt="logo"/>
            </div>
            <div className="thirds">
              <h1 className="white">Hi there!</h1>
              <img src={tileImg} alt="logo"/>
            </div>
            <div className="thirds desktop-only">
              <img style={{marginTop : "20%"}} src={cloudImg} alt="logo"/>
            </div>
          </div>
        </section>
        <section className="body-section">
          <div className="flex responsive">
            <div className="white two-thirds text left-align">
              <h1 id="about">About</h1>
              <h2>Hailing from Baton Rouge, Louisiana, I graduated from Louisiana State University with a degree in Computer Science. Since then I've worked all over the world in tech, picking up skills in Full-stack development,UX design, and project management in Agile environments.</h2>
            </div>
            <div className="thirds">
              <img className="center" style={{marginTop : "20%"}} src={catImg} alt="logo"/>
            </div>
          </div>
        </section>
        <section className="body-section">
          <div className="flex">
          <div>
            <div className="full white text left-align">
              <h1 id="projects">Projects</h1>
              <div className="grid-container">
              <div className="grid-item">
                <h2 className="title-hover">FieldVision<hr/>
                  <h6>GE Power - Front-End</h6>
                </h2>
                <img src={plantImg} alt="logo"/>
                <div className="overlay"></div>
              </div>
                <div className="grid-item">
                  <h2 className="title-hover">OEM Asset Manager<hr/>
                    <h6>GE Digital - Front-end, UX</h6>
                  </h2>
                  <img src={machineryImg} alt="logo"/>
                  <div className="overlay"></div>
                </div>
                <div className="grid-item">
                  <h2 className="title-hover">Asset Risk Assessor<hr/>
                    <h6>GE Cybersecurity - Project Management, UX</h6>
                  </h2>
                  <img src={securityImg} alt="logo"/>
                  <div className="overlay"></div>
                </div>
                <div className="grid-item">
                  <h2 className="title-hover">Plant Solution Configurator<hr/>
                    <h6>GE Power - UX, Front-End</h6>
                  </h2>
                  <img src={plant2Img} alt="logo"/>
                  <div className="overlay"></div>
                </div>
                <div className="grid-item">
                  <h2 className="title-hover">Align Platform<hr/>
                    <h6>Align Today - UX, Front-End, Back-End</h6>
                  </h2>
                  <img src={mockupImg} alt="logo"/>
                  <div className="overlay"></div>
                </div>
              </div>
          </div>
            </div>
          </div>
        </section>
        <section id="contact" className="footer-section no-padding-top">
          <div className="flex responsive">
            <div className="two-thirds left-align">
              <a href="https://www.linkedin.com/in/taylor-thibodeaux-b4b373107/" target="_blank">
                <FontAwesomeIcon style={{marginRight: "15px"}} className="icon white" icon={faLinkedin} />
              </a>
              <a href="https://github.com/taythib/taythib.github.io" target="_blank">
                <FontAwesomeIcon style={{marginRight: "15px"}} className="icon white" icon={faGithub} />
              </a>
              <a href="mailto:taythib@gmail.com?Subject=Hi There">
                <FontAwesomeIcon className="icon white" icon={faEnvelope} />
              </a>
            </div>
            <div className="thirds">
              <div style={{padding: "0.5em 2em 0.5em 0.5em"}} className="border white full left-align">
                <div> Built Using:</div>
                <FontAwesomeIcon className="icon white" icon={faReact} />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default AppBody;
