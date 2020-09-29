import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { PropTypes } from 'prop-types';
import { SocketContext } from '../../../contexts/Contexts';
import handleStartNewRound from '../../../domain/Game/scripts/handleStartNewRound';

const NewRoundButton = ({ roomId }) => {
  const { socket } = useContext(SocketContext) || {};

  return (
    <Button
      block
      variant="outline-primary"
      onClick={() => handleStartNewRound(socket, roomId)}
    >
      Start new round
    </Button>
  );
};

NewRoundButton.propTypes = {
  roomId: PropTypes.string,
};

export default NewRoundButton;
