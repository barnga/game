import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { GameContext } from '../contexts/Contexts';

const Leaderboard = () => {
  const { gameState } = useContext(GameContext) || {};
  const [gameSettings] = gameState || [];

  return (
    <Card className="mb-2">
      <Card.Body>
        <Card.Title>Leaderboard</Card.Title>
        <Card.Subtitle>Group {gameSettings?.roomNumber}</Card.Subtitle>
        {Object.entries(gameSettings?.leaderboard).map((player) => {
          const [playerId, playerData] = player;
          const { nickname, score } = playerData;

          return (
            <p key={playerId}>{nickname}: {score}</p>
          );
        })}
      </Card.Body>
    </Card>
  );
};

export default Leaderboard;
