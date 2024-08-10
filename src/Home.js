import React, { Component } from 'react';
import tileImg from './full-image.svg';
import cloudImg from './cloud.svg';
import catImg from './cat-tile.svg';
import btownImg from './boston.jpg';
import machineryImg from './machinery.jpg';
import securityImg from './security.jpg';
import mockupImg from './mockup.png';
import mockupImg2 from './Screenshot.png';
import dashboardMockup from './dashboard.png';
import priorityMockup from './alignpriorities.png';
import paymentMockup from './payment-methods.png';
import agreementMockup from './agreements.png';
import bankMockup from './bank-statements.png';
import plant2Img from './plant2.jpeg';

import { useRef } from 'react'
import BodySection from './BodySection.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faDribbble } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

class Home extends Component {
  componentDidMount() {
    //alert("Hi! Excuse the mess, this page is a work in progress as of 1/10/2020");
  };
  render(){

    var style = function(){ return "position: 1px;"}
    return (
      <div className="app-body">
        <section className="body-section hero-image">
          <div className="flex responsive">
            <div className="thirds desktop-only">
              <img style={{marginTop : "10%"}} src={cloudImg} alt="logo"/>
            </div>
            <div className="thirds">
              <h1 className="white">Hello there!</h1>
              <h1 className="white">My name is Taylor Thibodeaux. I'm a UX designer, a coder, and a collaborator. </h1>
              <img src={tileImg} alt="logo"/>
            </div>
            <div className="thirds desktop-only">
              <img style={{marginTop : "20%"}} src={cloudImg} alt="logo"/>
            </div>
          </div>
        </section>
        <section className="body-section">
          <div className="flex responsive">
            <div className="two-thirds text left-align">
              <h1 id="about">About</h1>
              <h2>Hailing from Baton Rouge, Louisiana, I graduated from Louisiana State University with a degree in Computer Science. Since then, I've worked all over the country in tech, picking up skills in UX design, full-stack development, and project management in Agile environments along the way. Check out my portfolio below and feel free to contact me if you have any questions.</h2>
            </div>
            <div className="thirds">
              <img className="center" style={{marginTop : "20%"}} src={catImg} alt="logo"/>
            </div>
          </div>
        </section>
        <section className="body-section">
          <div className="flex">
            <div>
              <div className="full text left-align">
                <h1 id="projects">Professional Portfolio</h1>
                {/*<div className="grid-container">
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
                </div>*/}
                <div className="flex responsive portfolio-section">
                  <div className="thirds text left-align" style={{marginLeft : "0"}}>
                    <h2 className="bold">Procore Pay</h2>
                    <h3>Procore Technologies (2022-?)</h3>
                    <h4 className="bold">Problem</h4>
                    <h4>As a foremost figure in the construction management software domain, Procore has demonstrated a steadfast commitment to providing a comprehensive solution that oversees all aspects of construction projects involving general contractor and subcontractor personas.
                    The most notable impediment in this partnership has been the absence of a secure payment mechanism on contract invoices. Through the introduction of Procore Pay, the aim is to not only facilitate such transactions, but also to instill users with a sense of confidence and transparency when managing these payments.</h4>
                    <h4 className="margin-top bold">Result</h4>
                    <h4>During my tenure at Procore, my exposure to the realm of financial technology has been invaluable to my growth as a designer. At present, I am responsible for overseeing the onboarding process for both general contractors and sub-contractors onto the platform. 
                    This entails facilitating users' adoption of payment agreements with general contractors, as well as enabling linkage of bank accounts and payment information to 
                    support future account expansion.</h4>
                  </div>
                  <div className="two-thirds">
                    <img className="center screenshot" style={{marginTop : "10%"}} src={paymentMockup} alt="logo"/>
                    <img className="center screenshot" style={{marginTop : "10%"}} src={bankMockup} alt="logo"/>

                  </div>
                </div>
                <div className="flex responsive portfolio-section">
                  <div className="thirds text left-align" style={{marginLeft : "0"}}>
                    <h2 className="bold">Align</h2>
                    <h3>Align Technologies (2019-2022)</h3>
                    <h4 className="bold">Problem</h4>
                    <h4>As a burgeoning startup, Align was embarking upon a growth phase, necessitating expansion of its product and technology teams to ensure a steady stream of customer value delivery. 
                   Consequently, there arose a pressing need to not only address extant design debt in a reactive manner, but to ensure a satisfying experience for users in upcoming features.</h4>
                    
                    <h4 className="margin-top bold">Result</h4>
                    <h4>During my tenure of three years at a company as small as Align, I quickly learned that fluidity between roles was paramount 
                    in bridging gaps to ensure the product. In tandem with launching a design system and style guide, I collaborated closely with 
                    developers to guarantee that the product we delivered not only worked well, but felt great to use too!</h4>

                    <h4>One of my significant accomplishments at Align was the introduction of a data-driven methodology to a 
                    team that had relied primarily on intuition. While relying on instinct can yield excellent results, our agile approach was resulting in 
                    considerable design debt and inconsistent release timelines. To alleviate this issue, I prioritized the utilization of analytic tools such as 
                    Pendo and organized design presentations to elicit feedback from stakeholders. Ultimately, this approach led to a more transparent and purposeful 
                    design, resolving the previous design debt and enhancing the product's overall quality.
                    </h4>
                  </div>
                  <div className="two-thirds">
                    <img className="center screenshot" style={{marginTop : "10%"}} src={dashboardMockup} alt="logo"/> 
                    <img className="center screenshot" style={{marginTop : "10%"}} src={priorityMockup} alt="logo"/> 

                  </div>
                </div>
                <div className="flex responsive portfolio-section">
                  <div className="thirds text left-align" style={{marginLeft : "0"}}>
                    <h2 className="bold">Internal Plant Engineering Tool</h2>
                    <h3>General Electric (~2018)</h3>
                    <h4 className="bold">Problem</h4>
                    <h4>
                      Upon joining the New Orleans team, the primary need was to integrate a nascent 
                      design system into an internal tool utilized by GE engineers to monitor maintenance activities during plant turnarounds and to order components if needed. 
                      The objective was to create an intuitive and user-friendly experience specifically catered to field engineers operating.
                    </h4>
                    <h4 className="margin-top bold">Result</h4>
                    <h4>Under the guidance of the then design director, feedback was solicited from stakeholders, 
                    as well as data collected from user analytics, to inform future design decisions. 
                    Furthermore, rudimentary code snippets for reusable UI components were developed to facilitate usage by application developers. </h4>

                  </div>
                  <div className="two-thirds">
                    <img className="center screenshot" style={{marginTop : "10%"}} src={mockupImg2} alt="logo"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="footer-section">
          <div className="flex responsive">
            <div className="two-thirds left-align">
              <a href="https://www.linkedin.com/in/taylor-thibodeaux-b4b373107/" target="_blank">
                <FontAwesomeIcon style={{marginRight: "15px"}} className="icon white" icon={faLinkedin} />
              </a>
              <a href="https://github.com/taythib/taythib.github.io" target="_blank">
                <FontAwesomeIcon style={{marginRight: "15px"}} className="icon white" icon={faGithub} />
              </a>
              <a href="https://dribbble.com/taythib" target="_blank">
                <FontAwesomeIcon style={{marginRight: "15px"}} className="icon white" icon={faDribbble} />
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

export default Home;
