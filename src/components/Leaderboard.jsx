import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { GameContext } from '../contexts/Contexts';

const Leaderboard = () => {
  const { gameState } = useContext(GameContext) || {};
  const [gameSettings] = gameState || [];

  return (
    <Card className="d-flex flex-grow-1">
      <Card.Body>
        <Card.Title>Leaderboard</Card.Title>
        <Card.Subtitle>Group {gameSettings?.roomNumber}</Card.Subtitle>
        <Card.Text>Leaderboard text</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Leaderboard;
