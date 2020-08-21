import React from 'react';
import PropTypes from 'prop-types';

const Player = ({ data }) => (
  <div>{data.nickname}</div>
);

Player.propTypes = {
  data: PropTypes.shape({
    nickname: PropTypes.string,
  }),
};

export default Player;
