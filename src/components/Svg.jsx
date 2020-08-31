import React from 'react';
import { ReactSVG } from 'react-svg';
import PropTypes from 'prop-types';

const Svg = ({ src, classNames, externalClassnames }) => (
  <ReactSVG
    src={src}
    beforeInjection={(svg) => {
      if (classNames) {
        classNames.split(' ').forEach((name) => {
          svg.classList.add(name);
        });
      }
    }}
    className={externalClassnames}
  />
);

Svg.propTypes = {
  src: PropTypes.string,
  classNames: PropTypes.string,
  externalClassnames: PropTypes.string,
};

export default Svg;
