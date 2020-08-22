import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { SocketContext } from '../contexts/Contexts';

const Chat = () => {
  const { socket } = useContext(SocketContext) || {};

  socket.on('new message', (data) => console.log(data));

  return (
    <Card>
      <Card.Body>
        <Card.Title>Chat</Card.Title>
        <Card.Text>Chat stuff</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Chat;
