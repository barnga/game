import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import ChatForm from './components/ChatForm';
import Messages from './components/Messages';

const Chat = ({ global, admin, roomId }) => (
  <Card className={`d-flex flex-column flex-grow-1 m-0 p-0 ${(global || !admin) ? 'shadow-3d' : undefined}`} style={{ minHeight: 0 }}>
    <Card.Title className="p-3 pb-0 mb-0">{global ? 'Global Chat' : 'Chat'}</Card.Title>
    <Messages global={global} roomId={roomId} admin={admin} />
    <ChatForm global={global} roomId={roomId} admin={admin} />
  </Card>
);

Chat.propTypes = {
  global: PropTypes.bool,
  admin: PropTypes.bool,
  roomId: PropTypes.string,
};

export default Chat;
