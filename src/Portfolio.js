import React, { Component } from 'react';

import machineryImg from './machinery.jpg';
import securityImg from './security.jpg';
import mockupImg from './mockup.png';
import plantImg from './plant.jpg';
import plant2Img from './plant2.jpeg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
class portfolio extends Component {

  render(){

    return (
      <div>
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

export default portfolio;
