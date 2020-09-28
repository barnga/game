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
        height={450}
        width={450}
      >
        <Rect fill="white" opacity={0.75} top={0} left={0} height={450} width={450} />
        <Text
          text={`Round winner: ${gameSettings.players[gameSettings.roundSettings.winner].nickname}`}
          fontSize={24}
          align="center"
          verticalAlign="middle"
          height={450}
          width={450}
        />
      </Layer>
    );
  }

  return <></>;
};

export default Winner;
