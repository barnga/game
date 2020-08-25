import React, { useContext, useEffect } from 'react';
import { GameContext, SocketContext } from '../../../contexts/Contexts';

const Messages = () => {
  const { socket } = useContext(SocketContext) || {};
  const { gameState } = useContext(GameContext) || {};
  const [gameSettings, setGameSettings] = gameState || [];

  useEffect(() => {
    socket.on('messages update', (message) => {
      console.log(message);
      setGameSettings((settings) => ({ ...settings, messages: settings.messages.concat(message) }));
    });
  }, []);

  if (gameSettings.messages?.length === 0) return <div>No messages</div>;

  return (
    <div>
      {gameSettings.messages?.map((message) => <p>{message}</p>)}
    </div>
  );
};

export default Messages;
