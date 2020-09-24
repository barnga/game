import React from 'react';
import PropTypes from 'prop-types';
import { useAccordionToggle } from 'react-bootstrap';
import Svg from '../../../components/Svg';
import plus from '../../../assets/img/icons/interface/plus.svg';

const FAQToggle = ({ children, eventKey }) => {
  const toggleAccordion = useAccordionToggle(eventKey);

  return (
    <div
      className="accordion-panel-title"
      onClick={toggleAccordion}
      onKeyDown={toggleAccordion}
      tabIndex={0}
      role="button"
      style={{ outline: 'none' }}
    >
      <span className="h6 mb-0">{children}</span>
      <Svg src={plus} classNames="icon" />
    </div>
  );
};

FAQToggle.propTypes = {
  children: PropTypes.node,
  eventKey: PropTypes.number,
};

export default FAQToggle;
