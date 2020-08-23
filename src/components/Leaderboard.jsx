import React, { useContext, useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { SocketContext } from '../contexts/Contexts';

const Leaderboard = () => {
  const { socket } = useContext(SocketContext) || {};
  const [roomNumber, setRoomNumber] = useState(null);

  useEffect(() => {
    socket.emit('joined game', (data) => setRoomNumber(data.roomNumber));
  }, []);

  return (
    <Card className="d-flex flex-grow-1">
      <Card.Body>
        <Card.Title>Leaderboard</Card.Title>
        <Card.Text>{roomNumber}</Card.Text>
        <Card.Text>Leaderboard text</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Leaderboard;
