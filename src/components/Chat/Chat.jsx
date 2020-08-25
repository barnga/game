import React from 'react';
import { Card } from 'react-bootstrap';
import ChatForm from './components/ChatForm';
import Messages from './components/Messages';

const Chat = () => (
  <Card className="d-flex flex-grow-1 m-0">
    <Card.Body className="d-flex flex-column">
      <Card.Title>Chat</Card.Title>
      <div className="d-flex flex-grow-1 align-items-end w-100">
        <Messages />
        <ChatForm />
      </div>
    </Card.Body>
  </Card>
);

export default Chat;
