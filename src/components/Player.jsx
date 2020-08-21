import React from 'react';
import PropTypes from 'prop-types';

const Player = ({ data }) => (
  <p>{data.nickname}</p>
);

Player.propTypes = {
  data: PropTypes.shape({
    nickname: PropTypes.string,
  }),
};

export default Player;
