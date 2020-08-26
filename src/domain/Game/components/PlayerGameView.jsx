import React, { useContext, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Chat from '../../../components/Chat/Chat';
import Leaderboard from '../../../components/Leaderboard';
import { GameContext, SocketContext } from '../../../contexts/Contexts';
import GameCanvas from '../../../components/GameCanvas';

const PlayerGameView = () => {
  const { socket } = useContext(SocketContext) || {};
  const { gameState } = useContext(GameContext) || {};
  const [gameSettings, setGameSettings] = gameState || [];

  useEffect(() => {
    let subscribed = true;

    const handleRoomJoin = (data) => {
      if (subscribed) {
        setGameSettings((settings) => ({
          ...settings,
          roomNumber: data.roomNumber,
          messages: [],
        }));
      }
    };

    socket.emit('joined room', handleRoomJoin);

    return () => {
      subscribed = false;
      socket.off('joined room', handleRoomJoin);
    };
  }, []);

  if (!socket) {
    return <></>;
  }

  return (
    <Container fluid className="min-vh-100 d-flex flex-column justify-content-center p-0 m-0">
      <Row className="min-vh-100 m-0 p-5">
        <Col className="d-flex flex-column col-12 col-lg-3">
          <Leaderboard />
          <Chat />
        </Col>
        <Col className="col-12 col-lg-9">
          <GameCanvas />
        </Col>
      </Row>
    </Container>
  );
};

export default PlayerGameView;
