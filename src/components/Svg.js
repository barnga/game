import React from 'react';
import { ReactSVG } from "react-svg";

const Svg = ({ src, classNames }) => {
  return (
    <ReactSVG
      src={src}
      beforeInjection={(svg) => {
        if (classNames) {
          svg.classList.add(classNames);
        }
      }}
    />
  );
};

export default Svg;
