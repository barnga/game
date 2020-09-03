import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { GameContext } from '../contexts/Contexts';

const GameButtons = () => {
  const { gameState } = useContext(GameContext) || {};
  const [gameSettings, setGameSettings] = gameState || [];

  return (
    <div className="mb-2">
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
      <Button block variant="outline-primary">
        <span>Drawing Board</span>
      </Button>
    </div>
  );
};

export default GameButtons;
