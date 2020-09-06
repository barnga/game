import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Rect, Text } from 'react-konva';

const PlayedCards = ({ socket, gameState }) => {
  const [gameSettings, setGameSettings] = gameState || [];

  useEffect(() => {
    const handleCardUpdate = (data) => {
      setGameSettings((settings) => ({
        ...settings,
        playedCards: data.playedCards,
        hand: data.players[localStorage.sessionId].hand,
      }));
    };

    socket.on('play card update', handleCardUpdate);

    return () => {
      socket.off('play card update', handleCardUpdate);
    };
  }, []);

  return (
    <>
      <Rect
        fill="#dddddd"
        draggable
        height={100}
        width={300}
      />
      <Text text="Play area" verticalAlign="middle" align="center" height={100} width={300} />
    </>
  );
};

PlayedCards.propTypes = {
  socket: PropTypes.any,
  gameState: PropTypes.any,
};

export default PlayedCards;
