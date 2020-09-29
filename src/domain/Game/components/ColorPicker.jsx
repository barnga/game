import React, { useState } from 'react';
import { SliderPicker } from 'react-color';
import PropTypes from 'prop-types';

const ColorPicker = ({ setColor, color }) => {
  const [stateColor, setStateColor] = useState(color);

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
  color: PropTypes.string,
};

export default ColorPicker;
