import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Chat from '../../../components/Chat';
import Leaderboard from '../../../components/Leaderboard';
import { GameContext, SocketContext } from '../../../contexts/Contexts';
import GameCanvas from '../../../components/GameCanvas';

const GameView = () => {
  const { socket } = useContext(SocketContext) || {};
  const { gameState } = useContext(GameContext) || {};
  const [gameSettings] = gameState || [];
  const { isTeacher } = gameSettings || {};

  if (!socket) {
    return <></>;
  }

  if (isTeacher) {
    return <div>you teacher brug</div>;
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

export default GameView;
