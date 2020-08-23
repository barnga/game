import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Chat from '../../../components/Chat';
import Leaderboard from '../../../components/Leaderboard';
import { GameContext, SocketContext } from '../../../contexts/Contexts';
import GameCanvas from '../../../components/GameCanvas';

const PlayerGameView = () => {
  const { socket } = useContext(SocketContext) || {};
  const { gameState } = useContext(GameContext) || {};
  const [gameSettings, setGameSettings] = gameState || [];

  useEffect(() => {
    socket.emit('joined game', (data) => {
      setGameSettings((settings) => ({ ...settings, roomNumber: data.roomNumber }));
    });
  }, []);

  if (!socket) {
    return <></>;
  }

  return (
    <Container className="min-vh-100 d-flex flex-column justify-content-center">
      <Row>
        <Col className="col-3">
          <Chat />
          <Leaderboard />
        </Col>
        <Col className="col-9">
          <GameCanvas />
        </Col>
      </Row>
    </Container>
  );
};

export default PlayerGameView;
