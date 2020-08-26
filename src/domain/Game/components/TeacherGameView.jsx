import React, { useContext, useEffect } from 'react';
import { Card, Container } from 'react-bootstrap';
import { GameContext, SocketContext } from '../../../contexts/Contexts';
import Loading from '../../../components/Loading';

const TeacherGameView = () => {
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

  useEffect(() => {
    console.log(gameSettings);
  }, [gameSettings]);

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
      <div>Teacher view</div>
      {gameSettings.rooms?.map((room, idx) => (
        <Card key={room.roomId}>
          <Card.Body>
            <Card.Title>Group {idx + 1}</Card.Title>
            <Card.Text>
              {room.players.map((player) => (
                <h6 key={player.sessionId}>{player.nickname}</h6>
              ))}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default TeacherGameView;
