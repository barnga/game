import React from 'react';
import PropTypes from 'prop-types';

const Player = ({ data }) => (
  <h6>{data.nickname}</h6>
);

Player.propTypes = {
  data: PropTypes.shape({
    nickname: PropTypes.string,
  }),
};

export default Player;
