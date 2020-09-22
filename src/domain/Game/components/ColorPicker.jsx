import React, { useState } from 'react';
import { SliderPicker } from 'react-color';
import PropTypes from 'prop-types';

const ColorPicker = ({ setColor }) => {
  const [stateColor, setStateColor] = useState(`hsl(${Math.floor(Math.random() * 360)}, 50, 50)`);

  const updateColor = ({ hex }) => {
    setStateColor(hex);
    setColor(hex);
  };

  return (
    <SliderPicker
      color={stateColor}
      onChange={updateColor}
      onChangeComplete={updateColor}
      className="my-2 w-100"
    />
  );
};

ColorPicker.propTypes = {
  setColor: PropTypes.func,
};

export default ColorPicker;
