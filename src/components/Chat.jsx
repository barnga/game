import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const Chat = () => {
  const [result, setResult] = useState(false);

  useEffect(() => {
    const socket = io('http://localhost:3000');
    socket.on('message', (data) => {
      setResult(data);
      socket.emit('message', 'hello server');
    });

    return () => socket.disconnect();
  }, []);

  return (
    <div>{result}</div>
  );
};

export default Chat;
