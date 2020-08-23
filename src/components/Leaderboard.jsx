import React, { useContext, useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { SocketContext } from '../contexts/Contexts';

const Leaderboard = () => {
  const { socket } = useContext(SocketContext) || {};
  const [roomNumber, setRoomNumber] = useState(0);

  useEffect(() => {
    socket.emit('joined game', ({ rooms }) => {
      console.log(socket.id);
      const id = Object.entries(rooms).filter((room) => room[1].includes(socket.id))[0];
      const number = Object.keys(rooms).indexOf(id);
      console.log(rooms);
      console.log(id);
      console.log(number);
      setRoomNumber(number);
    });
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
