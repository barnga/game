import React from 'react';
import { ReactSVG } from 'react-svg';
import PropTypes from 'prop-types';

const Svg = ({ src, classNames }) => (
  <ReactSVG
    src={src}
    beforeInjection={(svg) => {
      if (classNames) {
        svg.classList.add(classNames);
      }
    }}
  />
);

Svg.propTypes = { src: PropTypes.string, classNames: PropTypes.string };

export default Svg;
