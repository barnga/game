import React from 'react';
import PropTypes from 'prop-types';
import {
  Line,
} from 'react-konva';

const PlayerStroke = ({ points, color, canvasDimensions }) => {
  const numericPoints = points
    .map((p) => ({
      x: p.x * canvasDimensions.width,
      y: p.y * canvasDimensions.height,
    }))
    .map((point) => [point.x, point.y]).flat();

  return (
    <Line
      points={numericPoints}
      stroke={color}
      strokeWidth={2}
      tension={0}
    />
  );
};

PlayerStroke.propTypes = {
  points: PropTypes.arrayOf(PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  })),
  color: PropTypes.string,
  canvasDimensions: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }),
};

export default PlayerStroke;
