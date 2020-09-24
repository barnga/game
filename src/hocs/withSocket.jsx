import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { SocketContext } from '../contexts/Contexts';

const withSocket = (WrappedComponent) => {
  const WithSocket = (props) => {
    const [socket, setSocket] = useState(null);
    const namespace = useState(null);
    const [url] = namespace;

    useEffect(() => {
      if (url) {
        const socketIo = io(url, {
          query: {
            sessionId: localStorage.sessionId,
          },
          transports: ['websocket'],
        });
        setSocket(socketIo);

        return () => socketIo.disconnect();
      }

      return undefined;
    }, [url]);

    return (
      <SocketContext.Provider value={{ socket, namespace }}>
        <WrappedComponent {...props} />
      </SocketContext.Provider>
    );
  };

  return WithSocket;
};

export default withSocket;
