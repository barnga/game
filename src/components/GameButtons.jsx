import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { GameContext } from '../contexts/Contexts';

const GameButtons = () => {
  const { gameState } = useContext(GameContext) || {};
  const [gameSettings, setGameSettings] = gameState || [];
  const [isRoundEnd, setIsRoundEnd] = useState(false);

  useEffect(() => {
    setIsRoundEnd(
      gameSettings.playedCards?.length === gameSettings.roundSettings?.playersWithCards?.length,
    );
  }, [gameSettings]);

  return (
    <div className="mb-2">
      {gameSettings.disableRules ? (
        <Button
          block
          variant="outline-primary"
          onClick={() => setGameSettings((settings) => ({
            ...settings,
            showVoting: true,
          }))}
          disabled={!isRoundEnd}
        >
          <span>Vote</span>
        </Button>
      ) : (
        <Button
          block
          variant="outline-primary"
          onClick={() => setGameSettings((settings) => ({
            ...settings,
            showRules: true,
          }))}
        >
          <span>Rules</span>
        </Button>
      )}
    </div>
  );
};

export default GameButtons;
