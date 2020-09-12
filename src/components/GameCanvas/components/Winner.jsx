import React, { useContext } from 'react';
import { Layer, Rect, Text } from 'react-konva';
import { GameContext } from '../../../contexts/Contexts';

const Winner = ({ canvasDimensions }) => {
  const { gameState } = useContext(GameContext) || {};
  const [gameSettings] = gameState || [];

  if (gameSettings.roundSettings?.showWinner) {
    return (
      <Layer
        x={(canvasDimensions.width / 2) - (450 / 2)}
        y={(canvasDimensions.height / 2) - (450 / 2)}
      >
        <Rect fill="white" top={0} left={0} height={450} width={450} />
        <Text text={gameSettings.players[gameSettings.roundSettings.winner].nickname} />
      </Layer>
    );
  }

  return <></>;
};

export default Winner;
