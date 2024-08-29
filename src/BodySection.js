import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'


class BodySection extends React.Component {

  render() {
    return (
      <section className="body-section">
        <div className="background" style={{ backgroundImage:`url(${this.props.url})` }}>
        </div>
        <div className="section-footer center">
          <FontAwesomeIcon className="icon white" icon={faChevronDown} />
        </div>
      </section>
    );
  }
}

export default BodySection;
