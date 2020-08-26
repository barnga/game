import React, { useContext, useEffect } from 'react';
import { GameContext, SocketContext } from '../../../contexts/Contexts';
import Svg from '../../Svg';
import groupchat from '../../../assets/img/icons/theme/communication/group-chat.svg';

const Messages = () => {
  const { socket } = useContext(SocketContext) || {};
  const { gameState } = useContext(GameContext) || {};
  const [gameSettings, setGameSettings] = gameState || [];

  useEffect(() => {
    let subscribed = true;

    const handleMessagesUpdate = (message) => {
      if (subscribed) {
        setGameSettings((settings) => ({
          ...settings,
          messages: settings.messages.concat(message),
        }));
      }
    };

    socket.on('messages update', handleMessagesUpdate);

    return () => {
      subscribed = false;
      socket.off('messages update', handleMessagesUpdate);
    };
  }, []);

  if (gameSettings.messages?.length === 0) {
    return (
      <div className="d-flex flex-column flex-grow-1 overflow-auto justify-content-center align-items-center">
        <div className="text-center">
          <Svg src={groupchat} classNames="icon" alt="decoration" />
          <p>No messages</p>
        </div>
      </div>
    );
  }

  return (
    <div className="d-flex flex-column flex-grow-1 overflow-auto">
      {gameSettings.messages?.map((message) => <p>{message}</p>)}
    </div>
  );
};

export default Messages;
