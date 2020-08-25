import React, { useContext, useEffect } from 'react';
import { GameContext, SocketContext } from '../../../contexts/Contexts';

const Messages = () => {
  const { socket } = useContext(SocketContext) || {};
  const { gameState } = useContext(GameContext) || {};
  const [gameSettings, setGameSettings] = gameState || [];

  useEffect(() => {
    let subscribed = true;

    socket.on('messages update', (message) => {
      if (subscribed) {
        setGameSettings((settings) => ({
          ...settings,
          messages: settings.messages.concat(message),
        }));
      }
    });

    return () => (subscribed = false);
  }, []);

  if (gameSettings.messages?.length === 0) return <div>No messages</div>;

  return (
    <div>
      {gameSettings.messages?.map((message) => <p>{message}</p>)}
    </div>
  );
};

export default Messages;
