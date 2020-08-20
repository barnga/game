import React from 'react';
import PropTypes from 'prop-types';

const Player = ({ data }) => (
  <div>{data.name}</div>
);

Player.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
  }),
};

export default Player;
