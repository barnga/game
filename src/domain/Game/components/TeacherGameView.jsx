import React, { useContext, useEffect } from 'react';
import {
  Card, Col, Container, Row,
} from 'react-bootstrap';
import { useParams } from 'react-router';
import { GameContext, SocketContext } from '../../../contexts/Contexts';
import Loading from '../../../components/Loading';

const TeacherGameView = () => {
  const { gameId } = useParams();
  const { socket } = useContext(SocketContext);
  const { gameState } = useContext(GameContext) || {};
  const [gameSettings, setGameSettings] = gameState || [];

  useEffect(() => {
    let subscribed = true;

    const handleRoomsUpdate = (data) => {
      if (subscribed) {
        setGameSettings((settings) => ({
          ...settings,
          rooms: data.rooms,
        }));
      }
    };

    socket.emit('get rooms', handleRoomsUpdate);

    return () => (subscribed = false);
  }, []);

  if (!gameSettings.rooms) {
    return (
      <Container>
        <div>Teacher view</div>
        <Loading />
      </Container>
    );
  }

  return (
    <Container>
      <Row className="p-2 pt-5">
        <p className="h1">Game ID: {gameId}</p>
      </Row>
      <Row>
        {gameSettings.rooms?.map((room, idx) => (
          <Col className="col-4 mb-3">
            <Card key={room.roomId} className="h-100">
              <Card.Body>
                <Card.Title>Group {idx + 1}</Card.Title>
                {room.players.map((player) => (
                  <h6 key={player.sessionId}>{player.nickname}</h6>
                ))}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TeacherGameView;
