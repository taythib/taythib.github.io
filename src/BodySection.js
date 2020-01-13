import React from 'react';
import blurbImg from './blurb.svg';
import url from "./shotgun.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'


class BodySection extends React.Component {

  render() {
    return (
      <section className="body-section">
        <div className="background" style={{ backgroundImage:`url(${this.props.url})` }}>
        </div>
        <img src={blurbImg} className="center-img" alt="logo" />
        <div className="section-footer center">
          <FontAwesomeIcon className="icon white" icon={faChevronDown} />
        </div>
      </section>
    );
  }
}

export default BodySection;
