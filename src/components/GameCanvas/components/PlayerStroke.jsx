import React from 'react';
import PropTypes from 'prop-types';
import {
  Line,
} from 'react-konva';

const PlayerStroke = (props) => {
  const { points, color } = props;
  const numericPoints = points.map((point) => [point.x, point.y]).flat();

  return <Line points={numericPoints} stroke={color} strokeWidth={2} tension={0} />;
};

PlayerStroke.propTypes = {
  points: PropTypes.arrayOf(PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  })),
  color: PropTypes.string,
};

export default PlayerStroke;
